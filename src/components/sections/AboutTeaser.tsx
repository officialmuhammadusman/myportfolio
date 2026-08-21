/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Code2 } from "lucide-react";
import { PERSONAL_INFO, PHILOSOPHY_ITEMS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/PageShell";

export function AboutTeaser() {
  return (
    <SectionShell>
      <div className="grid items-center gap-10 sm:gap-12 md:gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20 2xl:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:mx-0"
        >
          <div
            className="absolute -bottom-3 -right-3 h-full w-full rounded-[12px] border-2 sm:-bottom-4 sm:-right-4"
            style={{ borderColor: "var(--accent-primary)", opacity: 0.3 }}
          />
          <div
            className="absolute -bottom-1.5 -right-1.5 h-full w-full rounded-[12px] sm:-bottom-2 sm:-right-2"
            style={{ background: "var(--accent-primary)", opacity: 0.06 }}
          />

          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[12px] border"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <img
              src="/myimg1.png"
              alt="Professional photo"
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 -top-4 flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-lg sm:-right-5 sm:-top-5 sm:px-4 sm:py-2"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <Code2 size={14} style={{ color: "var(--accent-primary)" }} />
            <span className="text-[10px] font-medium sm:text-xs" style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
              1+ yrs experience
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <span className="section-eyebrow">About Me</span>
          <div className="fancy-divider" />

          <h2 className="mt-2 mb-3 text-[1.65rem] font-medium leading-[1.12] tracking-[-0.03em] text-[var(--text-primary)] sm:mb-4 sm:text-[2rem] md:text-[2.35rem] lg:text-[2.65rem]">
            Building systems that
            <br />
            <span className="text-gradient">actually scale.</span>
          </h2>

          <p className="mb-5 max-w-[36rem] text-sm leading-[1.65] sm:mb-6 sm:text-[0.95rem]" style={{ color: "var(--text-secondary)" }}>
            {PERSONAL_INFO.bioShort}
          </p>

          <div className="mb-6 flex items-center gap-2 sm:mb-8">
            <MapPin size={14} style={{ color: "var(--accent-primary)" }} />
            <span className="text-xs sm:text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              {PERSONAL_INFO.locationRemote}
            </span>
          </div>

          <div className="mb-6 space-y-3 sm:mb-8">
            {PHILOSOPHY_ITEMS.slice(0, 2).map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-[8px] border p-3 sm:p-4"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <div
                  className="h-full min-h-[36px] w-1 shrink-0 rounded-full sm:min-h-[40px]"
                  style={{ background: "var(--accent-primary)", opacity: 0.5 }}
                />
                <p className="text-xs italic leading-relaxed sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                  "{item.statement}"
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-xs font-medium sm:text-sm"
            style={{ color: "var(--accent-primary)", fontFamily: "var(--font-body)" }}
          >
            Learn More About Me
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </SectionShell>
  );
}
