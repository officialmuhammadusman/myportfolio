"use client";

import { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Activity, ShieldCheck, Zap, TrendingDown, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const IMPACT_METRICS = [
  {
    id: "latency",
    value: "40%",
    label: "Latency Reduction",
    description: "Advanced PostgreSQL indexing, query refactoring, and Redis caching layers.",
    icon: Zap,
  },
  {
    id: "uptime",
    value: "99.9%",
    label: "SLA Uptime",
    description: "High-availability enterprise services without critical production downtime.",
    icon: Activity,
  },
  {
    id: "security",
    value: "100%",
    label: "HIPAA Aligned",
    description: "Strict RBAC, encrypted JWT auth, and secure multi-tenant data isolation.",
    icon: ShieldCheck,
  },
  {
    id: "cost",
    value: "30%",
    label: "Cloud Cost Saved",
    description: "Optimized serverless functions and efficient containerization strategies.",
    icon: TrendingDown,
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function AgencyImpactSection() {
  const reduceMotion = useReducedMotion();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const width = scrollContainerRef.current.clientWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  const goTo = (i: number) => {
    if (!scrollContainerRef.current) return;
    const len = IMPACT_METRICS.length;
    const targetIndex = ((i % len) + len) % len;
    const width = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: targetIndex * width,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] py-16 sm:py-24 lg:py-32 border-b border-white/[0.08]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 35% 40% at 0% 55%, rgba(255,106,0,0.05) 0%, transparent 55%)",
          ].join(", "),
        }}
      />
      <div className="layout-wrap relative z-10">
        
        {/* CENTERED HEADER */}
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <span className="section-eyebrow">
            Proven Impact
          </span>
          <div className="fancy-divider mx-auto" />
          <h2 className="font-display text-[1.65rem] leading-[1.12] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2rem] md:text-[2.35rem] lg:text-[2.65rem]">
            Metrics that drive <br className="hidden sm:block" />
            <span className="text-gradient italic">business outcomes.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[32rem] text-sm leading-[1.65] text-[#FFF7ED]/72 sm:mt-4 sm:text-[0.95rem]">
            We don't just write code; we deliver measurable improvements to latency, uptime, and operational costs.
          </p>
        </motion.header>

        {/* ── DESKTOP: Grid of elevated metric cards ── */}
        <div className="hidden sm:grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {IMPACT_METRICS.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.article
                key={metric.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : 0.1 + index * 0.08,
                  ease: easeOut,
                }}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F0F0F] p-6 lg:p-8",
                  "transition-[border-color,box-shadow,transform] duration-500",
                  "hover:-translate-y-1 hover:border-[#FF6A00]/40 hover:shadow-[0_20px_50px_rgba(255,106,0,0.08)]"
                )}
              >
                {/* Animating Left Border */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 z-20 w-[2px] origin-top scale-y-0 bg-[#FF6A00] transition-transform duration-500 ease-out group-hover:scale-y-100"
                />

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] group-hover:border-[#FF6A00]/30 group-hover:bg-[#FF6A00]/10 transition-colors duration-500 mb-8">
                  <Icon size={20} className="text-[#FFF7ED]/50 group-hover:text-[#FF6A00] transition-colors duration-500" />
                </div>
                
                <h3 className="font-display text-[2.5rem] lg:text-[3rem] leading-none tracking-tight text-[#FFF7ED] mb-3 group-hover:text-[#FFB347] transition-colors duration-500">
                  {metric.value}
                </h3>
                
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#FF6A00]">
                    {metric.label}
                  </span>
                </div>
                
                <p className="mt-auto text-[13px] leading-relaxed text-[#FFF7ED]/55 border-t border-white/[0.08] pt-4">
                  {metric.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* ── MOBILE: Native Horizontal Scroll Carousel ── */}
        <div className="sm:hidden mt-6 relative">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 scrollbar-none" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {IMPACT_METRICS.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.id}
                  className="w-[85vw] shrink-0 snap-center"
                >
                  <article className="mobile-card h-full flex flex-col overflow-hidden bg-[#0F0F0F] rounded-2xl border border-white/[0.08] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF6A00]/30 bg-[#FF6A00]/10 mb-8">
                      <Icon size={20} className="text-[#FF6A00]" />
                    </div>
                    
                    <h3 className="font-display text-[2.75rem] leading-none tracking-tight text-[#FFF7ED] mb-3">
                      {metric.value}
                    </h3>
                    
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#FF6A00]">
                        {metric.label}
                      </span>
                    </div>
                    
                    <p className="mt-auto text-[13px] leading-relaxed text-[#FFF7ED]/60 border-t border-white/[0.08] pt-4">
                      {metric.description}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="mt-4 flex items-center justify-between px-1 pb-4">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous metric"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#FFF7ED]/55 transition-colors hover:border-[#FF6A00]/40 hover:text-[#FF6A00]"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center justify-center gap-2">
              {IMPACT_METRICS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === activeIndex 
                      ? "w-6 bg-[#FF6A00]" 
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next metric"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#FFF7ED]/55 transition-colors hover:border-[#FF6A00]/40 hover:text-[#FF6A00]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
