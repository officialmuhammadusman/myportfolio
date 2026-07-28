/**
 * Homepage Featured Work — live production cases.
 * Visuals: real live-site captures under /images/projects/live/.
 */

export const HOME_FEATURED_WORK_COPY = {
  eyebrow: "Selected Work",
  title: "Work that proves",
  titleAccent: "the delivery.",
  support:
    "Four live products spanning healthcare, SaaS, enterprise HR, and sports tech — open the case study or the running product.",
  footerCtaPrimary: "Start a Project",
  footerCtaSecondary: "Browse all work",
} as const;

export interface FeaturedCase {
  id: string;
  slug: string;
  index: string;
  name: string;
  industry: string;
  headline: string;
  summary: string;
  liveUrl: string;
  liveHost: string;
  previewSrc: string;
  stack: string[];
}

export const HOME_FEATURED_CASES: FeaturedCase[] = [
  {
    id: "mejora",
    slug: "mejora-tu-dolor",
    index: "01",
    name: "Mejora Tu Dolor",
    industry: "Healthcare",
    headline: "Telemedicine for chronic pain specialists",
    summary:
      "Video consultations, Webpay checkout, async clinical reviews, and specialist dashboards — live in Chile.",
    liveUrl: "https://mejoratudolor.cl",
    liveHost: "mejoratudolor.cl",
    previewSrc: "/images/projects/live/mejora-tu-dolor.png",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Webpay"],
  },
  {
    id: "cliender",
    slug: "cliender",
    index: "02",
    name: "Cliender",
    industry: "SaaS",
    headline: "Operations platform for local businesses",
    summary:
      "POS, appointments, billing, lead tracking, and geolocation marketing in one cloud cockpit.",
    liveUrl: "https://cliender.com",
    liveHost: "cliender.com",
    previewSrc: "/images/projects/live/cliender.png",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Cloud"],
  },
  {
    id: "hrms",
    slug: "hrms-portal",
    index: "03",
    name: "HRMS Portal",
    industry: "Enterprise",
    headline: "People platform with configurable access",
    summary:
      "Dynamic RBAC, employee records, attendance approvals, hiring pipelines, and project tracking.",
    liveUrl: "https://hrms-portal-beta.vercel.app",
    liveHost: "hrms-portal-beta.vercel.app",
    previewSrc: "/images/projects/live/hrms-portal.png",
    stack: ["Next.js", "Node.js", "PostgreSQL", "RBAC"],
  },
  {
    id: "padel",
    slug: "padel-connect",
    index: "04",
    name: "Padel Connect",
    industry: "Sports Tech",
    headline: "Club operations and skill-based matchmaking",
    summary:
      "Owner dashboard, fair player pairing, mobile match flows, and subscription-ready growth pages.",
    liveUrl: "https://padel-fe.vercel.app",
    liveHost: "padel-fe.vercel.app",
    previewSrc: "/images/projects/live/padel-connect.png",
    stack: ["Next.js", "React Native", "Node.js"],
  },
];
