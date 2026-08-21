"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { type AboutItem } from "@/data/aboutData";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function AboutPhilosophySection({ about }: { about: AboutItem }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  if (!about.philosophy) return null;

  return (
    <section className="relative isolate overflow-hidden bg-[#080808] py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 w-full max-w-4xl -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="layout-wrap relative z-10 max-w-4xl text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#FF6A00]/80">
            Core Philosophy
          </span>

          <h2 className="mt-8 text-[2rem] font-medium leading-[1.2] text-white sm:text-[2.5rem] md:text-[3rem]">
            &quot;{about.philosophy}&quot;
          </h2>

          {about.philosophyDetails && about.philosophyDetails.length > 0 && (
            <div className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 text-left">
              {about.philosophyDetails.map((detail, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + (i * 0.1), ease: easeOut }}
                  className="rounded-2xl border border-white/[0.05] bg-[#0C0C0C] p-6 text-[14px] leading-relaxed text-white/50"
                >
                  {detail}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
