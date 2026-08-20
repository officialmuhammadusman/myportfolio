"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { EXPERIENCE_COPY, EXPERIENCE_DATA } from "@/data/experience";
import { MobileBottomSheet } from "@/components/ui/MobileBottomSheet";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ExperienceSection() {
  const reduceMotion = useReducedMotion();
  const [activeJobId, setActiveJobId] = useState<string | null>(null);

  const activeJob = EXPERIENCE_DATA.find((j) => j.id === activeJobId) || null;

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] py-16 sm:py-24">
      {/* Background gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,106,0,0.06) 0%, transparent 70%)",
        }}
      />
      
      <div className="layout-wrap relative z-10">
        <motion.header
          initial={false}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeOut }}
          style={{ opacity: 1 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="section-eyebrow">{EXPERIENCE_COPY.eyebrow}</span>
          <div className="fancy-divider mx-auto" />
          <h2 className="font-display text-[1.75rem] leading-[1.1] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2.25rem] lg:text-[2.75rem]">
            {EXPERIENCE_COPY.title}{" "}
            <span className="text-gradient italic">{EXPERIENCE_COPY.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#FFF7ED]/70 sm:text-base">
            {EXPERIENCE_COPY.support}
          </p>
        </motion.header>

        {/* ── Desktop: Editorial Layout ── */}
        <div className="hidden sm:block max-w-4xl mx-auto space-y-6">
          {EXPERIENCE_DATA.map((job, index) => (
            <motion.div
              key={job.id}
              initial={false}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: easeOut }}
              style={{ opacity: 1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <h3 className="font-display text-2xl tracking-tight text-[#FFF7ED] mb-2">{job.role}</h3>
                  <div className="flex items-center gap-3 text-sm text-[#FFF7ED]/60 font-medium">
                    <span className="flex items-center gap-1.5 text-[#FF6A00]">
                      <Briefcase size={15} />
                      {job.company}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={15} />
                      {job.period}
                    </span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#FFF7ED]/70">
                    <ChevronRight size={18} className="shrink-0 mt-0.5 text-[#FF6A00]/70" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Mobile: App-like Cards + Bottom Sheet ── */}
        <div className="sm:hidden space-y-4">
          {EXPERIENCE_DATA.map((job, index) => (
            <motion.button
              key={job.id}
              onClick={() => setActiveJobId(job.id)}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: easeOut }}
              className="mobile-card w-full text-left p-5 flex flex-col gap-3 group active:scale-[0.98] transition-transform"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-display text-lg tracking-tight text-[#FFF7ED]">{job.role}</h3>
                  <p className="text-[#FF6A00] text-xs font-semibold mt-1">{job.company}</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-white/[0.05] flex items-center justify-center shrink-0 border border-white/[0.05]">
                  <ChevronRight size={16} className="text-[#FFF7ED]/50 group-active:text-[#FF6A00]" />
                </div>
              </div>
              <p className="text-[11px] text-[#FFF7ED]/40 font-mono tracking-wide flex items-center gap-1.5 mt-2">
                <Calendar size={12} />
                {job.period}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Sheet Detail */}
      <MobileBottomSheet
        open={!!activeJobId}
        onClose={() => setActiveJobId(null)}
        title={activeJob?.company ?? "Experience Details"}
      >
        {activeJob && (
          <div className="p-5 pb-8 space-y-6">
            <div>
              <h3 className="font-display text-2xl tracking-tight text-[#FFF7ED] mb-2">{activeJob.role}</h3>
              <p className="text-[13px] font-mono tracking-wide text-[#FF6A00] flex items-center gap-2">
                <Calendar size={14} />
                {activeJob.period}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#FFF7ED]/40">Key Achievements</h4>
              <ul className="space-y-4">
                {activeJob.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-[#FFF7ED]/80">
                    <span className="text-[#FF6A00] mt-1 text-[10px]">●</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </MobileBottomSheet>
    </section>
  );
}
