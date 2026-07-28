import { PERSONAL_INFO } from "@/lib/constants";

/** Homepage Section 1 — Trust / global proof strip (after hero). */
export const TRUST_STRIP = {
  eyebrow: "Global software delivery",
  availability: PERSONAL_INFO.availabilityText,
  regionsLabel: "Serving clients across",
  regions: ["USA", "UK", "Canada", "Australia", "UAE", "Remote"] as const,
  capabilities: ["Full-stack", "AI / RAG", "SaaS & Mobile"] as const,
  proof: ["2+ years shipping", "Production systems", "Direct partnership"] as const,
} as const;
