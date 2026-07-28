"use client";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Layers, Rocket, Users, Calendar, Globe, Clock } from "lucide-react";
import { HOME_STATS } from "@/lib/constants";
import { PageShell } from "@/components/layout/PageShell";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Rocket,
  Users,
  Calendar,
  Globe,
  Clock,
};

export function StatsSection() {
  // fallbackInView avoids opacity:0 flash before IntersectionObserver hydrates
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
    >
      <div
        className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 select-none font-display text-[8rem] font-black leading-none opacity-30 xl:block 2xl:text-[12.5rem]"
        style={{ color: "var(--border)" }}
      >
        02
      </div>

      <PageShell compact className="relative z-10 !py-0">
        <div className="grid grid-cols-2 gap-px lg:grid-cols-4" style={{ background: "var(--border)" }}>
          {HOME_STATS.map((stat, i) => {
            const Icon = iconMap[stat.icon] ?? Layers;
            return (
              <motion.div
                key={stat.label}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-start p-4 sm:p-5 md:p-8 lg:p-10"
                style={{ background: "var(--bg-secondary)" }}
              >
                <Icon size={18} className="mb-2 sm:mb-3 md:mb-4 md:size-5" style={{ color: "var(--accent-primary)" }} />
                <div className="font-display mb-1 text-3xl font-bold leading-none text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-6xl">
                  {inView ? (
                    <CountUp end={stat.value} duration={2} delay={i * 0.1} />
                  ) : (
                    <>{stat.value}</>
                  )}
                  <span style={{ color: "var(--accent-primary)" }}>{stat.suffix}</span>
                </div>
                <p className="text-[11px] font-medium sm:text-xs md:text-sm" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </PageShell>
    </section>
  );
}
