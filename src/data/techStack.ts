/** Homepage tech stack strip — after How I Work. */

export const HOME_TECH_STACK_COPY = {
  eyebrow: "Tech stack",
  title: "Tools I ship with",
  titleAccent: "in production.",
  support:
    "A focused stack for product frontend, secure backends, applied AI systems, and cloud delivery — chosen for reliability, not trends.",
} as const;

export type TechStackCategoryId =
  | "frontend"
  | "backend"
  | "ai"
  | "cloud";

export interface TechStackItem {
  name: string;
  /** Key mapped to icon in the section component */
  icon: string;
}

export interface TechStackGroup {
  id: TechStackCategoryId;
  label: string;
  description: string;
  items: TechStackItem[];
}

export const HOME_TECH_STACK_GROUPS: TechStackGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Product UI, design systems, and fast client experiences.",
    items: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Redux Toolkit", icon: "redux" },
      { name: "TanStack Query", icon: "reactquery" },
      { name: "Framer Motion", icon: "framermotion" },
      { name: "Zustand", icon: "zustand" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs, auth, data models, and production service design.",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Prisma", icon: "prisma" },
    ],
  },
  {
    id: "ai",
    label: "AI & Data",
    description: "LLM apps, RAG pipelines, agents, and retrieval systems.",
    items: [
      { name: "LangGraph", icon: "langgraph" },
      { name: "LangChain", icon: "langchain" },
      { name: "OpenAI", icon: "openai" },
      { name: "RAG", icon: "rag" },
      { name: "pgvector", icon: "pgvector" },
      { name: "Redis", icon: "redis" },
      { name: "Direct LLM APIs", icon: "llm" },
      { name: "Tool calling", icon: "tools" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    description: "Deploy, scale, integrations, and delivery workflows.",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "Vercel", icon: "vercel" },
      { name: "Stripe", icon: "stripe" },
      { name: "Supabase", icon: "supabase" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Socket.io", icon: "socketio" },
      { name: "CI/CD", icon: "cicd" },
    ],
  },
];
