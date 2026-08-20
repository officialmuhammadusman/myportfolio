"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Loader2, Send, X, Mail, ChevronDown } from "lucide-react";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Calendar } from "@/components/ui/Calendar";
import { TimePicker } from "@/components/ui/TimePicker";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CONTACT_CHANNELS, CONTACT_INQUIRIES, isValidContactSubject } from "@/data/contact";
import { brandIcons } from "@/lib/brandAssets";
import { CONTACT_SUBJECTS, PERSONAL_INFO } from "@/lib/constants";
import { externalNavLinkProps, isExternalNavHref } from "@/lib/navHref";
import { cn } from "@/lib/utils";
import type { ContactFormData } from "@/types";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: CONTACT_SUBJECTS[0],
  message: "",
};

type FormStatus = "idle" | "loading";
type ContactFlow = "message" | "book";

function ChannelCard({ label, description, href, iconBase, highlight = false }: {
  label: string;
  description: string;
  href: string;
  iconBase: string;
  highlight?: boolean;
}) {
  const className = cn(
    "group flex flex-col gap-4 rounded-3xl border p-6 transition-all duration-300 backdrop-blur-xl hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden",
    highlight
      ? "border-[#FF6A00]/30 bg-gradient-to-br from-[#FF6A00]/10 to-transparent hover:border-[#FF6A00]/50"
      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
  );

  const inner = (
    <>
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#FF6A00]/5 rounded-full blur-[20px] transition-all group-hover:bg-[#FF6A00]/20" />
      <span className={cn(
        "flex h-14 w-14 items-center justify-center rounded-2xl transition-colors border",
        highlight ? "bg-[#FF6A00]/20 border-[#FF6A00]/30" : "bg-white/5 border-white/10 group-hover:border-[#FF6A00]/30 group-hover:bg-[#FF6A00]/10"
      )}>
        <BrandIcon base={iconBase} tone={highlight ? "orange" : "base"} size={28} className="group-hover:hidden" />
        <BrandIcon base={iconBase} tone="hover" size={28} className="hidden group-hover:block" />
      </span>
      <div className="relative z-10 mt-2">
        <span className="mb-1 block text-[18px] font-display font-bold text-white group-hover:text-[#FF6A00] transition-colors">
          {label}
        </span>
        <span className="block text-[14px] leading-relaxed text-white/50">
          {description}
        </span>
      </div>
    </>
  );

  if (isExternalNavHref(href)) {
    return <a href={href} className={className} {...externalNavLinkProps(href)}>{inner}</a>;
  }
  return <Link href={href} className={className}>{inner}</Link>;
}

const inputClassName = "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[16px] text-white transition-all duration-300 placeholder:text-white/20 focus:border-[#FF6A00]/50 focus:bg-[#FF6A00]/5 focus:outline-none focus:ring-1 focus:ring-[#FF6A00]/50";

export function ContactClientPage() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [charCount, setCharCount] = useState(0);
  const [showSendOptions, setShowSendOptions] = useState(false);
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const [flow, setFlow] = useState<ContactFlow>("message");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
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

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (isValidContactSubject(subjectParam)) {
      setForm((prev) => ({ ...prev, subject: subjectParam as any }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "message") setCharCount(value.length);
  };

  const selectInquiry = (subject: string) => {
    setForm((prev) => ({ ...prev, subject: subject as any }));
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
      // Generate Google Calendar Link
      // Ensure date is valid. Google Cal format: YYYYMMDDTHHmmSSZ
      // A simple template link will allow the user to easily save it.
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
    <div className="min-h-screen bg-[#050505] text-[#FFF7ED] pb-16 sm:pb-24">
      {/* ── HERO BANNER ── */}
      <section className="relative isolate min-h-[60vh] flex flex-col justify-end overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 bg-[#050505]">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600&h=900"
            alt="Contact Hero"
            className="w-full h-full object-cover object-[center_30%] opacity-40 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.4)_0%,rgba(5,5,5,0.9)_70%,rgba(5,5,5,1)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,106,0,0.15),transparent_60%)]" />
        </motion.div>
        
        <div className="layout-wrap relative z-10 w-full">
          <div className="max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="mb-4 inline-flex items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#FF6A00]">
                <Mail size={14} className="mr-2" />
                Contact
              </span>
              <h1 className="mt-4 font-display text-[3.5rem] leading-[1.05] tracking-tight text-white sm:text-[4.5rem] md:text-[5.5rem]">
                Start Your <span className="italic text-[#FF6A00]">Build.</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-[16px] leading-relaxed text-white/70 sm:mt-8 sm:text-[20px] max-w-2xl font-medium"
            >
              SaaS platforms, AI/RAG systems, React Native apps & backend APIs — delivered for founders globally.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="layout-wrap pt-16 relative z-10">

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:snap-none">
            {CONTACT_CHANNELS.map((channel) => (
              <div key={channel.id} className="snap-center shrink-0 w-[85vw] sm:w-auto h-full">
                <ChannelCard {...channel} />
              </div>
            ))}
          </div>

          {/* Mobile Carousel Indicators (Visual) */}
          {CONTACT_CHANNELS.length > 1 && (
            <div className="flex justify-center gap-2 mt-2 mb-8 sm:hidden">
              {CONTACT_CHANNELS.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
              ))}
            </div>
          )}
        </motion.section>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          <motion.div
            id="form"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="scroll-mt-28"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 sm:p-12">
              <div className="absolute inset-x-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#FF6A00]/30 to-transparent" />
              
              <div className="mb-10 flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#FF6A00]/30 bg-[#FF6A00]/10 shadow-[0_0_30px_rgba(255,106,0,0.2)]">
                  <BrandIcon base={brandIcons.cta.startProject} tone="orange" size={28} />
                </span>
                <div>
                  <h2 className="font-display text-3xl font-bold text-white mb-2">
                    {flow === "message" ? "Send a brief" : "Book a Call"}
                  </h2>
                  <p className="text-[15px] text-white/50">
                    {flow === "message" ? "Scope, timeline, and stack preferences. Direct replies within 24 hours." : "Select a time for a Google Meet discovery call."}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-10 p-1.5 rounded-2xl bg-[#0A0A0A] w-full border border-white/5 relative shadow-inner">
                <button
                  type="button"
                  onClick={() => setFlow("message")}
                  className={cn(
                    "flex-1 relative z-10 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300",
                    flow === "message" ? "text-white" : "text-white/40 hover:text-white/80"
                  )}
                >
                  {flow === "message" && (
                    <motion.div
                      layoutId="activeTab"
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
                    "flex-1 relative z-10 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300",
                    flow === "book" ? "text-white" : "text-white/40 hover:text-white/80"
                  )}
                >
                  {flow === "book" && (
                    <motion.div
                      layoutId="activeTab"
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
                    <div className="relative">
                      <label className="mb-3 block text-[11px] font-bold uppercase tracking-widest text-white/50">
                        Your name <span className="text-[#FF6A00]">*</span>
                      </label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required className={inputClassName} />
                    </div>
                    <div className="relative">
                      <label className="mb-3 block text-[11px] font-bold uppercase tracking-widest text-white/50">
                        Work email <span className="text-[#FF6A00]">*</span>
                      </label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required className={inputClassName} />
                    </div>
                  </div>

                  <div className="relative" ref={subjectRef}>
                    <label className="mb-3 block text-[11px] font-bold uppercase tracking-widest text-white/50">
                      Project type <span className="text-[#FF6A00]">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        name="subject" 
                        value={form.subject} 
                        onChange={handleChange} 
                        onFocus={() => setIsSubjectDropdownOpen(true)}
                        placeholder="Type or select project type" 
                        className={`${inputClassName} pr-10`} 
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

                  <div>
                    <label className="mb-3 block text-[11px] font-bold uppercase tracking-widest text-white/50">
                      Message <span className="text-[#FF6A00]">*</span>
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about the product, users, and timeline..." required rows={5} maxLength={5000} className={`${inputClassName} resize-none`} />
                    <div className="mt-3 flex justify-end">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">{charCount} / 5000</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <button type="button" onClick={() => handleSend("email")} className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-white/5 border border-white/10 py-4 text-[15px] font-bold text-white overflow-hidden transition-all duration-300 hover:border-white/20">
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Mail size={18} className="relative z-10 text-white/70 group-hover:text-white transition-colors" />
                      <span className="relative z-10">Send via Email</span>
                    </button>
                    <button type="button" onClick={() => handleSend("whatsapp")} className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] py-4 text-[15px] font-bold text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-[1.02]">
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

          {/* Right sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative flex h-4 w-4 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-40"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e]"></span>
                </div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#22c55e]">Available</span>
              </div>
              <p className="text-[15px] leading-relaxed text-white/60 font-medium">
                Taking on SaaS builds, AI/RAG engagements, and backend architecture. Delivering globally.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8">
              <p className="mb-6 text-[12px] font-bold uppercase tracking-widest text-[#FF6A00]">What happens next</p>
              <ol className="space-y-6">
                {[
                  "Review brief & reply in 24h",
                  "Discovery call & architecture alignment",
                  "Milestone proposal & build kickoff"
                ].map((step, i) => (
                  <li key={i} className="flex gap-5 items-start">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-white/50">
                      {i + 1}
                    </span>
                    <span className="text-[14px] text-white/70 mt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
