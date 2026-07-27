const BASE = "/muhammad_usman_hero_slider_updated";

export interface HeroSlide {
  id: string;
  src: string;
  src4k: string;
  alt: string;
  label: string;
  eyebrow: string;
  /** Main hero title — line 1 */
  title: string;
  /** Main hero title — line 2 (accent) */
  titleAccent: string;
  support: string;
}

/**
 * Matched 16:9 cinematic set.
 * Titles rotate with each image — clear, professional agency English.
 */
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "laptop-primary",
    src: `${BASE}/web-1080/01-hero-laptop-primary-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/01-hero-laptop-primary-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman working at a laptop — product engineering",
    label: "Build",
    eyebrow: "Product Engineering",
    title: "Build software",
    titleAccent: "ready for production.",
    support:
      "End-to-end product engineering for startups and growing businesses — modern web apps, reliable backends, and AI features built to launch, scale, and perform in the real world.",
  },
  {
    id: "desk-trust",
    src: `${BASE}/web-1080/02-hero-desk-trust-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/02-hero-desk-trust-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman at his desk — clear delivery partner",
    label: "Trust",
    eyebrow: "Delivery Partner",
    title: "Clear delivery",
    titleAccent: "you can rely on.",
    support:
      "From the first brief to a stable production release — transparent scope, honest timelines, and engineering quality that holds up after handoff, not just in a demo.",
  },
  {
    id: "thinking-plan",
    src: `${BASE}/web-1080/03-hero-thinking-plan-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/03-hero-thinking-plan-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman planning product architecture",
    label: "Plan",
    eyebrow: "Strategy & Architecture",
    title: "Plan with precision.",
    titleAccent: "Scale without rework.",
    support:
      "Strong technical decisions up front — clean architecture, practical roadmaps, and systems designed to grow with your product instead of forcing expensive rebuilds later.",
  },
  {
    id: "client-delivery",
    src: `${BASE}/web-1080/04-hero-client-delivery-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/04-hero-client-delivery-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman in a client delivery conversation",
    label: "Deliver",
    eyebrow: "Client Partnership",
    title: "Work with a partner",
    titleAccent: "who ships with you.",
    support:
      "Direct communication, weekly progress you can measure, and delivery that feels like an in-house product team — focused on outcomes, not endless status meetings.",
  },
  {
    id: "authority-standing",
    src: `${BASE}/web-1080/05-hero-authority-standing-16x9-1920x1080.jpg`,
    src4k: `${BASE}/4k/05-hero-authority-standing-16x9-3840x2160.jpg`,
    alt: "Muhammad Usman — software agency authority portrait",
    label: "Lead",
    eyebrow: "Software Agency",
    title: "Serious engineering.",
    titleAccent: "Serious partnership.",
    support:
      "A software agency for founders and businesses that need dependable full-stack, AI/RAG, and backend delivery — remote-first, worldwide, and accountable from kickoff to launch.",
  },
];

export const HERO_OBJECT_POSITION = "72% center";

export const HERO_TRUST = [
  "Available for new projects",
  "Remote worldwide",
  "Next.js · AI/RAG · Node",
] as const;

export const HERO_AUTOPLAY_MS = 5000;

export const HERO_VIEWPORT_MIN_H =
  "min-h-[calc(100svh-68px)] md:min-h-[calc(100svh-104px)]";
