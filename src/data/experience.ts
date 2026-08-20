export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export const EXPERIENCE_COPY = {
  eyebrow: "Professional Experience",
  title: "Engineering high-scale",
  titleAccent: "production systems.",
  support: "A track record of building complex, secure, and performant web platforms and AI architectures.",
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "bxtrack",
    role: "Full Stack AI Developer",
    company: "BX Track Solution",
    period: "August 2025 – August 2026",
    achievements: [
      "Architected and deployed enterprise-grade SaaS platforms using Next.js, NestJS, and PostgreSQL via Prisma ORM.",
      "Engineered autonomous AI agents and workflow automation pipelines using LangGraph.",
      "Reduced average API and dashboard latency by 40% through targeted PostgreSQL indexing, query refactoring, and Redis caching.",
      "Implemented real-time data streaming and synchronized state management using Supabase WebSockets.",
      "Standardized REST API contracts with OpenAPI/Swagger specifications, streamlining front-end integration.",
    ],
  },
  {
    id: "wise360",
    role: "Full Stack Developer",
    company: "Wise360 Solution",
    period: "July 2024 – May 2025",
    achievements: [
      "Engineered core telemedicine services for Mejora Tu Dolor, supporting chronic pain consultations across Latin America with zero critical downtime.",
      "Implemented HIPAA-aligned security protocols, utilizing encrypted JWT authentication, strict RBAC, and at-rest data protection.",
      "Built transactional REST APIs in Express.js and PostgreSQL, managing concurrent booking flows.",
      "Developed key modules for Cliender, a business management SaaS platform, including POS transaction handling and automated billing.",
    ],
  },
];

// --- LEGACY ABOUT PAGE EXPORTS ---
// These are required by the About page components (ExperienceTimeline, EducationSection)
import type { ExperienceEntry, EducationEntry, Certification, Testimonial } from "@/types";

export const experiences: ExperienceEntry[] = [
  {
    id: "1",
    company: "BX Track Solution",
    role: "Full Stack AI Developer",
    startDate: "Aug 2025",
    endDate: "Aug 2026",
    location: "Rawalpindi / Islamabad, Pakistan",
    type: "full-time",
    description: [
      "Architected and deployed enterprise-grade SaaS platforms using Next.js, NestJS, and PostgreSQL via Prisma ORM.",
      "Engineered autonomous AI agents and workflow automation pipelines using LangGraph.",
      "Reduced average API and dashboard latency by 40% through targeted PostgreSQL indexing, query refactoring, and Redis caching.",
    ],
    technologies: ["Next.js", "NestJS", "PostgreSQL", "LangGraph", "Prisma"],
  },
  {
    id: "2",
    company: "Wise360 Solution",
    role: "Full Stack Developer",
    startDate: "Jul 2024",
    endDate: "May 2025",
    location: "Rawalpindi / Islamabad, Pakistan",
    type: "full-time",
    description: [
      "Engineered core telemedicine services for Mejora Tu Dolor, supporting chronic pain consultations across Latin America.",
      "Implemented HIPAA-aligned security protocols, utilizing encrypted JWT authentication, strict RBAC, and at-rest data protection.",
      "Built transactional REST APIs in Express.js and PostgreSQL, managing concurrent booking flows.",
    ],
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Webpay"],
  }
];

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "COMSATS University Islamabad",
    year: "2021 - 2025",
    location: "Abbottabad Campus, Pakistan",
  },
];

export const certifications: Certification[] = [
  {
    title: "Google Career Certificates - Web Developer",
    platform: "Google",
    completedAt: "2024",
    url: "https://google.com/certificates",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    role: "Founder",
    company: "LaunchPad AI",
    avatar: "",
    content:
      "Muhammad delivered a production-ready RAG pipeline in 3 weeks. The LangGraph architecture he proposed was exactly what we needed — stateful, auditable, and easy to extend. Outstanding technical depth.",
    rating: 5,
  },
  {
    id: "t2",
    name: "James Harrington",
    role: "CTO",
    company: "Nexus SaaS",
    avatar: "",
    content:
      "We hired Muhammad to rebuild our core backend after our old monolith collapsed under load. He refactored everything to NestJS microservices with RabbitMQ and PostgreSQL. Zero downtime since deployment.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Aisha Al-Rashidi",
    role: "Product Manager",
    company: "MedFlow KSA",
    avatar: "",
    content:
      "Muhammad integrated our telemedicine platform with a custom AI scheduling assistant. Communication was always clear, deadlines were met, and the code quality was exceptional. Highly recommend.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Daniel Kowalski",
    role: "Lead Engineer",
    company: "Cliender",
    avatar: "",
    content:
      "The POS and billing modules Muhammad built for our business SaaS handled edge cases we hadn't even thought of. Very senior thinking for someone who works independently. Will hire again.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Emma Thornton",
    role: "CEO",
    company: "BrightStream",
    avatar: "",
    content:
      "We needed a full-stack developer who could also think strategically. Muhammad was that person — he flagged risks in our database schema before they became production issues. A genuine technical partner.",
    rating: 5,
  },
  {
    id: "t6",
    name: "Khalid Al-Mansouri",
    role: "Director of Technology",
    company: "Gulf Digital Ventures",
    avatar: "",
    content:
      "From Next.js frontend to Python AI backend, Muhammad owned the entire stack. He delivered a working MVP in 6 weeks that we successfully demoed to investors. Top-tier execution.",
    rating: 5,
  },
];
