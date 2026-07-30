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
 * Featured Work — 1 large hero case + 3 compact cards.
 * Agency pattern: primary proof first, supporting work in a clean grid.
 */
export function HomeFeaturedWorkSection() {
  const reduceMotion = useReducedMotion();
  const [featured, ...rest] = HOME_FEATURED_CASES;
  const smallCases = rest.slice(0, 3);

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
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12"
        >
          <span className="section-eyebrow">
            {HOME_FEATURED_WORK_COPY.eyebrow}
          </span>
          <div className="fancy-divider mx-auto" />
          <h2 className="font-display text-[1.65rem] leading-[1.12] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2rem] md:text-[2.35rem] lg:text-[2.65rem]">
            {HOME_FEATURED_WORK_COPY.title}{" "}
            <span className="text-gradient italic">
              {HOME_FEATURED_WORK_COPY.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-[32rem] text-sm leading-[1.65] text-[#FFF7ED]/72 sm:mt-4 sm:text-[0.95rem]">
            {HOME_FEATURED_WORK_COPY.support}
          </p>
        </motion.header>

        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          {featured && (
            <FeaturedBigCard caseItem={featured} reduceMotion={reduceMotion} />
          )}

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {smallCases.map((item, index) => (
              <FeaturedSmallCard
                key={item.id}
                caseItem={item}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex w-full flex-col gap-2.5 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 lg:mt-14">
          <Link href="/contact" className="btn-action btn-action-primary group">
            {HOME_FEATURED_WORK_COPY.footerCtaPrimary}
            <BrandIcon
              base={brandIcons.cta.startProject}
              tone="black"
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
          <Link href="/projects" className="btn-action btn-action-secondary group">
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

function FeaturedBigCard({
  caseItem,
  reduceMotion,
}: {
  caseItem: FeaturedCase;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F0F0F]",
        "transition-[border-color,box-shadow] duration-500",
        "hover:border-[#FF6A00]/40 hover:shadow-[0_28px_80px_rgba(255,106,0,0.08)]"
      )}
    >
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 z-20 w-[2px] origin-top scale-y-0 bg-[#FF6A00] transition-transform duration-500 ease-out group-hover:scale-y-100"
      />

      <div className="grid lg:grid-cols-2">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
        >
          <Link
            href={`/projects/${caseItem.slug}`}
            className="relative block overflow-hidden"
            aria-label={`Open case study: ${caseItem.name}`}
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#0A0A0A] sm:aspect-[16/10] lg:aspect-[16/11] lg:min-h-[380px]">
              <Image
                src={caseItem.previewSrc}
                alt={`${caseItem.name} live product`}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/75 via-[#0A0A0A]/1 to-transparent" />
              <div className="absolute inset-0 bg-[#0A0A0A]/0 transition-colors duration-500 group-hover:bg-[#0A0A0A]/2" />

              <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#0A0A0A]/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-[#FFF7ED]/80 backdrop-blur-md sm:text-[11px]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#28C840] opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                  </span>
                  {caseItem.liveHost}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0A0A0A]/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FFF7ED] backdrop-blur-md sm:text-[11px]">
                  View case study
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.14, ease: easeOut }}
          className="relative flex flex-col justify-center px-4 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-8 xl:px-10"
        >
          <div className="mb-3 flex items-center gap-3 sm:mb-4">
            <span className="font-display text-sm font-semibold tracking-[0.08em] text-[#FF6A00]/90 sm:text-base">
              {caseItem.index}
            </span>
            <motion.span
              aria-hidden
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25, ease: easeOut }}
              className="h-px w-8 origin-left bg-[#FF6A00]/55 sm:w-10"
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FFF7ED]/45 sm:text-[11px]">
              {caseItem.industry}
            </span>
            <span className="ml-auto rounded-full border border-[#FF6A00]/25 bg-[#FF6A00]/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#FFB347]">
              Featured
            </span>
          </div>

          <h3 className="font-display text-[1.55rem] leading-[1.1] tracking-[-0.025em] text-[#FFF7ED] sm:text-[2rem] lg:text-[2.15rem]">
            <Link
              href={`/projects/${caseItem.slug}`}
              className="transition-colors duration-300 hover:text-[#FFB347]"
            >
              {caseItem.name}
            </Link>
          </h3>

          <p className="mt-2 text-sm font-medium leading-snug text-[#FFF7ED]/88 sm:mt-2.5 sm:text-base">
            {caseItem.headline}
          </p>

          <p className="mt-3 max-w-md text-[13px] leading-relaxed text-[#FFF7ED]/58 sm:mt-3.5 sm:text-sm">
            {caseItem.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            {caseItem.stack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: reduceMotion ? 0 : 0.28 + i * 0.05,
                  ease: easeOut,
                }}
                className="rounded-full border border-white/[0.09] bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold tracking-[0.06em] text-[#FFF7ED]/55"
              >
                {tech}
              </motion.span>
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
        </motion.div>
      </div>
    </motion.article>
  );
}

function FeaturedSmallCard({
  caseItem,
  index,
  reduceMotion,
}: {
  caseItem: FeaturedCase;
  index: number;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: reduceMotion ? 0 : 0.1 + index * 0.08,
        ease: easeOut,
      }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F0F0F]",
        "transition-[border-color,box-shadow,transform] duration-500",
        "hover:-translate-y-1 hover:border-[#FF6A00]/40 hover:shadow-[0_20px_50px_rgba(255,106,0,0.08)]"
      )}
    >
      <Link
        href={`/projects/${caseItem.slug}`}
        className="relative block overflow-hidden"
        aria-label={`Open case study: ${caseItem.name}`}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A0A]">
          <Image
            src={caseItem.previewSrc}
            alt={`${caseItem.name} live product`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-[#0A0A0A]/2 to-transparent" />

          <div className="absolute left-3 top-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#0A0A0A]/7 px-2 py-0.5 text-[9px] font-semibold tracking-[0.04em] text-[#FFF7ED]/75 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
              {caseItem.liveHost}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex translate-y-1 items-center justify-between opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#0A0A0A]/75 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#FFF7ED] backdrop-blur-md">
              Case study
              <ArrowUpRight size={11} />
            </span>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-[#FF6A00]/85">
            {caseItem.index}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#FFF7ED]/4">
            {caseItem.industry}
          </span>
        </div>

        <h3 className="font-display text-[1.2rem] leading-[1.15] tracking-[-0.02em] text-[#FFF7ED] sm:text-[1.3rem]">
          <Link
            href={`/projects/${caseItem.slug}`}
            className="transition-colors duration-300 hover:text-[#FFB347]"
          >
            {caseItem.name}
          </Link>
        </h3>

        <p className="mt-1.5 line-clamp-2 text-[12px] leading-relaxed text-[#FFF7ED]/55 sm:text-[13px]">
          {caseItem.headline}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {caseItem.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] px-2 py-0.5 text-[9px] font-semibold tracking-[0.06em] text-[#FFF7ED]/45"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-4">
          <Link
            href={`/projects/${caseItem.slug}`}
            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FF6A00] transition-colors hover:text-[#FFB347]"
          >
            Case study
            <ArrowUpRight size={12} />
          </Link>
          <a
            href={caseItem.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FFF7ED]/45 transition-colors hover:text-[#FFF7ED]"
          >
            Live
            <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
