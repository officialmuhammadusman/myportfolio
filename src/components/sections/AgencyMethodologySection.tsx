"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, PenTool, Terminal, Rocket, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const METHODOLOGY = [
  {
    id: "discover",
    number: "01",
    title: "Discovery & Scope",
    description: "Aligning on business goals, technical constraints, and user needs to define a strict project scope.",
    icon: Search,
    deliverables: ["Product Requirements", "System Architecture Outline"],
  },
  {
    id: "architect",
    number: "02",
    title: "Architecture Design",
    description: "Structuring the database schemas, API contracts, and infrastructure (e.g., Next.js + NestJS + PostgreSQL).",
    icon: PenTool,
    deliverables: ["Database Schema", "API Documentation (Swagger)"],
  },
  {
    id: "build",
    number: "03",
    title: "Agile Engineering",
    description: "Iterative development cycles with continuous integration, strict typing, and comprehensive testing.",
    icon: Terminal,
    deliverables: ["Staging Environment", "Weekly Sprint Demos"],
  },
  {
    id: "launch",
    number: "04",
    title: "Production Launch",
    description: "Final security audits, performance profiling, CI/CD setup, and zero-downtime deployment.",
    icon: Rocket,
    deliverables: ["Production Deployment", "Handoff Documentation"],
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function AgencyMethodologySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] py-16 sm:py-24 border-y border-white/[0.08]">
      <div className="layout-wrap relative z-10">
        <motion.header
          initial={false}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeOut }}
          style={{ opacity: 1 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFF7ED]/50">
              Methodology
            </span>
          </div>
          <h2 className="font-display text-[1.75rem] leading-[1.1] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2.25rem] lg:text-[2.75rem]">
            A predictable pipeline for <br className="hidden sm:block" />
            <span className="text-gradient italic">production engineering.</span>
          </h2>
        </motion.header>

        {/* Desktop Pipeline */}
        <div className="hidden sm:grid grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
          {METHODOLOGY.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: easeOut }}
                className="bg-[#0A0A0A] p-6 lg:p-8 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors"
              >
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#FF6A00]">
                      Phase {step.number}
                    </span>
                    <Icon size={20} className="text-[#FFF7ED]/30 group-hover:text-[#FF6A00] transition-colors" />
                  </div>
                  
                  <h3 className="font-display text-xl text-[#FFF7ED] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#FFF7ED]/60 mb-8">
                    {step.description}
                  </p>
                </div>

                <div className="border-t border-white/[0.08] pt-4">
                  <p className="text-[9px] uppercase tracking-[0.1em] font-bold text-[#FFF7ED]/30 mb-3">
                    Deliverables
                  </p>
                  <ul className="space-y-2">
                    {step.deliverables.map(item => (
                      <li key={item} className="flex items-center gap-2 text-[11px] font-medium text-[#FFF7ED]/70">
                        <ChevronRight size={12} className="text-[#FF6A00]/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile App Cards */}
        <div className="sm:hidden -mx-4 px-4 snap-scroll-x pb-8">
          {METHODOLOGY.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: easeOut }}
                className="snap-card-full mobile-card flex flex-col justify-between p-6 shrink-0"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#FF6A00]">
                      Phase {step.number}
                    </span>
                    <Icon size={20} className="text-[#FF6A00]" />
                  </div>
                  
                  <h3 className="font-display text-xl text-[#FFF7ED] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#FFF7ED]/60 mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="border-t border-white/[0.08] pt-4">
                  <p className="text-[9px] uppercase tracking-[0.1em] font-bold text-[#FFF7ED]/30 mb-3">
                    Deliverables
                  </p>
                  <ul className="space-y-2">
                    {step.deliverables.map(item => (
                      <li key={item} className="flex items-center gap-2 text-[11px] font-medium text-[#FFF7ED]/70">
                        <ChevronRight size={12} className="text-[#FF6A00]/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
