"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  HOME_SERVICES,
  HOME_SERVICES_COPY,
  type ServiceItem,
} from "@/data/services";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandIcons } from "@/lib/brandAssets";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function HomeServicesSection() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(
    HOME_SERVICES.find((service) => service.id === "ai-agentic")?.id ??
      HOME_SERVICES[0]?.id ??
      ""
  );

  const active =
    HOME_SERVICES.find((service) => service.id === activeId) ?? HOME_SERVICES[0];

  return (
    <section
      id="home-services"
      aria-label="Services"
      className="relative isolate overflow-hidden bg-[#0A0A0A] pt-6 pb-14 sm:pt-7 sm:pb-16 md:pt-8 md:pb-20 lg:pt-10 lg:pb-24"
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
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
          <span className="section-eyebrow">{HOME_SERVICES_COPY.eyebrow}</span>
          <div className="fancy-divider mx-auto" />

          <h2 className="font-display text-[2.125rem] leading-[1.08] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem]">
            {HOME_SERVICES_COPY.title}{" "}
            <span className="text-gradient italic">
              {HOME_SERVICES_COPY.titleAccent}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[42rem] text-[0.95rem] leading-[1.75] text-[#FFF7ED]/78 sm:mt-6 sm:text-base md:text-[1.05rem]">
            {HOME_SERVICES_COPY.support}
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-8 xl:gap-10">
          <div className="min-w-0 overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0F0F0F]">
            <div className="border-b border-white/[0.08] px-4 py-4 sm:px-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF6A00]">
                Capability areas
              </p>
            </div>

            <div className="divide-y divide-white/[0.08]">
              {HOME_SERVICES.map((service, index) => (
                <ServicePracticeRow
                  key={service.id}
                  service={service}
                  index={index}
                  active={active.id === service.id}
                  reduceMotion={reduceMotion}
                  onActivate={() => setActiveId(service.id)}
                />
              ))}
            </div>
          </div>

          <aside className="relative">
            <div className="sticky top-28 overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={brandIcons.images.servicesFeatured}
                  alt="Muhammad Usman — services showcase"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover object-[64%_center]"
                  priority={false}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.12)_0%,rgba(10,10,10,0.18)_26%,rgba(10,10,10,0.88)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,106,0,0.18),transparent_55%)]" />

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: easeOut }}
                    className="absolute inset-x-0 bottom-0 p-5 sm:p-6 xl:p-7"
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF6A00]/35 bg-[#0A0A0A]/70 backdrop-blur-md">
                          <BrandIcon
                            base={active.iconBase}
                            tone="orange"
                            size={24}
                          />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF6A00]">
                            {String(
                              HOME_SERVICES.findIndex((service) => service.id === active.id) + 1
                            ).padStart(2, "0")}{" "}
                            / 05
                          </p>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FFF7ED]/55">
                            {active.eyebrow}
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-display text-[1.75rem] leading-[1.06] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2rem]">
                      {active.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#FFF7ED]/76 sm:text-[15px]">
                      {active.description}
                    </p>
                    <p className="mt-4 text-[15px] font-medium leading-relaxed text-[#FFF7ED]">
                      {active.outcome}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {active.homeTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#FF6A00]/24 bg-[#0A0A0A]/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FFB347]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {active.deliverables.slice(0, 4).map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-[#FFF7ED]/70"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/services#${active.id}`}
                      className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#FFB347] transition hover:text-[#FF6A00]"
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

        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFF7ED]/40 sm:text-xs">
          {HOME_SERVICES_COPY.footerLine}
        </p>

        <div className="mt-10 flex w-full flex-col gap-2.5 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 lg:mt-14">
          <Link href="/contact" className="btn-action btn-action-primary group">
            {HOME_SERVICES_COPY.ctaPrimary}
            <BrandIcon
              base={brandIcons.cta.startProject}
              tone="black"
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
          <Link href="/services" className="btn-action btn-action-secondary group">
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

function ServicePracticeRow({
  service,
  index,
  active,
  reduceMotion,
  onActivate,
}: {
  service: ServiceItem;
  index: number;
  active: boolean;
  reduceMotion: boolean | null;
  onActivate: () => void;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : index * 0.04,
        ease: easeOut,
      }}
      style={{ opacity: 1 }}
    >
      <Link
        href={`/services#${service.id}`}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        className={`group relative block w-full px-4 py-5 text-left transition-colors duration-300 sm:px-5 sm:py-6 ${
          active ? "bg-white/[0.04]" : "bg-transparent hover:bg-white/[0.02]"
        }`}
      >
        <span
          aria-hidden
          className={`absolute inset-y-0 left-0 w-[2px] origin-top bg-[#FF6A00] transition-transform duration-500 ${
            active ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
          }`}
        />

        <div className="flex items-start gap-4">
          <span
            className={`mt-1 font-mono text-[11px] font-semibold tracking-[0.14em] sm:text-xs ${
              active ? "text-[#FF6A00]" : "text-[#FFF7ED]/30"
            }`}
          >
            {number}
          </span>

          <div className="flex min-w-0 flex-1 items-start gap-4">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                active
                  ? "border-[#FF6A00]/35 bg-[#FF6A00]/10"
                  : "border-white/10 bg-white/[0.03] group-hover:border-[#FF6A00]/25"
              }`}
            >
              <BrandIcon
                base={service.iconBase}
                tone={active ? "orange" : "white"}
                size={22}
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <h3
                  className={`font-display text-[1.35rem] leading-[1.08] tracking-[-0.025em] transition-colors duration-300 sm:text-[1.55rem] ${
                    active ? "text-[#FFF7ED]" : "text-[#FFF7ED]/88"
                  }`}
                >
                  {service.shortTitle}
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFB347]/70">
                  {service.eyebrow}
                </span>
              </div>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#FFF7ED]/62 sm:text-[15px]">
                {service.description}
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[#FFF7ED]">
                {service.outcome}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {service.homeTags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                      active
                        ? "border-[#FF6A00]/24 bg-[#FF6A00]/8 text-[#FFB347]"
                        : "border-white/10 text-[#FFF7ED]/45"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
