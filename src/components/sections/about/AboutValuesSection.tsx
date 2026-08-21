"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { type AboutItem } from "@/data/aboutData";
import { Heart, Compass, Shield, Activity } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const icons = [Heart, Compass, Shield, Activity];

export function AboutValuesSection({ about }: { about: AboutItem }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  if (!about.values?.length) return null;

  return (
    <section className="relative isolate overflow-hidden bg-[#080808] py-24 sm:py-32 border-t border-white/[0.05]">
      <div className="layout-wrap relative z-10">
        
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span className="mb-2 block font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-[#FF6A00]/70">
              Guiding Principles
            </span>
            <h2 className="text-[2rem] font-medium leading-[1.1] tracking-tight text-white sm:text-[2.5rem]">
              Core <em className="text-[#FF6A00] not-italic">Values.</em>
            </h2>
          </motion.div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.values.map((val, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: easeOut }}
                className="group relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#0C0C0C] p-8 transition-all duration-400 hover:border-white/15"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] text-white/50 group-hover:text-white transition-colors">
                  <Icon size={18} />
                </div>
                
                <h3 className="mb-3 text-[1.4rem] font-medium text-white">
                  {val.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-white/50">
                  {val.text}
                </p>
                
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
