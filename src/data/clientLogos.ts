/**
 * CLIENT LOGOS / TRUSTED BY section data
 * Using tech/platform logos for the marquee — real brands the stack is built on.
 */

export const CLIENT_LOGOS_COPY = {
  eyebrow: "Trusted Technologies",
  title: "Battle-tested stack,",
  titleAccent: "real-world results.",
  support:
    "Every project is built on proven, production-grade technology trusted by the world's top engineering teams.",
};

export interface ClientLogo {
  id: string;
  name: string;
  /** SVG icon key used by react-icons/si or lucide */
  iconKey: string;
  /** Optional: category for grouping */
  category: "frontend" | "backend" | "ai" | "infra" | "db";
}

/** Two sets of the same logos so the marquee wraps seamlessly */
export const CLIENT_LOGOS: ClientLogo[] = [
  { id: "nextjs", name: "Next.js", iconKey: "nextjs", category: "frontend" },
  { id: "react", name: "React", iconKey: "react", category: "frontend" },
  { id: "typescript", name: "TypeScript", iconKey: "typescript", category: "frontend" },
  { id: "nodejs", name: "Node.js", iconKey: "nodejs", category: "backend" },
  { id: "python", name: "Python", iconKey: "python", category: "backend" },
  { id: "fastapi", name: "FastAPI", iconKey: "fastapi", category: "backend" },
  { id: "postgresql", name: "PostgreSQL", iconKey: "postgresql", category: "db" },
  { id: "mongodb", name: "MongoDB", iconKey: "mongodb", category: "db" },
  { id: "redis", name: "Redis", iconKey: "redis", category: "db" },
  { id: "openai", name: "OpenAI", iconKey: "openai", category: "ai" },
  { id: "docker", name: "Docker", iconKey: "docker", category: "infra" },
  { id: "aws", name: "AWS", iconKey: "aws", category: "infra" },
  { id: "vercel", name: "Vercel", iconKey: "vercel", category: "infra" },
  { id: "supabase", name: "Supabase", iconKey: "supabase", category: "db" },
  { id: "stripe", name: "Stripe", iconKey: "stripe", category: "infra" },
  { id: "tailwind", name: "Tailwind CSS", iconKey: "tailwind", category: "frontend" },
  { id: "nestjs", name: "NestJS", iconKey: "nestjs", category: "backend" },
  { id: "prisma", name: "Prisma", iconKey: "prisma", category: "db" },
  { id: "framer", name: "Framer Motion", iconKey: "framer", category: "frontend" },
  { id: "github", name: "GitHub Actions", iconKey: "githubactions", category: "infra" },
];
