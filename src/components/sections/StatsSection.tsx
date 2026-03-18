"use client";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Layers, TestTube2, GitCommit, Calendar } from "lucide-react";
import { HOME_STATS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Layers, TestTube2, GitCommit, Calendar,
};

export function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative py-20 border-y overflow-hidden"
      style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
    >
      {/* Decorative text */}
      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none hidden xl:block"
        style={{ fontSize: "200px", color: "var(--border)", opacity: 0.3, lineHeight: 1 }}
      >
        02
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto container-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
          {HOME_STATS.map((stat, i) => {
            const Icon = iconMap[stat.icon] ?? Layers;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-start p-8 lg:p-10"
                style={{ background: "var(--bg-secondary)" }}
              >
                <Icon size={20} className="mb-4" style={{ color: "var(--accent-primary)" }} />
                <div
                  className="font-display font-bold mb-1"
                  style={{ fontSize: "clamp(40px, 6vw, 64px)", color: "var(--text-primary)", lineHeight: 1 }}
                >
                  {inView ? (
                    <CountUp end={stat.value} duration={2} delay={i * 0.1} />
                  ) : (
                    0
                  )}
                  <span style={{ color: "var(--accent-primary)" }}>{stat.suffix}</span>
                </div>
                <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
