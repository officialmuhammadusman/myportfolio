"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Copy, Loader2, Send, X } from "lucide-react";
import toast from "react-hot-toast";
import { PageShell } from "@/components/layout/PageShell";
import { BrandIcon } from "@/components/ui/BrandIcon";
import {
  CONTACT_CHANNELS,
  CONTACT_INQUIRIES,
  isValidContactSubject,
} from "@/data/contact";
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

interface EmailDraft {
  to: string;
  subject: string;
  body: string;
}

function ChannelCard({
  label,
  description,
  href,
  iconBase,
  highlight = false,
}: {
  label: string;
  description: string;
  href: string;
  iconBase: string;
  highlight?: boolean;
}) {
  const className = cn(
    "group flex flex-col gap-3 rounded-xl border p-4 transition-all duration-200 hover:border-[#FF6A00]/45 hover:shadow-[var(--shadow-md)]",
    highlight
      ? "border-[#FF6A00]/30 bg-[#FF6A00]/[0.06]"
      : "border-[var(--border)] bg-[var(--surface)]"
  );

  const inner = (
    <>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6A00]/10 transition-colors group-hover:bg-[#FF6A00]/16">
        <BrandIcon base={iconBase} tone="base" size={24} className="group-hover:hidden" />
        <BrandIcon base={iconBase} tone="hover" size={24} className="hidden group-hover:block" />
      </span>
      <span>
        <span className="mb-1 block text-[15px] font-semibold text-[var(--text-primary)] group-hover:text-[#FF6A00]">
          {label}
        </span>
        <span className="block text-[12px] leading-relaxed text-[var(--text-secondary)]">
          {description}
        </span>
      </span>
    </>
  );

  if (isExternalNavHref(href)) {
    return (
      <a href={href} className={className} {...externalNavLinkProps(href)}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

export function ContactClientPage() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [charCount, setCharCount] = useState(0);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailData, setEmailData] = useState<EmailDraft | null>(null);

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (isValidContactSubject(subjectParam)) {
      setForm((prev) => ({ ...prev, subject: subjectParam }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "message") setCharCount(value.length);
  };

  const selectInquiry = (subject: (typeof CONTACT_SUBJECTS)[number]) => {
    setForm((prev) => ({ ...prev, subject }));
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setStatus("loading");

    const emailBody = `Name: ${form.name}
Email: ${form.email}

${form.message}`;

    setEmailData({
      to: PERSONAL_INFO.email,
      subject: form.subject,
      body: emailBody,
    });
    setShowEmailModal(true);
    setStatus("idle");
    toast.success("Email is ready — choose how to send.");
  };

  const copyToClipboard = async () => {
    if (!emailData) return;

    const fullEmail = `To: ${emailData.to}
Subject: ${emailData.subject}

${emailData.body}`;

    try {
      await navigator.clipboard.writeText(fullEmail);
      toast.success("Email copied to clipboard!");
    } catch {
      toast.error("Failed to copy");
    }
  };

  const sendViaEmailClient = () => {
    if (!emailData) return;

    const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
    const link = document.createElement("a");
    link.href = mailtoLink;
    link.click();
    setShowEmailModal(false);
    toast.success("Email client opened!");
  };

  const openGmailDirect = () => {
    if (!emailData) return;

    window.open(
      `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(emailData.to)}&subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`,
      "_blank"
    );
    setShowEmailModal(false);
    toast.success("Opening Gmail...");
  };

  const openOutlookDirect = () => {
    if (!emailData) return;

    window.open(
      `https://outlook.live.com/mail/0/compose?to=${encodeURIComponent(emailData.to)}&subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`,
      "_blank"
    );
    setShowEmailModal(false);
    toast.success("Opening Outlook...");
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <PageShell className="pb-12 sm:pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center sm:mb-12 md:mb-14"
        >
          <span className="section-eyebrow">Contact</span>
          <div className="fancy-divider mx-auto" />
          <h1 className="font-display mt-2 mb-3 text-3xl font-bold text-[var(--text-primary)] sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Start Your Next Build
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            SaaS platforms, AI/RAG systems, React Native apps & backend APIs — delivered for founders
            and teams in {PERSONAL_INFO.locationRemote}. Share a brief or reach out directly.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-10 sm:mb-12"
          aria-label="Contact channels"
        >
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]/80">
                Direct channels
              </p>
              <h2 className="font-display mt-1 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                Reach us your way
              </h2>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CHANNELS.map((channel) => (
              <ChannelCard key={channel.id} {...channel} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 sm:mb-12"
          aria-label="Project inquiry types"
        >
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]/80">
              Project types
            </p>
            <h2 className="font-display mt-1 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
              What are you building?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)]">
              Pick a category to pre-fill the form — same options as the Contact menu in the header.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_INQUIRIES.map((inquiry) => {
              const active = form.subject === inquiry.subject;
              return (
                <button
                  key={inquiry.subject}
                  type="button"
                  onClick={() => selectInquiry(inquiry.subject)}
                  className={cn(
                    "group flex gap-3 rounded-xl border p-4 text-left transition-all duration-200",
                    active
                      ? "border-[#FF6A00]/50 bg-[#FF6A00]/[0.08] shadow-[var(--shadow-md)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:border-[#FF6A00]/35"
                  )}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF6A00]/10">
                    <BrandIcon base={inquiry.iconBase} tone={active ? "orange" : "base"} size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="mb-0.5 block text-[14px] font-semibold text-[var(--text-primary)] group-hover:text-[#FF6A00]">
                      {inquiry.subject}
                    </span>
                    <span className="block text-[12px] leading-relaxed text-[var(--text-secondary)]">
                      {inquiry.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.section>

        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr_380px]">
          <motion.div
            id="form"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="scroll-mt-28"
          >
            <div
              className="rounded-[12px] border p-5 sm:p-6 md:p-8"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="mb-5 flex items-start gap-3 sm:mb-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF6A00]/10">
                  <BrandIcon base={brandIcons.cta.startProject} tone="orange" size={24} />
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                    Send a project brief
                  </h2>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    Scope, timeline, stack preferences — we reply within 24 hours.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                      Your name <span className="text-[#FF6A00]">*</span>
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
                    <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                      Work email <span className="text-[#FF6A00]">*</span>
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

                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                    Project type
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="input-base cursor-pointer"
                  >
                    {CONTACT_SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                    Message <span className="text-[#FF6A00]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about the product, users, timeline, and any links to references..."
                    required
                    rows={6}
                    maxLength={5000}
                    className="input-base resize-none"
                  />
                  <div className="mt-1 flex justify-end">
                    <span
                      className="font-mono text-xs text-[var(--text-muted)]"
                    >
                      {charCount} / 5000
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-[8px] py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  style={{ background: "var(--accent-primary)", fontFamily: "var(--font-body)" }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Preparing...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="space-y-5"
          >
            <div
              className="rounded-[12px] border p-6"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 animate-pulse-dot rounded-full"
                  style={{ background: "var(--success)" }}
                />
                <span className="text-sm font-semibold text-[var(--success)]">
                  {PERSONAL_INFO.availabilityText}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                Taking on SaaS builds, AI/RAG engagements, mobile apps & backend/API work. Based in{" "}
                {PERSONAL_INFO.location}, delivering globally.
              </p>
            </div>

            <div
              className="rounded-[12px] border p-6"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF6A00]/80">
                Delivery regions
              </p>
              <p className="font-display text-lg font-bold text-[var(--text-primary)]">
                {PERSONAL_INFO.locationRemote}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Async-friendly across time zones. WhatsApp is fastest for Gulf & MENA clients.
              </p>
            </div>

            <div
              className="rounded-[12px] border p-6"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p className="mb-3 text-sm font-semibold text-[var(--text-primary)]">What happens next</p>
              <ol className="space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-[#FF6A00]">01</span>
                  <span>We review your brief and reply within 24 hours.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-[#FF6A00]">02</span>
                  <span>Short discovery call to align scope, stack & timeline.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-[#FF6A00]">03</span>
                  <span>Proposal with milestones — then we start building.</span>
                </li>
              </ol>
            </div>

            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-[12px] border p-4 transition-colors hover:border-[#FF6A00]/40"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6A00]/10">
                <BrandIcon base={brandIcons.about.experience} tone="base" size={22} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-[var(--text-primary)] group-hover:text-[#FF6A00]">
                  Download CV
                </span>
                <span className="text-xs text-[var(--text-secondary)]">PDF · full-stack & AI profile</span>
              </span>
            </a>
          </motion.aside>
        </div>
      </PageShell>

      {showEmailModal && emailData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
          onClick={() => setShowEmailModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl overflow-hidden rounded-[16px]"
            style={{ background: "var(--surface)", boxShadow: "var(--shadow-card)" }}
          >
            <div
              className="flex items-center justify-between border-b p-6"
              style={{ borderColor: "var(--border)" }}
            >
              <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">
                Compose email
              </h2>
              <button
                type="button"
                onClick={() => setShowEmailModal(false)}
                className="rounded-[8px] p-2 transition-all hover:opacity-70"
                style={{ background: "var(--bg-secondary)" }}
                aria-label="Close"
              >
                <X size={20} style={{ color: "var(--text-primary)" }} />
              </button>
            </div>

            <div className="max-h-96 space-y-4 overflow-y-auto p-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">To</label>
                <div
                  className="rounded-[8px] p-3 font-mono text-sm"
                  style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
                >
                  {emailData.to}
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                  Subject
                </label>
                <div
                  className="rounded-[8px] p-3 font-mono text-sm"
                  style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
                >
                  {emailData.subject}
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                  Message
                </label>
                <div
                  className="max-h-64 overflow-y-auto whitespace-pre-wrap rounded-[8px] p-4 font-mono text-sm"
                  style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
                >
                  {emailData.body}
                </div>
              </div>
            </div>

            <div
              className="flex flex-col gap-3 border-t p-6"
              style={{ borderColor: "var(--border)" }}
            >
              <button
                type="button"
                onClick={sendViaEmailClient}
                className="flex w-full items-center justify-center gap-2 rounded-[8px] py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "var(--accent-primary)" }}
              >
                <Send size={16} />
                Send via email client
              </button>
              <button
                type="button"
                onClick={copyToClipboard}
                className="flex w-full items-center justify-center gap-2 rounded-[8px] border py-3 text-sm font-semibold transition-all"
                style={{
                  background: "var(--bg-secondary)",
                  color: "var(--text-primary)",
                  borderColor: "var(--border)",
                }}
              >
                <Copy size={16} />
                Copy email content
              </button>
              <button
                type="button"
                onClick={openGmailDirect}
                className="flex w-full items-center justify-center gap-2 rounded-[8px] py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "#EA4335" }}
              >
                Open in Gmail
              </button>
              <button
                type="button"
                onClick={openOutlookDirect}
                className="flex w-full items-center justify-center gap-2 rounded-[8px] py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "#0078D4" }}
              >
                Open in Outlook
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
