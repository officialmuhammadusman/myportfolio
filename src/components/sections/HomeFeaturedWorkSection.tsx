"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  HOME_FEATURED_CASES,
  HOME_FEATURED_WORK_COPY,
  type FeaturedCase,
} from "@/data/featuredWork";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandIcons } from "@/lib/brandAssets";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

/**
 * Section 3 — Featured Work (editorial agency strips + live product frames).
 * Pattern: 10Pearls / SoftServe case bands — outcome copy, cinematic live UI, dual CTA.
 */
export function HomeFeaturedWorkSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home-featured-work"
      aria-label="Selected Work"
      className="relative isolate overflow-hidden bg-[#0A0A0A] pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 70% 42% at 50% 0%, rgba(255,106,0,0.12) 0%, transparent 55%)",
            "radial-gradient(ellipse 35% 40% at 0% 55%, rgba(255,106,0,0.05) 0%, transparent 55%)",
          ].join(", "),
        }}
      />

      <div className="layout-wrap relative z-10">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
          <span className="section-eyebrow">
            {HOME_FEATURED_WORK_COPY.eyebrow}
          </span>
          <div className="fancy-divider mx-auto" />
          <h2 className="font-display text-[2.125rem] leading-[1.08] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem]">
            {HOME_FEATURED_WORK_COPY.title}{" "}
            <span className="text-gradient italic">
              {HOME_FEATURED_WORK_COPY.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[34rem] text-[0.9375rem] leading-[1.7] text-[#FFF7ED]/78 sm:mt-6 sm:text-base md:text-[1.0625rem]">
            {HOME_FEATURED_WORK_COPY.support}
          </p>
        </header>

        <div className="space-y-3 sm:space-y-4 lg:space-y-5">
          {HOME_FEATURED_CASES.map((item, index) => (
            <CaseStrip
              key={item.id}
              caseItem={item}
              index={index}
              reduceMotion={reduceMotion}
              featured={index === 0}
            />
          ))}
        </div>

        <div className="mt-10 flex w-full flex-col gap-2.5 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 lg:mt-14">
          <Link
            href="/contact"
            className="btn-action btn-action-primary group"
          >
            {HOME_FEATURED_WORK_COPY.footerCtaPrimary}
            <BrandIcon
              base={brandIcons.cta.startProject}
              tone="black"
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="/projects"
            className="btn-action btn-action-secondary group"
          >
            {HOME_FEATURED_WORK_COPY.footerCtaSecondary}
            <ArrowUpRight
              size={15}
              className="opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CaseStrip({
  caseItem,
  index,
  reduceMotion,
  featured,
}: {
  caseItem: FeaturedCase;
  index: number;
  reduceMotion: boolean | null;
  featured: boolean;
}) {
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : index * 0.06,
        ease: easeOut,
      }}
      style={{ opacity: 1 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F0F0F]",
        "transition-[border-color,box-shadow] duration-500",
        "hover:border-[#FF6A00]/40 hover:shadow-[0_28px_80px_rgba(255,106,0,0.08)]"
      )}
    >
      {/* Accent rail */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 z-20 w-[2px] origin-top scale-y-0 bg-[#FF6A00] transition-transform duration-500 ease-out group-hover:scale-y-100"
      />

      <div
        className={cn(
          "grid lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2"
        )}
      >
        {/* Live product frame */}
        <Link
          href={`/projects/${caseItem.slug}`}
          className="relative block overflow-hidden"
          aria-label={`Open case study: ${caseItem.name}`}
        >
          <div
            className={cn(
              "relative w-full overflow-hidden bg-[#0A0A0A]",
              featured ? "aspect-[16/11] sm:aspect-[16/10]" : "aspect-[16/11]"
            )}
          >
            <Image
              src={caseItem.previewSrc}
              alt={`${caseItem.name} live product`}
              fill
              priority={featured}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
            />

            {/* Cinematic veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/15 to-transparent" />
            <div className="absolute inset-0 bg-[#0A0A0A]/0 transition-colors duration-500 group-hover:bg-[#0A0A0A]/25" />

            {/* Live URL chip */}
            <div className="absolute left-3 top-3 flex items-center gap-2 sm:left-4 sm:top-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#0A0A0A]/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-[#FFF7ED]/80 backdrop-blur-md sm:text-[11px]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#28C840] opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                </span>
                {caseItem.liveHost}
              </span>
            </div>

            {/* Hover reveal */}
            <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-3 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0A0A0A]/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FFF7ED] backdrop-blur-md sm:text-[11px]">
                View case study
                <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </Link>

        {/* Copy column */}
        <div className="relative flex flex-col justify-center px-4 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7 xl:px-8">
          <div className="mb-3 flex items-center gap-3 sm:mb-4">
            <span className="font-display text-sm font-semibold tracking-[0.08em] text-[#FF6A00]/90 sm:text-base">
              {caseItem.index}
            </span>
            <span className="h-px w-6 bg-[#FF6A00]/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FFF7ED]/45 sm:text-[11px]">
              {caseItem.industry}
            </span>
          </div>

          <h3 className="font-display text-[1.35rem] leading-[1.12] tracking-[-0.025em] text-[#FFF7ED] sm:text-2xl lg:text-[1.75rem]">
            <Link
              href={`/projects/${caseItem.slug}`}
              className="transition-colors duration-300 hover:text-[#FFB347]"
            >
              {caseItem.name}
            </Link>
          </h3>

          <p className="mt-1.5 text-sm font-medium leading-snug text-[#FFF7ED]/88 sm:mt-2 sm:text-[0.9375rem]">
            {caseItem.headline}
          </p>

          <p className="mt-2.5 max-w-md text-[13px] leading-relaxed text-[#FFF7ED]/58 sm:mt-3 sm:text-sm">
            {caseItem.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            {caseItem.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/[0.09] bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold tracking-[0.06em] text-[#FFF7ED]/55"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 btn-action-row sm:mt-6">
            <Link
              href={`/projects/${caseItem.slug}`}
              className="btn-action btn-action-primary group/case"
            >
              Case study
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover/case:translate-x-0.5 group-hover/case:-translate-y-0.5"
              />
            </Link>
            <a
              href={caseItem.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action btn-action-secondary group/live"
            >
              Launch live site
              <ExternalLink
                size={13}
                className="opacity-75 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
