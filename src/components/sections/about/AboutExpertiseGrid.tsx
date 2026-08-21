"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { type AboutItem } from "@/data/aboutData";
import { Target, Zap, Shield, Sparkles } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function AboutExpertiseGrid({ about }: { about: AboutItem }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  if (!about.expertise?.length) return null;

  return (
    <section className="relative isolate overflow-hidden bg-[#050505] py-24 sm:py-32 border-t border-white/[0.05]">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_0%,rgba(255,106,0,0.03),transparent)]" />

      <div className="layout-wrap relative z-10">
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-2 block font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-[#FF6A00]/70">
            Core Competencies
          </span>
          <h2 className="text-[2rem] font-medium leading-[1.1] tracking-tight text-white sm:text-[2.75rem]">
            Specialized in <em className="text-[#FF6A00] not-italic">{about.title.toLowerCase()}</em>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {about.expertise.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: easeOut }}
              className="group relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#0C0C0C] p-8 transition-all duration-400 hover:border-[#FF6A00]/30 hover:bg-[#0F0F0F] hover:shadow-[0_16px_40px_-16px_rgba(255,106,0,0.15)] hover:-translate-y-1"
            >
              {/* Background hover effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF6A00]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0F0F0F] text-[#FF6A00] transition-colors group-hover:border-[#FF6A00]/40 group-hover:bg-[#FF6A00]/10">
                  <Target size={20} />
                </div>
                
                <h3 className="mb-3 text-[1.4rem] font-medium text-white transition-colors group-hover:text-[#FF6A00]">
                  {exp.title}
                </h3>
                <p className="mt-auto text-[14px] leading-relaxed text-white/50 transition-colors group-hover:text-white/70">
                  {exp.description || (exp as any).text}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#FF6A00] transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
