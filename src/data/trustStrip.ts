import { PERSONAL_INFO } from "@/lib/constants";

/** Homepage Section 1 — Trust / global proof strip (after hero). */
export const TRUST_STRIP = {
  eyebrow: "Full-stack and AI delivery",
  availability: PERSONAL_INFO.availabilityText,
  regionsLabel: "Serving clients across",
  regions: ["USA", "UK", "Canada", "Australia", "UAE", "Remote"] as const,
  capabilities: ["Next.js platforms", "FastAPI backends", "AI / RAG systems"] as const,
  proof: ["PostgreSQL/pgvector + Redis", "LangGraph + direct LLM APIs", "Direct technical partnership"] as const,
} as const;
