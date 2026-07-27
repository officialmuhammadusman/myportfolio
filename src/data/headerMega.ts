/**
 * Header mega-menu content — paths match public/images/brand/header asset pack.
 */

import { brandIcons } from "@/lib/brandAssets";

export interface MegaLink {
  id: string;
  label: string;
  description: string;
  href: string;
  /** brandIcons path without extension */
  iconBase: string;
  badge?: string;
}

export interface MegaPanel {
  id: string;
  trigger: string;
  href: string;
  eyebrow: string;
  links: MegaLink[];
  promo: {
    title: string;
    text: string;
    ctaLabel: string;
    ctaHref: string;
    imageSrc?: string;
  };
}

export const HEADER_MEGA: Record<string, MegaPanel> = {
  services: {
    id: "services",
    trigger: "Services",
    href: "/services",
    eyebrow: "What I deliver",
    links: [
      {
        id: "product-engineering",
        label: "Product Engineering",
        description: "Next.js / React apps built for production.",
        href: "/services#product-engineering",
        iconBase: brandIcons.services.fullstack,
      },
      {
        id: "ai-agentic",
        label: "AI & Agentic Systems",
        description: "RAG, LangGraph, and LLM features that ship.",
        href: "/services#ai-agentic",
        iconBase: brandIcons.services.ai,
        badge: "Popular",
      },
      {
        id: "backend-apis",
        label: "Backend & APIs",
        description: "Nest/Express, auth, WebSockets, OpenAPI.",
        href: "/services#backend-apis",
        iconBase: brandIcons.services.backend,
      },
      {
        id: "data-cloud",
        label: "Data & Cloud",
        description: "Postgres, Redis, Prisma, AWS, Stripe, Docker.",
        href: "/services#data-cloud",
        iconBase: brandIcons.services.mvp,
      },
    ],
    promo: {
      title: "Need a reliable build partner?",
      text: "Clear scope, weekly delivery, and production-ready code for founders and teams worldwide.",
      ctaLabel: "Start a project",
      ctaHref: "/contact",
    },
  },

  work: {
    id: "work",
    trigger: "Work",
    href: "/projects",
    eyebrow: "Selected proof",
    links: [
      {
        id: "featured",
        label: "Featured case study",
        description: "Deep dive into architecture, decisions, and results.",
        href: "/projects",
        iconBase: brandIcons.work.featured,
        badge: "Live",
      },
      {
        id: "all-work",
        label: "All projects",
        description: "Browse full-stack, realtime, and AI builds.",
        href: "/projects",
        iconBase: brandIcons.work.all,
      },
      {
        id: "case-study",
        label: "Case studies",
        description: "Decisions, challenges, and measurable outcomes.",
        href: "/projects",
        iconBase: brandIcons.work.caseStudy,
      },
      {
        id: "live-demo",
        label: "Live demos",
        description: "Explore shipped products in the browser.",
        href: "/projects",
        iconBase: brandIcons.work.liveDemo,
      },
    ],
    promo: {
      title: "Results over resumes",
      text: "Case studies show stack choices, trade-offs, and what shipped — the proof clients ask for.",
      ctaLabel: "View work",
      ctaHref: "/projects",
      imageSrc: brandIcons.images.workCover,
    },
  },

  about: {
    id: "about",
    trigger: "About",
    href: "/about",
    eyebrow: "The agency behind the work",
    links: [
      {
        id: "story",
        label: "My story",
        description: "Software agency — who I am and how I work.",
        href: "/about",
        iconBase: brandIcons.about.story,
      },
      {
        id: "stack",
        label: "Tech stack",
        description: "Frontend, backend, data, cloud, and GenAI tools.",
        href: "/about#skills",
        iconBase: brandIcons.about.skills,
      },
      {
        id: "experience",
        label: "Experience",
        description: "2+ years shipping production systems.",
        href: "/about#experience",
        iconBase: brandIcons.about.experience,
      },
      {
        id: "process",
        label: "How I work",
        description: "Discover → Architect → Build → Launch.",
        href: "/services#process",
        iconBase: brandIcons.about.process,
      },
    ],
    promo: {
      title: "One engineer. Agency standards.",
      text: "You work directly with me — no handoff chaos, clear communication, and ownership from kickoff to launch.",
      ctaLabel: "About me",
      ctaHref: "/about",
      imageSrc: brandIcons.images.aboutPanel,
    },
  },

  insights: {
    id: "insights",
    trigger: "Insights",
    href: "/blog",
    eyebrow: "Notes from the build",
    links: [
      {
        id: "featured-post",
        label: "Featured article",
        description: "Latest thinking on shipping modern software.",
        href: "/blog",
        iconBase: brandIcons.insights.featured,
        badge: "New",
      },
      {
        id: "engineering",
        label: "Engineering",
        description: "Next.js, APIs, architecture, and performance.",
        href: "/blog",
        iconBase: brandIcons.insights.article,
      },
      {
        id: "tutorials",
        label: "Tutorials",
        description: "Practical build notes you can apply today.",
        href: "/blog",
        iconBase: brandIcons.insights.tutorial,
      },
      {
        id: "news",
        label: "Updates",
        description: "Product notes and industry signals.",
        href: "/blog",
        iconBase: brandIcons.insights.news,
      },
    ],
    promo: {
      title: "Learn how I build",
      text: "Short, practical writing for founders and developers who care about shipping.",
      ctaLabel: "Read insights",
      ctaHref: "/blog",
      imageSrc: brandIcons.images.insightsCover,
    },
  },
};

export const HEADER_MOTION = {
  openDelayMs: 180,
  closeDelayMs: 220,
  panelDuration: 0.28,
  itemStagger: 0.045,
  ease: [0.22, 1, 0.36, 1] as const,
} as const;
