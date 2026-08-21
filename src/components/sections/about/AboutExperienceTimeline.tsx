"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCE_DATA } from "@/data/experience";
import { Building2, CalendarDays } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

type ExpItem = (typeof EXPERIENCE_DATA)[0];


function TimelineCard({ item, index }: { item: ExpItem; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -32 : 32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease }}
      className={`group relative flex w-full items-start gap-6 md:w-[calc(50%-2rem)] ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
    >
      {/* Timeline dot connector (desktop) */}
      <div className={`absolute hidden md:flex top-8 h-[2px] w-10 items-center ${isEven ? "-right-10" : "-left-10"}`}>
        <div className="h-[1px] flex-1 bg-[#FF6A00]/30" />
        <div className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[#FF6A00] bg-[#050505] shadow-[0_0_12px_rgba(255,106,0,0.5)]" />
        {!isEven && <div className="h-[1px] flex-1 bg-[#FF6A00]/30" />}
      </div>

      {/* Card */}
      <div className="flex-1 overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#0C0C0C] p-7 transition-all duration-400 group-hover:border-[#FF6A00]/25 group-hover:shadow-[0_16px_48px_-16px_rgba(0,0,0,0.6)]">
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "radial-gradient(circle at top left, rgba(255,106,0,0.05), transparent 60%)" }}
        />
        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#FF6A00]/70">
            <CalendarDays size={11} />
            {item.period}
          </div>

          {/* Role + Company */}
          <h3 className="text-[1.3rem] font-medium leading-tight text-white transition-colors group-hover:text-[#FF6A00]">
            {item.role}
          </h3>
          <div className="mt-1 flex items-center gap-2 text-[13px] text-white/50">
            <Building2 size={13} className="shrink-0 text-[#FF6A00]/60" />
            <span>{item.company}</span>
          </div>

          {/* Achievements */}
          {item.achievements?.length > 0 && (
            <ul className="mt-4 flex flex-col gap-2">
              {item.achievements.map((b, bi) => (
                <li key={bi} className="flex items-start gap-2.5 text-[12px] leading-snug text-white/45">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6A00]/60" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Left accent bar */}
        <div className="absolute inset-y-0 left-0 w-[3px] origin-bottom scale-y-0 rounded-r-full bg-[#FF6A00] transition-transform duration-400 group-hover:scale-y-100" />
      </div>
    </motion.div>
  );
}

export function AboutExperienceTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="bg-[#050505] py-24 sm:py-32">
      <div className="layout-wrap">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="mb-2 block font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-[#FF6A00]/70">
              Career Journey
            </span>
            <h2 className="text-[2rem] font-medium tracking-tight text-white sm:text-[2.75rem]">
              Experience <em className="text-[#FF6A00] not-italic">timeline.</em>
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-white/40">
            2+ years building production-grade software across SaaS, healthcare, and AI.
          </p>
        </motion.div>

        {/* Timeline grid */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="absolute left-1/2 hidden h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#FF6A00]/20 to-transparent md:block" />

          <div className="flex flex-col gap-8 md:gap-12">
            {EXPERIENCE_DATA.map((item, i) => (
              <TimelineCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
