"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";

const PILLARS = [
  {
    title: "Weekly Demos",
    description: "See progress every week. No black boxes, just working software.",
  },
  {
    title: "Direct Communication",
    description: "You talk directly to the engineer building your product.",
  },
  {
    title: "Production-First",
    description: "Code is built to be deployed, scaled, and maintained from day one.",
  },
  {
    title: "Fixed-Scope Estimates",
    description: "Clear expectations on deliverables and timelines before we start.",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function GuaranteesSection() {
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <section
      ref={ref}
      aria-label="Service Guarantees"
      className="relative isolate overflow-hidden bg-[#0A0A0A] py-16 sm:py-24"
    >
      <div className="layout-wrap relative z-10">
        <motion.div
          initial={false}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: easeOut }}
          style={{ opacity: 1 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <span className="section-eyebrow">The Guarantee</span>
          <div className="fancy-divider mx-auto" />
          <h2 className="text-[2rem] leading-tight tracking-[-0.03em] text-[#FFF7ED] sm:text-[2.5rem]">
            How we <span className="text-gradient italic">work together</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={false}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : i * 0.1,
                ease: easeOut,
              }}
              style={{ opacity: 1 }}
              className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-[#111111] p-6 sm:p-8 transition-colors hover:border-[#FF6A00]/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6A00]/10 text-[#FF6A00]">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h3 className="font-body text-lg font-medium text-[#FFF7ED]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#FFF7ED]/70">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
