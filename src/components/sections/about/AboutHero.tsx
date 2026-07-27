"use client";
import { motion } from "framer-motion";
import { Download, MapPin, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { PageShell } from "@/components/layout/PageShell";

export function AboutHero() {
  return (
    <section
      className="relative overflow-hidden border-b pb-14 pt-6 sm:pb-16 md:pb-20 lg:pb-24"
      style={{ borderColor: "var(--border)", background: "var(--bg-primary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 80% at 80% 50%, rgba(200,98,42,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Decorative number */}
      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none hidden xl:block"
        style={{ fontSize: "220px", color: "var(--border)", opacity: 0.3, lineHeight: 1 }}
      >
        03
      </div>

      <PageShell className="relative z-10">
        <div className="grid items-center gap-10 sm:gap-12 md:gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="section-eyebrow"
            >
              About Me
            </motion.span>
            <div className="fancy-divider" />

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display mt-2 mb-4 text-3xl font-bold text-[var(--text-primary)] sm:mb-5 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl"
            >
              Crafting scalable
              <br />
              <span className="text-gradient">software with intent.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 max-w-xl text-sm leading-relaxed sm:mb-8 sm:text-base md:text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={PERSONAL_INFO.cvUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-[8px] transition-all duration-200 hover:opacity-90"
                style={{ background: "var(--accent-primary)" }}
              >
                <Download size={15} />
                Download CV
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} style={{ color: "var(--accent-primary)" }} />
                <span className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  {PERSONAL_INFO.locationRemote}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative max-w-sm mx-auto lg:ml-auto"
          >
            <div
              className="absolute -bottom-5 -right-5 w-full h-full rounded-[12px] border-2"
              style={{ borderColor: "var(--accent-primary)", opacity: 0.25 }}
            />
            <div
              className="relative aspect-[4/5] rounded-[12px] overflow-hidden border flex items-center justify-center"
              style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
            >
              <div className="text-center">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center text-5xl font-display font-bold mx-auto mb-3"
                  style={{ background: "var(--surface)", color: "var(--accent-primary)" }}
                >
                  {PERSONAL_INFO.firstName[0]}
                </div>
                <span className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  your photo here
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </PageShell>
    </section>
  );
}
