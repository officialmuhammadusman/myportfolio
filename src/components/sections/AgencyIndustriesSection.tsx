"use client";

import { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Activity, Users, Sparkles, Smartphone, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const INDUSTRIES = [
  {
    id: "healthcare",
    title: "Healthcare & Telemedicine",
    description: "HIPAA-aligned platforms, patient portals, and async medical review systems.",
    icon: Activity,
    cases: "Mejora Tu Dolor",
    link: "/projects/mejora-tu-dolor"
  },
  {
    id: "hrms",
    title: "Enterprise & HRMS",
    description: "Dynamic RBAC permissions, attendance tracking, and hiring pipelines.",
    icon: Users,
    cases: "HRMS Portal",
    link: "/projects/hrms-portal"
  },
  {
    id: "saas",
    title: "SaaS & Startups",
    description: "Rapid MVP launches, multi-tenant dashboards, and subscription billing.",
    icon: Sparkles,
    cases: "Cliender",
    link: "/projects/cliender"
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description: "Cross-platform mobile applications paired with robust web dashboards.",
    icon: Smartphone,
    cases: "Padel Connect",
    link: "/projects/padel-connect"
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function AgencyIndustriesSection() {
  const reduceMotion = useReducedMotion();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const width = scrollContainerRef.current.clientWidth;
    // Calculate the active index based on scroll position (adding half width for better snapping detection)
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  const goTo = (i: number) => {
    if (!scrollContainerRef.current) return;
    const len = INDUSTRIES.length;
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
            "radial-gradient(ellipse 70% 42% at 50% 0%, rgba(255,106,0,0.12) 0%, transparent 55%)",
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
            Domain Expertise
          </span>
          <div className="fancy-divider mx-auto" />
          <h2 className="font-display text-[1.65rem] leading-[1.12] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2rem] md:text-[2.35rem] lg:text-[2.65rem]">
            Engineering tailored to <br className="hidden sm:block" /><span className="text-gradient italic">industry standards.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[32rem] text-sm leading-[1.65] text-[#FFF7ED]/72 sm:mt-4 sm:text-[0.95rem]">
            From HIPAA-aligned portals to massive multi-tenant SaaS.
          </p>
        </motion.header>

        {/* ── DESKTOP: Grid of beautiful glass cards ── */}
        <div className="hidden sm:grid grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.article
                key={industry.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : 0.1 + index * 0.08,
                  ease: easeOut,
                }}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F0F0F]",
                  "transition-[border-color,box-shadow,transform] duration-500",
                  "hover:-translate-y-1 hover:border-[#FF6A00]/40 hover:shadow-[0_20px_50px_rgba(255,106,0,0.08)]"
                )}
              >
                {/* Visual Top Half (Rich Gradient) */}
                <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#0A0A0A]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,106,0,0.15),transparent_70%)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent" />
                  
                  {/* Glowing Icon */}
                  <div className="absolute inset-0 flex items-center justify-center translate-y-2 group-hover:scale-110 transition-transform duration-700 ease-out">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF6A00]/30 bg-[#FF6A00]/10 shadow-[0_0_30px_rgba(255,106,0,0.2)] backdrop-blur-md">
                      <Icon size={24} className="text-[#FF6A00]" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6 relative z-10 -mt-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-[#FF6A00]/85">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-[1.3rem] leading-[1.15] tracking-[-0.02em] text-[#FFF7ED] sm:text-[1.45rem]">
                    {industry.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-relaxed text-[#FFF7ED]/55 sm:text-[14px]">
                    {industry.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] uppercase tracking-[0.14em] text-[#FFF7ED]/45 font-bold">Featured Case</span>
                      <span className="rounded-full border border-[#FF6A00]/24 bg-[#FF6A00]/8 px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.06em] text-[#FFB347]">
                        {industry.cases}
                      </span>
                    </div>
                    
                    <Link
                      href={industry.link}
                      className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FF6A00] transition-colors hover:text-[#FFB347]"
                    >
                      View Work
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
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
            {INDUSTRIES.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.id}
                  className="w-[85vw] shrink-0 snap-center"
                >
                  <article className="mobile-card h-full flex flex-col overflow-hidden bg-[#0F0F0F] rounded-2xl border border-white/[0.08]">
                    {/* Visual Top Half */}
                    <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#0A0A0A]">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,106,0,0.15),transparent_70%)]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent" />
                      
                      <div className="absolute inset-0 flex items-center justify-center translate-y-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF6A00]/30 bg-[#FF6A00]/10 shadow-[0_0_20px_rgba(255,106,0,0.2)]">
                          <Icon size={20} className="text-[#FF6A00]" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 relative z-10 -mt-2 flex-grow flex flex-col">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-[#FF6A00]/80">
                          0{i + 1}
                        </span>
                      </div>

                      <h3 className="font-display text-[1.3rem] leading-[1.1] tracking-[-0.02em] text-[#FFF7ED]">
                        {industry.title}
                      </h3>

                      <p className="mt-1.5 text-[13px] leading-relaxed text-[#FFF7ED]/60 mb-4">
                        {industry.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-4">
                        <div className="flex flex-col gap-1">
                          <span className="text-[9px] uppercase tracking-[0.14em] text-[#FFF7ED]/45 font-bold">Featured Case</span>
                          <span className="text-[11px] font-semibold text-[#FFB347]">
                            {industry.cases}
                          </span>
                        </div>
                        
                        <Link
                          href={industry.link}
                          className="flex items-center justify-center h-8 w-8 rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/12 text-[#FFB347]"
                        >
                          <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
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
              aria-label="Previous industry"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#FFF7ED]/55 transition-colors hover:border-[#FF6A00]/40 hover:text-[#FF6A00]"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center justify-center gap-2">
              {INDUSTRIES.map((_, i) => (
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
              aria-label="Next industry"
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
