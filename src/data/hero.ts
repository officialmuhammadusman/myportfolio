const BASE = "/muhammad_usman_hero_slider_updated";

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroSlide {
  id: string;
  src: string;
  src4k: string;
  alt: string;
  /** Tab chip: PRODUCT | WEB | MOBILE | AI | PARTNER */
  label: string;
  /** Upper category line */
  category: string;
  /** Headline line 1 */
  title: string;
  /** Headline line 2 (accent) */
  titleAccent: string;
  /** Desktop description */
  support: string;
  /** Mobile description (slightly shorter) */
  supportMobile: string;
  /** Proof / availability line above markets */
  proof: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  stats: HeroStat[];
  pills: string[];
  tech: string[];
  trust: string[];
}

export const HERO_ROLE_LINE =
  "Full-Stack Developer · AI Engineer · Product Partner";

export const HERO_MARKETS = "USA · UK · KSA · UAE · Remote";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "product-engineering",
    src: `${BASE}/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/01-hero-laptop-primary-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — product engineering",
    label: "PRODUCT",
    category: "Product Engineering",
    title: "I build digital products",
    titleAccent: "from concept to scale.",
    support:
      "I help startups and businesses transform ideas into reliable digital products—from planning and design to development, deployment and long-term support.",
    supportMobile:
      "I help startups and businesses turn ideas into reliable digital products—from planning to development, deployment and support.",
    proof: "Available for selected projects",
    primaryCta: { label: "Start a Project", href: "/contact" },
    secondaryCta: { label: "View Selected Work", href: "/projects" },
    stats: [
      { value: "5+", label: "Products live" },
      { value: "2+", label: "Years of delivery" },
      { value: "5", label: "Global markets" },
      { value: "24h", label: "Client response" },
    ],
    pills: ["Product", "SaaS", "Web", "Mobile", "AI"],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    trust: ["Available for selected projects", HERO_MARKETS],
  },
  {
    id: "web-engineering",
    src: `${BASE}/web-1080/04-hero-client-delivery-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/04-hero-client-delivery-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — web engineering",
    label: "WEB",
    category: "Web Engineering",
    title: "Web platforms built",
    titleAccent: "for real business growth.",
    support:
      "I design and develop scalable SaaS platforms, dashboards, customer portals and business systems focused on performance, security and long-term maintainability.",
    supportMobile:
      "I design scalable SaaS platforms, dashboards and business systems focused on performance, security and maintainability.",
    proof: "Scalable architecture · Secure APIs · Responsive experiences",
    primaryCta: { label: "Build Your Platform", href: "/contact" },
    secondaryCta: { label: "View Web Projects", href: "/projects" },
    stats: [
      { value: "5+", label: "SaaS modules shipped" },
      { value: "RBAC", label: "Roles & permissions" },
      { value: "Live", label: "Billing & subscriptions" },
      { value: "24h", label: "Client response" },
    ],
    pills: ["SaaS", "Dashboards", "Portals", "APIs"],
    tech: ["Next.js 15", "React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    trust: [
      "Scalable architecture · Secure APIs · Responsive experiences",
      HERO_MARKETS,
    ],
  },
  {
    id: "mobile-development",
    src: `${BASE}/web-1080/03-hero-thinking-plan-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/03-hero-thinking-plan-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — mobile development",
    label: "MOBILE",
    category: "Mobile Development",
    title: "Web to mobile.",
    titleAccent: "One connected product.",
    support:
      "I build mobile applications that connect seamlessly with your web platform, backend services and existing business systems across iOS and Android.",
    supportMobile:
      "I build mobile apps that connect with your web platform, backend and business systems across iOS and Android.",
    proof: "Connected APIs · Consistent UX · Reliable releases",
    primaryCta: { label: "Build a Mobile App", href: "/contact" },
    secondaryCta: { label: "View Mobile Work", href: "/projects" },
    stats: [
      { value: "Web", label: "Next.js products" },
      { value: "App", label: "React Native flows" },
      { value: "API", label: "Nest / Express" },
      { value: "RT", label: "Realtime sync" },
    ],
    pills: ["React Native", "iOS", "Android", "APIs"],
    tech: ["React Native", "Next.js", "NestJS", "Socket.io", "PostgreSQL", "Tailwind"],
    trust: ["Connected APIs · Consistent UX · Reliable releases", HERO_MARKETS],
  },
  {
    id: "ai-engineering",
    src: `${BASE}/web-1080/02-hero-desk-trust-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/02-hero-desk-trust-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — AI engineering",
    label: "AI",
    category: "AI Engineering",
    title: "AI built around",
    titleAccent: "real business workflows.",
    support:
      "I create AI assistants, automation systems and intelligent integrations that improve operations, reduce repetitive work and support better business decisions.",
    supportMobile:
      "I create AI assistants and automation that improve operations, cut repetitive work and support better decisions.",
    proof: "AI agents · Workflow automation · Business integrations",
    primaryCta: { label: "Explore an AI Project", href: "/contact" },
    secondaryCta: { label: "View AI Solutions", href: "/services" },
    stats: [
      { value: "RAG", label: "Grounded answers" },
      { value: "Agents", label: "LangGraph workflows" },
      { value: "SQL", label: "Data-aware agents" },
      { value: "Prod", label: "LLM features live" },
    ],
    pills: ["AI agents", "Automation", "Integrations"],
    tech: ["LangGraph", "LangChain", "OpenAI", "Pinecone", "ChromaDB", "Python"],
    trust: [
      "AI agents · Workflow automation · Business integrations",
      HERO_MARKETS,
    ],
  },
  {
    id: "technology-partnership",
    src: `${BASE}/web-1080/05-hero-authority-standing-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/05-hero-authority-standing-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — technology partnership",
    label: "PARTNER",
    category: "Technology Partnership",
    title: "Your technical partner,",
    titleAccent: "not just another developer.",
    support:
      "Work directly with me from product discovery and technical planning to development, launch and continuous improvement.",
    supportMobile:
      "Work directly with me from discovery and planning to development, launch and continuous improvement.",
    proof: "Direct communication · Clear ownership · Reliable delivery",
    primaryCta: { label: "Let’s Work Together", href: "/contact" },
    secondaryCta: { label: "Discuss Your Project", href: "/contact" },
    stats: [
      { value: "2+", label: "Years of delivery" },
      { value: "5", label: "Global markets" },
      { value: "5+", label: "Products live" },
      { value: "24h", label: "Client response" },
    ],
    pills: ["Partnership", "Discovery", "Delivery"],
    tech: ["Next.js", "Node.js", "LangGraph", "PostgreSQL", "AWS", "Vercel"],
    trust: [
      "Direct communication · Clear ownership · Reliable delivery",
      HERO_MARKETS,
    ],
  },
];

export const HERO_OBJECT_POSITION = "72% center";

/** Shared fallback stats (mega menu / global proof) */
export const HERO_STATS: HeroStat[] =
  HERO_SLIDES.find((s) => s.id === "technology-partnership")?.stats ??
  HERO_SLIDES[0].stats;

/** Auto-advance every 3 seconds — snappy hold */
export const HERO_AUTOPLAY_MS = 3000;

export const HERO_VIEWPORT_MIN_H = "min-h-[100dvh]";

/** Content + image share this top line (clears fixed header) */
export const HERO_HEADER_OFFSET = "pt-[72px] md:pt-[108px] lg:pt-[112px]";
export const HERO_IMAGE_TOP = "top-[72px] md:top-[108px] lg:top-[112px]";
