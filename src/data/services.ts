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
      "Production frontend engineering with Next.js, React, Tailwind CSS, Redux Toolkit, TanStack Query, and the supporting libraries needed to ship polished product experiences.",
    outcome: "Ship a scalable digital product, not just a polished prototype.",
    deliverables: [
      "Next.js / React product apps",
      "TypeScript + Tailwind design systems",
      "Framer Motion interactions",
      "Redux Toolkit / Zustand / TanStack Query state",
      "Testing and production UI quality",
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
    homeTags: ["Next.js", "React", "Tailwind", "TanStack Query"],
  },
  {
    id: "ai-agentic",
    title: "AI, RAG & Agentic Systems",
    shortTitle: "AI & Agentic",
    eyebrow: "Intelligence",
    description:
      "Applied AI systems that work in production, including direct LLM APIs, LangGraph workflows, RAG pipelines, pgvector retrieval, Redis-backed workflows, tool calling, and automation.",
    outcome: "Turn AI into a reliable product capability, not a demo feature.",
    deliverables: [
      "Direct LLM API integrations",
      "RAG pipelines with grounded retrieval",
      "LangChain / LangGraph agents",
      "pgvector / Pinecone / ChromaDB retrieval",
      "Redis, tool-calling, and agent workflows",
    ],
    stack: [
      "OpenAI",
      "Gemini",
      "Direct APIs",
      "LangChain",
      "LangGraph",
      "RAG",
      "pgvector",
      "Pinecone",
      "ChromaDB",
      "Agentic AI",
    ],
    iconBase: brandIcons.services.ai,
    tileSrc: `${brandIcons.services.aiTile}.svg`,
    homeTags: ["LangGraph", "Direct LLM APIs", "RAG", "Redis"],
  },
  {
    id: "backend-apis",
    title: "Backend, APIs & Realtime",
    shortTitle: "Backend & APIs",
    eyebrow: "Systems",
    description:
      "Secure backend engineering with Node.js, Express, NestJS, MongoDB, PostgreSQL, Python, FastAPI, and the supporting libraries needed for APIs, auth, realtime, and service reliability.",
    outcome: "Reliable backend architecture that scales with product growth.",
    deliverables: [
      "Node.js / Express / NestJS / FastAPI services",
      "REST + OpenAPI / Swagger",
      "JWT / OAuth2 authentication",
      "WebSockets / Socket.io realtime",
      "Retries, queues, and service resilience",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "FastAPI",
      "REST",
      "JWT",
      "OAuth2",
      "Socket.io",
      "Microservices",
    ],
    iconBase: brandIcons.services.backend,
    tileSrc: `${brandIcons.services.backendTile}.svg`,
    homeTags: ["Node.js", "Express", "NestJS", "FastAPI"],
  },
  {
    id: "data-cloud",
    title: "Data, Cloud & Integrations",
    shortTitle: "Data & Cloud",
    eyebrow: "Platform",
    description:
      "Data and platform foundations across PostgreSQL, pgvector, MongoDB, Redis, Supabase, Prisma, Docker, AWS, Vercel, and the integrations needed for secure scalable products.",
    outcome: "A stable product foundation for scale, performance, and reliability.",
    deliverables: [
      "PostgreSQL / pgvector / Supabase",
      "Redis caching & Prisma ORM",
      "Query optimization & indexing",
      "Stripe + Cloudinary integrations",
      "Docker, AWS, Vercel delivery",
    ],
    stack: [
      "PostgreSQL",
      "pgvector",
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
    homeTags: ["PostgreSQL", "MongoDB", "Redis", "pgvector"],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps (React Native)",
    shortTitle: "Mobile Apps",
    eyebrow: "Mobile",
    description:
      "Cross-platform mobile products with React Native that stay connected with your APIs, business logic, and design system across iOS and Android.",
    outcome: "One connected product across web, backend, and mobile.",
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
    homeTags: ["React Native", "iOS", "Android", "Shared APIs"],
  },
];

/** Homepage runway — all five capabilities in agency order */
export const HOME_SERVICES = SERVICES;

export const SERVICE_PROCESS = [
  {
    step: "01",
    title: "Discover",
    text: "Clarify the business goal, users, scope, constraints, and success metrics before development starts.",
  },
  {
    step: "02",
    title: "Architect",
    text: "Choose the right frontend, backend, data, cloud, and AI stack for speed, scale, and maintainability.",
  },
  {
    step: "03",
    title: "Build",
    text: "Ship through weekly milestones, clean implementation, smart testing, and transparent progress updates.",
  },
  {
    step: "04",
    title: "Launch",
    text: "Deploy, document, support, and improve the system so it performs reliably after launch.",
  },
] as const;

export const HOME_SERVICES_COPY = {
  eyebrow: "Services",
  title: "Full-stack and AI engineering",
  titleAccent: "for real products.",
  support:
    "I help startups and growing businesses design, build, and launch production software across product engineering, backend systems, AI workflows, cloud foundations, and connected mobile apps — with clear ownership from planning to delivery.",
  ctaPrimary: "Start a Project",
  ctaSecondary: "View all services",
  footerLine: "Product · Backend · AI · Cloud · Mobile",
} as const;


