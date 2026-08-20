export interface Differentiator {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
}

export const WHY_CHOOSE_US_COPY = {
  eyebrow: "Why Work With Me",
  title: "Engineering beyond",
  titleAccent: "the code.",
  support: "I do not just write code. I architect systems that scale, secure your data, and drive real business outcomes.",
};

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: "architecture",
    number: "01",
    title: "Production Architecture",
    headline: "Built for scale from day one.",
    description: "I design multi-tenant SaaS platforms and telemedicine systems handling high concurrency with zero critical downtime. Every decision prioritizes long-term maintainability.",
  },
  {
    id: "ai",
    number: "02",
    title: "Agentic AI Integration",
    headline: "RAG and autonomous agents.",
    description: "Beyond simple wrappers, I build Corrective RAG (C-RAG) and Self-RAG systems using LangGraph to automate complex enterprise workflows with high accuracy.",
  },
  {
    id: "security",
    number: "03",
    title: "Enterprise Security",
    headline: "HIPAA compliance and RBAC.",
    description: "Strict end-to-end security protocols, encrypted JWT authentication, granular role-based access control, and secure payment gateway integrations.",
  },
  {
    id: "performance",
    number: "04",
    title: "Extreme Optimization",
    headline: "Reducing latency by up to 40%.",
    description: "Deep database query tuning, PostgreSQL indexing, and Redis caching layers ensure that dashboards and APIs remain lightning fast under heavy load.",
  },
];
