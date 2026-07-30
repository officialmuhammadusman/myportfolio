import type { Stat } from "@/types";

/** Homepage — Delivery / proof stats (after tech stack). */
export const HOME_STATS_COPY = {
  eyebrow: "Proof",
  title: "Numbers that reflect",
  titleAccent: "real delivery.",
  support:
    "Production products, global clients, and reliable communication — the signals founders look for before starting a build.",
  featuredNote: "Shipped end-to-end — frontend, backend, AI, and cloud.",
  footer: "Full-stack · AI engineering · Direct partnership",
  markets: ["USA", "UK", "KSA", "UAE", "Remote"] as const,
} as const;

export const HOME_STATS: Stat[] = [
  {
    value: 5,
    suffix: "+",
    label: "Products live in production",
    icon: "Rocket",
    detail: "Real users. Real uptime. Built to ship and stay online.",
    featured: true,
  },
  {
    value: 5,
    suffix: "",
    label: "Markets served",
    icon: "Globe",
    detail: "USA · UK · KSA · UAE · Remote",
  },
  {
    value: 2,
    suffix: "+",
    label: "Years shipping systems",
    icon: "Calendar",
    detail: "From MVP to production-ready platforms.",
  },
  {
    value: 24,
    suffix: "h",
    label: "Typical response time",
    icon: "Clock",
    detail: "Clear communication. Fast founder feedback loops.",
  },
];
