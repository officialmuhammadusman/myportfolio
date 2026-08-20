"use client";

import { motion } from "framer-motion";
import { SERVICE_PROCESS } from "@/data/services";
import { GitMerge } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ServiceMethodologySection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div className="layout-wrap relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="section-eyebrow">Methodology</span>
          <h2 className="mt-4 font-display text-[2rem] leading-[1.1] tracking-tight text-white sm:text-[2.5rem]">
            How we <span className="italic text-[#FF6A00]">execute</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

          {SERVICE_PROCESS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: easeOut }}
              className="relative text-center sm:text-left lg:text-center group"
            >
              <div className="mx-auto sm:mx-0 lg:mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#0F0F0F] border-2 border-white/10 group-hover:border-[#FF6A00]/50 transition-colors relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                 <span className="font-mono text-[14px] font-bold text-[#FF6A00]">{step.step}</span>
              </div>
              
              <h3 className="mb-3 text-[1.25rem] font-bold text-white">{step.title}</h3>
              <p className="text-[14px] leading-relaxed text-white/50 group-hover:text-white/70 transition-colors px-2">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
