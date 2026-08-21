"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type ContactCategory } from "@/data/contactData";
import { Send, Mail, X, ChevronDown } from "lucide-react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandIcons } from "@/lib/brandAssets";
import toast from "react-hot-toast";
import { format } from "date-fns";
import type { ContactFormData } from "@/types";
import Cal, { getCalApi } from "@calcom/embed-react";
import { cn } from "@/lib/utils";

const CONTACT_SUBJECTS = [
  "General Inquiry",
  "AI / RAG Integration",
  "Backend Architecture",
  "Startup MVP Build",
  "New Project Brief",
  "Consulting / Audit"
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ContactFormSection({ category }: { category: ContactCategory }) {
  let defaultSubject = "General Inquiry";
  if (category.id === "inquiry-ai") defaultSubject = "AI / RAG Integration";
  if (category.id === "inquiry-backend") defaultSubject = "Backend Architecture";
  if (category.id === "inquiry-mvp") defaultSubject = "Startup MVP Build";
  if (category.id === "project-brief") defaultSubject = "New Project Brief";

  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: defaultSubject as any,
    message: "",
  });

  const [flow, setFlow] = useState<"message" | "book">("message");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [showSendOptions, setShowSendOptions] = useState(false);
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const subjectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (subjectRef.current && !subjectRef.current.contains(event.target as Node)) {
        setIsSubjectDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#FF6A00" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (method: "email" | "whatsapp") => {
    if (flow === "message") {
      if (!form.name || !form.email || !form.message) {
        toast.error("Please fill in all required fields.");
        return;
      }
    } else {
      if (!form.name || !form.email || !date || !time) {
        toast.error("Please select a date, time, and fill your details.");
        return;
      }
    }

    const isBooking = flow === "book";
    let textBody = "";
    if (isBooking) {
      textBody = `Name: ${form.name}\nEmail: ${form.email}\nBooking Date: ${format(date!, "PPP")}\nTime: ${time}\n\nNotes:\n${form.message || "None"}`;
    } else {
      textBody = `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.subject}\n\nMessage:\n${form.message}`;
    }
    
    if (method === "whatsapp") {
      const waNumber = "923135263300";
      const encodedText = encodeURIComponent(textBody);
      window.open(`https://wa.me/${waNumber}?text=${encodedText}`, "_blank");
    } else {
      const email = "official.muhammadusman01@gmail.com";
      const subjectText = isBooking ? `New Booking: ${form.name}` : `New Inquiry: ${form.subject} - ${form.name}`;
      const subject = encodeURIComponent(subjectText);
      const body = encodeURIComponent(textBody);
      window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
    }

    if (isBooking) {
      const dateStr = format(date!, "yyyyMMdd");
      const title = encodeURIComponent(`Discovery Call with ${form.name}`);
      const details = encodeURIComponent(`Booking request from ${form.name} (${form.email}).`);
      
      const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${dateStr}T100000Z/${dateStr}T110000Z&crm=AVAILABLE&add=official.muhammadusman01@gmail.com`;
      setTimeout(() => {
        window.open(gCalUrl, "_blank");
      }, 500);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] pt-20 pb-20 sm:pt-28 sm:pb-28 border-t border-white/5" id="form">
      <div className="layout-wrap relative z-10 max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0F0F0F] p-8 sm:p-12 lg:p-16 shadow-2xl"
        >
          {/* Subtle glowing accents */}
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#FF6A00]/5 blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/5 blur-[100px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-1 mb-10 p-1.5 rounded-2xl bg-[#0A0A0A] w-full border border-white/5 relative shadow-inner">
              <button
                type="button"
                onClick={() => setFlow("message")}
                className={cn(
                  "flex-1 relative z-10 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                  flow === "message" ? "text-white" : "text-white/40 hover:text-white/80"
                )}
              >
                {flow === "message" && (
                  <motion.div
                    layoutId="activeTabHome"
                    className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#ff8c3a] rounded-xl shadow-[0_0_20px_rgba(255,106,0,0.3)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20">Send Message</span>
              </button>
              <button
                type="button"
                onClick={() => setFlow("book")}
                className={cn(
                  "flex-1 relative z-10 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                  flow === "book" ? "text-white" : "text-white/40 hover:text-white/80"
                )}
              >
                {flow === "book" && (
                  <motion.div
                    layoutId="activeTabHome"
                    className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#ff8c3a] rounded-xl shadow-[0_0_20px_rgba(255,106,0,0.3)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20">Book Call</span>
              </button>
            </div>

            {flow === "message" ? (
              <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[13px] font-medium uppercase tracking-widest text-white/70">
                      Full Name <span className="text-[#FF6A00]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition-colors focus:border-[#FF6A00]/50 focus:bg-white/[0.08]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-medium uppercase tracking-widest text-white/70">
                      Email Address <span className="text-[#FF6A00]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition-colors focus:border-[#FF6A00]/50 focus:bg-white/[0.08]"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative" ref={subjectRef}>
                  <label className="text-[13px] font-medium uppercase tracking-widest text-white/70">
                    Subject <span className="text-[#FF6A00]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      onFocus={() => setIsSubjectDropdownOpen(true)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 pr-10 text-white outline-none transition-colors focus:border-[#FF6A00]/50 focus:bg-white/[0.08]"
                      placeholder="Type or select a subject"
                    />
                    <ChevronDown 
                      className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 transition-transform duration-200 ${isSubjectDropdownOpen ? 'rotate-180' : ''} pointer-events-none`} 
                    />
                  </div>
                  
                  <AnimatePresence>
                    {isSubjectDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-20 w-full mt-2 bg-[#111] border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden py-2"
                      >
                        {CONTACT_SUBJECTS.map((s) => (
                          <button 
                            key={s} 
                            type="button" 
                            onClick={() => {
                              setForm(prev => ({ ...prev, subject: s as any }));
                              setIsSubjectDropdownOpen(false);
                            }}
                            className="w-full text-left px-5 py-3 text-[14px] font-medium text-white/70 hover:bg-[#FF6A00]/10 hover:text-[#FF6A00] transition-colors"
                          >
                            {s}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-medium uppercase tracking-widest text-white/70">
                    Project Details <span className="text-[#FF6A00]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition-colors focus:border-[#FF6A00]/50 focus:bg-white/[0.08]"
                    placeholder="Tell me about your timeline, scope, and any technical constraints..."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <button type="button" onClick={() => handleSend("email")} className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-white/5 border border-white/10 py-4 text-[15px] font-medium text-white overflow-hidden transition-all duration-300 hover:border-white/20">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Mail size={18} className="relative z-10 text-white/70 group-hover:text-white transition-colors" />
                    <span className="relative z-10">Send via Email</span>
                  </button>
                  <button type="button" onClick={() => handleSend("whatsapp")} className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] py-4 text-[15px] font-medium text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 flex items-center justify-center">
                      <BrandIcon base={brandIcons.cta.whatsapp} tone="white" size={20} />
                    </div>
                    <span className="relative z-10">Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="w-full bg-[#111] rounded-2xl overflow-hidden border border-white/10 p-2 min-h-[500px]">
                <Cal
                  namespace="30min"
                  calLink="muhammad-usman-padtsh/30min"
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  config={{ layout: "month_view", theme: "dark" }}
                />
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
