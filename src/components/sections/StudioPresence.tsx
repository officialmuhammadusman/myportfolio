"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HERO_STUDIO } from "@/data/hero";

/**
 * Equal-frame studio strip — solves mixed photo shapes by locking every
 * image into the same aspect-ratio crop (agency “presence” band).
 */
export function StudioPresence() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden border-y border-white/5 bg-[#0A0A0A] py-16 sm:py-20 md:py-24"
      aria-label="Studio presence"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,106,0,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 md:px-10 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FF6A00]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#FF6A00]">
                The practice
              </span>
            </div>
            <h2
              className="font-display text-[#FFF7ED]"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              How the work gets done —
              <span className="italic text-[#FFB347]"> from plan to delivery.</span>
            </h2>
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#FFF7ED]/70 transition-colors hover:text-[#FF6A00]"
          >
            About the agency
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Equal frames — object-cover inside fixed aspect boxes */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
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
                <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#FF6A00] sm:text-[11px]">
                    {String(i + 1).padStart(2, "0")} · {shot.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#FFF7ED] sm:text-[15px]">
                    {shot.caption}
                  </p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
