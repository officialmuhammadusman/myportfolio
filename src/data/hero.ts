const BASE = "/muhammad_usman_hero_slider_updated";

export interface HeroSlide {
  id: string;
  src: string;
  src4k: string;
  alt: string;
  label: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  support: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "laptop-primary",
    src: `${BASE}/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/01-hero-laptop-primary-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — full-stack & SaaS product engineering",
    label: "SaaS",
    eyebrow: "Full-Stack · SaaS · Custom Software",
    title: "Ship SaaS & custom",
    titleAccent: "software that scales.",
    support:
      "Production-ready platforms — dashboards, billing, RBAC, subscriptions & business workflows — built with Next.js, React, TypeScript, Node.js, and PostgreSQL.",
  },
  {
    id: "desk-trust",
    src: `${BASE}/web-1080/02-hero-desk-trust-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/02-hero-desk-trust-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — AI and RAG engineering",
    label: "AI",
    eyebrow: "AI Engineer · RAG · LangGraph",
    title: "Build AI & RAG systems",
    titleAccent: "that stay grounded.",
    support:
      "LLM integrations with LangChain & LangGraph — Corrective RAG, Self-RAG, multi-agent supervisors, Pinecone/ChromaDB retrieval & SQL agents for production use.",
  },
  {
    id: "thinking-plan",
    src: `${BASE}/web-1080/03-hero-thinking-plan-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/03-hero-thinking-plan-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — mobile and web app development",
    label: "Mobile",
    eyebrow: "Web Apps · React Native · APIs",
    title: "Web & mobile apps",
    titleAccent: "from one engineer.",
    support:
      "Full-stack web with Next.js plus React Native mobile apps — club dashboards, player flows, realtime features, NestJS/Express APIs & OpenAPI-documented backends.",
  },
  {
    id: "client-delivery",
    src: `${BASE}/web-1080/04-hero-client-delivery-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/04-hero-client-delivery-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — client delivery and telemedicine platforms",
    label: "Deliver",
    eyebrow: "Telemedicine · HRMS · Marketplaces",
    title: "Domain modules",
    titleAccent: "already proven in production.",
    support:
      "Telemedicine booking & async reviews, HRMS with dynamic permissions, multi-vendor marketplaces, payments (Stripe/Webpay) & geolocation marketing tools.",
  },
  {
    id: "authority-standing",
    src: `${BASE}/web-1080/05-hero-authority-standing-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/05-hero-authority-standing-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — full-stack AI software agency",
    label: "Partner",
    eyebrow: "Software Agency · Remote Worldwide",
    title: "Your full-stack AI",
    titleAccent: "engineering partner.",
    support:
      "2+ years shipping production systems for founders & businesses — performance, security, maintainability & clear delivery across USA, UK, KSA, UAE & remote.",
  },
];

export const HERO_STATS: HeroStat[] = [
  { value: "5+", label: "Products in production" },
  { value: "2+", label: "Years of delivery" },
  { value: "5", label: "Global markets" },
  { value: "24h", label: "Client response" },
];

export const HERO_TECH_PROOF = [
  "Next.js 15",
  "React Native",
  "NestJS",
  "PostgreSQL",
  "LangGraph",
  "Stripe",
  "OpenAI",
  "AWS",
] as const;

export const HERO_SERVICE_PILLS = [
  "SaaS platforms",
  "Custom software",
  "Mobile apps",
  "AI / RAG",
  "Backend APIs",
  "HRMS & enterprise",
] as const;

export const HERO_OBJECT_POSITION = "72% center";

export const HERO_TRUST = [
  "Full-stack · AI engineer",
  "USA · UK · KSA · UAE · Remote",
  "SaaS · Mobile · RAG · APIs",
] as const;

export const HERO_AUTOPLAY_MS = 5000;

export const HERO_VIEWPORT_MIN_H = "min-h-[100dvh]";

export const HERO_HEADER_OFFSET = "pt-[68px] md:pt-[104px]";
