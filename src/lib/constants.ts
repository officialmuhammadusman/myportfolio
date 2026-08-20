import type { NavLink, SocialLink, PhilosophyItem } from "@/types";

// ─────────────────────────────────────────
// PERSONAL INFO
// ─────────────────────────────────────────
export const PERSONAL_INFO = {
  name: "Muhammad Usman",
  firstName: "Muhammad",
  lastName: "Usman",
  role: "Full Stack & Applied AI Engineer",
  roleExtended:
    "Full Stack & Applied AI Engineer. Next.js, React, Node.js, NestJS, LangChain, LangGraph, PostgreSQL, and Direct LLM APIs",
  tagline:
    "I engineer scalable, production-grade web applications, secure backend systems, and agentic AI architectures for top-tier agencies and startups.",
  bio:
    "Full Stack and Applied AI Engineer with 2+ years of experience engineering scalable, production-grade web applications, secure backend systems, and agentic AI architectures. Proficient across the TypeScript ecosystem (Next.js, React, Node.js, NestJS) alongside modern LLM orchestration frameworks (LangChain, LangGraph). Proven track record of designing multi-tenant SaaS platforms, optimizing high-load PostgreSQL databases, enforcing HIPAA-compliant security standards, and implementing production RAG workflows.",
  bioShort:
    "Full Stack & Applied AI Engineer specializing in Next.js, React, NestJS, LangChain, and LangGraph.",
  location: "Rawalpindi / Islamabad, Pakistan",
  locationRemote: "Open to Remote and Relocation",
  email: "official.muhammadusman01@gmail.com",
  phone: "+92 313 526 3300",
  availability: true,
  availabilityText: "Available for new projects",
  cvUrl: "/usman_cv.pdf",
  techStack: ["Next.js", "NestJS", "PostgreSQL", "LangGraph", "LangChain", "Vector Search"],
  techStackFull: [
    "TypeScript",
    "JavaScript",
    "Python",
    "Next.js",
    "React",
    "React Native",
    "Node.js",
    "NestJS",
    "Express.js",
    "LangGraph",
    "LangChain",
    "Corrective RAG (C-RAG)",
    "Self-RAG",
    "Multi-Agent Systems",
    "OpenAI API",
    "Gemini API",
    "Vector Search",
    "PostgreSQL",
    "Supabase",
    "MongoDB",
    "Redis",
    "Pinecone",
    "ChromaDB",
    "Prisma ORM",
    "Docker",
    "AWS",
    "Vercel",
    "Stripe",
  ],
};

// ─────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ─────────────────────────────────────────
// SOCIAL LINKS
// ─────────────────────────────────────────
export const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    url: "https://github.com/officialmuhammadusman",
    icon: "github",
    label: "github.com/officialmuhammadusman",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammadusman-webdev",
    icon: "linkedin",
    label: "linkedin.com/in/muhammadusman-webdev",
  },
  {
    platform: "WhatsApp",
    url: "https://wa.me/923135263300",
    icon: "whatsapp",
    label: "+92 313 526 3300",
  },
];

// ─────────────────────────────────────────
// HOME STATS — re-exported from data/homeStats
// ─────────────────────────────────────────
export { HOME_STATS } from "@/data/homeStats";

// ─────────────────────────────────────────
// WORK PHILOSOPHY
// ─────────────────────────────────────────
export const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  {
    icon: "Code",
    statement:
      "I build software with long-term ownership in mind: clean architecture, clear boundaries, maintainable code, and systems that are easier to extend instead of rewrite.",
    highlight: "clean architecture and maintainable systems",
  },
  {
    icon: "Zap",
    statement:
      "Performance matters at every layer, from frontend rendering and API latency to database queries, streaming AI responses, and infrastructure costs in production.",
    highlight: "performance across UI, backend, and AI workloads",
  },
  {
    icon: "FileText",
    statement:
      "I keep delivery transparent with practical documentation, clear technical decisions, and communication that helps founders and teams understand what is being built and why.",
    highlight: "clear technical communication and documentation",
  },
  {
    icon: "Rocket",
    statement:
      "I focus on production readiness, not demo-only builds, with testing, deployment discipline, security checks, observability, and reliable handover for real business use.",
    highlight: "production-ready delivery with reliability practices",
  },
];

// ─────────────────────────────────────────
// CONTACT SUBJECTS
// ─────────────────────────────────────────
export const CONTACT_SUBJECTS = [
  "Full-Stack Product Build",
  "AI / RAG / Agentic System",
  "Backend & API Development",
  "MVP / Startup Launch",
  "Freelance / Upwork Project",
  "General Inquiry",
] as const;