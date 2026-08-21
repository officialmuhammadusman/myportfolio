"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion, useReducedMotion } from "framer-motion";

const METRICS = [
  { value: 2, suffix: "+", label: "Years of Delivery" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 5, suffix: "", label: "Global Regions" },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function TrustMetricsStrip() {
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <section
      ref={ref}
      aria-label="Trust metrics"
      className="relative isolate border-y border-white/[0.08] bg-[#0A0A0A] py-8 sm:py-10"
    >
      <div className="layout-wrap relative z-10">
        <div className="grid grid-cols-2 gap-y-8 divide-x divide-white/[0.08] sm:grid-cols-4 sm:gap-y-0">
          {METRICS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={false}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : i * 0.1,
                ease: easeOut,
              }}
              style={{ opacity: 1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-[2.5rem] leading-none tracking-[-0.04em] text-[#FFF7ED] sm:text-[3rem]">
                {inView && !reduceMotion ? (
                  <CountUp end={stat.value} duration={2} delay={0.2 + i * 0.1} />
                ) : (
                  stat.value
                )}
                <span className="text-[#FF6A00]">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#FFF7ED]/50 sm:text-[12px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
