"use client";

import { motion } from "framer-motion";
import { type AboutItem } from "@/data/aboutData";
import { Quote } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function AboutPhilosophySection({ about }: { about: AboutItem }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] pt-24 pb-24 sm:pt-32 sm:pb-32">
      <div className="layout-wrap relative z-10 max-w-5xl mx-auto">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Philosophy Statement */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="md:w-1/2 relative"
          >
            <Quote className="absolute -top-6 -left-8 text-white/5 h-24 w-24 -z-10" />
            <h2 className="font-display text-[2rem] leading-[1.2] tracking-tight text-white sm:text-[2.5rem] italic">
              "{about.philosophy}"
            </h2>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="md:w-1/2 space-y-6"
          >
            {about.philosophyDetails.map((paragraph, i) => (
              <p key={i} className="text-[16px] leading-relaxed text-white/70">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
