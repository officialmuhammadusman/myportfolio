"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion, useReducedMotion } from "framer-motion";
import { HOME_STATS, HOME_STATS_COPY } from "@/data/homeStats";
import { brandIcons } from "@/lib/brandAssets";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function StatsSection() {
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    fallbackInView: true,
  });

  const featured = HOME_STATS.find((s) => s.featured) ?? HOME_STATS[0];
  const supporting = HOME_STATS.filter((s) => s !== featured);

  return (
    <section
      ref={ref}
      aria-label="Delivery stats"
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
        {/* Same header system as Services / How I Work / Tech Stack */}
        <motion.header
          initial={false}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: easeOut }}
          style={{ opacity: 1 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14"
        >
          <span className="section-eyebrow">{HOME_STATS_COPY.eyebrow}</span>
          <div className="fancy-divider mx-auto" />
          <h2 className="font-display text-[2.125rem] leading-[1.08] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem]">
            {HOME_STATS_COPY.title}{" "}
            <span className="text-gradient italic">
              {HOME_STATS_COPY.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[34rem] text-[0.9375rem] leading-[1.7] text-[#FFF7ED]/78 sm:mt-6 sm:text-base md:text-[1.0625rem]">
            {HOME_STATS_COPY.support}
          </p>
        </motion.header>

        <motion.div
          initial={false}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: easeOut }}
          style={{ opacity: 1 }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.38)]"
        >
          <div className="absolute inset-0">
            <Image
              src={brandIcons.images.statsAtmosphere}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center opacity-55"
              aria-hidden
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.35)_0%,rgba(10,10,10,0.62)_38%,rgba(10,10,10,0.92)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,106,0,0.16),transparent_55%)]" />
          </div>

          <div className="relative z-10 grid gap-8 p-6 sm:gap-10 sm:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-10 lg:p-10 xl:p-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF6A00]">
                Highlight metric
              </p>
              <div className="mt-4 flex items-end gap-1 font-display text-[5rem] leading-none tracking-[-0.05em] text-[#FFF7ED] sm:text-[6.25rem] md:text-[7.25rem] lg:text-[7.75rem]">
                <span>
                  {inView && !reduceMotion ? (
                    <CountUp end={featured.value} duration={1.9} />
                  ) : (
                    featured.value
                  )}
                </span>
                <span className="text-[#FF6A00]">{featured.suffix}</span>
              </div>
              <h3 className="mt-4 max-w-[18ch] font-display text-2xl tracking-tight text-[#FFF7ED] sm:text-[1.85rem]">
                {featured.label}
              </h3>
              <p className="mt-3 max-w-[30rem] text-sm leading-relaxed text-[#FFF7ED]/68 sm:text-[0.975rem]">
                {featured.detail ?? HOME_STATS_COPY.featuredNote}
              </p>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFF7ED]/4">
                {HOME_STATS_COPY.footer} · {HOME_STATS_COPY.markets.join(" · ")}
              </p>
            </div>

            <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/[0.1] bg-black/35 backdrop-blur-sm sm:grid-cols-3 lg:grid-cols-1">
              {supporting.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={false}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.4,
                    delay: reduceMotion ? 0 : 0.1 + i * 0.06,
                    ease: easeOut,
                  }}
                  style={{ opacity: 1 }}
                  className={[
                    "flex flex-col gap-1.5 p-4 sm:p-5",
                    i < supporting.length - 1
                      ? "border-b border-white/[0.08] sm:border-b-0 sm:border-r lg:border-b lg:border-r-0"
                      : "",
                  ].join(" ")}
                >
                  <div className="font-display text-[2rem] leading-none tracking-[-0.04em] text-[#FFF7ED] sm:text-[2.25rem]">
                    {inView && !reduceMotion ? (
                      <CountUp
                        end={stat.value}
                        duration={1.6}
                        delay={0.15 + i * 0.08}
                      />
                    ) : (
                      stat.value
                    )}
                    <span className="text-[#FF6A00]">{stat.suffix}</span>
                  </div>
                  <p className="text-[12px] font-semibold leading-snug text-[#FFF7ED]/85 sm:text-[13px]">
                    {stat.label}
                  </p>
                  {stat.detail ? (
                    <p className="text-[11px] leading-snug text-[#FFF7ED]/45 sm:text-xs">
                      {stat.detail}
                    </p>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
