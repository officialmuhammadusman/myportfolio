"use client";

import { motion } from "framer-motion";
import { type AboutItem } from "@/data/aboutData";
import { Target } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function AboutExpertiseGrid({ about }: { about: AboutItem }) {
  if (!about.expertise?.length) return null;

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] pt-24 pb-24 sm:pt-32 sm:pb-32 border-t border-white/5">
      <div className="layout-wrap relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-16 max-w-2xl"
        >
          <span className="section-eyebrow">Core Competencies</span>
          <h2 className="mt-4 font-display text-[2rem] leading-[1.1] tracking-tight text-white sm:text-[2.5rem] md:text-[3rem]">
            Specialized in <span className="italic text-[#FF6A00]">{about.title.toLowerCase()}</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {about.expertise.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: easeOut }}
              className="group relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-8 transition-all hover:border-[#FF6A00]/30 hover:bg-white/[0.04]"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FF6A00]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F0F0F] border border-white/10 group-hover:border-[#FF6A00]/40 transition-colors">
                  <Target className="h-5 w-5 text-[#FF6A00] opacity-80" />
                </div>
                
                <h3 className="mb-3 text-[1.25rem] font-bold text-white group-hover:text-[#FF6A00] transition-colors">{exp.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">
                  {exp.description || (exp as any).text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
