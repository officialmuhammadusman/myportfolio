import type { NavLink, SocialLink, Stat, PhilosophyItem } from "@/types";

// ─────────────────────────────────────────
// PERSONAL INFO
// ─────────────────────────────────────────
export const PERSONAL_INFO = {
  name: "Muhammad Usman",
  firstName: "Muhammad",
  lastName: "Usman",
  role: "Full Stack Developer",
  roleExtended: "Full Stack Developer & Web Solutions Architect",
  tagline: "Crafting scalable web applications with modern technologies and user-centric design.",
  bio: "Full Stack Developer with 1+ years of professional experience designing and developing scalable web applications. Specialized in modern JavaScript frameworks including Next.js and React, with expertise in relational (PostgreSQL) and NoSQL (MongoDB) databases. Proven track record of delivering high-performance applications through clean architecture, efficient API integration, and responsive design principles. Committed to writing maintainable code and continuously advancing technical expertise.",
  bioShort: "Full Stack Developer with 1+ years of experience architecting scalable web solutions using Next.js, React, PostgreSQL, and MongoDB. Focused on performance optimization, clean code principles, and delivering exceptional user experiences.",
  location: "Islamabad, Pakistan",
  locationRemote: "Available Globally · Remote-First Professional",
  email: "official.muammadusman01@gmail.com",
  phone: "+92 (311) 352-63300",
  availability: true,
  availabilityText: "Open to Full Stack Development Opportunities",
  cvUrl: "/usman_cv.pdf",
  techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB"],
  techStackFull: ["React", "Next.js", "Tailwind CSS", "Redux", "Axios", "React Router", "Framer Motion", "SWR", "Zustand", "Node.js", "Express", "MongoDB", "PostgreSQL", "Cloudinary", "Multer", "Stripe", "GitHub", "Vercel", "Git", "npm", "Webpack", "Babel"],
};

// ─────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
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
  { value:3, suffix: "+", label: "Production Projects", icon: "Layers" },
  { value: 10, suffix: "+", label: "Successful Engagements", icon: "Users" },
  { value: 50, suffix: "+", label: "Git Commits", icon: "GitCommit" },
  { value: 1, suffix: " yrs", label: "Professional Experience", icon: "Calendar" },
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
  "Full-Time Opportunity",
  "Project Collaboration",
  "Freelance Engagement",
  "Speaking & Mentorship",
  "General Inquiry",
] as const;