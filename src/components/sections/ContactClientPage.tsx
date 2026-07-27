// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Send, Mail, Linkedin, Github, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
// import { SiGithub } from "react-icons/si";
// import { PERSONAL_INFO, CONTACT_SUBJECTS, SOCIAL_LINKS } from "@/lib/constants";
// import type { ContactFormData, ContactSubject } from "@/types";
// import toast from "react-hot-toast";

// const initialForm: ContactFormData = {
//   name: "",
//   email: "",
//   subject: "Job Opportunity",
//   message: "",
// };

// type FormStatus = "idle" | "loading" | "success" | "error";

// export function ContactClientPage() {
//   const [form, setForm] = useState<ContactFormData>(initialForm);
//   const [status, setStatus] = useState<FormStatus>("idle");
//   const [charCount, setCharCount] = useState(0);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     if (name === "message") setCharCount(value.length);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.message) {
//       toast.error("Please fill in all required fields.");
//       return;
//     }

//     // Build email body
//     const emailBody = `Name: ${form.name}
// Email: ${form.email}

// ${form.message}`;

//     // Create mailto link directly - NO DELAYS, NO CHECKS
//     const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(emailBody)}`;

//     // Open immediately with no security restrictions
//     const link = document.createElement("a");
//     link.href = mailtoLink;
//     link.click();

//     // Show success toast
//     setStatus("success");
//     toast.success("Email opened! Send the message to complete.");

//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setForm(initialForm);
//       setCharCount(0);
//       setStatus("idle");
//     }, 3000);
//   };

//   return (
//     <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>

//       <div className="pt-24 pb-20">
//         <div className="max-w-[1280px] mx-auto container-padding">

//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <span className="section-eyebrow">Contact</span>
//             <div className="fancy-divider mx-auto" />
//             <h1
//               className="font-display font-bold mt-2 mb-4"
//               style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "var(--text-primary)" }}
//             >
//               Let's Work Together
//             </h1>
//             <p
//               className="text-lg max-w-xl mx-auto"
//               style={{ color: "var(--text-secondary)" }}
//             >
//               Available for full-time positions, contract work, and collaborations. Whether you have a project in mind or want to explore how we can work together, I'd love to hear from you.
//             </p>
//           </motion.div>

//           {/* Two-column layout */}
//           <div className="grid lg:grid-cols-[1fr_420px] gap-12">

//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               <div
//                 className="p-8 rounded-[12px] border"
//                 style={{ background: "var(--surface)", borderColor: "var(--border)", boxShadow: "var(--shadow-card)" }}
//               >
//                 <h2
//                   className="font-display font-bold text-2xl mb-6"
//                   style={{ color: "var(--text-primary)" }}
//                 >
//                   Send a Message
//                 </h2>

//                 {status === "success" ? (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="flex flex-col items-center justify-center py-16 text-center"
//                   >
//                     <div
//                       className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
//                       style={{ background: "var(--success-bg)" }}
//                     >
//                       <CheckCircle2 size={32} style={{ color: "var(--success)" }} />
//                     </div>
//                     <h3 className="font-display font-bold text-xl mb-2" style={{ color: "var(--text-primary)" }}>
//                       Email Opened!
//                     </h3>
//                     <p style={{ color: "var(--text-secondary)" }}>
//                       Your email is ready. Please send it to complete the contact.
//                     </p>
//                   </motion.div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     {/* Name + Email row */}
//                     <div className="grid sm:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
//                           Your Name <span style={{ color: "var(--accent-primary)" }}>*</span>
//                         </label>
//                         <input
//                           name="name"
//                           value={form.name}
//                           onChange={handleChange}
//                           placeholder="John Smith"
//                           required
//                           className="input-base"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
//                           Email <span style={{ color: "var(--accent-primary)" }}>*</span>
//                         </label>
//                         <input
//                           name="email"
//                           type="email"
//                           value={form.email}
//                           onChange={handleChange}
//                           placeholder="john@company.com"
//                           required
//                           className="input-base"
//                         />
//                       </div>
//                     </div>

//                     {/* Subject */}
//                     <div>
//                       <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
//                         Subject
//                       </label>
//                       <select
//                         name="subject"
//                         value={form.subject}
//                         onChange={handleChange}
//                         className="input-base"
//                         style={{ cursor: "pointer" }}
//                       >
//                         {CONTACT_SUBJECTS.map((s) => (
//                           <option key={s} value={s}>{s}</option>
//                         ))}
//                       </select>
//                     </div>

//                     {/* Message */}
//                     <div>
//                       <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
//                         Message <span style={{ color: "var(--accent-primary)" }}>*</span>
//                       </label>
//                       <textarea
//                         name="message"
//                         value={form.message}
//                         onChange={handleChange}
//                         placeholder="Tell me about the opportunity or project..."
//                         required
//                         rows={6}
//                         maxLength={5000}
//                         className="input-base resize-none"
//                       />
//                       <div className="flex justify-end mt-1">
//                         <span className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
//                           {charCount} / 5000
//                         </span>
//                       </div>
//                     </div>

//                     {/* Error state */}
//                     {status === "error" && (
//                       <div
//                         className="flex items-center gap-2 p-3 rounded-[8px] text-sm"
//                         style={{ background: "var(--error-bg)", color: "var(--error)" }}
//                       >
//                         <AlertCircle size={14} />
//                         Something went wrong. Email me directly at{" "}
//                         <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-semibold">
//                           {PERSONAL_INFO.email}
//                         </a>
//                       </div>
//                     )}

//                     {/* Submit */}
//                     <button
//                       type="submit"
//                       disabled={status === "loading"}
//                       className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white rounded-[8px] transition-all duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
//                       style={{ background: "var(--accent-primary)", fontFamily: "var(--font-body)" }}
//                     >
//                       {status === "loading" ? (
//                         <>
//                           <Loader2 size={15} className="animate-spin" />
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           <Send size={15} />
//                           Send Message
//                         </>
//                       )}
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </motion.div>

//             {/* Right — Direct contact + social */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="space-y-6"
//             >
//               {/* Direct contact card */}
//               <div
//                 className="p-6 rounded-[12px] border"
//                 style={{ background: "var(--surface)", borderColor: "var(--border)" }}
//               >
//                 <h3 className="font-display font-bold text-lg mb-5" style={{ color: "var(--text-primary)" }}>
//                   Or reach me directly
//                 </h3>
//                 <div className="space-y-4">
//                   <a
//                     href={`mailto:${PERSONAL_INFO.email}`}
//                     className="group flex items-center gap-3 p-3 rounded-[8px] border transition-all hover:border-[var(--accent-primary)]"
//                     style={{ borderColor: "var(--border)" }}
//                   >
//                     <div
//                       className="w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0"
//                       style={{ background: "var(--bg-secondary)" }}
//                     >
//                       <Mail size={16} style={{ color: "var(--accent-primary)" }} />
//                     </div>
//                     <div>
//                       <p className="text-xs font-medium mb-0.5" style={{ color: "var(--text-muted)" }}>Email</p>
//                       <p className="text-sm font-semibold group-hover:text-[var(--accent-primary)] transition-colors" style={{ color: "var(--text-primary)" }}>
//                         {PERSONAL_INFO.email}
//                       </p>
//                     </div>
//                   </a>

//                   {SOCIAL_LINKS.map((social) => {
//                     // Determine which icon to use based on platform
//                     let Icon;
//                     if (social.platform === "GitHub") {
//                       Icon = SiGithub;
//                     } else if (social.platform === "LinkedIn") {
//                       Icon = Linkedin;
//                     } else if (social.platform === "WhatsApp") {
//                       Icon = MessageCircle;
//                     }

//                     return (
//                       <a
//                         key={social.platform}
//                         href={social.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="group flex items-center gap-3 p-3 rounded-[8px] border transition-all hover:border-[var(--accent-primary)]"
//                         style={{ borderColor: "var(--border)" }}
//                       >
//                         <div
//                           className="w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0"
//                           style={{ background: "var(--bg-secondary)" }}
//                         >
//                           <Icon size={16} style={{ color: "var(--accent-primary)" }} />
//                         </div>
//                         <div>
//                           <p className="text-xs font-medium mb-0.5" style={{ color: "var(--text-muted)" }}>{social.platform}</p>
//                           <p className="text-sm font-semibold group-hover:text-[var(--accent-primary)] transition-colors" style={{ color: "var(--text-primary)" }}>
//                             {social.label}
//                           </p>
//                         </div>
//                       </a>
//                     );
//                   })}
//                 </div>

//                 {/* Response pledge */}
//                 <div
//                   className="flex items-center gap-2 mt-5 p-3 rounded-[8px]"
//                   style={{ background: "var(--success-bg)" }}
//                 >
//                   <CheckCircle2 size={14} style={{ color: "var(--success)" }} />
//                   <p className="text-xs italic font-medium" style={{ color: "var(--success)" }}>
//                     I respond to all messages within 24 hours.
//                   </p>
//                 </div>
//               </div>

//               {/* Availability card */}
//               <div
//                 className="p-6 rounded-[12px] border"
//                 style={{ background: "var(--surface)", borderColor: "var(--border)" }}
//               >
//                 <div className="flex items-center gap-2 mb-3">
//                   <span className="w-2.5 h-2.5 rounded-full animate-pulse-dot" style={{ background: "var(--success)" }} />
//                   <span className="text-sm font-semibold" style={{ color: "var(--success)" }}>
//                     Currently Available
//                   </span>
//                 </div>
//                 <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
//                   Open to full-time roles, contract projects, and interesting collaborations. Based in {PERSONAL_INFO.location}, working globally.
//                 </p>
//               </div>

//               {/* Decorative large number */}
//               <div
//                 className="font-display font-black select-none text-right"
//                 style={{ fontSize: "120px", color: "var(--border)", opacity: 0.3, lineHeight: 1 }}
//               >
//                 07
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github, MessageCircle, CheckCircle2, AlertCircle, Loader2, Copy, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { PERSONAL_INFO, CONTACT_SUBJECTS, SOCIAL_LINKS } from "@/lib/constants";
import type { ContactFormData, ContactSubject } from "@/types";
import toast from "react-hot-toast";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "Job Opportunity",
  message: "",
};

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactClientPage() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [charCount, setCharCount] = useState(0);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailData, setEmailData] = useState<any>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "message") setCharCount(value.length);
  };

  const getEmailContent = () => {
    return `Name: ${form.name}
Email: ${form.email}

${form.message}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setStatus("loading");

    const emailBody = getEmailContent();
    
    // Always show modal with email content
    setEmailData({
      to: PERSONAL_INFO.email,
      subject: form.subject,
      body: emailBody,
    });
    setShowEmailModal(true);
    setStatus("idle");
    toast.success("Email is ready! Choose how to send.");
  };

  const copyToClipboard = async () => {
    if (!emailData) return;
    
    const fullEmail = `To: ${emailData.to}
Subject: ${emailData.subject}

${emailData.body}`;
    
    try {
      await navigator.clipboard.writeText(fullEmail);
      toast.success("Email copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  const sendViaEmailClient = () => {
    if (!emailData) return;
    
    const emailBody = emailData.body;
    const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    const link = document.createElement("a");
    link.href = mailtoLink;
    link.click();
    
    setShowEmailModal(false);
    toast.success("Email client opened!");
  };

  const openGmailDirect = () => {
    if (!emailData) return;
    
    const subject = encodeURIComponent(emailData.subject);
    const body = encodeURIComponent(emailData.body);
    window.open(
      `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(emailData.to)}&subject=${subject}&body=${body}`,
      "_blank"
    );
    
    setShowEmailModal(false);
    toast.success("Opening Gmail...");
  };

  const openOutlookDirect = () => {
    if (!emailData) return;
    
    const subject = encodeURIComponent(emailData.subject);
    const body = encodeURIComponent(emailData.body);
    window.open(
      `https://outlook.live.com/mail/0/compose?to=${encodeURIComponent(emailData.to)}&subject=${subject}&body=${body}`,
      "_blank"
    );
    
    setShowEmailModal(false);
    toast.success("Opening Outlook...");
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <div className="pt-12 pb-20">
        <div className="max-w-[1280px] mx-auto container-padding">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-eyebrow">Contact</span>
            <div className="fancy-divider mx-auto" />
            <h1
              className="font-display font-bold mt-2 mb-4"
              style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "var(--text-primary)" }}
            >
              Let's Work Together
            </h1>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Available for full-time positions, contract work, and collaborations. Whether you have a project in mind or want to explore how we can work together, I'd love to hear from you.
            </p>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-[1fr_420px] gap-12">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className="p-8 rounded-[12px] border"
                style={{ background: "var(--surface)", borderColor: "var(--border)", boxShadow: "var(--shadow-card)" }}
              >
                <h2
                  className="font-display font-bold text-2xl mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Send a Message
                </h2>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ background: "var(--success-bg)" }}
                    >
                      <CheckCircle2 size={32} style={{ color: "var(--success)" }} />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2" style={{ color: "var(--text-primary)" }}>
                      Email Opened!
                    </h3>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Your email is ready. Please send it to complete the contact.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                          Your Name <span style={{ color: "var(--accent-primary)" }}>*</span>
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                          className="input-base"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                          Email <span style={{ color: "var(--accent-primary)" }}>*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                          className="input-base"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="input-base"
                        style={{ cursor: "pointer" }}
                      >
                        {CONTACT_SUBJECTS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                        Message <span style={{ color: "var(--accent-primary)" }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about the opportunity or project..."
                        required
                        rows={6}
                        maxLength={5000}
                        className="input-base resize-none"
                      />
                      <div className="flex justify-end mt-1">
                        <span className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                          {charCount} / 5000
                        </span>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white rounded-[8px] transition-all duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: "var(--accent-primary)", fontFamily: "var(--font-body)" }}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={15} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right — Direct contact + social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Direct contact card */}
              <div
                className="p-6 rounded-[12px] border"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <h3 className="font-display font-bold text-lg mb-5" style={{ color: "var(--text-primary)" }}>
                  Or reach me directly
                </h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="group flex items-center gap-3 p-3 rounded-[8px] border transition-all hover:border-[var(--accent-primary)]"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0"
                      style={{ background: "var(--bg-secondary)" }}
                    >
                      <Mail size={16} style={{ color: "var(--accent-primary)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: "var(--text-muted)" }}>Email</p>
                      <p className="text-sm font-semibold group-hover:text-[var(--accent-primary)] transition-colors" style={{ color: "var(--text-primary)" }}>
                        {PERSONAL_INFO.email}
                      </p>
                    </div>
                  </a>

                  {SOCIAL_LINKS.map((social) => {
                    let Icon;
                    if (social.platform === "GitHub") {
                      Icon = SiGithub;
                    } else if (social.platform === "LinkedIn") {
                      Icon = Linkedin;
                    } else if (social.platform === "WhatsApp") {
                      Icon = MessageCircle;
                    }

                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-3 rounded-[8px] border transition-all hover:border-[var(--accent-primary)]"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <div
                          className="w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0"
                          style={{ background: "var(--bg-secondary)" }}
                        >
                          <Icon size={16} style={{ color: "var(--accent-primary)" }} />
                        </div>
                        <div>
                          <p className="text-xs font-medium mb-0.5" style={{ color: "var(--text-muted)" }}>{social.platform}</p>
                          <p className="text-sm font-semibold group-hover:text-[var(--accent-primary)] transition-colors" style={{ color: "var(--text-primary)" }}>
                            {social.label}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Response pledge */}
                <div
                  className="flex items-center gap-2 mt-5 p-3 rounded-[8px]"
                  style={{ background: "var(--success-bg)" }}
                >
                  <CheckCircle2 size={14} style={{ color: "var(--success)" }} />
                  <p className="text-xs italic font-medium" style={{ color: "var(--success)" }}>
                    I respond to all messages within 24 hours.
                  </p>
                </div>
              </div>

              {/* Availability card */}
              <div
                className="p-6 rounded-[12px] border"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full animate-pulse-dot" style={{ background: "var(--success)" }} />
                  <span className="text-sm font-semibold" style={{ color: "var(--success)" }}>
                    Currently Available
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Open to full-time roles, contract projects, and interesting collaborations. Based in {PERSONAL_INFO.location}, working globally.
                </p>
              </div>

              {/* Decorative large number */}
              <div
                className="font-display font-black select-none text-right"
                style={{ fontSize: "120px", color: "var(--border)", opacity: 0.3, lineHeight: 1 }}
              >
                07
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Email Modal - Shows if email client doesn't open */}
      {showEmailModal && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
          onClick={() => setShowEmailModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-[16px] overflow-hidden"
            style={{ background: "var(--surface)", boxShadow: "var(--shadow-card)" }}
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between p-6 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <h2 className="font-display font-bold text-xl" style={{ color: "var(--text-primary)" }}>
                Compose Email
              </h2>
              <button
                onClick={() => setShowEmailModal(false)}
                className="p-2 rounded-[8px] transition-all hover:opacity-70"
                style={{ background: "var(--bg-secondary)" }}
              >
                <X size={20} style={{ color: "var(--text-primary)" }} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
              {/* To Field */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                  To:
                </label>
                <div
                  className="p-3 rounded-[8px] text-sm font-mono"
                  style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
                >
                  {emailData?.to}
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                  Subject:
                </label>
                <div
                  className="p-3 rounded-[8px] text-sm font-mono"
                  style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
                >
                  {emailData?.subject}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                  Message:
                </label>
                <div
                  className="p-4 rounded-[8px] text-sm whitespace-pre-wrap font-mono max-h-64 overflow-y-auto"
                  style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
                >
                  {emailData?.body}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div
              className="p-6 border-t flex flex-col gap-3"
              style={{ borderColor: "var(--border)" }}
            >
              {/* Send via Email Client */}
              <button
                onClick={sendViaEmailClient}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white rounded-[8px] transition-all hover:opacity-90"
                style={{ background: "var(--accent-primary)" }}
              >
                <Send size={16} />
                Send via Email Client
              </button>

              {/* Copy Button */}
              <button
                onClick={copyToClipboard}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-[8px] transition-all border"
                style={{
                  background: "var(--bg-secondary)",
                  color: "var(--text-primary)",
                  borderColor: "var(--border)",
                }}
              >
                <Copy size={16} />
                Copy Email Content
              </button>

              {/* Open Gmail */}
              <button
                onClick={openGmailDirect}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-[8px] transition-all text-white hover:opacity-90"
                style={{ background: "#EA4335" }}
              >
                <Mail size={16} />
                Open in Gmail
              </button>

              {/* Open Outlook */}
              <button
                onClick={openOutlookDirect}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-[8px] transition-all text-white hover:opacity-90"
                style={{ background: "#0078D4" }}
              >
                <Mail size={16} />
                Open in Outlook
              </button>

              {/* Close Button */}
              <button
                onClick={() => setShowEmailModal(false)}
                className="w-full py-3 text-sm font-semibold rounded-[8px] transition-all"
                style={{
                  background: "var(--bg-secondary)",
                  color: "var(--text-primary)",
                }}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}