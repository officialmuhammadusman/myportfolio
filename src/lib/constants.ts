import type { NavLink, SocialLink, Stat, PhilosophyItem } from "@/types";

// ─────────────────────────────────────────
// PERSONAL INFO
// ─────────────────────────────────────────
export const PERSONAL_INFO = {
  name: "Muhammad Usman",
  firstName: "Muhammad",
  lastName: "Usman",
  role: "Software Engineer & Agency",
  roleExtended: "Software Agency — Full Stack, AI & Product Engineering",
  tagline: "I design and ship production software for startups and businesses worldwide.",
  bio: "Full Stack Developer with 2+ years of experience building scalable, production-ready web applications. I ship end-to-end products across Next.js/React, Node.js backends, data platforms, and AI/RAG systems — with an agency focus on clear delivery for clients worldwide.",
  bioShort: "Software agency — full-stack products, AI/RAG systems, and production backends for founders and businesses worldwide.",
  location: "Islamabad, Pakistan",
  locationRemote: "Available Globally · Remote-First",
  email: "official.muammadusman01@gmail.com",
  phone: "+92 (311) 352-63300",
  availability: true,
  availabilityText: "Available for new projects",
  cvUrl: "/usman_cv.pdf",
  techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "AI / RAG"],
  techStackFull: [
    "React 18",
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Redux Toolkit",
    "Zustand",
    "TanStack Query",
    "Node.js",
    "Express.js",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
    "Redis",
    "Prisma",
    "Docker",
    "AWS",
    "Vercel",
    "Stripe",
    "OpenAI",
    "LangChain",
    "LangGraph",
    "RAG",
  ],
};

// ─────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ─────────────────────────────────────────
// SOCIAL LINKS
// ─────────────────────────────────────────
export const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    url: "https://github.com/officialmuhammadusman",
    icon: "github",
    label: "github.com/officialmuhammadusman",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammadusman-webdev",
    icon: "linkedin",
    label: "linkedin.com/in/muhammadusman-webdev",
  },
  {
    platform: "WhatsApp",
    url: "https://wa.me/923135263300",
    icon: "whatsapp",
    label: "+92 313 526 3300",
  },
];

// ─────────────────────────────────────────
// HOME STATS (animated counters)
// ─────────────────────────────────────────
export const HOME_STATS: Stat[] = [
  { value: 3, suffix: "+", label: "Production Projects", icon: "Layers" },
  { value: 10, suffix: "+", label: "Client Engagements", icon: "Users" },
  { value: 2, suffix: "+", label: "Years Experience", icon: "Calendar" },
  { value: 20, suffix: "+", label: "Technologies", icon: "Code" },
];

// ─────────────────────────────────────────
// WORK PHILOSOPHY
// ─────────────────────────────────────────
export const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  {
    icon: "Code",
    statement: "I prioritize writing clean, maintainable code that adheres to SOLID principles and best practices, enabling seamless collaboration and long-term scalability.",
    highlight: "clean, maintainable code following industry standards",
  },
  {
    icon: "Zap",
    statement: "I optimize application performance through efficient algorithms, code splitting, and modern rendering techniques, ensuring exceptional user experiences across all devices.",
    highlight: "optimized performance and fast load times",
  },
  {
    icon: "FileText",
    statement: "I maintain comprehensive technical documentation and clear code comments, facilitating knowledge transfer and reducing onboarding time for development teams.",
    highlight: "thorough documentation and code clarity",
  },
  {
    icon: "Rocket",
    statement: "I deliver projects on schedule with quality assurance, implementing robust testing strategies and continuous integration workflows to ensure production-ready applications.",
    highlight: "timely delivery with quality assurance",
  },
];

// ─────────────────────────────────────────
// CONTACT SUBJECTS
// ─────────────────────────────────────────
export const CONTACT_SUBJECTS = [
  "Full-Stack Product Build",
  "AI / RAG / Agentic System",
  "Backend & API Development",
  "MVP / Startup Launch",
  "Freelance / Upwork Project",
  "General Inquiry",
] as const;