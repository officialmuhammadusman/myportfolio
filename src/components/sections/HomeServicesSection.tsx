"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  HOME_SERVICES,
  HOME_SERVICES_COPY,
  type ServiceItem,
} from "@/data/services";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandIcons } from "@/lib/brandAssets";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

/**
 * Section 2 — two-column services (list + featured panel).
 * Header: hero-scale title + support + CTAs stacked tightly.
 */
export function HomeServicesSection() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(HOME_SERVICES[0]?.id ?? "");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const active =
    HOME_SERVICES.find((s) => s.id === activeId) ?? HOME_SERVICES[0];

  return (
    <section
      id="home-services"
      aria-label="Services"
      className="relative isolate overflow-hidden bg-[#0A0A0A] pt-8 pb-14 sm:pt-9 sm:pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,106,0,0.13) 0%, transparent 58%)",
            "radial-gradient(ellipse 45% 40% at 85% 55%, rgba(255,106,0,0.07) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      <div className="layout-wrap relative z-10">
        {/* Centered agency intro: caption → gradient title → short description */}
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
          <span className="section-eyebrow">{HOME_SERVICES_COPY.eyebrow}</span>
          <div className="fancy-divider mx-auto" />

          <h2 className="font-display text-[2.125rem] leading-[1.08] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem]">
            {HOME_SERVICES_COPY.title}{" "}
            <span className="text-gradient italic">
              {HOME_SERVICES_COPY.titleAccent}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[34rem] text-[0.9375rem] leading-[1.7] text-[#FFF7ED]/78 sm:mt-6 sm:text-base md:text-[1.0625rem]">
            {HOME_SERVICES_COPY.support}
          </p>
        </header>

        {/* Two-column services — unchanged */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-10 xl:gap-14">
          <div className="min-w-0">
            <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {HOME_SERVICES.map((service, index) => (
                <ServiceRow
                  key={service.id}
                  service={service}
                  index={index}
                  active={activeId === service.id}
                  expanded={expandedId === service.id}
                  reduceMotion={reduceMotion}
                  onActivate={() => setActiveId(service.id)}
                  onToggleExpand={() =>
                    setExpandedId((id) =>
                      id === service.id ? null : service.id
                    )
                  }
                />
              ))}
            </ul>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFF7ED]/40 sm:text-xs">
              {HOME_SERVICES_COPY.footerLine}
            </p>
          </div>

          <aside className="relative hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-2xl border border-white/10 bg-[#141414]/80 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={brandIcons.images.servicesFeatured}
                  alt="Muhammad Usman — software agency delivery"
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-cover object-[62%_center]"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/35 to-transparent" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, y: 16, clipPath: "inset(0 0 12% 0)" }
                    }
                    animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
                    exit={
                      reduceMotion
                        ? undefined
                        : { opacity: 0, y: -10, transition: { duration: 0.2 } }
                    }
                    transition={{ duration: 0.45, ease: easeOut }}
                    className="absolute inset-x-0 bottom-0 p-6 xl:p-7"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-[#FF6A00]/30 bg-[#0A0A0A]/70 backdrop-blur-md">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={active.tileSrc}
                        alt=""
                        width={36}
                        height={36}
                        className="h-9 w-9 object-contain"
                      />
                    </div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[#FF6A00]">
                      {String(
                        HOME_SERVICES.findIndex((s) => s.id === active.id) + 1
                      ).padStart(2, "0")}{" "}
                      · {active.eyebrow}
                    </p>
                    <h3 className="font-display text-2xl tracking-tight text-[#FFF7ED] xl:text-[1.75rem]">
                      {active.shortTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#FFF7ED]/72">
                      {active.outcome}
                    </p>
                    <Link
                      href={`/services#${active.id}`}
                      className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#FFB347] transition hover:text-[#FF6A00]"
                    >
                      Explore capability
                      <ArrowUpRight size={14} />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </aside>
        </div>

        {/* CTAs after services content */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12 lg:mt-14">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#FF6A00] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#E85D00] hover:shadow-[0_12px_40px_rgba(255,106,0,0.4)] sm:px-7 sm:text-[13px]"
          >
            {HOME_SERVICES_COPY.ctaPrimary}
            <BrandIcon
              base={brandIcons.cta.startProject}
              tone="black"
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/[0.05] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-[#FFF7ED] backdrop-blur-sm transition-all duration-300 hover:border-[#FF6A00]/55 hover:bg-white/[0.08] sm:px-7 sm:text-[13px]"
          >
            {HOME_SERVICES_COPY.ctaSecondary}
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

function ServiceRow({
  service,
  index,
  active,
  expanded,
  reduceMotion,
  onActivate,
  onToggleExpand,
}: {
  service: ServiceItem;
  index: number;
  active: boolean;
  expanded: boolean;
  reduceMotion: boolean | null;
  onActivate: () => void;
  onToggleExpand: () => void;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.li
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : index * 0.07,
        ease: easeOut,
      }}
      style={{ opacity: 1 }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={cn(
        "group relative transition-colors duration-300",
        active ? "bg-white/[0.035]" : "hover:bg-white/[0.02]"
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-0 left-0 w-[2px] origin-top bg-[#FF6A00] transition-transform duration-500 ease-out",
          active ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
        )}
      />

      <Link
        href={`/services#${service.id}`}
        className="flex flex-col gap-3 px-3 py-5 sm:px-4 sm:py-6 md:flex-row md:items-center md:gap-6 lg:gap-8"
        onClick={(e) => {
          if (
            typeof window !== "undefined" &&
            window.matchMedia("(max-width: 1023px)").matches
          ) {
            if (!expanded) {
              e.preventDefault();
              onActivate();
              onToggleExpand();
            }
          }
        }}
      >
        <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4 md:items-center">
          <span
            className={cn(
              "mt-0.5 font-mono text-[11px] font-semibold tracking-[0.14em] transition-colors sm:text-xs",
              active ? "text-[#FF6A00]" : "text-[#FFF7ED]/35"
            )}
          >
            {number}
          </span>

          <div
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 sm:h-12 sm:w-12",
              active
                ? "border-[#FF6A00]/45 bg-[#FF6A00]/12"
                : "border-white/10 bg-white/[0.03] group-hover:border-[#FF6A00]/30"
            )}
          >
            <span className="relative h-6 w-6">
              <BrandIcon
                base={service.iconBase}
                tone="white"
                size={24}
                className={cn(
                  "absolute inset-0 transition-opacity duration-300",
                  active ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                )}
              />
              <BrandIcon
                base={service.iconBase}
                tone="orange"
                size={24}
                className={cn(
                  "absolute inset-0 transition-opacity duration-300",
                  active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}
              />
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3
                className={cn(
                  "font-display text-xl tracking-tight text-[#FFF7ED] transition-transform duration-300 sm:text-2xl md:text-[1.65rem]",
                  active && "md:translate-x-1"
                )}
              >
                {service.shortTitle}
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFB347]/70">
                {service.eyebrow}
              </span>
            </div>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-[#FFF7ED]/58 sm:text-[15px]">
              {service.outcome}
            </p>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden lg:hidden"
                >
                  <p className="mt-3 text-sm text-[#FFF7ED]/65">
                    {service.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.homeTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#FFF7ED]/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-3 hidden flex-wrap gap-2 md:flex">
              {service.homeTags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    "rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors",
                    active
                      ? "border-[#FF6A00]/30 bg-[#FF6A00]/10 text-[#FFB347]"
                      : "border-white/10 text-[#FFF7ED]/45"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <span
          className={cn(
            "ml-auto hidden items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 md:inline-flex",
            active
              ? "translate-x-0 text-[#FF6A00] opacity-100"
              : "translate-x-1 text-[#FFF7ED]/35 opacity-70 group-hover:translate-x-0 group-hover:text-[#FFB347] group-hover:opacity-100"
          )}
        >
          Explore
          <ArrowUpRight size={14} />
        </span>
      </Link>
    </motion.li>
  );
}
