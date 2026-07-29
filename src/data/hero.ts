const BASE = "/muhammad_usman_hero_slider_updated";

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroSlide {
  id: string;
  src: string;
  src4k: string;
  alt: string;
  label: string;
  eyebrow: string;
  /** Short headline lead (≈2 words) */
  title: string;
  /** Accent word — full headline ≈ 3 short words */
  titleAccent: string;
  /** Desktop: ~2 short lines */
  support: string;
  /** Mobile: shorter, still accurate */
  supportMobile: string;
  stats: HeroStat[];
  pills: string[];
  tech: string[];
  trust: string[];
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "laptop-primary",
    src: `${BASE}/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/01-hero-laptop-primary-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — full-stack & SaaS product engineering",
    label: "SaaS",
    eyebrow: "Full-Stack Developer",
    title: "Scale your",
    titleAccent: "SaaS.",
    support:
      "Revenue-ready platforms with billing, dashboards, and access control. Built to launch and grow with your users.",
    supportMobile:
      "Billing, dashboards, and access control. Built to launch fast. Ready to grow with your users.",
    stats: [
      { value: "5+", label: "SaaS modules shipped" },
      { value: "RBAC", label: "Roles & permissions" },
      { value: "Live", label: "Billing & subscriptions" },
      { value: "24h", label: "Client response" },
    ],
    pills: [
      "SaaS platforms",
      "Dashboards",
      "Billing",
      "RBAC",
      "Multi-tenant",
      "Custom software",
    ],
    tech: ["Next.js 15", "React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    trust: ["Full-stack product engineering", "Production SaaS delivery", "Clear weekly milestones"],
  },
  {
    id: "desk-trust",
    src: `${BASE}/web-1080/02-hero-desk-trust-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/02-hero-desk-trust-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — AI and RAG engineering",
    label: "AI",
    eyebrow: "AI Engineer",
    title: "Ground your",
    titleAccent: "AI.",
    support:
      "Intelligent systems tied to your business data. Accurate answers, clear accountability, ready for live products.",
    supportMobile:
      "AI grounded in your business data. Accurate answers you can trust. Built for live products.",
    stats: [
      { value: "RAG", label: "Grounded answers" },
      { value: "Agents", label: "LangGraph workflows" },
      { value: "SQL", label: "Data-aware agents" },
      { value: "Prod", label: "LLM features live" },
    ],
    pills: [
      "Corrective RAG",
      "Self-RAG",
      "Multi-agent",
      "Vector search",
      "SQL agents",
      "OpenAI / Gemini",
    ],
    tech: ["LangGraph", "LangChain", "OpenAI", "Pinecone", "ChromaDB", "Python"],
    trust: ["AI that stays grounded", "Production LLM pipelines", "Tool-calling & supervisors"],
  },
  {
    id: "thinking-plan",
    src: `${BASE}/web-1080/03-hero-thinking-plan-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/03-hero-thinking-plan-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — mobile and web app development",
    label: "Mobile",
    eyebrow: "Full-Stack Developer",
    title: "Web to",
    titleAccent: "mobile.",
    support:
      "One roadmap across web and mobile. Shared APIs, consistent UX, and releases that ship together.",
    supportMobile:
      "Web and mobile on one roadmap. Shared APIs and consistent UX. Releases that ship together.",
    stats: [
      { value: "Web", label: "Next.js products" },
      { value: "App", label: "React Native flows" },
      { value: "API", label: "Nest / Express" },
      { value: "RT", label: "Realtime sync" },
    ],
    pills: [
      "React Native",
      "Player apps",
      "Club dashboards",
      "Realtime",
      "REST APIs",
      "OpenAPI",
    ],
    tech: ["React Native", "Next.js", "NestJS", "Socket.io", "PostgreSQL", "Tailwind"],
    trust: ["Web + mobile together", "Shared API layer", "Realtime-ready delivery"],
  },
  {
    id: "client-delivery",
    src: `${BASE}/web-1080/04-hero-client-delivery-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/04-hero-client-delivery-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — client delivery and telemedicine platforms",
    label: "Deliver",
    eyebrow: "Full-Stack Developer",
    title: "Proven live",
    titleAccent: "platforms.",
    support:
      "Telemedicine, HRMS, and marketplaces already in production. Real users, payments, and workflows.",
    supportMobile:
      "Telemedicine, HRMS, and marketplaces already live. Real users and payments in production. Not slideware demos.",
    stats: [
      { value: "Live", label: "Telemedicine flows" },
      { value: "HR", label: "Dynamic RBAC" },
      { value: "Pay", label: "Stripe / Webpay" },
      { value: "Geo", label: "Local marketing" },
    ],
    pills: [
      "Telemedicine",
      "HRMS",
      "Marketplaces",
      "Payments",
      "Async reviews",
      "Geo marketing",
    ],
    tech: ["Next.js", "PostgreSQL", "Stripe", "Webpay", "RBAC", "Cloudinary"],
    trust: ["Domain systems shipped", "Payments in production", "Configurable permissions"],
  },
  {
    id: "authority-standing",
    src: `${BASE}/web-1080/05-hero-authority-standing-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/05-hero-authority-standing-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — full-stack AI software agency",
    label: "Partner",
    eyebrow: "Full-Stack Developer · AI Engineer",
    title: "Your delivery",
    titleAccent: "partner.",
    support:
      "Clear scope and weekly progress. Systems that stay yours across USA, UK, KSA, UAE, and remote.",
    supportMobile:
      "Clear scope from day one. Weekly delivery you can track. Systems that stay yours worldwide.",
    stats: [
      { value: "2+", label: "Years of delivery" },
      { value: "5", label: "Global markets" },
      { value: "5+", label: "Products live" },
      { value: "24h", label: "Client response" },
    ],
    pills: [
      "Full-stack",
      "AI systems",
      "SaaS",
      "Mobile",
      "APIs",
      "Remote partnership",
    ],
    tech: ["Next.js", "Node.js", "LangGraph", "PostgreSQL", "AWS", "Vercel"],
    trust: [
      "USA · UK · KSA · UAE · Remote",
      "Direct accountable delivery",
      "Production over prototypes",
    ],
  },
];

export const HERO_OBJECT_POSITION = "72% center";

/** Shared fallback stats (mega menu / global proof) */
export const HERO_STATS: HeroStat[] =
  HERO_SLIDES.find((s) => s.id === "authority-standing")?.stats ??
  HERO_SLIDES[0].stats;

/** Auto-advance every 3 seconds — snappy hold */
export const HERO_AUTOPLAY_MS = 3000;

export const HERO_VIEWPORT_MIN_H = "min-h-[100dvh]";

/** Content + image share this top line (clears fixed header) */
export const HERO_HEADER_OFFSET = "pt-[92px] md:pt-[132px] lg:pt-[140px]";
export const HERO_IMAGE_TOP = "top-[92px] md:top-[132px] lg:top-[140px]";
