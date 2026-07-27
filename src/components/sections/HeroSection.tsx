"use client";

import { useEffect, useEffectEvent, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  HERO_AUTOPLAY_MS,
  HERO_OBJECT_POSITION,
  HERO_SLIDES,
  HERO_TRUST,
  HERO_VIEWPORT_MIN_H,
} from "@/data/hero";
import { PERSONAL_INFO } from "@/lib/constants";

const easeOut = [0.22, 1, 0.36, 1] as const;
/** Steady left→right stroke — reads like chalk writing across a board */
const writeEase = [0.4, 0.0, 0.2, 1] as const;
/** Keep image + text on the same reveal window so nothing blinks ahead */
const CROSSFADE_S = 1.1;

type BoardWriteLineProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  reduceMotion: boolean | null;
  className?: string;
  showTip?: boolean;
};

/**
 * Board-write reveal: text draws left → right via clip-path,
 * with an optional orange chalk tip traveling along the stroke.
 */
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

/**
 * Agency hero — main title changes with each slide/image.
 * Brand name stays as a compact signal, not the giant repeating headline.
 */
export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [entered, setEntered] = useState(false);

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
      className={`relative isolate w-full overflow-hidden bg-[#0A0A0A] ${HERO_VIEWPORT_MIN_H}`}
      aria-roledescription="carousel"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0" aria-live="polite">
        {/*
          Stacked crossfade — every slide stays mounted.
          Avoids AnimatePresence remount blink when the next JPG isn't ready.
        */}
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
                        scale: {
                          duration: CROSSFADE_S,
                          ease: writeEase,
                        },
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
                rgba(10,10,10,0.96) 0%,
                rgba(10,10,10,0.88) 28%,
                rgba(10,10,10,0.45) 52%,
                rgba(10,10,10,0.2) 72%,
                rgba(10,10,10,0.35) 100%
              ),
              linear-gradient(180deg,
                rgba(10,10,10,0.5) 0%,
                transparent 18%,
                transparent 55%,
                rgba(10,10,10,0.9) 100%
              )
            `,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-[3] opacity-50 mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse 40% 48% at 78% 45%, rgba(255,106,0,0.28) 0%, transparent 68%)",
          }}
        />
      </div>

      <div
        className={`relative z-10 mx-auto flex w-full max-w-[1400px] flex-col justify-between px-5 pb-8 pt-8 sm:px-8 sm:pb-10 md:px-10 md:pt-10 lg:px-12 ${HERO_VIEWPORT_MIN_H}`}
      >
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-[40rem] lg:max-w-[44rem]">
            {/* Compact brand + availability — not the main title */}
            <motion.div
              initial={false}
              animate={entered ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.55, ease: easeOut }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="text-[12px] font-semibold tracking-[0.08em] text-[#FFF7ED]/90 sm:text-[13px]">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-[#FF6A00] sm:inline-block" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#FFB347]/90">
                Software Agency
              </span>
              <span className="mx-0.5 hidden text-[#FFF7ED]/25 sm:inline">·</span>
              <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.12em] uppercase text-[#FFF7ED]/55">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6A00] opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
                </span>
                Available
              </span>
            </motion.div>

            {/* Main title — board-write reveal with each slide */}
            <div className="relative min-h-[16rem] sm:min-h-[17.5rem] md:min-h-[19rem] lg:min-h-[20rem]">
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
                  <motion.div
                    className="mb-4 flex items-center gap-3"
                    initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: easeOut }}
                  >
                    <span className="h-px w-8 bg-[#FF6A00] sm:w-10" />
                    <span className="text-[11px] font-bold tracking-[0.24em] uppercase text-[#FF6A00] sm:text-xs">
                      {active.eyebrow}
                    </span>
                  </motion.div>

                  <h1
                    className="font-display text-[#FFF7ED]"
                    style={{
                      fontSize: "clamp(2.75rem, 7vw, 5.75rem)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.03em",
                      textShadow: "0 2px 24px rgba(0,0,0,0.55)",
                    }}
                  >
                    <BoardWriteLine
                      reduceMotion={reduceMotion}
                      delay={0}
                      duration={0.9}
                    >
                      {active.title}
                    </BoardWriteLine>
                    <BoardWriteLine
                      reduceMotion={reduceMotion}
                      delay={0}
                      duration={0.9}
                      className="mt-1"
                      showTip={false}
                    >
                      <span className="text-gradient italic">
                        {active.titleAccent}
                      </span>
                    </BoardWriteLine>
                  </h1>

                  <BoardWriteLine
                    reduceMotion={reduceMotion}
                    delay={0.12}
                    duration={1.05}
                    showTip={false}
                    className="mt-6 max-w-2xl"
                  >
                    <p
                      className="text-lg leading-relaxed text-[#FFF7ED]/82 sm:text-xl sm:leading-relaxed"
                      style={{ textShadow: "0 1px 16px rgba(0,0,0,0.45)" }}
                    >
                      {active.support}
                    </p>
                  </BoardWriteLine>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={false}
              animate={entered ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.7, delay: 0.22, ease: easeOut }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-md bg-[#FF6A00] px-8 py-4 text-[13px] font-bold tracking-[0.06em] uppercase text-[#0A0A0A] transition-all duration-300 hover:bg-[#E85D00] hover:shadow-[0_12px_40px_rgba(255,106,0,0.4)]"
              >
                Start a Project
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2.5 rounded-md border border-white/25 bg-white/[0.05] px-8 py-4 text-[13px] font-bold tracking-[0.06em] uppercase text-[#FFF7ED] backdrop-blur-md transition-all duration-300 hover:border-[#FF6A00]/60 hover:bg-white/[0.1]"
              >
                View Work
                <ArrowUpRight
                  size={17}
                  className="opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>

            <motion.ul
              initial={false}
              animate={entered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center gap-x-1 gap-y-2"
            >
              {HERO_TRUST.map((item, i) => (
                <li key={item} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="mx-2 hidden h-1 w-1 rounded-full bg-[#FF6A00]/70 sm:inline-block" />
                  )}
                  <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#FFF7ED]/55">
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={entered ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.65, delay: 0.3, ease: easeOut }}
          className="relative z-20 mt-8 w-full max-w-md"
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
