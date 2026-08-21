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
import { MobileBottomSheet } from "@/components/ui/MobileBottomSheet";
import { brandIcons } from "@/lib/brandAssets";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function HomeHowIWorkSection() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(PROCESS_STEPS[0]?.id ?? "discover");
  const active =
    PROCESS_STEPS.find((s) => s.id === activeId) ?? PROCESS_STEPS[0];
  const activeIndex = PROCESS_STEPS.findIndex((s) => s.id === active.id);

  // Mobile bottom sheet
  const [sheetStepId, setSheetStepId] = useState<string | null>(null);
  const sheetStep = PROCESS_STEPS.find((s) => s.id === sheetStepId) ?? null;

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
          <h2 className="text-[1.5rem] font-medium leading-[1.12] tracking-[-0.03em] text-[#FFF7ED] sm:text-[1.85rem] md:text-[2.2rem] lg:text-[2.5rem]">
            {HOW_I_WORK_COPY.title}{" "}
            <span className="text-gradient italic">
              {HOW_I_WORK_COPY.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-[32rem] text-sm leading-[1.65] text-[#FFF7ED]/72 sm:mt-4 sm:text-[0.95rem]">
            {HOW_I_WORK_COPY.support}
          </p>
        </motion.header>

        {/* ── MOBILE: App step cards ── */}
        <div className="sm:hidden">
          <div className="space-y-3">
            {PROCESS_STEPS.map((step, index) => (
              <motion.button
                key={step.id}
                type="button"
                onClick={() => setSheetStepId(step.id)}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease: easeOut,
                }}
                className="mobile-card group flex w-full items-center gap-4 p-4 text-left transition-all duration-300 active:scale-[0.98]"
              >
                {/* Big number */}
                <span className="font-mono text-[2rem] font-medium tracking-[-0.04em] text-[#FF6A00]/25 transition-colors duration-300 group-active:text-[#FF6A00]/55">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FF6A00]/30 bg-[#FF6A00]/10">
                  <BrandIcon base={step.iconBase} tone="orange" size={22} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-[1.05rem] font-medium leading-[1.1] tracking-[-0.02em] text-[#FFF7ED]">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 line-clamp-1 text-[12px] leading-snug text-[#FFF7ED]/50">
                    {step.description}
                  </p>
                </div>

                {/* Chevron */}
                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-[#FF6A00]/40 transition-transform duration-300 group-active:translate-x-0.5 group-active:-translate-y-0.5"
                />
              </motion.button>
            ))}
          </div>

          {/* Trust pillars — horizontal scroll cards on mobile */}
          <div className="mt-6">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#FFF7ED]/35">
              My commitments
            </p>
            <div className="snap-scroll-x -mx-4 pb-3">
              {TRUST_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="snap-card-peek mobile-card flex flex-col gap-3 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FF6A00]/25 bg-[#FF6A00]/10">
                    <BrandIcon base={pillar.iconBase} tone="orange" size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium tracking-tight text-[#FFF7ED]">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-[12px] leading-relaxed text-[#FFF7ED]/50">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DESKTOP/TABLET: Original layout ── */}
        <div className="hidden sm:grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-10">
          {/* Cinematic image stage — sticky on lg+ */}
          <aside className="relative hidden md:block">
            <div className="sticky top-28 overflow-hidden rounded-2xl border border-white/10 bg-[#0F0F0F] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[16/11] w-full overflow-hidden lg:aspect-[4/5] xl:aspect-[16/14]">
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

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-[#FF6A00]">
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
                        <h3 className="text-xl font-medium tracking-tight text-[#FFF7ED] lg:text-[1.5rem]">
                          {active.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {active.deliverables.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/15 bg-[#0A0A0A]/55 px-2.5 py-1 text-[10px] font-medium tracking-[0.04em] text-[#FFB347] backdrop-blur-md"
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
                <span className="absolute bottom-3 left-3 font-mono text-[11px] font-medium tracking-[0.18em] text-[#FF6A00]">
                  {active.number} · {active.title}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust pillars (desktop) */}
        <ul className="mt-10 hidden grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:mt-12 sm:grid sm:grid-cols-3 lg:mt-14">
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

        <p className="mt-6 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-[#FFF7ED]/40 sm:mt-7 sm:text-xs">
          {HOW_I_WORK_COPY.footerLine}
        </p>
      </div>

      {/* ── Mobile Bottom Sheet for step detail ── */}
      <MobileBottomSheet
        open={!!sheetStepId}
        onClose={() => setSheetStepId(null)}
        title={sheetStep ? `Step ${sheetStep.number}` : "Process Step"}
      >
        {sheetStep && (
          <div className="p-5 pb-8">
            {/* Image */}
            <div className="mb-5 overflow-hidden rounded-2xl border border-white/10">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={sheetStep.imageSrc}
                  alt={`${sheetStep.title} visual`}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent" />
              </div>
            </div>

            {/* Icon + title */}
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#FF6A00]/35 bg-[#FF6A00]/12">
                <BrandIcon base={sheetStep.iconBase} tone="orange" size={24} />
              </div>
              <div>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[#FF6A00]">
                  Step {sheetStep.number} of {PROCESS_STEPS.length}
                </p>
                <h3 className="text-[1.3rem] font-medium leading-[1.08] tracking-[-0.025em] text-[#FFF7ED]">
                  {sheetStep.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-[#FFF7ED]/68">
              {sheetStep.description}
            </p>

            {/* Deliverables */}
            <div className="mt-5">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#FFF7ED]/35">
                What you get
              </p>
              <div className="flex flex-wrap gap-2">
                {sheetStep.deliverables.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#FF6A00]/24 bg-[#FF6A00]/10 px-3 py-1 text-[11px] font-medium tracking-[0.06em] text-[#FFB347]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Nav to next */}
            <div className="mt-6 flex gap-2">
              {PROCESS_STEPS.map((step, i) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setSheetStepId(step.id)}
                  className={cn(
                    "flex-1 rounded-xl border py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] transition-all duration-200",
                    step.id === sheetStepId
                      ? "border-[#FF6A00] bg-[#FF6A00]/15 text-[#FF6A00]"
                      : "border-white/[0.08] bg-white/[0.02] text-[#FFF7ED]/45"
                  )}
                >
                  {step.number}
                </button>
              ))}
            </div>
          </div>
        )}
      </MobileBottomSheet>
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
            "font-mono text-2xl font-medium tracking-[-0.04em] transition-colors duration-300 sm:text-3xl md:w-14 md:shrink-0 md:text-[2rem]",
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
                "text-lg font-medium tracking-tight text-[#FFF7ED] transition-transform duration-300 sm:text-[1.2rem]",
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
                  "rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-[0.04em] transition-colors duration-300",
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
            "ml-auto hidden items-center gap-1.5 pt-1 text-[10px] font-medium uppercase tracking-[0.16em] transition-all duration-300 md:inline-flex",
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
        <h4 className="text-sm font-medium tracking-tight text-[#FFF7ED] sm:text-base">
          {pillar.title}
        </h4>
        <p className="mt-1 text-[13px] leading-relaxed text-[#FFF7ED]/55 sm:text-sm">
          {pillar.description}
        </p>
      </div>
    </motion.li>
  );
}
