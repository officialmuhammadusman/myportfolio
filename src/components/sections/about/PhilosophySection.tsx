"use client";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { PHILOSOPHY_ITEMS } from "@/lib/constants";

type LucideIconName = keyof typeof LucideIcons;

export function PhilosophySection() {
  return (
    <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-[1280px] mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-eyebrow">Work Philosophy</span>
          <div className="fancy-divider" />
          <h2
            className="font-medium mt-2"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--text-primary)" }}
          >
            How I think about software
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {PHILOSOPHY_ITEMS.map((item, i) => {
            const IconComponent = (LucideIcons[item.icon as LucideIconName] ?? LucideIcons.Lightbulb) as React.ElementType;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-5 p-6 rounded-[12px] border transition-all duration-300 hover:border-[var(--accent-primary)] hover:-translate-y-1"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 transition-colors duration-300"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  <IconComponent size={18} style={{ color: "var(--accent-primary)" }} />
                </div>
                <p
                  className="text-base leading-relaxed italic"
                  style={{ color: "var(--text-secondary)" }}
                >
                  "{item.statement}"
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
