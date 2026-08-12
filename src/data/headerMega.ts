/**
 * Header mega-menu — grouped sections with rich media & images like top software house sites.
 */

import { brandIcons, brandIconSrc } from "@/lib/brandAssets";
import { CONTACT_SUBJECTS, PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { contactSubjectHref } from "@/data/contact";

export interface MegaLink {
  id: string;
  label: string;
  description: string;
  href: string;
  iconBase: string;
  imageSrc?: string;
  badge?: string;
  isNew?: boolean;
}

export interface MegaSection {
  id: string;
  title: string;
  links: MegaLink[];
}

export interface MegaPanel {
  id: string;
  trigger: string;
  href: string;
  eyebrow: string;
  /** Flat list — used when sections is empty */
  links: MegaLink[];
  /** Grouped links for large agency-style dropdowns */
  sections?: MegaSection[];
  promo: {
    title: string;
    text: string;
    ctaLabel: string;
    ctaHref: string;
    imageSrc?: string;
  };
}

const S = brandIcons.services;
const W = brandIcons.work;
const A = brandIcons.about;
const I = brandIcons.insights;
const C = brandIcons.cta;

const whatsappUrl = SOCIAL_LINKS.find((s) => s.icon === "whatsapp")?.url ?? "/contact";
const linkedinUrl = SOCIAL_LINKS.find((s) => s.icon === "linkedin")?.url ?? "/contact";
const githubUrl = SOCIAL_LINKS.find((s) => s.icon === "github")?.url ?? "/contact";

export const HEADER_MEGA: Record<string, MegaPanel> = {
  services: {
    id: "services",
    trigger: "Services",
    href: "/services",
    eyebrow: "Full-stack · AI · Web · Mobile · SaaS",
    links: [],
    sections: [
      {
        id: "platforms",
        title: "Platforms & products",
        links: [
          {
            id: "saas",
            label: "SaaS platforms",
            description: "Multi-tenant dashboards, billing, subscriptions & admin panels.",
            href: "/services#product-engineering",
            iconBase: S.fullstack,
            imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=200&h=200",
            badge: "Core",
          },
          {
            id: "custom-software",
            label: "Custom software",
            description: "Bespoke business systems built for your workflow & scale.",
            href: "/services#product-engineering",
            iconBase: S.backend,
            imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "mobile-apps",
            label: "Mobile apps",
            description: "React Native — player apps, club dashboards & cross-platform UI.",
            href: "/services#mobile-apps",
            iconBase: S.mobile,
            imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=200&h=200",
            badge: "React Native",
          },
          {
            id: "mvp-launch",
            label: "MVP & startup launch",
            description: "Scope → build → deploy fast for founders validating ideas.",
            href: "/services#product-engineering",
            iconBase: S.mvp,
            imageSrc: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=200&h=200",
          },
        ],
      },
      {
        id: "engineering",
        title: "Engineering",
        links: [
          {
            id: "fullstack-web",
            label: "Full-stack web apps",
            description: "Next.js 15, React 18, TypeScript, Tailwind, Framer Motion.",
            href: "/services#product-engineering",
            iconBase: S.fullstack,
            imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "backend-apis",
            label: "Backend & REST APIs",
            description: "NestJS / Express, OpenAPI/Swagger, JWT, OAuth2, WebSockets.",
            href: "/services#backend-apis",
            iconBase: S.backend,
            imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "realtime",
            label: "Realtime systems",
            description: "Socket.io, live dashboards, notifications & sync.",
            href: "/services#backend-apis",
            iconBase: S.backend,
            imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "data-cloud",
            label: "Data, cloud & integrations",
            description: "PostgreSQL, Redis, Stripe, AWS, Docker, Vercel delivery.",
            href: "/services#data-cloud",
            iconBase: S.cloud,
            imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200&h=200",
          },
        ],
      },
      {
        id: "ai-data",
        title: "AI, RAG & data",
        links: [
          {
            id: "rag-llm",
            label: "RAG & LLM integration",
            description: "OpenAI, Gemini, grounded Q&A with Pinecone & ChromaDB.",
            href: "/services#ai-agentic",
            iconBase: S.ai,
            imageSrc: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=200&h=200",
            badge: "Popular",
          },
          {
            id: "langgraph",
            label: "LangGraph agentic workflows",
            description: "Corrective RAG, Self-RAG, multi-agent supervisors.",
            href: "/services#ai-agentic",
            iconBase: S.ai,
            imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "sql-agent",
            label: "SQL & database agents",
            description: "Schema introspection, NL queries & structured JSON outputs.",
            href: "/services#ai-agentic",
            iconBase: S.ai,
            imageSrc: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "data-cloud-ai",
            label: "Vector & cloud search",
            description: "Pinecone, Qdrant, ChromaDB, PGVector & semantic search.",
            href: "/services#data-cloud",
            iconBase: S.cloud,
            imageSrc: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=200&h=200",
          },
        ],
      },
      {
        id: "domains",
        title: "Industry modules",
        links: [
          {
            id: "telemedicine",
            label: "Telemedicine & booking",
            description: "Video consults, payments, async medical review flows.",
            href: "/projects",
            iconBase: S.fullstack,
            imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "hrms",
            label: "HRMS & enterprise",
            description: "RBAC permissions, attendance, leave, hiring pipelines.",
            href: "/projects",
            iconBase: S.backend,
            imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "payments",
            label: "Payments & billing",
            description: "Stripe, Webpay, subscriptions & invoicing modules.",
            href: "/services#data-cloud",
            iconBase: S.mvp,
            imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "marketplace",
            label: "Marketplaces & e-commerce",
            description: "Multi-vendor stores, orders, coupons & vendor analytics.",
            href: "/projects/vendorhub-multi-vendor-ecommerce",
            iconBase: S.fullstack,
            imageSrc: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=200&h=200",
          },
        ],
      },
    ],
    promo: {
      title: "Full-stack AI engineer for hire",
      text: "SaaS, custom software, mobile apps, RAG systems & production APIs — one partner from architecture to launch.",
      ctaLabel: "Start a project",
      ctaHref: "/contact",
    },
  },

  work: {
    id: "work",
    trigger: "Work",
    href: "/projects",
    eyebrow: "Shipped products · live links · case studies",
    links: [],
    sections: [
      {
        id: "live-saas",
        title: "SaaS & business platforms",
        links: [
          {
            id: "cliender",
            label: "Cliender",
            description: "POS, appointments, billing & geolocation marketing — cliender.com",
            href: "/projects/cliender",
            iconBase: W.featured,
            imageSrc: "https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&q=80&w=200&h=200",
            badge: "Live",
          },
          {
            id: "hrms",
            label: "HRMS Portal",
            description: "Dynamic RBAC, attendance, leave, hiring & project modules.",
            href: "/projects/hrms-portal",
            iconBase: W.caseStudy,
            imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=200&h=200",
            badge: "Beta",
          },
          {
            id: "vendorhub",
            label: "VendorHub marketplace",
            description: "Multi-vendor e-commerce, Stripe payments & vendor analytics.",
            href: "/projects/vendorhub-multi-vendor-ecommerce",
            iconBase: W.all,
            imageSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=200&h=200",
            badge: "Live",
          },
        ],
      },
      {
        id: "health-mobile",
        title: "Healthcare & mobile",
        links: [
          {
            id: "mejora",
            label: "Mejora Tu Dolor",
            description: "Telemedicine — Webpay booking, async reviews, specialist dashboard.",
            href: "/projects/mejora-tu-dolor",
            iconBase: W.liveDemo,
            imageSrc: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=200&h=200",
            badge: "Live",
          },
          {
            id: "padel",
            label: "Padel Connect",
            description: "Club dashboard, skill matchmaking & React Native player app.",
            href: "/projects/padel-connect",
            iconBase: W.featured,
            imageSrc: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=200&h=200",
            badge: "Live",
          },
        ],
      },
      {
        id: "ai-work",
        title: "AI & agentic systems",
        links: [
          {
            id: "rag-chatbot",
            label: "RAG chatbot (C-RAG / Self-RAG)",
            description: "LangChain + LangGraph with Pinecone, ChromaDB & web fallback.",
            href: "/projects",
            iconBase: W.caseStudy,
            imageSrc: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "multi-agent",
            label: "Multi-agent supervisor",
            description: "SQL agent, human-in-the-loop & production JSON outputs.",
            href: "/projects",
            iconBase: W.all,
            imageSrc: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "all-projects",
            label: "All case studies",
            description: "Architecture decisions, challenges & measurable outcomes.",
            href: "/projects",
            iconBase: W.all,
            imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=200&h=200",
          },
        ],
      },
    ],
    promo: {
      title: "Production proof, not promises",
      text: "Live SaaS platforms, telemedicine flows, HRMS modules, mobile apps & RAG systems — see what shipped.",
      ctaLabel: "View all work",
      ctaHref: "/projects",
      imageSrc: brandIcons.images.workCover,
    },
  },

  about: {
    id: "about",
    trigger: "About",
    href: "/about",
    eyebrow: "Full-stack developer · AI engineer · 2+ years production",
    links: [],
    sections: [
      {
        id: "profile",
        title: "Profile",
        links: [
          {
            id: "story",
            label: "My story",
            description: "Remote-first software agency — direct, accountable delivery.",
            href: "/about",
            iconBase: A.story,
            imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "experience",
            label: "Experience",
            description: "2+ years building scalable, production-ready applications.",
            href: "/about#experience",
            iconBase: A.experience,
            imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "process",
            label: "How I work",
            description: "Discover → Architect → Build → Launch.",
            href: "/services#process",
            iconBase: A.process,
            imageSrc: "https://images.unsplash.com/photo-1531538606174-0f923f53a76d?auto=format&fit=crop&q=80&w=200&h=200",
          },
        ],
      },
      {
        id: "expertise",
        title: "What I build",
        links: [
          {
            id: "frontend",
            label: "Frontend engineering",
            description: "React 18, Next.js 15, TypeScript, Redux, TanStack Query.",
            href: "/about#skills",
            iconBase: A.skills,
            imageSrc: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "backend-exp",
            label: "Backend & APIs",
            description: "Node.js, NestJS, REST, JWT/OAuth2, Socket.io.",
            href: "/about#skills",
            iconBase: A.skills,
            imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "ai-exp",
            label: "AI / GenAI",
            description: "LangChain, LangGraph, RAG, vector DBs, agentic workflows.",
            href: "/about#skills",
            iconBase: A.skills,
            imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=200&h=200",
            badge: "AI",
          },
          {
            id: "mobile-exp",
            label: "Mobile (React Native)",
            description: "Cross-platform apps paired with web dashboards.",
            href: "/about#skills",
            iconBase: A.skills,
            imageSrc: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=200&h=200",
          },
        ],
      },
      {
        id: "stack",
        title: "Stack & tools",
        links: [
          {
            id: "databases",
            label: "Databases",
            description: "PostgreSQL, MongoDB, Supabase, Redis, Prisma ORM.",
            href: "/about#skills",
            iconBase: A.skills,
            imageSrc: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "cloud",
            label: "Cloud & DevOps",
            description: "Docker, AWS, Vercel, GitHub, Postman, Stripe.",
            href: "/about#skills",
            iconBase: A.skills,
            imageSrc: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "testing",
            label: "Quality & testing",
            description: "Jest, React Testing Library, OpenAPI docs, clean architecture.",
            href: "/about#skills",
            iconBase: A.skills,
            imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200&h=200",
          },
        ],
      },
    ],
    promo: {
      title: "One engineer. Agency standards.",
      text: "Full-stack, AI/RAG, SaaS & mobile — you work directly with me from kickoff through production launch.",
      ctaLabel: "About me",
      ctaHref: "/about",
      imageSrc: brandIcons.images.aboutPanel,
    },
  },

  insights: {
    id: "insights",
    trigger: "Insights",
    href: "/blog",
    eyebrow: "Engineering notes · AI · SaaS · architecture",
    links: [],
    sections: [
      {
        id: "topics",
        title: "Topics",
        links: [
          {
            id: "ai-rag",
            label: "AI & RAG",
            description: "LangGraph, corrective RAG, agents & LLM production patterns.",
            href: "/blog",
            iconBase: I.featured,
            imageSrc: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=200&h=200",
            badge: "AI",
          },
          {
            id: "saas",
            label: "SaaS & product",
            description: "Dashboards, billing, permissions & multi-tenant design.",
            href: "/blog",
            iconBase: I.article,
            imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "fullstack",
            label: "Full-stack engineering",
            description: "Next.js, APIs, performance & deployment.",
            href: "/blog",
            iconBase: I.tutorial,
            imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "mobile",
            label: "Mobile & React Native",
            description: "App architecture, matchmaking logic & club platforms.",
            href: "/blog",
            iconBase: I.news,
            imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=200&h=200",
          },
        ],
      },
      {
        id: "formats",
        title: "Formats",
        links: [
          {
            id: "featured-post",
            label: "Featured article",
            description: "Latest deep dive from recent builds.",
            href: "/blog",
            iconBase: I.featured,
            imageSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "tutorials",
            label: "Tutorials",
            description: "Step-by-step notes you can apply today.",
            href: "/blog",
            iconBase: I.tutorial,
            imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "architecture",
            label: "Architecture decisions",
            description: "Trade-offs, challenges & how problems were solved.",
            href: "/blog",
            iconBase: I.article,
            imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "updates",
            label: "Updates",
            description: "Product launches, stack changes & industry signals.",
            href: "/blog",
            iconBase: I.news,
            imageSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=200&h=200",
          },
        ],
      },
    ],
    promo: {
      title: "Learn how production systems get built",
      text: "Practical writing on SaaS, AI/RAG, mobile apps & full-stack delivery for founders and developers.",
      ctaLabel: "Read insights",
      ctaHref: "/blog",
      imageSrc: brandIcons.images.insightsCover,
    },
  },

  contact: {
    id: "contact",
    trigger: "Contact",
    href: "/contact",
    eyebrow: "Start a project · partnerships · worldwide delivery",
    links: [],
    sections: [
      {
        id: "reach",
        title: "Reach us directly",
        links: [
          {
            id: "email",
            label: "Email",
            description: "Detailed briefs, specs & file attachments.",
            href: `mailto:${PERSONAL_INFO.email}`,
            iconBase: C.email,
            imageSrc: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "whatsapp",
            label: "WhatsApp",
            description: "Fast replies for KSA, UAE & remote clients.",
            href: whatsappUrl,
            iconBase: C.whatsapp,
            imageSrc: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=200&h=200",
            badge: "Fast",
          },
          {
            id: "phone",
            label: "Phone",
            description: PERSONAL_INFO.phone,
            href: "tel:+923135263300",
            iconBase: C.letsTalk,
            imageSrc: "https://images.unsplash.com/photo-1534536281715-e28d7674177c?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "linkedin",
            label: "LinkedIn",
            description: "Partnerships, roles & professional intros.",
            href: linkedinUrl,
            iconBase: brandIcons.social.linkedin,
            imageSrc: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=200&h=200",
          },
        ],
      },
      {
        id: "inquiries",
        title: "What are you building?",
        links: [
          {
            id: "inquiry-fullstack",
            label: "Full-stack product",
            description: "SaaS dashboards, billing, admin & multi-tenant systems.",
            href: contactSubjectHref(CONTACT_SUBJECTS[0]),
            iconBase: S.fullstack,
            imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=200&h=200",
            badge: "Popular",
          },
          {
            id: "inquiry-ai",
            label: "AI / RAG system",
            description: "LangGraph, agents, vector search & LLM pipelines.",
            href: contactSubjectHref(CONTACT_SUBJECTS[1]),
            iconBase: S.ai,
            imageSrc: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=200&h=200",
            badge: "AI",
          },
          {
            id: "inquiry-backend",
            label: "Backend & APIs",
            description: "NestJS, REST, WebSockets, auth & microservices.",
            href: contactSubjectHref(CONTACT_SUBJECTS[2]),
            iconBase: S.backend,
            imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "inquiry-mvp",
            label: "MVP / startup launch",
            description: "Validate ideas fast — scope, build & deploy.",
            href: contactSubjectHref(CONTACT_SUBJECTS[3]),
            iconBase: S.mvp,
            imageSrc: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=200&h=200",
          },
        ],
      },
      {
        id: "next",
        title: "Next steps",
        links: [
          {
            id: "project-brief",
            label: "Send a project brief",
            description: "Tell us about scope, timeline & budget.",
            href: "/contact#form",
            iconBase: C.startProject,
            imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "services",
            label: "Explore services",
            description: "Full-stack, AI, mobile & SaaS capabilities.",
            href: "/services",
            iconBase: S.fullstackTile,
            imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "work",
            label: "See our work",
            description: "Cliender, HRMS, Padel Connect & more.",
            href: "/projects",
            iconBase: W.featured,
            imageSrc: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            id: "github",
            label: "GitHub",
            description: "Open-source repos & code samples.",
            href: githubUrl,
            iconBase: brandIcons.social.github,
            imageSrc: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&q=80&w=200&h=200",
          },
        ],
      },
    ],
    promo: {
      title: "Available for new projects",
      text: "SaaS platforms, AI/RAG systems, React Native apps & backend APIs — USA, UK, KSA, UAE & remote.",
      ctaLabel: "Start a conversation",
      ctaHref: "/contact#form",
      imageSrc: brandIcons.images.glowOrb,
    },
  },
};

export const HEADER_MOTION = {
  openDelayMs: 0,
  closeDelayMs: 100,
  panelDuration: 0.14,
  itemStagger: 0,
  ease: [0.22, 1, 0.36, 1] as const,
} as const;

function collectMegaLinks(panel: MegaPanel): MegaLink[] {
  if (panel.sections?.length) {
    return panel.sections.flatMap((s) => s.links);
  }
  return panel.links;
}

/** SVG/PNG assets used in header mega menus — preload so dropdown icons/images appear instantly. */
export function getHeaderMegaPreloadAssets(): string[] {
  const urls = new Set<string>();

  for (const panel of Object.values(HEADER_MEGA)) {
    for (const link of collectMegaLinks(panel)) {
      if (link.imageSrc) urls.add(link.imageSrc);
      urls.add(brandIconSrc(link.iconBase, "base"));
      urls.add(brandIconSrc(link.iconBase, "hover"));
      urls.add(brandIconSrc(link.iconBase, "orange"));
    }
    if (panel.promo.imageSrc) urls.add(panel.promo.imageSrc);
  }

  urls.add(brandIconSrc(brandIcons.ui.chevron, "orange"));
  urls.add(brandIconSrc(brandIcons.ui.hamburger, "orange"));
  urls.add(brandIconSrc(brandIcons.ui.hamburger, "white"));
  urls.add(brandIconSrc(brandIcons.ui.close, "orange"));
  urls.add(brandIconSrc(brandIcons.ui.close, "white"));
  urls.add(brandIconSrc(brandIcons.cta.startProject, "white"));
  urls.add(brandIconSrc(brandIcons.cta.letsTalk, "orange"));
  urls.add(brandIcons.ui.muMarkAnimated);
  urls.add(brandIcons.images.glowOrb);

  return Array.from(urls);
}
