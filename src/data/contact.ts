import { brandIcons } from "@/lib/brandAssets";
import { CONTACT_SUBJECTS, PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";

const S = brandIcons.services;
const C = brandIcons.cta;
const A = brandIcons.about;

export function contactSubjectHref(subject: string) {
  return `/contact?subject=${encodeURIComponent(subject)}`;
}

export const CONTACT_CHANNELS = [
  {
    id: "email",
    label: "Email",
    description: "Best for detailed briefs, specs & attachments.",
    href: `mailto:${PERSONAL_INFO.email}`,
    iconBase: C.email,
    highlight: false,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    description: "Quick chat — popular with KSA, UAE & remote clients.",
    href: SOCIAL_LINKS.find((s) => s.icon === "whatsapp")?.url ?? "/contact",
    iconBase: C.whatsapp,
    highlight: true,
  },
  {
    id: "phone",
    label: "Phone",
    description: PERSONAL_INFO.phone,
    href: "tel:+923135263300",
    iconBase: C.letsTalk,
    highlight: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "Connect for partnerships & long-term roles.",
    href: SOCIAL_LINKS.find((s) => s.icon === "linkedin")?.url ?? "#",
    iconBase: brandIcons.social.linkedin,
    highlight: false,
  },
] as const;

export const CONTACT_INQUIRIES = [
  {
    subject: "Full-Stack Product Build" as const,
    description: "SaaS dashboards, admin panels, billing & multi-tenant products.",
    iconBase: S.fullstack,
  },
  {
    subject: "AI / RAG / Agentic System" as const,
    description: "LangGraph, corrective RAG, agents & production LLM pipelines.",
    iconBase: S.ai,
  },
  {
    subject: "Backend & API Development" as const,
    description: "NestJS, REST, WebSockets, auth, OpenAPI & microservices.",
    iconBase: S.backend,
  },
  {
    subject: "MVP / Startup Launch" as const,
    description: "Scope → build → deploy for founders validating ideas fast.",
    iconBase: S.mvp,
  },
  {
    subject: "Freelance / Upwork Project" as const,
    description: "Fixed-scope delivery with clear milestones & communication.",
    iconBase: C.startProject,
  },
  {
    subject: "General Inquiry" as const,
    description: "Questions, intros, speaking, or anything else.",
    iconBase: A.process,
  },
] as const;

export function isValidContactSubject(value: string | null): value is (typeof CONTACT_SUBJECTS)[number] {
  return CONTACT_SUBJECTS.includes(value as (typeof CONTACT_SUBJECTS)[number]);
}
