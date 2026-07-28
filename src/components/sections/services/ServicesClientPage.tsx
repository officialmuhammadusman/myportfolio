"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES, SERVICE_PROCESS } from "@/data/services";
import { PERSONAL_INFO } from "@/lib/constants";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { PageShell } from "@/components/layout/PageShell";

export function ServicesClientPage() {
  return (
    <div className="min-h-screen pb-12 sm:pb-16 md:pb-20" style={{ background: "var(--bg-primary)" }}>
      <PageShell>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl sm:mb-12 md:mb-14"
        >
          <span className="section-eyebrow">Services</span>
          <div className="fancy-divider" />
          <h1 className="font-display mt-2 mb-3 text-3xl font-bold text-[var(--text-primary)] sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Services built to ship
          </h1>
          <p className="text-base sm:text-lg lg:text-xl" style={{ color: "var(--text-secondary)" }}>
            Software agency for founders and businesses — full-stack products, AI/RAG systems,
            backends, cloud, and mobile. Clear scope. Weekly progress. Production-ready code.
          </p>
        </motion.div>

        <div className="mb-14 grid gap-4 sm:gap-5 md:mb-16 md:grid-cols-2 md:gap-6 lg:mb-20">
          {SERVICES.map((service, index) => (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group scroll-mt-32 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] sm:p-6 md:p-7"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <p
                  className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: "#FF6A00" }}
                >
                  {service.eyebrow}
                </p>
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "rgba(255, 106, 0, 0.12)" }}
                  >
                    <BrandIcon base={service.iconBase} tone="base" size={24} className="group-hover:hidden" />
                    <BrandIcon base={service.iconBase} tone="hover" size={24} className="hidden group-hover:block" />
                  </div>
                  <h2 className="text-card-title font-semibold text-[var(--text-primary)] sm:text-lg md:text-xl">
                    {service.title}
                  </h2>
                </div>

                <p className="text-card-body mb-3" style={{ color: "var(--text-secondary)" }}>
                  {service.description}
                </p>
                <p className="mb-5 text-[14px] font-medium" style={{ color: "var(--text-primary)" }}>
                  {service.outcome}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {service.stack.map((item) => (
                    <span key={item} className="tag-pill text-[12px]">
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[14px]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
          ))}
        </div>

        <motion.section
          id="process"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 scroll-mt-32"
        >
          <p className="section-eyebrow mb-2">Process</p>
          <h3
            className="mb-8 font-display text-3xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            How engagements run
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_PROCESS.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border p-5"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <p className="mb-2 font-mono text-[12px] font-bold text-[#FF6A00]">{step.step}</p>
                <p className="mb-2 text-[16px] font-semibold" style={{ color: "var(--text-primary)" }}>
                  {step.title}
                </p>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(255,106,0,0.12), rgba(255,179,71,0.08))",
            borderColor: "rgba(255,106,0,0.25)",
          }}
        >
          <div>
            <p className="section-eyebrow mb-2">Let&apos;s build</p>
            <h3
              className="text-2xl md:text-3xl font-display font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Ready to start your project?
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Tell me the goal — I&apos;ll reply with scope, timeline, and next steps.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_0_32px_rgba(255,106,0,0.35)]"
            style={{ background: "#FF6A00" }}
          >
            Let&apos;s Talk
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <p className="mt-8 text-center text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
          {PERSONAL_INFO.name} · Software Agency · {PERSONAL_INFO.locationRemote}
        </p>
      </PageShell>
    </div>
  );
}
