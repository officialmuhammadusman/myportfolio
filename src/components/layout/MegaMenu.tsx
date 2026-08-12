"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HERO_STATS } from "@/data/hero";
import {
  HEADER_MEGA,
  HEADER_MOTION,
  type MegaLink,
  type MegaPanel,
  type MegaSection,
} from "@/data/headerMega";
import { brandIcons } from "@/lib/brandAssets";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { externalNavLinkProps, isExternalNavHref } from "@/lib/navHref";
import { cn } from "@/lib/utils";
import { BrandIcon } from "@/components/ui/BrandIcon";

export type MegaKey = keyof typeof HEADER_MEGA;

export function getPanelSections(panel: MegaPanel): MegaSection[] {
  if (panel.sections?.length) return panel.sections;
  return [{ id: "main", title: panel.eyebrow, links: panel.links }];
}

function getFeaturedLink(sections: MegaSection[]): MegaLink | null {
  for (const section of sections) {
    const featured = section.links.find((link) => link.badge);
    if (featured) return featured;
  }
  return sections[0]?.links[0] ?? null;
}

function sectionGridClass(count: number) {
  if (count >= 4) return "sm:grid-cols-2";
  if (count === 3) return "sm:grid-cols-2 xl:grid-cols-3";
  return "sm:grid-cols-2";
}

function MegaNavTarget({
  href,
  isOpen,
  onNavigate,
  className,
  children,
}: {
  href: string;
  isOpen: boolean;
  onNavigate: () => void;
  className?: string;
  children: ReactNode;
}) {
  if (isExternalNavHref(href)) {
    return (
      <a
        href={href}
        onClick={onNavigate}
        tabIndex={isOpen ? 0 : -1}
        className={className}
        {...externalNavLinkProps(href)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onNavigate} tabIndex={isOpen ? 0 : -1} className={className}>
      {children}
    </Link>
  );
}

function MegaFeaturedCard({
  item,
  isOpen,
  onNavigate,
}: {
  item: MegaLink;
  isOpen: boolean;
  onNavigate: () => void;
}) {
  return (
    <MegaNavTarget
      href={item.href}
      isOpen={isOpen}
      onNavigate={onNavigate}
      className="mega-featured-card group relative flex gap-4 overflow-hidden rounded-2xl p-4 sm:p-5"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(255,106,0,0.14), transparent 55%)",
        }}
      />
      {item.imageSrc ? (
        <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-[#FF6A00]/25 shadow-md">
          <img
            src={item.imageSrc}
            alt={item.label}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </span>
      ) : (
        <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#FF6A00]/20 bg-[#FF6A00]/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-300 group-hover:scale-[1.03]">
          <BrandIcon base={item.iconBase} tone="base" size={28} className="group-hover:hidden" />
          <BrandIcon base={item.iconBase} tone="hover" size={28} className="hidden group-hover:block" />
        </span>
      )}
      <span className="relative min-w-0 flex-1">
        <span className="mb-1 flex flex-wrap items-center gap-2">
          <span className="font-display text-xl font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[#FF6A00] sm:text-2xl">
            {item.label}
          </span>
          {item.badge && (
            <span className="rounded-full border border-[#FF6A00]/25 bg-[#FF6A00]/12 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#FF6A00]">
              {item.badge}
            </span>
          )}
        </span>
        <span className="block max-w-xl text-[13px] leading-relaxed text-[var(--text-secondary)] sm:text-sm">
          {item.description}
        </span>
      </span>
      <span className="mega-link-arrow relative hidden shrink-0 self-center opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:flex">
        <BrandIcon base={brandIcons.cta.startProject} tone="orange" size={18} />
      </span>
    </MegaNavTarget>
  );
}

function MegaLinkRow({
  item,
  isOpen,
  onNavigate,
}: {
  item: MegaLink;
  isOpen: boolean;
  onNavigate: () => void;
}) {
  return (
    <MegaNavTarget
      href={item.href}
      isOpen={isOpen}
      onNavigate={onNavigate}
      className="mega-link-row group relative flex items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all duration-200 hover:border-[#FF6A00]/15 hover:bg-[var(--surface)] hover:shadow-[var(--shadow-sm)]"
    >
      <span className="absolute bottom-2 left-0 top-2 w-[2px] rounded-full bg-transparent transition-colors duration-200 group-hover:bg-[#FF6A00]" />
      {item.imageSrc ? (
        <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] shadow-sm transition-all duration-200 group-hover:border-[#FF6A00]/40">
          <img
            src={item.imageSrc}
            alt={item.label}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </span>
      ) : (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] transition-all duration-200 group-hover:border-[#FF6A00]/30 group-hover:bg-[#FF6A00]/8">
          <BrandIcon base={item.iconBase} tone="base" size={20} className="group-hover:hidden" />
          <BrandIcon base={item.iconBase} tone="hover" size={20} className="hidden group-hover:block" />
        </span>
      )}
      <span className="min-w-0 flex-1 pt-0.5">
        <span className="mb-0.5 flex flex-wrap items-center gap-1.5">
          <span className="text-[13px] font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[#FF6A00]">
            {item.label}
          </span>
          {item.badge && (
            <span className="rounded-full bg-[#FF6A00]/12 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide text-[#FF6A00]">
              {item.badge}
            </span>
          )}
        </span>
        <span className="block text-[11px] leading-snug text-[var(--text-secondary)] line-clamp-2">
          {item.description}
        </span>
      </span>
      <span className="mega-link-arrow mt-1 shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-70">
        <BrandIcon base={brandIcons.ui.chevron} tone="orange" size={14} className="-rotate-90" />
      </span>
    </MegaNavTarget>
  );
}

function MegaPromoAside({
  panel,
  isOpen,
  onNavigate,
}: {
  panel: MegaPanel;
  isOpen: boolean;
  onNavigate: () => void;
}) {
  const whatsappUrl =
    SOCIAL_LINKS.find((s) => s.icon === "whatsapp")?.url ?? "/contact";

  return (
    <aside className="mega-promo-aside relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl border border-[#FF6A00]/15 lg:min-h-[400px]">
      {panel.promo.imageSrc && (
        <Image
          src={panel.promo.imageSrc}
          alt=""
          fill
          priority
          className="object-cover opacity-45"
          sizes="420px"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/95 via-[#0A0A0A]/88 to-[#0A0A0A]/75" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF6A00]/20 blur-3xl"
      />

      <div className="relative z-[1] flex flex-col gap-5 p-6">
        <div className="flex items-center justify-between gap-3">
          <Image
            src={brandIcons.ui.muMarkAnimated}
            alt=""
            width={40}
            height={40}
            priority
            className="h-10 w-10 mu-mark-animated"
          />
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#FFB347]/90">
            Software Agency
          </span>
        </div>

        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFB347]/80">
            Why work with us
          </p>
          <h3 className="font-display text-2xl font-semibold leading-tight text-[#FFF7ED] sm:text-[1.65rem]">
            {panel.promo.title}
          </h3>
          <p className="mt-3 text-[13px] leading-relaxed text-white/62">{panel.promo.text}</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2.5 backdrop-blur-sm"
            >
              <p className="font-display text-base font-semibold text-[#FFF7ED] sm:text-lg">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[8px] font-semibold uppercase leading-tight tracking-wide text-white/45">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-[1] space-y-3 border-t border-white/10 p-6 pt-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
          {PERSONAL_INFO.locationRemote}
        </p>
        <Link
          href={panel.promo.ctaHref}
          onClick={onNavigate}
          tabIndex={isOpen ? 0 : -1}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6A00] py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-all hover:brightness-110 hover:shadow-[0_8px_28px_rgba(255,106,0,0.35)]"
        >
          {panel.promo.ctaLabel}
          <BrandIcon base={brandIcons.cta.startProject} tone="white" size={14} />
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={isOpen ? 0 : -1}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#FFB347] transition-colors hover:border-[#FF6A00]/40 hover:bg-white/[0.07]"
        >
          WhatsApp
          <BrandIcon base={brandIcons.cta.whatsapp} tone="orange" size={14} />
        </a>
      </div>
    </aside>
  );
}

function MegaMenuInner({
  megaKey,
  isOpen,
  onNavigate,
}: {
  megaKey: MegaKey;
  isOpen: boolean;
  onNavigate: () => void;
}) {
  const panel = HEADER_MEGA[megaKey];
  const sections = getPanelSections(panel);
  const featured = getFeaturedLink(sections);
  const sectionCount = sections.length;

  return (
    <>
      <div aria-hidden className="mega-menu-grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent opacity-90"
      />
      <Image
        src={brandIcons.images.glowOrb}
        alt=""
        width={520}
        height={520}
        priority
        className="pointer-events-none absolute -right-24 -top-32 h-[22rem] w-[22rem] opacity-[0.22]"
      />

      <div className="layout-wrap relative grid w-full grid-cols-1 gap-8 py-8 lg:grid-cols-[1.72fr_0.78fr] lg:gap-10 lg:py-10 xl:gap-12">
        <div className="max-h-[min(74vh,700px)] overflow-y-auto overscroll-contain pr-1 [-ms-overflow-style:none] [scrollbar-width:thin]">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2">
                <BrandIcon base={brandIcons.ui.divider} tone="orange" size={16} />
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF6A00]/85">
                  {panel.eyebrow}
                </p>
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-[2rem]">
                {panel.trigger}
              </h2>
            </div>
            <Link
              href={panel.href}
              onClick={onNavigate}
              tabIndex={isOpen ? 0 : -1}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--text-primary)] transition-all hover:border-[#FF6A00]/40 hover:text-[#FF6A00] hover:shadow-[var(--shadow-sm)]"
            >
              View all {panel.trigger.toLowerCase()}
              <BrandIcon base={brandIcons.cta.startProject} tone="orange" size={14} />
            </Link>
          </div>

          {featured && (
            <div className="mb-6">
              <MegaFeaturedCard item={featured} isOpen={isOpen} onNavigate={onNavigate} />
            </div>
          )}

          <div className={cn("grid gap-6 lg:gap-8", sectionGridClass(sectionCount))}>
            {sections.map((section, sectionIndex) => (
              <div key={section.id} className="min-w-0">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-[10px] font-semibold text-[#FF6A00]/70">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-0.5">
                  {section.links
                    .filter((link) => link.id !== featured?.id)
                    .map((item) => (
                      <MegaLinkRow
                        key={item.id}
                        item={item}
                        isOpen={isOpen}
                        onNavigate={onNavigate}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <MegaPromoAside panel={panel} isOpen={isOpen} onNavigate={onNavigate} />
      </div>
    </>
  );
}

export function MegaMenuPanels({
  openMega,
  reduceMotion,
  keepOpen,
  scheduleClose,
  onNavigate,
}: {
  openMega: MegaKey | null;
  reduceMotion: boolean | null;
  keepOpen: (key: MegaKey) => void;
  scheduleClose: () => void;
  onNavigate: () => void;
}) {
  return (
    <AnimatePresence initial={false}>
      {openMega && (
        <motion.div
          key="mega-menu-shell"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -3 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -3 }}
          transition={{
            duration: HEADER_MOTION.panelDuration,
            ease: HEADER_MOTION.ease,
          }}
          onMouseEnter={() => keepOpen(openMega)}
          onMouseLeave={scheduleClose}
          className="mega-menu-panel pointer-events-auto absolute left-0 right-0 z-[1] overflow-hidden border-b border-[var(--border)]"
        >
          <MegaMenuInner megaKey={openMega} isOpen onNavigate={onNavigate} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
