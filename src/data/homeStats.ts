import type { Stat } from "@/types";

/** Homepage — Delivery / proof stats (after tech stack). */
export const HOME_STATS_COPY = {
  eyebrow: "Proof",
  title: "Numbers that reflect",
  titleAccent: "real delivery.",
  support:
    "Production products, global clients, and reliable communication. What founders look for before a build.",
  featuredNote: "Shipped end to end across frontend, backend, AI, and cloud.",
  footer: "Full-stack · AI engineering · Direct partnership",
  markets: ["USA", "UK", "KSA", "UAE", "Remote"] as const,
} as const;

export const HOME_STATS: Stat[] = [
  {
    value: 2,
    suffix: "+",
    label: "Years Engineering Systems",
    icon: "Calendar",
    detail: "From MVP to production-ready enterprise platforms.",
    featured: true,
  },
  {
    value: 40,
    suffix: "%",
    label: "Latency Reduction",
    icon: "Zap",
    detail: "Consistent optimization via PostgreSQL indexing and Redis caching layers.",
  },
  {
    value: 5,
    suffix: "+",
    label: "Production AI Architectures",
    icon: "BrainCircuit",
    detail: "RAG, LangGraph agents, and multi-tenant SaaS integration.",
  },
  {
    value: 100,
    suffix: "%",
    label: "HIPAA Compliant Delivery",
    icon: "ShieldCheck",
    detail: "Secure architecture, RBAC, and strict at-rest data protection.",
  },
];
