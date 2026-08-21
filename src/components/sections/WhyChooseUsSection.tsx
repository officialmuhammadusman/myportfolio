"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { WHY_CHOOSE_US_COPY, DIFFERENTIATORS } from "@/data/whyChooseUs";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function WhyChooseUsSection() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(DIFFERENTIATORS[0].id);
  const activeItem = DIFFERENTIATORS.find(item => item.id === activeId) || DIFFERENTIATORS[0];

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
    const len = DIFFERENTIATORS.length;
    const targetIndex = ((i % len) + len) % len;
    const width = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: targetIndex * width,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] py-16 sm:py-24 lg:py-32 border-y border-white/[0.08]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,106,0,0.13) 0%, transparent 58%)",
          ].join(", "),
        }}
      />
      <div className="layout-wrap relative z-10">
        
        {/* CENTERED HEADER */}
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="section-eyebrow">
            {WHY_CHOOSE_US_COPY.eyebrow}
          </span>
          <div className="fancy-divider mx-auto" />
          <h2 className="text-[1.5rem] font-medium leading-[1.12] tracking-[-0.03em] text-[#FFF7ED] sm:text-[1.85rem] md:text-[2.2rem] lg:text-[2.5rem]">
            {WHY_CHOOSE_US_COPY.title}{" "}
            <span className="text-gradient italic">{WHY_CHOOSE_US_COPY.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[32rem] text-sm leading-[1.65] text-[#FFF7ED]/72 sm:mt-4 sm:text-[0.95rem]">
            {WHY_CHOOSE_US_COPY.support}
          </p>
        </header>

        {/* ── DESKTOP: Split Pane Layout (Matching Services Section) ── */}
        <div className="hidden sm:grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-8 xl:gap-10">
          <div className="min-w-0 overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0F0F0F]">
            <div className="border-b border-white/[0.08] px-4 py-4 sm:px-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#FF6A00]">
                Differentiators
              </p>
            </div>

            <div className="divide-y divide-white/[0.08]">
              {DIFFERENTIATORS.map((item, index) => {
                const isActive = activeId === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.45,
                      delay: reduceMotion ? 0 : index * 0.04,
                      ease: easeOut,
                    }}
                    onMouseEnter={() => setActiveId(item.id)}
                    className={cn(
                      "group relative block w-full px-4 py-5 text-left transition-colors duration-300 sm:px-5 sm:py-6 cursor-pointer",
                      isActive ? "bg-white/[0.04]" : "bg-transparent hover:bg-white/[0.02]"
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-y-0 left-0 w-[2px] origin-top bg-[#FF6A00] transition-transform duration-500",
                        isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                      )}
                    />

                    <div className="flex items-start gap-3 sm:gap-4">
                      <span
                        className={cn(
                          "mt-1 font-mono text-[11px] font-medium tracking-[0.14em] sm:text-xs",
                          isActive ? "text-[#FF6A00]" : "text-[#FFF7ED]/30"
                        )}
                      >
                        {item.number}
                      </span>

                      <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <h3
                              className={cn(
                                "text-[1.1rem] font-medium leading-[1.08] tracking-[-0.025em] transition-all duration-300 sm:text-[1.3rem]",
                                isActive ? "text-[#FFF7ED] lg:translate-x-0.5" : "text-[#FFF7ED]/88"
                              )}
                            >
                              {item.title}
                            </h3>
                          </div>
                          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-[#FFF7ED]/58 sm:text-[15px]">
                            {item.headline}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Desktop right aside panel */}
          <aside className="relative hidden lg:flex lg:items-center lg:self-center">
            <div className="w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0A0A0A]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,106,0,0.18),transparent_55%)]" />

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeItem.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: easeOut }}
                    className="absolute inset-0 p-5 sm:p-6 xl:p-8 flex flex-col"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FF6A00]/35 bg-[#0A0A0A]/70 backdrop-blur-md">
                      <span className="font-mono text-2xl font-medium text-[#FF6A00]">
                        {activeItem.number}
                      </span>
                    </div>

                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#FFF7ED]/55 mb-2">
                      {activeItem.title}
                    </p>
                    <h3 className="text-[1.5rem] font-medium leading-[1.06] tracking-[-0.03em] text-[#FFF7ED] sm:text-[1.8rem]">
                      {activeItem.headline}
                    </h3>
                    
                    <p className="mt-4 text-[15px] leading-relaxed text-[#FFF7ED]/76 border-t border-white/[0.08] pt-4 flex-grow">
                      {activeItem.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="rounded-full border border-[#FF6A00]/24 bg-[#0A0A0A]/45 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#FFB347]">
                        Direct Communication
                      </span>
                      <span className="rounded-full border border-[#FF6A00]/24 bg-[#0A0A0A]/45 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#FFB347]">
                        No Bureaucracy
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </aside>
        </div>

        {/* ── MOBILE: Javascript-driven Carousel ── */}
        <div className="sm:hidden mt-6 relative">
          <div className="relative overflow-hidden -mx-4">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(calc(-${activeIndex * 100}%))` }}
            >
              {DIFFERENTIATORS.map((item, i) => (
                <div
                  key={item.id}
                  className="w-full shrink-0 px-4"
                  aria-hidden={i !== activeIndex}
                >
                  <article className="mobile-card h-full flex flex-col overflow-hidden bg-[#0F0F0F] rounded-2xl border border-white/[0.08] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF6A00]/30 bg-[#FF6A00]/10 mb-8">
                      <span className="font-mono text-lg font-medium text-[#FF6A00]">
                        {item.number}
                      </span>
                    </div>
                    
                    <h3 className="text-[1.3rem] font-medium leading-none tracking-tight text-[#FFF7ED] mb-3">
                      {item.title}
                    </h3>
                    
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#FF6A00]">
                        {item.headline}
                      </span>
                    </div>
                    
                    <p className="mt-auto text-[13px] leading-relaxed text-[#FFF7ED]/60 border-t border-white/[0.08] pt-4">
                      {item.description}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-4 flex items-center justify-between px-1 pb-4">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous point"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#FFF7ED]/55 transition-colors hover:border-[#FF6A00]/40 hover:text-[#FF6A00]"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center justify-center gap-2">
              {DIFFERENTIATORS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to point ${i + 1}`}
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
              aria-label="Next point"
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
