"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/experience";
import { PageShell } from "@/components/layout/PageShell";

export function TestimonialsSection() {
  return (
    <section
      className="border-t py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
    >
      <PageShell compact className="!py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12 md:mb-14 lg:mb-16"
        >
          <span className="section-eyebrow">Testimonials</span>
          <div className="fancy-divider mx-auto" />
          <h2 className="font-display mt-2 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-6xl">
            What people say
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col rounded-[12px] border p-4 sm:p-5 md:p-6"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <Quote size={22} className="mb-3 opacity-30 sm:mb-4 md:size-6" style={{ color: "var(--accent-primary)" }} />

              <p className="mb-4 flex-1 text-xs leading-relaxed sm:mb-5 sm:text-sm md:mb-6" style={{ color: "var(--text-secondary)" }}>
                "{t.content}"
              </p>

              <div className="mb-3 flex items-center gap-1 sm:mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} fill="var(--accent-secondary)" style={{ color: "var(--accent-secondary)" }} />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-3 sm:pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold sm:h-10 sm:w-10 sm:text-sm"
                  style={{ background: "var(--bg-secondary)", color: "var(--accent-primary)" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-xs font-semibold sm:text-sm" style={{ color: "var(--text-primary)" }}>{t.name}</p>
                  <p className="text-[10px] sm:text-xs" style={{ color: "var(--text-muted)" }}>{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
