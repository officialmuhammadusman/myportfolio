"use client";

import { motion } from "framer-motion";
import { type AboutItem } from "@/data/aboutData";
import { EXPERIENCE_DATA } from "@/data/experience";
import { Briefcase } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function AboutExperienceTimeline({ about }: { about: AboutItem }) {
  // Only show this timeline heavily on the Experience or Story pages
  if (about.id !== "experience" && about.id !== "story") return null;

  return (
    <section className="relative isolate overflow-hidden bg-[#050505] pt-24 pb-24 sm:pt-32 sm:pb-32 border-t border-white/5">
      <div className="layout-wrap relative z-10 max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-16 text-center"
        >
          <span className="section-eyebrow">Track Record</span>
          <h2 className="mt-4 font-display text-[2.5rem] leading-[1.1] tracking-tight text-white sm:text-[3rem]">
            Production <span className="italic text-[#FF6A00]">Tenure</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 space-y-16">
          {EXPERIENCE_DATA.map((exp, i) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
              className="relative pl-8 sm:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 left-[-21px] flex h-10 w-10 items-center justify-center rounded-full bg-[#0F0F0F] border-2 border-white/20 shadow-[0_0_20px_rgba(255,106,0,0.2)]">
                <div className="h-3 w-3 rounded-full bg-[#FF6A00]" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                <div>
                  <h3 className="text-[1.5rem] font-bold text-white">{exp.role}</h3>
                  <p className="text-[1.1rem] font-medium text-white/60 mt-1">{exp.company}</p>
                </div>
                <span className="mt-2 sm:mt-0 text-[12px] font-bold uppercase tracking-widest text-[#FF6A00] bg-[#FF6A00]/10 px-3 py-1 rounded-full border border-[#FF6A00]/20">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Briefcase className="h-4 w-4 text-[#FF6A00]/70 shrink-0 mt-1" />
                    <span className="text-[15px] leading-relaxed text-white/70">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
