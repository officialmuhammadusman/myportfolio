"use client";

import { motion } from "framer-motion";
import { type AboutItem } from "@/data/aboutData";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function AboutValuesSection({ about }: { about: AboutItem }) {
  if (!about.values?.length) return null;

  return (
    <section className="relative isolate overflow-hidden bg-[#050505] pt-24 pb-24 sm:pt-32 sm:pb-32 border-t border-white/5">
      <div className="layout-wrap relative z-10 max-w-5xl mx-auto text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-16"
        >
          <span className="section-eyebrow">Operating Principles</span>
          <h2 className="mt-4 font-display text-[2rem] leading-[1.1] tracking-tight text-white sm:text-[2.5rem]">
            Core <span className="italic text-[#FF6A00]">Values</span>
          </h2>
        </motion.div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-3">
          {about.values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: easeOut }}
              className="relative"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#0F0F0F] border border-white/10 shadow-[0_0_20px_rgba(255,106,0,0.1)]">
                 <span className="font-mono text-[14px] font-bold text-[#FF6A00]">0{i + 1}</span>
              </div>
              
              <h3 className="mb-3 text-[1.25rem] font-bold text-white">{value.title}</h3>
              <p className="text-[15px] leading-relaxed text-white/50 px-2">
                {value.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
