import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "frontend",
    title: "Frontend Development",
    icon: "Monitor",
    skills: [
      { name: "React 18 / Next.js 15", icon: "Code2", level: "expert" },
      { name: "TypeScript (strict mode)", icon: "FileCode", level: "expert" },
      { name: "Tailwind CSS", icon: "Palette", level: "expert" },
      { name: "Framer Motion", icon: "Sparkles", level: "advanced" },
      { name: "Jest & React Testing Library", icon: "TestTube2", level: "advanced" },
      { name: "Responsive Design", icon: "Smartphone", level: "expert" },
    ],
  },
  {
    category: "backend",
    title: "Backend & APIs",
    icon: "Server",
    skills: [
      { name: "Node.js / Express.js", icon: "Server", level: "expert" },
      { name: "REST APIs (OpenAPI/Swagger)", icon: "Globe", level: "expert" },
      { name: "Authentication (JWT, OAuth2)", icon: "Shield", level: "advanced" },
      { name: "WebSockets / Socket.io", icon: "Zap", level: "advanced" },
      { name: "Microservices Architecture", icon: "Layers", level: "intermediate" },
      { name: "Rate Limiting & Security", icon: "Lock", level: "advanced" },
    ],
  },
  {
    category: "databases",
    title: "Databases & Data",
    icon: "Database",
    skills: [
      { name: "PostgreSQL ", icon: "Database", level: "expert" },
      { name: "MongoDB ", icon: "Database", level: "expert" },
      { name: "Redis ", icon: "Zap", level: "advanced" },
      { name: "Prisma ORM", icon: "GitBranch", level: "advanced" },
      { name: "Query Optimization & Indexing", icon: "TrendingUp", level: "advanced" },
      { name: "Database Design", icon: "LayoutDashboard", level: "expert" },
    ],
  },
 
 {
  category: "learning",
  title: "Currently Learning",
  icon: "BookOpen",
  skills: [
    { name: "FastAPI", icon: "Zap", level: "learning" },
    { name: "Vector Databases", icon: "Database", level: "learning" },
    { name: "RAG Architecture", icon: "Search", level: "learning" },
    { name: "AI/LLM Integration", icon: "Sparkles", level: "learning" },
  ],
},
];
