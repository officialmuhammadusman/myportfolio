"use client";

import {
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type TouchEvent,
} from "react";
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
  HERO_IMAGE_TOP,
  HERO_SLIDES,
} from "@/data/hero";
import { PERSONAL_INFO } from "@/lib/constants";
import { brandIcons } from "@/lib/brandAssets";
import { BrandIcon } from "@/components/ui/BrandIcon";

const cineEase = [0.16, 1, 0.3, 1] as const;
const FADE_S = 0.28;

type Direction = 1 | -1;

/** Stacked dissolve — previous slide stays painted (no black blink) */
function HeroSlides({
  index,
  underIndex,
  reduceMotion,
  objectClassName,
}: {
  index: number;
  underIndex: number;
  reduceMotion: boolean | null;
  objectClassName: string;
}) {
  return (
    <>
      {HERO_SLIDES.map((slide, i) => {
        const isActive = i === index;
        const isUnder = i === underIndex;
        const visible = isActive || isUnder;

        return (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: visible ? 1 : 0,
            }}
            transition={{
              opacity: {
                duration:
                  reduceMotion || !isActive
                    ? 0
                    : FADE_S,
                ease: cineEase,
              },
            }}
            style={{
              zIndex: isActive ? 2 : isUnder ? 1 : 0,
              pointerEvents: isActive ? "auto" : "none",
            }}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.src}
              alt={isActive ? slide.alt : ""}
              fill
              priority
              sizes="100vw"
              quality={90}
              className={`object-cover ${objectClassName}`}
            />
          </motion.div>
        );
      })}
    </>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [underIndex, setUnderIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const touchX = useRef<number | null>(null);

  const goTo = useEffectEvent((next: number, dir?: Direction) => {
    const len = HERO_SLIDES.length;
    const normalized = ((next % len) + len) % len;
    if (normalized === index) return;

    const inferred: Direction =
      dir ??
      (normalized === (index + 1) % len
        ? 1
        : normalized === (index - 1 + len) % len
          ? -1
          : normalized > index
            ? 1
            : -1);

    setUnderIndex(index);
    setDirection(inferred);
    setIndex(normalized);
  });

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(
      () => goTo(index + 1, 1),
      HERO_AUTOPLAY_MS,
    );
    return () => window.clearInterval(id);
  }, [index, reduceMotion]);

  const active = HERO_SLIDES[index];

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current == null) return;
    const dx =
      (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 48) return;
    if (dx < 0) goTo(index + 1, 1);
    else goTo(index - 1, -1);
  };

  return (
    <section
      className="relative isolate flex w-full flex-col overflow-hidden bg-[#0A0A0A] sm:min-h-[100dvh]"
      aria-roledescription="carousel"
      aria-label="Hero"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Desktop / tablet: full-bleed background */}
      <div
        className={`absolute inset-x-0 bottom-0 z-0 hidden sm:block ${HERO_IMAGE_TOP}`}
        aria-live="polite"
      >
        <HeroSlides
          index={index}
          underIndex={underIndex}
          reduceMotion={reduceMotion}
          objectClassName="object-[60%_28%] lg:object-[68%_30%]"
        />
        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background: `
              linear-gradient(100deg,
                rgba(10,10,10,0.97) 0%,
                rgba(10,10,10,0.9) 24%,
                rgba(10,10,10,0.55) 42%,
                rgba(10,10,10,0.18) 62%,
                rgba(10,10,10,0.08) 82%,
                rgba(10,10,10,0.35) 100%
              ),
              linear-gradient(180deg,
                rgba(10,10,10,0.45) 0%,
                transparent 14%,
                transparent 58%,
                rgba(10,10,10,0.92) 100%
              )
            `,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[4] opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 119px, rgba(255,247,237,0.35) 120px)",
          }}
        />
      </div>

      <div
        className={`layout-wrap relative z-10 flex w-full flex-1 flex-col ${HERO_HEADER_OFFSET} pb-6 sm:pb-10`}
      >
        <div className="relative flex flex-1 flex-col justify-center py-5 sm:py-8 lg:py-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={`ghost-${active.id}`}
              aria-hidden
              initial={reduceMotion ? false : { opacity: 0, x: -30 }}
              animate={{ opacity: 0.06, x: 0 }}
              exit={
                reduceMotion
                  ? undefined
                  : { opacity: 0, transition: { duration: 0.2 } }
              }
              transition={{ duration: 0.55, ease: cineEase }}
              className="pointer-events-none absolute -left-2 top-1/2 hidden -translate-y-[58%] select-none font-display text-[14rem] leading-none tracking-[-0.08em] text-[#FFF7ED] lg:block xl:text-[16rem]"
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>

          <div className="relative w-full max-w-2xl lg:max-w-3xl">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: cineEase }}
            >
              <div className="mb-3 hidden items-center gap-3 sm:flex">
                <Image
                  src={brandIcons.ui.muMarkAnimated}
                  alt=""
                  width={36}
                  height={36}
                  className="mu-mark-animated h-8 w-8 sm:h-9 sm:w-9"
                />
              </div>

              <p className="text-center font-display text-[1.85rem] leading-[0.95] tracking-[-0.035em] text-[#FFF7ED] sm:text-left sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.65rem]">
                {PERSONAL_INFO.name}
              </p>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:mt-4 sm:justify-start sm:gap-x-4">
                <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6A00] sm:text-left sm:text-[13px] sm:tracking-[0.22em]">
                  Full-Stack Developer · AI Engineer
                </p>
                <span className="hidden items-center gap-2 text-[11px] font-medium tracking-[0.06em] text-[#FFF7ED]/55 sm:inline-flex">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6A00] opacity-55" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
                  </span>
                  Available for engagement
                </span>
              </div>

              <motion.div
                aria-hidden
                className="mx-auto mt-3 h-px w-full max-w-[12rem] origin-center bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent sm:mx-0 sm:mt-4 sm:max-w-md sm:origin-left sm:bg-gradient-to-r sm:from-[#FF6A00] sm:via-[#FF6A00]/55 sm:to-transparent"
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: cineEase }}
              />

              {/* Per-slide: 3-word headline + short 2-line description */}
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={active.id}
                  custom={direction}
                  className="mt-5 sm:mt-8"
                  initial={
                    reduceMotion
                      ? false
                      : (dir: Direction) => ({
                          opacity: 0,
                          y: dir >= 0 ? 12 : -12,
                        })
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    reduceMotion
                      ? undefined
                      : (dir: Direction) => ({
                          opacity: 0,
                          y: dir >= 0 ? -8 : 8,
                          transition: { duration: 0.18, ease: cineEase },
                        })
                  }
                  transition={{ duration: 0.32, ease: cineEase }}
                >
                  <h1 className="whitespace-nowrap text-center font-display text-[1.7rem] leading-[1.1] tracking-[-0.03em] text-[#FFF7ED] sm:text-left sm:text-[2.6rem] md:text-[3.15rem] lg:text-[3.6rem]">
                    {active.title}{" "}
                    <span className="text-gradient italic">
                      {active.titleAccent}
                    </span>
                  </h1>

                  <p className="mx-auto mt-3 max-w-md text-center text-[14px] leading-[1.55] text-[#FFF7ED]/75 sm:hidden">
                    {active.supportMobile}
                  </p>
                  <p className="mt-4 hidden max-w-xl text-left text-base leading-[1.55] text-[#FFF7ED]/78 sm:block sm:text-lg md:text-[1.1rem] md:leading-[1.55]">
                    {active.support}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div
                className="mt-6 hidden flex-wrap items-center gap-2 sm:mt-8 sm:flex"
                role="tablist"
                aria-label="Focus areas"
              >
                {HERO_SLIDES.map((slide, i) => {
                  const on = i === index;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onClick={() =>
                        goTo(i, i > index ? 1 : i < index ? -1 : direction)
                      }
                      className={`relative rounded-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] transition ${
                        on
                          ? "bg-[#FF6A00] text-[#0A0A0A]"
                          : "border border-white/10 bg-white/[0.03] text-[#FFF7ED]/55 hover:border-white/25 hover:text-[#FFF7ED]"
                      }`}
                    >
                      {slide.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="mt-5 sm:mt-10"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: cineEase }}
            >
              <p className="mb-4 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFF7ED]/4 sm:mb-5 sm:block sm:text-[11px]">
                {PERSONAL_INFO.locationRemote}
              </p>

              <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:gap-3">
                <Link
                  href="/contact"
                  className="btn-action btn-action-primary group min-h-12 px-7 text-[13px] tracking-[0.08em]"
                >
                  Start a Project
                  <BrandIcon
                    base={brandIcons.cta.startProject}
                    tone="black"
                    size={16}
                  />
                </Link>
                <Link
                  href="/projects"
                  className="btn-action btn-action-primary group min-h-12 px-7 text-[13px] tracking-[0.08em]"
                >
                  View Work
                  <BrandIcon
                    base={brandIcons.work.featured}
                    tone="black"
                    size={16}
                  />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Mobile: image stacked below text (not behind) */}
          <div
            className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 sm:hidden"
            aria-live="polite"
          >
            <HeroSlides
              index={index}
              underIndex={underIndex}
              reduceMotion={reduceMotion}
              objectClassName="object-[88%_30%]"
            />
            <div
              className="pointer-events-none absolute inset-0 z-[3]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,10,10,0.15) 0%, transparent 35%, rgba(10,10,10,0.45) 100%)",
              }}
            />
          </div>
        </div>

        <div className="mt-5 flex w-full justify-center pb-1 sm:mt-auto">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0A0A0A]/6 px-3.5 py-2.5 backdrop-blur-md sm:gap-4 sm:px-5">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(index - 1, -1)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#FFF7ED]/7 transition hover:bg-white/10 hover:text-[#FF6A00]"
            >
              ‹
            </button>

            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Hero slides"
            >
              {HERO_SLIDES.map((slide, i) => {
                const on = i === index;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    aria-label={`Go to slide ${i + 1}: ${slide.label}`}
                    onClick={() =>
                      goTo(i, i > index ? 1 : i < index ? -1 : direction)
                    }
                    className="flex h-7 items-center justify-center"
                  >
                    <motion.span
                      className="block h-1.5 rounded-full"
                      animate={{
                        width: on ? 28 : 8,
                        backgroundColor: on
                          ? "#FF6A00"
                          : "rgba(255,247,237,0.35)",
                      }}
                      transition={{ duration: 0.25, ease: cineEase }}
                    />
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(index + 1, 1)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#FFF7ED]/7 transition hover:bg-white/10 hover:text-[#FF6A00]"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
