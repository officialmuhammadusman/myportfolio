"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/experience";

export function TestimonialsSection() {
  return (
    <section
      className="section-padding border-t"
      style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
    >
      <div className="max-w-[1280px] mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow">Testimonials</span>
          <div className="fancy-divider mx-auto" />
          <h2
            className="font-display font-bold mt-2"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--text-primary)" }}
          >
            What people say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-[12px] border flex flex-col"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <Quote size={24} className="mb-4 opacity-30" style={{ color: "var(--accent-primary)" }} />

              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--text-secondary)" }}>
                "{t.content}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} fill="var(--accent-secondary)" style={{ color: "var(--accent-secondary)" }} />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0"
                  style={{ background: "var(--bg-secondary)", color: "var(--accent-primary)" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
