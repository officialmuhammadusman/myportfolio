export interface InsightCategory {
  id: string; // The slug from the Mega Menu
  title: string;
  subtitle: string;
}

export const INSIGHTS_CATEGORIES: InsightCategory[] = [
  {
    id: "ai-rag",
    title: "AI & RAG",
    subtitle: "LangGraph, corrective RAG, autonomous agents & LLM production patterns.",
  },
  {
    id: "saas",
    title: "SaaS & Product",
    subtitle: "Dashboards, billing, permissions, and multi-tenant system design.",
  },
  {
    id: "fullstack",
    title: "Full-Stack Engineering",
    subtitle: "Deep dives into Next.js, API design, performance tuning, and deployment.",
  },
  {
    id: "mobile",
    title: "Mobile & React Native",
    subtitle: "App architecture, matchmaking logic, and offline-first mobile strategies.",
  },
  {
    id: "featured-post",
    title: "Featured Articles",
    subtitle: "The most impactful and widely read deep dives from recent builds.",
  },
  {
    id: "tutorials",
    title: "Tutorials",
    subtitle: "Step-by-step technical notes and implementations you can apply today.",
  },
  {
    id: "architecture",
    title: "Architecture Decisions",
    subtitle: "System trade-offs, engineering challenges, and how complex problems were solved.",
  },
  {
    id: "updates",
    title: "Updates",
    subtitle: "Product launches, tech stack changes, and industry signals.",
  }
];
