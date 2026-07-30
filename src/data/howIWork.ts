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
  title: "From product strategy",
  titleAccent: "to production systems.",
  support:
    "A clear engineering process for SaaS, backend, mobile, and AI work, with direct communication, thoughtful architecture, weekly progress, and production-focused delivery.",
  ctaPrimary: "Start a Project",
  ctaSecondary: "View all services",
  footerLine: "Clear scope · Smart architecture · Reliable execution",
} as const;

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    description:
      "Clarify the business goal, user flows, constraints, and success metrics before writing the first line of code.",
    deliverables: ["Scope doc", "User flows", "Roadmap"],
    iconBase: brandIcons.process.discover,
    imageSrc: brandIcons.images.processDiscover,
  },
  {
    id: "architect",
    number: "02",
    title: "Architect",
    description:
      "Choose the right frontend, backend, data, cloud, and AI architecture for your product, team, and budget.",
    deliverables: ["Architecture", "Stack plan", "API and AI outline"],
    iconBase: brandIcons.process.architect,
    imageSrc: brandIcons.images.processArchitect,
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    description:
      "Build with weekly milestones, clean implementation, testing where it matters, and transparent updates throughout delivery.",
    deliverables: ["Weekly demos", "Staging builds", "Reviews and QA"],
    iconBase: brandIcons.process.build,
    imageSrc: brandIcons.images.processBuild,
  },
  {
    id: "launch",
    number: "04",
    title: "Launch",
    description:
      "Deploy, monitor, document, and support the system so it performs reliably after launch, not only during development.",
    deliverables: ["Production deploy", "Documentation", "Handover and support"],
    iconBase: brandIcons.process.launch,
    imageSrc: brandIcons.images.processLaunch,
  },
];

export const TRUST_PILLARS: TrustPillar[] = [
  {
    id: "partnership",
    title: "Direct partnership",
    description: "You work directly with the full-stack AI engineer building your product.",
    iconBase: brandIcons.process.partnership,
  },
  {
    id: "visibility",
    title: "Weekly visibility",
    description: "Progress demos, async updates, and clear technical decisions with no black box delivery.",
    iconBase: brandIcons.process.visibility,
  },
  {
    id: "production",
    title: "Production-first",
    description: "Secure, scalable systems built for real usage, not throwaway prototypes.",
    iconBase: brandIcons.process.production,
  },
];
