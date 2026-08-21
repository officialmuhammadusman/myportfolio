"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/experience";
import type { Testimonial } from "@/types";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (i: number) => {
    const len = testimonials.length;
    setActiveIndex(((i % len) + len) % len);
  };

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="relative isolate overflow-hidden bg-[#0A0A0A] pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 70% 42% at 50% 0%, rgba(255,106,0,0.10) 0%, transparent 55%)",
            "radial-gradient(ellipse 45% 50% at 10% 80%, rgba(255,106,0,0.05) 0%, transparent 55%)",
          ].join(", "),
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/45 to-transparent"
      />

      <div className="layout-wrap relative z-10">
        {/* Header */}
        <motion.header
          initial={false}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: easeOut }}
          style={{ opacity: 1 }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12"
        >
          <span className="section-eyebrow">Testimonials</span>
          <div className="fancy-divider mx-auto" />
          <h2 className="text-[1.5rem] font-medium leading-[1.12] tracking-[-0.03em] text-[#FFF7ED] sm:text-[1.85rem] md:text-[2.2rem] lg:text-[2.5rem]">
            What clients{" "}
            <span className="text-gradient italic">are saying</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[32rem] text-sm leading-[1.65] text-[#FFF7ED]/72 sm:mt-4 sm:text-[0.95rem]">
            Feedback from clients and collaborators on delivery, communication, and results.
          </p>
        </motion.header>

        {/* ── MOBILE: Snap carousel ── */}
        <div className="sm:hidden">
          {/* Snap track — overflow hidden wrapper so page doesn't scroll horizontally */}
          <div className="relative -mx-4 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 0}px))` }}
            >
              {testimonials.map((t: Testimonial, i: number) => (
                <div key={t.id} className="w-full shrink-0 px-4" aria-hidden={i !== activeIndex}>
                  <div className="mobile-card relative flex flex-col p-5">
                    {/* Quote icon */}
                    <Quote size={22} className="mb-3 opacity-25" style={{ color: "#FF6A00" }} />

                    {/* Content */}
                    <p className="mb-4 flex-1 text-[14px] leading-relaxed text-[#FFF7ED]/72">
                      "{t.content}"
                    </p>

                    {/* Stars */}
                    <div className="mb-4 flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={13} fill="#FFB347" style={{ color: "#FFB347" }} />
                      ))}
                    </div>

                    {/* Author */}
                    <div
                      className="flex items-center gap-3 border-t pt-4"
                      style={{ borderColor: "rgba(255,255,255,0.07)" }}
                    >
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium"
                        style={{ background: "rgba(255,106,0,0.15)", color: "#FF6A00" }}
                      >
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-[13px] font-medium text-[#FFF7ED]">{t.name}</p>
                        <p className="text-[11px] text-[#FFF7ED]/45">{t.role}, {t.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation row */}
          <div className="mt-5 flex items-center justify-between px-1">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous testimonial"
              className="touch-target rounded-full border border-white/10 bg-white/[0.03] text-[#FFF7ED]/55 transition-colors hover:border-[#FF6A00]/40 hover:text-[#FF6A00]"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dot indicators */}
            <div className="dot-indicators">
              {testimonials.map((_: Testimonial, i: number) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`dot-indicator ${i === activeIndex ? "dot-indicator-active" : ""}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next testimonial"
              className="touch-target rounded-full border border-white/10 bg-white/[0.03] text-[#FFF7ED]/55 transition-colors hover:border-[#FF6A00]/40 hover:text-[#FF6A00]"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Counter */}
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[#FFF7ED]/30">
            {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </p>
        </div>

        {/* ── DESKTOP/TABLET: Standard grid ── */}
        <div className="hidden gap-4 sm:grid sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {testimonials.map((t: Testimonial, i: number) => (
            <motion.div
              key={t.id}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : i * 0.08,
                ease: easeOut,
              }}
              className={[
                "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F0F0F]",
                "p-5 sm:p-6",
                "transition-[border-color,box-shadow] duration-500",
                "hover:border-[#FF6A00]/30 hover:shadow-[0_12px_40px_rgba(255,106,0,0.07)]",
              ].join(" ")}
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-[#FF6A00] transition-transform duration-500 ease-out group-hover:scale-y-100"
              />

              <Quote
                size={22}
                className="mb-3 opacity-25 md:size-6"
                style={{ color: "#FF6A00" }}
              />

              <p className="mb-4 flex-1 text-[13px] leading-relaxed text-[#FFF7ED]/65 sm:text-sm">
                "{t.content}"
              </p>

              <div className="mb-3 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} fill="#FFB347" style={{ color: "#FFB347" }} />
                ))}
              </div>

              <div
                className="flex items-center gap-3 border-t pt-4"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-medium sm:h-10 sm:w-10 sm:text-sm"
                  style={{ background: "rgba(255,106,0,0.12)", color: "#FF6A00" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-[#FFF7ED]">{t.name}</p>
                  <p className="text-[11px] text-[#FFF7ED]/45">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
