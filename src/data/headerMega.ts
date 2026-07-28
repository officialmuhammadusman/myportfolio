/**
 * Header mega-menu — grouped sections like top software house sites.
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
  badge?: string;
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
            badge: "Core",
          },
          {
            id: "custom-software",
            label: "Custom software",
            description: "Bespoke business systems built for your workflow & scale.",
            href: "/services#product-engineering",
            iconBase: S.backend,
          },
          {
            id: "mobile-apps",
            label: "Mobile apps",
            description: "React Native — player apps, club dashboards & cross-platform UI.",
            href: "/services#mobile-apps",
            iconBase: S.mobile,
            badge: "React Native",
          },
          {
            id: "mvp-launch",
            label: "MVP & startup launch",
            description: "Scope → build → deploy fast for founders validating ideas.",
            href: "/services#product-engineering",
            iconBase: S.mvp,
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
          },
          {
            id: "backend-apis",
            label: "Backend & REST APIs",
            description: "NestJS / Express, OpenAPI/Swagger, JWT, OAuth2, WebSockets.",
            href: "/services#backend-apis",
            iconBase: S.backend,
          },
          {
            id: "realtime",
            label: "Realtime systems",
            description: "Socket.io, live dashboards, notifications & sync.",
            href: "/services#backend-apis",
            iconBase: S.backend,
          },
          {
            id: "data-cloud",
            label: "Data, cloud & integrations",
            description: "PostgreSQL, Redis, Stripe, AWS, Docker, Vercel delivery.",
            href: "/services#data-cloud",
            iconBase: S.cloud,
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
            badge: "Popular",
          },
          {
            id: "langgraph",
            label: "LangGraph agentic workflows",
            description: "Corrective RAG, Self-RAG, multi-agent supervisors.",
            href: "/services#ai-agentic",
            iconBase: S.ai,
          },
          {
            id: "sql-agent",
            label: "SQL & database agents",
            description: "Schema introspection, NL queries & structured JSON outputs.",
            href: "/services#ai-agentic",
            iconBase: S.ai,
          },
          {
            id: "data-cloud",
            label: "Data & cloud",
            description: "PostgreSQL, MongoDB, Redis, Prisma, AWS, Docker, Vercel.",
            href: "/services#data-cloud",
            iconBase: S.cloud,
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
          },
          {
            id: "hrms",
            label: "HRMS & enterprise",
            description: "RBAC permissions, attendance, leave, hiring pipelines.",
            href: "/projects",
            iconBase: S.backend,
          },
          {
            id: "payments",
            label: "Payments & billing",
            description: "Stripe, Webpay, subscriptions & invoicing modules.",
            href: "/services#data-cloud",
            iconBase: S.mvp,
          },
          {
            id: "marketplace",
            label: "Marketplaces & e-commerce",
            description: "Multi-vendor stores, orders, coupons & vendor analytics.",
            href: "/projects/vendorhub-multi-vendor-ecommerce",
            iconBase: S.fullstack,
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
            badge: "Live",
          },
          {
            id: "hrms",
            label: "HRMS Portal",
            description: "Dynamic RBAC, attendance, leave, hiring & project modules.",
            href: "/projects/hrms-portal",
            iconBase: W.caseStudy,
            badge: "Beta",
          },
          {
            id: "vendorhub",
            label: "VendorHub marketplace",
            description: "Multi-vendor e-commerce, Stripe payments & vendor analytics.",
            href: "/projects/vendorhub-multi-vendor-ecommerce",
            iconBase: W.all,
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
            badge: "Live",
          },
          {
            id: "padel",
            label: "Padel Connect",
            description: "Club dashboard, skill matchmaking & React Native player app.",
            href: "/projects/padel-connect",
            iconBase: W.featured,
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
          },
          {
            id: "multi-agent",
            label: "Multi-agent supervisor",
            description: "SQL agent, human-in-the-loop & production JSON outputs.",
            href: "/projects",
            iconBase: W.all,
          },
          {
            id: "all-projects",
            label: "All case studies",
            description: "Architecture decisions, challenges & measurable outcomes.",
            href: "/projects",
            iconBase: W.all,
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
          },
          {
            id: "experience",
            label: "Experience",
            description: "2+ years building scalable, production-ready applications.",
            href: "/about#experience",
            iconBase: A.experience,
          },
          {
            id: "process",
            label: "How I work",
            description: "Discover → Architect → Build → Launch.",
            href: "/services#process",
            iconBase: A.process,
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
          },
          {
            id: "backend-exp",
            label: "Backend & APIs",
            description: "Node.js, NestJS, REST, JWT/OAuth2, Socket.io.",
            href: "/about#skills",
            iconBase: A.skills,
          },
          {
            id: "ai-exp",
            label: "AI / GenAI",
            description: "LangChain, LangGraph, RAG, vector DBs, agentic workflows.",
            href: "/about#skills",
            iconBase: A.skills,
            badge: "AI",
          },
          {
            id: "mobile-exp",
            label: "Mobile (React Native)",
            description: "Cross-platform apps paired with web dashboards.",
            href: "/about#skills",
            iconBase: A.skills,
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
          },
          {
            id: "cloud",
            label: "Cloud & DevOps",
            description: "Docker, AWS, Vercel, GitHub, Postman, Stripe.",
            href: "/about#skills",
            iconBase: A.skills,
          },
          {
            id: "testing",
            label: "Quality & testing",
            description: "Jest, React Testing Library, OpenAPI docs, clean architecture.",
            href: "/about#skills",
            iconBase: A.skills,
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
            badge: "AI",
          },
          {
            id: "saas",
            label: "SaaS & product",
            description: "Dashboards, billing, permissions & multi-tenant design.",
            href: "/blog",
            iconBase: I.article,
          },
          {
            id: "fullstack",
            label: "Full-stack engineering",
            description: "Next.js, APIs, performance & deployment.",
            href: "/blog",
            iconBase: I.tutorial,
          },
          {
            id: "mobile",
            label: "Mobile & React Native",
            description: "App architecture, matchmaking logic & club platforms.",
            href: "/blog",
            iconBase: I.news,
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
          },
          {
            id: "tutorials",
            label: "Tutorials",
            description: "Step-by-step notes you can apply today.",
            href: "/blog",
            iconBase: I.tutorial,
          },
          {
            id: "architecture",
            label: "Architecture decisions",
            description: "Trade-offs, challenges & how problems were solved.",
            href: "/blog",
            iconBase: I.article,
          },
          {
            id: "updates",
            label: "Updates",
            description: "Product launches, stack changes & industry signals.",
            href: "/blog",
            iconBase: I.news,
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
          },
          {
            id: "whatsapp",
            label: "WhatsApp",
            description: "Fast replies for KSA, UAE & remote clients.",
            href: whatsappUrl,
            iconBase: C.whatsapp,
            badge: "Fast",
          },
          {
            id: "phone",
            label: "Phone",
            description: PERSONAL_INFO.phone,
            href: "tel:+923135263300",
            iconBase: C.letsTalk,
          },
          {
            id: "linkedin",
            label: "LinkedIn",
            description: "Partnerships, roles & professional intros.",
            href: linkedinUrl,
            iconBase: brandIcons.social.linkedin,
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
            badge: "Popular",
          },
          {
            id: "inquiry-ai",
            label: "AI / RAG system",
            description: "LangGraph, agents, vector search & LLM pipelines.",
            href: contactSubjectHref(CONTACT_SUBJECTS[1]),
            iconBase: S.ai,
            badge: "AI",
          },
          {
            id: "inquiry-backend",
            label: "Backend & APIs",
            description: "NestJS, REST, WebSockets, auth & microservices.",
            href: contactSubjectHref(CONTACT_SUBJECTS[2]),
            iconBase: S.backend,
          },
          {
            id: "inquiry-mvp",
            label: "MVP / startup launch",
            description: "Validate ideas fast — scope, build & deploy.",
            href: contactSubjectHref(CONTACT_SUBJECTS[3]),
            iconBase: S.mvp,
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
          },
          {
            id: "services",
            label: "Explore services",
            description: "Full-stack, AI, mobile & SaaS capabilities.",
            href: "/services",
            iconBase: S.fullstackTile,
          },
          {
            id: "work",
            label: "See our work",
            description: "Cliender, HRMS, Padel Connect & more.",
            href: "/projects",
            iconBase: W.featured,
          },
          {
            id: "github",
            label: "GitHub",
            description: "Open-source repos & code samples.",
            href: githubUrl,
            iconBase: brandIcons.social.github,
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
  openDelayMs: 60,
  closeDelayMs: 160,
  panelDuration: 0.2,
  itemStagger: 0,
  ease: [0.22, 1, 0.36, 1] as const,
} as const;

function collectMegaLinks(panel: MegaPanel): MegaLink[] {
  if (panel.sections?.length) {
    return panel.sections.flatMap((s) => s.links);
  }
  return panel.links;
}

/** SVG/PNG assets used in header mega menus — preload so dropdown icons appear instantly. */
export function getHeaderMegaPreloadAssets(): string[] {
  const urls = new Set<string>();

  for (const panel of Object.values(HEADER_MEGA)) {
    for (const link of collectMegaLinks(panel)) {
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
