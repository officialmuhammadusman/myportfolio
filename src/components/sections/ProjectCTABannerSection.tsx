"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECT_CTA_COPY } from "@/data/projectCTA";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ProjectCTABannerSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] py-16 sm:py-24 lg:py-32">
      <div className="layout-wrap relative z-10">
        <motion.div
          initial={false}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeOut }}
          style={{ opacity: 1 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-8 sm:p-16 lg:p-20"
        >
          {/* Strict MegaMenu style grid background */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(255,106,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,106,0,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 px-3 py-1 mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF6A00]"></span>
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#FF6A00]">
                  {PROJECT_CTA_COPY.eyebrow}
                </span>
              </div>
              
              <h2 className="text-[2rem] font-medium leading-[1.05] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2.75rem] mb-6">
                {PROJECT_CTA_COPY.title} <br />
                <span className="italic text-[#FF6A00]">{PROJECT_CTA_COPY.titleAccent}</span>
              </h2>
            </div>

            <div className="lg:pl-12 lg:border-l border-white/[0.08]">
              <p className="text-[15px] sm:text-base leading-relaxed text-[#FFF7ED]/70 mb-8">
                {PROJECT_CTA_COPY.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-[#FFF7ED] text-[#0A0A0A] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.1em] transition-transform hover:scale-105 active:scale-95"
                >
                  {PROJECT_CTA_COPY.primaryButton}
                  <ArrowUpRight size={14} />
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] text-[#FFF7ED] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.1em] transition-colors hover:bg-white/[0.08]"
                >
                  {PROJECT_CTA_COPY.secondaryButton}
                </Link>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
