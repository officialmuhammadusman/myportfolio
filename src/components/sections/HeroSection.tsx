"use client";

import { useEffect, useEffectEvent, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  HERO_AUTOPLAY_MS,
  HERO_HEADER_OFFSET,
  HERO_OBJECT_POSITION,
  HERO_SERVICE_PILLS,
  HERO_SLIDES,
  HERO_STATS,
  HERO_TECH_PROOF,
  HERO_TRUST,
  HERO_VIEWPORT_MIN_H,
} from "@/data/hero";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { brandIcons } from "@/lib/brandAssets";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;
const writeEase = [0.4, 0.0, 0.2, 1] as const;
const CROSSFADE_S = 1.1;

type BoardWriteLineProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  reduceMotion: boolean | null;
  className?: string;
  showTip?: boolean;
};

function BoardWriteLine({
  children,
  delay = 0,
  duration = 0.9,
  reduceMotion,
  className,
  showTip = true,
}: BoardWriteLineProps) {
  if (reduceMotion) {
    return <span className={`block ${className ?? ""}`}>{children}</span>;
  }

  return (
    <span className={`relative block overflow-hidden ${className ?? ""}`}>
      <motion.span
        className="block will-change-[clip-path,transform]"
        initial={{ clipPath: "inset(0 100% 0 0)", x: -22 }}
        animate={{ clipPath: "inset(0 -2% 0 0)", x: 0 }}
        transition={{ duration, delay, ease: writeEase }}
      >
        {children}
      </motion.span>
      {showTip ? (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute top-[18%] bottom-[18%] w-[2px] rounded-full bg-[#FF6A00]"
          style={{ boxShadow: "0 0 10px rgba(255,106,0,0.9)" }}
          initial={{ left: "0%", opacity: 0 }}
          animate={{
            left: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration,
            delay,
            ease: writeEase,
            times: [0, 0.06, 0.88, 1],
          }}
        />
      ) : null}
    </span>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [entered, setEntered] = useState(false);

  const whatsappUrl =
    SOCIAL_LINKS.find((s) => s.icon === "whatsapp")?.url ?? "/contact";

  const goTo = useEffectEvent((next: number) => {
    setIndex((next + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgressKey((k) => k + 1);
  });

  useEffect(() => {
    const t = window.setTimeout(() => setEntered(true), reduceMotion ? 0 : 50);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(() => goTo(index + 1), HERO_AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [index, paused, reduceMotion]);

  const active = HERO_SLIDES[index];

  return (
    <section
      className={`relative isolate flex w-full flex-col overflow-hidden bg-[#0A0A0A] ${HERO_VIEWPORT_MIN_H}`}
      aria-roledescription="carousel"
      aria-label="Hero"
    >
      {/* Background slides */}
      <div className="absolute inset-0 z-0" aria-live="polite">
        {HERO_SLIDES.map((slide, i) => {
          const on = i === index;
          return (
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: on ? 1 : 0 }}
              transition={{
                opacity: {
                  duration: reduceMotion ? 0 : CROSSFADE_S,
                  ease: writeEase,
                },
              }}
              style={{ zIndex: on ? 2 : 1 }}
              aria-hidden={!on}
            >
              <motion.div
                className="absolute inset-0"
                initial={false}
                animate={
                  reduceMotion
                    ? { scale: 1 }
                    : on
                      ? { scale: [1.05, 1] }
                      : { scale: 1.03 }
                }
                transition={
                  on && !reduceMotion
                    ? {
                        scale: {
                          duration: HERO_AUTOPLAY_MS / 1000,
                          ease: "linear",
                          times: [0, 1],
                        },
                      }
                    : {
                        scale: { duration: CROSSFADE_S, ease: writeEase },
                      }
                }
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i <= 2}
                  sizes="100vw"
                  quality={92}
                  className="object-cover"
                  style={{ objectPosition: HERO_OBJECT_POSITION }}
                />
              </motion.div>
            </motion.div>
          );
        })}

        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background: `
              linear-gradient(105deg,
                rgba(10,10,10,0.97) 0%,
                rgba(10,10,10,0.9) 34%,
                rgba(10,10,10,0.55) 58%,
                rgba(10,10,10,0.25) 78%,
                rgba(10,10,10,0.4) 100%
              ),
              linear-gradient(180deg,
                rgba(10,10,10,0.55) 0%,
                transparent 16%,
                transparent 52%,
                rgba(10,10,10,0.92) 100%
              )
            `,
          }}
        />
        <div
          className="hero-grid-overlay pointer-events-none absolute inset-0 z-[3] opacity-[0.35]"
          aria-hidden
        />
      </div>

      <div
        className={`layout-wrap relative z-10 flex w-full flex-1 flex-col ${HERO_HEADER_OFFSET} pb-6 sm:pb-8 md:pb-10 lg:pb-12`}
      >
        <div className="flex flex-1 flex-col justify-center py-6 sm:py-8 lg:py-10">
          <div className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
              <motion.div
                initial={false}
                animate={entered ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.55, ease: easeOut }}
                className="mb-4 flex flex-wrap items-center gap-2 sm:mb-5 sm:gap-3"
              >
                <Image
                  src={brandIcons.ui.muMarkAnimated}
                  alt=""
                  width={28}
                  height={28}
                  className="mu-mark-animated h-7 w-7"
                />
                <span className="text-sm font-semibold tracking-wide text-[#FFF7ED]/90 lg:text-base">
                  {PERSONAL_INFO.name}
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-[#FF6A00] sm:inline-block" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FFB347]/90 lg:text-sm">
                Full-Stack · AI Engineer
              </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FFB347] sm:text-xs">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6A00] opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
                  </span>
                  Available
                </span>
              </motion.div>

              <div className="relative min-h-[9.5rem] sm:min-h-[11rem] md:min-h-[12.5rem] lg:min-h-[13.5rem]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active.id}
                    initial={reduceMotion ? false : { opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={
                      reduceMotion
                        ? undefined
                        : { opacity: 0, transition: { duration: 0.22 } }
                    }
                  >
                    <div className="mb-3 flex items-center gap-3 sm:mb-4">
                      <span className="h-px w-6 bg-[#FF6A00] sm:w-8 md:w-10" />
                      <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF6A00] lg:text-sm">
                        {active.eyebrow}
                      </span>
                    </div>

                    <h1 className="font-display text-[2.125rem] leading-[1.05] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.5rem] 2xl:text-[5rem]">
                      <BoardWriteLine reduceMotion={reduceMotion} duration={0.9}>
                        {active.title}
                      </BoardWriteLine>
                      <BoardWriteLine
                        reduceMotion={reduceMotion}
                        duration={0.9}
                        className="mt-1"
                        showTip={false}
                      >
                        <span className="text-gradient italic">{active.titleAccent}</span>
                      </BoardWriteLine>
                    </h1>

                    <BoardWriteLine
                      reduceMotion={reduceMotion}
                      delay={0.12}
                      duration={1.05}
                      showTip={false}
                      className="mt-4 max-w-xl sm:mt-5 lg:max-w-2xl"
                    >
                      <p className="text-sm leading-relaxed text-[#FFF7ED]/78 sm:text-base md:text-lg lg:text-[1.125rem]">
                        {active.support}
                      </p>
                    </BoardWriteLine>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* CTAs */}
              <motion.div
                initial={false}
                animate={entered ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
                className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FF6A00] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#E85D00] hover:shadow-[0_12px_40px_rgba(255,106,0,0.42)] sm:px-7 sm:py-4 sm:text-sm"
                >
                  Start a Project
                  <BrandIcon base={brandIcons.cta.startProject} tone="black" size={16} />
                </Link>
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/[0.06] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-[#FFF7ED] backdrop-blur-md transition-all duration-300 hover:border-[#FF6A00]/55 hover:bg-white/[0.1] sm:px-7 sm:py-4 sm:text-sm"
                >
                  View Work
                  <BrandIcon base={brandIcons.work.featured} tone="orange" size={16} />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-[#FF6A00]/35 bg-[#FF6A00]/10 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-[#FFB347] transition-all duration-300 hover:bg-[#FF6A00]/18 sm:px-7 sm:py-4 sm:text-sm"
                >
                  WhatsApp
                  <BrandIcon base={brandIcons.cta.whatsapp} tone="orange" size={16} />
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={false}
                animate={entered ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ duration: 0.65, delay: 0.28, ease: easeOut }}
                className="mt-6 grid grid-cols-2 gap-3 sm:mt-7 sm:grid-cols-4 sm:gap-4"
              >
                {HERO_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 backdrop-blur-sm sm:px-4 sm:py-3.5"
                  >
                    <p className="font-display text-xl font-semibold text-[#FFF7ED] sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-[#FFF7ED]/50 sm:text-[11px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Service pills */}
              <motion.div
                initial={false}
                animate={entered ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ duration: 0.65, delay: 0.32, ease: easeOut }}
                className="mt-5 flex flex-wrap gap-2 sm:mt-6"
              >
                {HERO_SERVICE_PILLS.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-[#FF6A00]/25 bg-[#FF6A00]/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#FFB347]/90 sm:text-[11px]"
                  >
                    {pill}
                  </span>
                ))}
              </motion.div>

              {/* Tech proof + trust */}
              <motion.div
                initial={false}
                animate={entered ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.65, delay: 0.38 }}
                className="mt-5 space-y-3 sm:mt-6"
              >
                <div className="flex flex-wrap gap-2">
                  {HERO_TECH_PROOF.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#FFF7ED]/55 sm:text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="flex flex-wrap items-center gap-x-1 gap-y-2">
                  {HERO_TRUST.map((item, i) => (
                    <li key={item} className="flex items-center gap-2">
                      {i > 0 && (
                        <span className="mx-1 hidden h-1 w-1 rounded-full bg-[#FF6A00]/70 sm:inline-block" />
                      )}
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FFF7ED]/48 sm:text-xs">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
          </div>
        </div>

        {/* Slide navigator with labels */}
        <motion.div
          initial={false}
          animate={entered ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.65, delay: 0.32, ease: easeOut }}
          className="relative z-20 mt-4 w-full sm:mt-5"
          role="tablist"
          aria-label="Hero scenes"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
        >
          <div className="mb-2 hidden items-center justify-between gap-4 sm:flex">
            {HERO_SLIDES.map((slide, i) => {
              const on = i === index;
              return (
                <button
                  key={`label-${slide.id}`}
                  type="button"
                  onClick={() => goTo(i)}
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-[0.18em] transition-colors md:text-[11px]",
                    on ? "text-[#FF6A00]" : "text-[#FFF7ED]/35 hover:text-[#FFF7ED]/60"
                  )}
                >
                  {slide.label}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, i) => {
              const on = i === index;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-label={slide.label}
                  onClick={() => goTo(i)}
                  className="group relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/20 transition-colors hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]"
                >
                  {on && !reduceMotion ? (
                    <span
                      key={progressKey}
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FFB347]"
                      style={{
                        width: "100%",
                        transformOrigin: "left center",
                        transform: "scaleX(0)",
                        animation: `mu-hero-progress ${HERO_AUTOPLAY_MS}ms linear forwards`,
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    />
                  ) : (
                    <span
                      className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                        on ? "bg-[#FF6A00] opacity-100" : "opacity-0"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
