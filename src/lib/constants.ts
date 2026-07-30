import type { NavLink, SocialLink, PhilosophyItem } from "@/types";

// ─────────────────────────────────────────
// PERSONAL INFO
// ─────────────────────────────────────────
export const PERSONAL_INFO = {
  name: "Muhammad Usman",
  firstName: "Muhammad",
  lastName: "Usman",
  role: "Full-Stack & AI Engineer",
  roleExtended:
    "Full-Stack · AI Engineer — Next.js, Python, FastAPI, PostgreSQL/pgvector, Redis, LangGraph & Direct LLM APIs",
  tagline:
    "I design and build production software with Next.js, Python, FastAPI, PostgreSQL/pgvector, Redis, LangGraph, and direct LLM APIs for startups and growing businesses.",
  bio:
    "Full-stack and AI engineer building production-ready software across web platforms, backend APIs, React Native mobile apps, cloud infrastructure, and applied AI systems. My core stack includes Next.js, Python, FastAPI, PostgreSQL with pgvector, Redis, LangGraph, and direct LLM APIs, supported by TypeScript, Docker, AWS, and production-focused delivery practices.",
  bioShort:
    "Full-stack & AI engineer using Next.js, Python, FastAPI, PostgreSQL/pgvector, Redis, LangGraph, and direct LLM APIs.",
  location: "Islamabad, Pakistan",
  locationRemote: "USA · UK · KSA · UAE · Remote",
  email: "official.muammadusman01@gmail.com",
  phone: "+92 (313) 52-63300",
  availability: true,
  availabilityText: "Available for new projects",
  cvUrl: "/usman_cv.pdf",
  techStack: ["Next.js", "Python/FastAPI", "PostgreSQL/pgvector", "Redis", "LangGraph"],
  techStackFull: [
    "React 18",
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Redux Toolkit",
    "Zustand",
    "TanStack Query",
    "Node.js",
    "Express.js",
    "NestJS",
    "PostgreSQL",
    "pgvector",
    "MongoDB",
    "Supabase",
    "Redis",
    "Prisma",
    "Docker",
    "AWS",
    "Vercel",
    "Stripe",
    "OpenAI",
    "Direct LLM APIs",
    "LangChain",
    "LangGraph",
    "RAG",
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