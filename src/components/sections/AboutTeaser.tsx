"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Code2 } from "lucide-react";
import { PERSONAL_INFO, PHILOSOPHY_ITEMS } from "@/lib/constants";

export function AboutTeaser() {
  return (
    <section className="section-padding container-padding max-w-[1280px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left — photo + decorative */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          {/* Photo frame */}
          <div className="relative aspect-[4/5] max-w-sm">
            {/* Offset border decoration */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-[12px] border-2"
              style={{ borderColor: "var(--accent-primary)", opacity: 0.3 }}
            />
            <div
              className="absolute -bottom-2 -right-2 w-full h-full rounded-[12px]"
              style={{ background: "var(--accent-primary)", opacity: 0.06 }}
            />

            {/* Photo */}
            <div
              className="relative w-full h-full rounded-[12px] overflow-hidden border"
              style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
            >
              <img
                src="/myimg1.png"
                alt="Professional photo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 flex items-center gap-2 px-4 py-2 rounded-full border shadow-lg"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <Code2 size={14} style={{ color: "var(--accent-primary)" }} />
              <span className="text-xs font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
                1+ yrs experience
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — bio */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <span className="section-eyebrow">About Me</span>
          <div className="fancy-divider" />

          <h2
            className="font-display font-bold mt-2 mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--text-primary)" }}
          >
            Building systems that
            <br />
            <span className="text-gradient">actually scale.</span>
          </h2>

          <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            {PERSONAL_INFO.bio}
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 mb-8">
            <MapPin size={14} style={{ color: "var(--accent-primary)" }} />
            <span className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              {PERSONAL_INFO.locationRemote}
            </span>
          </div>

          {/* Philosophy teaser */}
          <div className="space-y-3 mb-8">
            {PHILOSOPHY_ITEMS.slice(0, 2).map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-[8px] border"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-1 h-full min-h-[40px] rounded-full shrink-0"
                  style={{ background: "var(--accent-primary)", opacity: 0.5 }}
                />
                <p className="text-sm leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
                  "{item.statement}"
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--accent-primary)", fontFamily: "var(--font-body)" }}
          >
            Learn More About Me
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}