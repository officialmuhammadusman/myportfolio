import { brandIcons } from "@/lib/brandAssets";

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  outcome: string;
  deliverables: string[];
  stack: string[];
  /** Brand icon base path (no extension / tone) */
  iconBase: string;
  /** Large tile mark for panels */
  tileSrc: string;
  homeTags: string[];
}

/**
 * Services mapped to Muhammad Usman's real delivery stack.
 * Copy style: outcome-first (Thoughtworks / Devsinc pattern), not buzzword lists.
 */
export const SERVICES: ServiceItem[] = [
  {
    id: "product-engineering",
    title: "Full-Stack Product Engineering",
    shortTitle: "Product Engineering",
    eyebrow: "Build",
    description:
      "Production web apps with React, Next.js, and TypeScript — fast UI, clean architecture, and deploy-ready code for startups and growing businesses.",
    outcome: "Ship a scalable product, not a prototype that breaks.",
    deliverables: [
      "Next.js 15 / React 18 apps",
      "TypeScript + Tailwind UI systems",
      "Framer Motion experiences",
      "State: Redux Toolkit / Zustand / TanStack Query",
      "Jest & React Testing Library",
    ],
    stack: [
      "React 18",
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
    ],
    iconBase: brandIcons.services.fullstack,
    tileSrc: `${brandIcons.services.fullstackTile}.svg`,
    homeTags: ["Next.js", "React", "TypeScript", "SaaS"],
  },
  {
    id: "ai-agentic",
    title: "AI, RAG & Agentic Systems",
    shortTitle: "AI & Agentic",
    eyebrow: "Intelligence",
    description:
      "LLM features that work in production — RAG pipelines, LangChain/LangGraph workflows, and multi-agent systems connected to your product and data.",
    outcome: "Turn AI into a business feature clients can trust.",
    deliverables: [
      "OpenAI / Gemini API integrations",
      "Corrective RAG & Self-RAG flows",
      "LangChain / LangGraph agents",
      "Pinecone / ChromaDB vector search",
      "Multi-agent & tool-calling workflows",
    ],
    stack: [
      "OpenAI",
      "Gemini",
      "LangChain",
      "LangGraph",
      "RAG",
      "Pinecone",
      "ChromaDB",
      "Agentic AI",
    ],
    iconBase: brandIcons.services.ai,
    tileSrc: `${brandIcons.services.aiTile}.svg`,
    homeTags: ["RAG", "LangGraph", "OpenAI", "Agents"],
  },
  {
    id: "backend-apis",
    title: "Backend, APIs & Realtime",
    shortTitle: "Backend & APIs",
    eyebrow: "Systems",
    description:
      "Secure Node.js backends with Express/NestJS — REST APIs, auth, WebSockets, and microservice-ready architecture documented with OpenAPI/Swagger.",
    outcome: "Reliable APIs that scale with your users.",
    deliverables: [
      "Express.js / NestJS services",
      "REST + OpenAPI / Swagger",
      "JWT / OAuth2 authentication",
      "WebSockets / Socket.io realtime",
      "Microservices-ready structure",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST",
      "JWT",
      "OAuth2",
      "Socket.io",
      "Microservices",
    ],
    iconBase: brandIcons.services.backend,
    tileSrc: `${brandIcons.services.backendTile}.svg`,
    homeTags: ["NestJS", "REST", "Auth", "Realtime"],
  },
  {
    id: "data-cloud",
    title: "Data, Cloud & Integrations",
    shortTitle: "Data & Cloud",
    eyebrow: "Platform",
    description:
      "Databases, caching, payments, media, and cloud deploy — PostgreSQL, MongoDB, Supabase, Redis, Prisma, Stripe, AWS, Docker, and Vercel.",
    outcome: "A solid data and cloud foundation for growth.",
    deliverables: [
      "PostgreSQL / MongoDB / Supabase",
      "Redis caching & Prisma ORM",
      "Query optimization & indexing",
      "Stripe + Cloudinary integrations",
      "Docker, AWS, Vercel delivery",
    ],
    stack: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Redis",
      "Prisma",
      "Stripe",
      "AWS",
      "Docker",
      "Vercel",
    ],
    iconBase: brandIcons.services.cloud,
    tileSrc: `${brandIcons.services.cloudTile}.svg`,
    homeTags: ["PostgreSQL", "AWS", "Docker", "Stripe"],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps (React Native)",
    shortTitle: "Mobile Apps",
    eyebrow: "Mobile",
    description:
      "Cross-platform mobile products with React Native — polished UI, API-backed flows, and release-ready builds for iOS and Android.",
    outcome: "One codebase. Native feel. Production mobile.",
    deliverables: [
      "React Native app architecture",
      "Auth, notifications & offline-ready UX",
      "API integration with Nest/Node backends",
      "App store–ready build pipelines",
      "Shared design systems with web",
    ],
    stack: ["React Native", "TypeScript", "Expo", "REST APIs", "Push"],
    iconBase: brandIcons.services.mobile,
    tileSrc: `${brandIcons.services.mobileTile}.svg`,
    homeTags: ["React Native", "iOS", "Android", "Expo"],
  },
];

/** Homepage runway — all five capabilities in agency order */
export const HOME_SERVICES = SERVICES;

export const SERVICE_PROCESS = [
  {
    step: "01",
    title: "Discover",
    text: "Clarify goals, users, scope, and success metrics in a short kickoff.",
  },
  {
    step: "02",
    title: "Architect",
    text: "Choose the right stack — frontend, API, data, and AI — for speed and scale.",
  },
  {
    step: "03",
    title: "Build",
    text: "Weekly milestones, clean code, tests where it matters, and transparent updates.",
  },
  {
    step: "04",
    title: "Launch",
    text: "Deploy, document, hand over, and support so you can grow with confidence.",
  },
] as const;

export const HOME_SERVICES_COPY = {
  eyebrow: "Services",
  title: "Capabilities built",
  titleAccent: "to ship.",
  support:
    "End-to-end product engineering across web, AI, cloud, and mobile — from clear scope to production delivery.",
  ctaPrimary: "Start a Project",
  ctaSecondary: "View all services",
  footerLine: "Clear scope · Weekly progress · Production delivery",
} as const;


