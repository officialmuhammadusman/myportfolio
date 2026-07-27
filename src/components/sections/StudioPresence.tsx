"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HERO_STUDIO } from "@/data/hero";
import { PageShell } from "@/components/layout/PageShell";

/**
 * Equal-frame studio strip — solves mixed photo shapes by locking every
 * image into the same aspect-ratio crop (agency “presence” band).
 */
export function StudioPresence() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden border-y border-white/5 bg-[#0A0A0A] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28"
      aria-label="Studio presence"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,106,0,0.12) 0%, transparent 60%)",
        }}
      />

      <PageShell compact className="relative !py-0">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:mb-12 md:flex-row md:items-end md:justify-between lg:mb-14">
          <div className="max-w-xl lg:max-w-2xl">
            <div className="mb-3 flex items-center gap-3 sm:mb-4">
              <span className="h-px w-6 bg-[#FF6A00] sm:w-8" />
              <span className="section-eyebrow text-[#FF6A00]">The practice</span>
            </div>
            <h2 className="font-display text-3xl leading-[1.1] tracking-[-0.02em] text-[#FFF7ED] sm:text-4xl md:text-5xl lg:text-6xl">
              How the work gets done —
              <span className="italic text-[#FFB347]"> from plan to delivery.</span>
            </h2>
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#FFF7ED]/70 transition-colors hover:text-[#FF6A00] sm:text-sm"
          >
            About the agency
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {HERO_STUDIO.map((shot, i) => (
            <motion.figure
              key={shot.id}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: reduceMotion ? 0 : i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#141414]">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ objectPosition: shot.objectPosition }}
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 45%, rgba(10,10,10,0.85) 100%)",
                  }}
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3 md:p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#FF6A00] sm:text-[10px] md:text-[11px]">
                    {String(i + 1).padStart(2, "0")} · {shot.label}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-[#FFF7ED] sm:mt-1 sm:text-sm md:text-[15px]">
                    {shot.caption}
                  </p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
