"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TRUST_STRIP } from "@/data/trustStrip";

/**
 * Section 1 — Trust / proof strip
 * Pattern: 10Pearls global rail + SoftServe credibility band.
 * Typography-led, continuous with hero black — no marquee, no cards, no fake logos.
 */
export function TrustStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Trust and global delivery"
      className="relative isolate overflow-hidden border-y border-white/[0.08] bg-[#0A0A0A]"
    >
      {/* Atmosphere — soft orange wash like agency stages */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 120% at 12% 50%, rgba(255,106,0,0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 100% at 88% 40%, rgba(255,179,71,0.06) 0%, transparent 50%)",
        }}
      />
      {/* Top brand hairline */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/70 to-transparent"
      />

      <div className="layout-wrap relative z-10 py-3.5 sm:py-4 md:py-5 lg:py-5">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
          }
          className="flex flex-col gap-6 lg:gap-7"
        >
          {/* Row 1 — Availability + regions */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF6A00] sm:text-[11px]">
                {TRUST_STRIP.eyebrow}
              </span>
              <div className="inline-flex items-center gap-2.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6A00] opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6A00] shadow-[0_0_12px_rgba(255,106,0,0.85)]" />
                </span>
                <p className="text-sm font-semibold tracking-wide text-[#FFF7ED] sm:text-[15px]">
                  {TRUST_STRIP.availability}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 lg:items-end">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FFF7ED]/40 sm:text-[11px]">
                {TRUST_STRIP.regionsLabel}
              </span>
              <ul className="flex flex-wrap items-center gap-x-1 gap-y-2 sm:gap-x-0">
                {TRUST_STRIP.regions.map((region, i) => (
                  <li key={region} className="flex items-center">
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="mx-2.5 hidden h-1 w-1 rounded-full bg-[#FF6A00]/55 sm:mx-3 sm:inline-block md:mx-3.5"
                      />
                    )}
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#FFF7ED]/85 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-xs sm:tracking-[0.2em] md:text-[13px]">
                      {region}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div
            aria-hidden
            className="h-px w-full bg-gradient-to-r from-[#FF6A00]/35 via-white/10 to-transparent"
          />

          {/* Row 2 — Capabilities + proof */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <ul className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {TRUST_STRIP.capabilities.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#FF6A00]/25 bg-[#FF6A00]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FFB347] sm:px-3.5 sm:text-[11px]"
                >
                  {item}
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap items-center gap-x-1 gap-y-2">
              {TRUST_STRIP.proof.map((item, i) => (
                <li key={item} className="flex items-center">
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="mx-2 h-3 w-px bg-white/15 sm:mx-3"
                    />
                  )}
                  <span className="text-[11px] font-medium tracking-wide text-[#FFF7ED]/50 sm:text-xs">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
