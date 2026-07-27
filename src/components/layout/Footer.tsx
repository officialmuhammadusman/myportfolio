"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Heart } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { externalLinkProps } from "@/lib/utils";
import { PageShell } from "@/components/layout/PageShell";
import theme from "@/lib/theme";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  twitter: <Twitter size={18} />,
  email: <Mail size={18} />,
};

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      className="relative border-t border-[var(--border)] bg-[var(--bg-secondary)] overflow-hidden"
    >
      {/* Subtle decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent" />

      <PageShell compact className="!py-0">
        {/* ── Main Footer Grid ── */}
        <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 sm:gap-10 sm:py-12 md:py-14 lg:grid-cols-3 lg:gap-12 lg:py-16 xl:gap-14">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="group flex items-center gap-3 w-fit">
              <div className="w-10 h-10 rounded-[8px] bg-accent-primary flex items-center justify-center">
                <span className="text-white font-display font-bold text-[15px]">MU</span>
              </div>
              <span className="font-display text-base font-semibold text-[var(--text-primary)] transition-colors group-hover:text-accent-primary sm:text-lg">
                {PERSONAL_INFO.firstName}<span className="text-accent-primary">.</span>
              </span>
            </Link>
            <p className="max-w-[240px] text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
              {PERSONAL_INFO.bioShort.slice(0, 100)}...
            </p>
            {/* Availability pill */}
            <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-[var(--success)]/30 bg-[var(--success-bg)]">
              <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse-dot" />
              <span className="text-[12px] font-medium text-[var(--success)]">
                {PERSONAL_INFO.availabilityText}
              </span>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-5">
            <h4
              className="section-eyebrow"
            >
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1.5 text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 w-fit"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-accent-primary transition-all duration-300 overflow-hidden" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Connect */}
          <div className="flex flex-col gap-5">
            <h4 className="section-eyebrow">Let's Connect</h4>
            <div className="flex flex-col gap-3">
              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex items-center gap-2 text-[14px] text-[var(--text-secondary)] hover:text-accent-primary transition-colors duration-200 w-fit"
              >
                <Mail size={15} className="shrink-0" />
                {PERSONAL_INFO.email}
                <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              {/* Social icons */}
              <div className="flex items-center gap-3 mt-1">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    {...externalLinkProps}
                    aria-label={social.platform}
                    className="w-9 h-9 rounded-md flex items-center justify-center text-[var(--text-muted)] hover:text-accent-primary hover:bg-accent-primary/10 border border-[var(--border)] hover:border-accent-primary/30 transition-all duration-200"
                  >
                    {iconMap[social.icon] ?? <Mail size={18} />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-[var(--divider)] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[var(--text-muted)] flex items-center gap-1.5">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-[12px] text-[var(--text-muted)] flex items-center gap-1.5">
            Built with
            <span className="text-accent-primary font-medium">Next.js 15</span>
            &
            <span className="text-accent-primary font-medium">TypeScript</span>
          </p>
        </div>
      </PageShell>
    </footer>
  );
}
