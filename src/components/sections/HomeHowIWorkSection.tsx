"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  HOW_I_WORK_COPY,
  PROCESS_STEPS,
  TRUST_PILLARS,
  type ProcessStep,
  type TrustPillar,
} from "@/data/howIWork";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandIcons } from "@/lib/brandAssets";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

/**
 * How I Work — sticky cinematic stage + editorial step list.
 * Pattern: Inventiple / Shadcn Process2 / Obys — image transitions on active step.
 */
export function HomeHowIWorkSection() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(PROCESS_STEPS[0]?.id ?? "discover");
  const active =
    PROCESS_STEPS.find((s) => s.id === activeId) ?? PROCESS_STEPS[0];
  const activeIndex = PROCESS_STEPS.findIndex((s) => s.id === active.id);

  return (
    <section
      id="home-how-i-work"
      aria-label="How I Work"
      className="relative isolate overflow-hidden bg-[#0A0A0A] pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 70% 42% at 50% 0%, rgba(255,106,0,0.12) 0%, transparent 55%)",
            "radial-gradient(ellipse 40% 45% at 0% 70%, rgba(255,106,0,0.06) 0%, transparent 55%)",
          ].join(", "),
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/45 to-transparent"
      />

      <div className="layout-wrap relative z-10">
        <motion.header
          initial={false}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: easeOut }}
          style={{ opacity: 1 }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12"
        >
          <span className="section-eyebrow">{HOW_I_WORK_COPY.eyebrow}</span>
          <div className="fancy-divider mx-auto" />
          <h2 className="font-display text-[1.65rem] leading-[1.12] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2rem] md:text-[2.35rem] lg:text-[2.65rem]">
            {HOW_I_WORK_COPY.title}{" "}
            <span className="text-gradient italic">
              {HOW_I_WORK_COPY.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-[32rem] text-sm leading-[1.65] text-[#FFF7ED]/72 sm:mt-4 sm:text-[0.95rem]">
            {HOW_I_WORK_COPY.support}
          </p>
        </motion.header>

        {/* Desktop / tablet: sticky stage + steps */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-10">
          {/* Cinematic image stage — sticky on lg+ */}
          <aside className="relative hidden md:block">
            <div className="sticky top-28 overflow-hidden rounded-2xl border border-white/10 bg-[#0F0F0F] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[16/11] w-full overflow-hidden lg:aspect-[4/5] xl:aspect-[16/14]">
                {/* Keep previous frame under for crossfade depth */}
                <Image
                  src={active.imageSrc}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 48vw, 90vw"
                  className="object-cover object-center opacity-40 blur-[2px] scale-105"
                  aria-hidden
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 1.04,
                            clipPath: "inset(12% 12% 12% 12% round 12px)",
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                      clipPath: "inset(0% 0% 0% 0% round 0px)",
                    }}
                    exit={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            scale: 0.98,
                            transition: { duration: 0.28 },
                          }
                    }
                    transition={{ duration: 0.55, ease: easeOut }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={active.imageSrc}
                      alt={`${active.title} process visual`}
                      fill
                      sizes="(min-width: 1024px) 48vw, 90vw"
                      className="object-cover object-center"
                      priority={activeIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/25 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,106,0,0.14),transparent_55%)]" />

                {/* Stage meta */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#FF6A00]">
                      {active.number} / 04
                    </span>
                    <div className="flex items-center gap-1.5">
                      {PROCESS_STEPS.map((step, i) => (
                        <button
                          key={step.id}
                          type="button"
                          aria-label={`Show ${step.title}`}
                          onClick={() => setActiveId(step.id)}
                          className={cn(
                            "h-1.5 rounded-full transition-all duration-300",
                            i === activeIndex
                              ? "w-7 bg-[#FF6A00]"
                              : "w-1.5 bg-white/25 hover:bg-white/45"
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`meta-${active.id}`}
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={
                        reduceMotion
                          ? undefined
                          : { opacity: 0, y: -8, transition: { duration: 0.18 } }
                      }
                      transition={{ duration: 0.4, ease: easeOut }}
                    >
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FF6A00]/35 bg-[#0A0A0A]/70 backdrop-blur-md">
                          <BrandIcon
                            base={active.iconBase}
                            tone="orange"
                            size={20}
                          />
                        </div>
                        <h3 className="font-display text-2xl tracking-tight text-[#FFF7ED] lg:text-[1.75rem]">
                          {active.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {active.deliverables.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/15 bg-[#0A0A0A]/55 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-[#FFB347] backdrop-blur-md"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </aside>

          {/* Step list */}
          <div className="min-w-0">
            <ol className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {PROCESS_STEPS.map((step, index) => (
                <ProcessStepRow
                  key={step.id}
                  step={step}
                  index={index}
                  active={activeId === step.id}
                  reduceMotion={reduceMotion}
                  onActivate={() => setActiveId(step.id)}
                />
              ))}
            </ol>

            {/* Mobile-only compact image under active step context */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 md:hidden">
              <div className="relative aspect-[16/10] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`m-${active.id}`}
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={
                      reduceMotion
                        ? undefined
                        : { opacity: 0, transition: { duration: 0.2 } }
                    }
                    transition={{ duration: 0.4, ease: easeOut }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={active.imageSrc}
                      alt={`${active.title} process visual`}
                      fill
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 font-mono text-[11px] font-semibold tracking-[0.18em] text-[#FF6A00]">
                  {active.number} · {active.title}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust pillars — slim signal row, not heavy cards */}
        <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:mt-12 sm:grid-cols-3 lg:mt-14">
          {TRUST_PILLARS.map((pillar, index) => (
            <TrustPillarCell
              key={pillar.id}
              pillar={pillar}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </ul>

        <div className="mt-10 flex w-full flex-col gap-2.5 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 lg:mt-14">
          <Link href="/contact" className="btn-action btn-action-primary group">
            {HOW_I_WORK_COPY.ctaPrimary}
            <BrandIcon
              base={brandIcons.cta.startProject}
              tone="black"
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="/services"
            className="btn-action btn-action-secondary group"
          >
            {HOW_I_WORK_COPY.ctaSecondary}
            <ArrowUpRight
              size={15}
              className="opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <p className="mt-6 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFF7ED]/40 sm:mt-7 sm:text-xs">
          {HOW_I_WORK_COPY.footerLine}
        </p>
      </div>
    </section>
  );
}

function ProcessStepRow({
  step,
  index,
  active,
  reduceMotion,
  onActivate,
}: {
  step: ProcessStep;
  index: number;
  active: boolean;
  reduceMotion: boolean | null;
  onActivate: () => void;
}) {
  return (
    <motion.li
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.5,
        delay: reduceMotion ? 0 : index * 0.08,
        ease: easeOut,
      }}
      style={{ opacity: 1 }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={cn(
        "group relative list-none transition-colors duration-300",
        active ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-0 left-0 w-[2px] origin-top bg-[#FF6A00] transition-transform duration-500 ease-out",
          active ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
        )}
      />

      <button
        type="button"
        onClick={onActivate}
        className="flex w-full flex-col gap-3 px-3 py-5 text-left sm:px-4 sm:py-6 md:flex-row md:items-start md:gap-5"
        aria-pressed={active}
      >
        <span
          className={cn(
            "font-mono text-2xl font-semibold tracking-[-0.04em] transition-colors duration-300 sm:text-3xl md:w-14 md:shrink-0 md:text-[2rem]",
            active ? "text-[#FF6A00]" : "text-[#FFF7ED]/22 group-hover:text-[#FF6A00]/70"
          )}
        >
          {step.number}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <div
              className={cn(
                "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-300",
                active
                  ? "border-[#FF6A00]/45 bg-[#FF6A00]/12"
                  : "border-white/10 bg-white/[0.03] group-hover:border-[#FF6A00]/30"
              )}
            >
              <BrandIcon
                base={step.iconBase}
                tone="white"
                size={18}
                className={cn(
                  "absolute transition-opacity duration-300",
                  active ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                )}
              />
              <BrandIcon
                base={step.iconBase}
                tone="orange"
                size={18}
                className={cn(
                  "absolute transition-opacity duration-300",
                  active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}
              />
            </div>
            <h3
              className={cn(
                "font-display text-xl tracking-tight text-[#FFF7ED] transition-transform duration-300 sm:text-[1.35rem]",
                active && "md:translate-x-0.5"
              )}
            >
              {step.title}
            </h3>
          </div>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#FFF7ED]/58 sm:text-[15px]">
            {step.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {step.deliverables.map((item) => (
              <span
                key={item}
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] transition-colors duration-300",
                  active
                    ? "border-[#FF6A00]/35 bg-[#FF6A00]/10 text-[#FFB347]"
                    : "border-white/10 text-[#FFF7ED]/45 group-hover:border-[#FF6A00]/25 group-hover:text-[#FFB347]/80"
                )}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <span
          className={cn(
            "ml-auto hidden items-center gap-1.5 pt-1 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 md:inline-flex",
            active
              ? "translate-x-0 text-[#FF6A00] opacity-100"
              : "translate-x-1 text-[#FFF7ED]/30 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
          )}
        >
          View
          <ArrowUpRight size={13} />
        </span>
      </button>
    </motion.li>
  );
}

function TrustPillarCell({
  pillar,
  index,
  reduceMotion,
}: {
  pillar: TrustPillar;
  index: number;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.li
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.45,
        delay: reduceMotion ? 0 : 0.1 + index * 0.06,
        ease: easeOut,
      }}
      style={{ opacity: 1 }}
      className="group flex gap-3.5 bg-[#0A0A0A] px-4 py-5 sm:px-5 sm:py-6"
    >
      <div
        className={cn(
          "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]",
          "transition-all duration-300",
          "group-hover:border-[#FF6A00]/40 group-hover:bg-[#FF6A00]/12"
        )}
      >
        <BrandIcon
          base={pillar.iconBase}
          tone="white"
          size={20}
          className="absolute transition-opacity duration-300 group-hover:opacity-0"
        />
        <BrandIcon
          base={pillar.iconBase}
          tone="orange"
          size={20}
          className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
      <div className="min-w-0">
        <h4 className="font-display text-base tracking-tight text-[#FFF7ED] sm:text-lg">
          {pillar.title}
        </h4>
        <p className="mt-1 text-[13px] leading-relaxed text-[#FFF7ED]/55 sm:text-sm">
          {pillar.description}
        </p>
      </div>
    </motion.li>
  );
}
