import { brandIcons } from "@/lib/brandAssets";

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  iconBase: string;
  imageSrc: string;
}

export interface TrustPillar {
  id: string;
  title: string;
  description: string;
  iconBase: string;
}

export const HOW_I_WORK_COPY = {
  eyebrow: "HOW I WORK",
  title: "From discovery",
  titleAccent: "to production launch.",
  support:
    "A clear, predictable process — direct communication, weekly progress, and production-ready delivery for SaaS, AI, and mobile builds.",
  ctaPrimary: "Start a Project",
  ctaSecondary: "View all services",
  footerLine: "Clear scope · Weekly progress · Production delivery",
} as const;

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    description:
      "Clarify goals, users, scope, and success metrics in a short kickoff.",
    deliverables: ["Scope doc", "User flows", "Timeline"],
    iconBase: brandIcons.process.discover,
    imageSrc: brandIcons.images.processDiscover,
  },
  {
    id: "architect",
    number: "02",
    title: "Architect",
    description:
      "Choose the right stack — frontend, API, data, and AI — for speed and scale.",
    deliverables: ["Architecture", "Stack plan", "API outline"],
    iconBase: brandIcons.process.architect,
    imageSrc: brandIcons.images.processArchitect,
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    description:
      "Weekly milestones, clean code, tests where it matters, and transparent updates.",
    deliverables: ["Weekly demos", "Staging builds", "Code reviews"],
    iconBase: brandIcons.process.build,
    imageSrc: brandIcons.images.processBuild,
  },
  {
    id: "launch",
    number: "04",
    title: "Launch",
    description:
      "Deploy, document, hand over, and support so you can grow with confidence.",
    deliverables: ["Production deploy", "Documentation", "Handover"],
    iconBase: brandIcons.process.launch,
    imageSrc: brandIcons.images.processLaunch,
  },
];

export const TRUST_PILLARS: TrustPillar[] = [
  {
    id: "partnership",
    title: "Direct partnership",
    description: "You work with the engineer building your product.",
    iconBase: brandIcons.process.partnership,
  },
  {
    id: "visibility",
    title: "Weekly visibility",
    description: "Progress demos and async updates — no black box.",
    iconBase: brandIcons.process.visibility,
  },
  {
    id: "production",
    title: "Production-first",
    description: "Live systems, not throwaway prototypes.",
    iconBase: brandIcons.process.production,
  },
];
