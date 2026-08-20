export interface SelectedProject {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  techStack: string[];
  link?: string;
  imageFallbackText: string;
}

export const SELECTED_PROJECTS_COPY = {
  eyebrow: "Selected Projects",
  title: "Building high-performance",
  titleAccent: "platforms.",
  support: "From HRMS and telemedicine to RAG-based AI assistants. Here are a few selected projects that demonstrate my approach to engineering.",
};

export const SELECTED_PROJECTS_DATA: SelectedProject[] = [
  {
    id: "bxtrack",
    title: "BXTrack HRMS",
    subtitle: "Enterprise Human Resource Management System",
    description: [
      "Architected a dynamic, admin-configurable RBAC engine handling granular runtime permission assignments across multi-department enterprise hierarchies.",
      "Built a suite of LangGraph-powered AI agents to automate leave validation, payroll anomaly detection, expense approvals, and applicant screening.",
      "Refactored heavy relational database queries and introduced pagination strategies, reducing dashboard load times by 35%.",
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "LangGraph", "Supabase"],
    link: "hrms-portal-beta.vercel.app",
    imageFallbackText: "BXTrack HRMS Interface",
  },
  {
    id: "rag-assistant",
    title: "Agentic AI Assistant",
    subtitle: "RAG-Based Enterprise Assistant",
    description: [
      "Engineered an end-to-end RAG system featuring hybrid vector search, metadata filtering, and context-grounded response generation.",
      "Implemented Corrective RAG (C-RAG) using LangGraph evaluation nodes to score retrieved context relevance, triggering web fallback when needed.",
      "Integrated a Self-RAG verification layer that grades model outputs for factual hallucinations and semantic alignment.",
    ],
    techStack: ["Python", "LangChain", "LangGraph", "OpenAI", "Gemini Pro", "Pinecone", "ChromaDB"],
    imageFallbackText: "AI Agent Architecture",
  },
  {
    id: "mejora",
    title: "Mejora Tu Dolor",
    subtitle: "Telemedicine Platform",
    description: [
      "Built an asynchronous medical triage system supporting multi-file clinical uploads with automated routing to specialists under a 7-day SLA.",
      "Integrated Webpay payment gateway with automated verification webhooks, time-slot reservation locks, and secure link distribution.",
      "Developed a specialist portal aggregating longitudinal patient history into a unified view ahead of live consultations.",
    ],
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Webpay"],
    link: "mejoratudolor.cl",
    imageFallbackText: "Telemedicine Dashboard",
  },
  {
    id: "cliender",
    title: "Cliender",
    subtitle: "Business Management SaaS",
    description: [
      "Built an operational engine integrating real-time POS workflows, automated subscription billing, and customer lead tracking.",
      "Designed a real-time analytics dashboard tracking employee productivity, revenue growth, and client engagement metrics.",
      "Implemented a geolocation-based filtering engine to power targeted local marketing campaigns.",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    link: "cliender.com",
    imageFallbackText: "Cliender SaaS Interface",
  },
];
