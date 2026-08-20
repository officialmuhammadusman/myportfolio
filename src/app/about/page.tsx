"use client";
import { motion } from "framer-motion";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { 
  Code2, Database, Network, Server, Shield, Cloud, 
  GraduationCap, Briefcase, ExternalLink, Calendar, ChevronRight
} from "lucide-react";

export default function AboutPage() {
  const skills = [
    {
      id: "languages",
      title: "Languages & Core",
      icon: Code2,
      color: "#FF6A00",
      items: ["TypeScript", "JavaScript", "Python", "Next.js", "React", "React Native", "Node.js", "NestJS", "Express.js"]
    },
    {
      id: "ai",
      title: "Applied AI & GenAI",
      icon: Network,
      color: "#6366F1",
      items: ["LangGraph", "LangChain", "C-RAG", "Self-RAG", "Multi-Agent Systems", "OpenAI API", "Gemini API", "Vector Search"]
    },
    {
      id: "databases",
      title: "Databases & Vectors",
      icon: Database,
      color: "#10B981",
      items: ["PostgreSQL", "Supabase", "MongoDB", "Redis", "Pinecone", "ChromaDB", "Prisma ORM"]
    },
    {
      id: "backend",
      title: "Backend & Systems",
      icon: Server,
      color: "#F59E0B",
      items: ["RESTful APIs", "Database Indexing", "Caching", "Transactions", "WebSockets", "RBAC", "Microservices"]
    },
    {
      id: "security",
      title: "Security & Payments",
      icon: Shield,
      color: "#EC4899",
      items: ["HIPAA Compliance", "JWT", "OAuth 2.0", "Data Encryption", "Stripe API", "Webpay"]
    },
    {
      id: "cloud",
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "#3B82F6",
      items: ["Docker", "AWS", "Vercel", "Git", "GitHub Actions", "CI/CD", "Postman"]
    }
  ];

  const experience = [
    {
      year: "Aug 2025 - Aug 2026",
      role: "Full Stack AI Developer",
      company: "BX Track Solution",
      bullets: [
        "Architected and deployed enterprise-grade SaaS platforms using Next.js, NestJS, and PostgreSQL via Prisma ORM.",
        "Engineered autonomous AI agents and workflow automation pipelines using LangGraph, eliminating manual multi-step tasks.",
        "Reduced average API and dashboard latency by 40% through targeted PostgreSQL indexing, query refactoring, and Redis.",
        "Implemented real-time data streaming and synchronized state management across distributed client interfaces using Supabase WebSockets.",
        "Standardized REST API contracts with OpenAPI/Swagger specifications, streamlining front-end integration."
      ]
    },
    {
      year: "Jul 2024 - May 2025",
      role: "Full Stack Developer",
      company: "Wise360 Solution",
      bullets: [
        "Engineered core telemedicine services for Mejora Tu Dolor, supporting chronic pain consultations across Latin America with zero critical downtime.",
        "Implemented HIPAA-aligned security protocols, utilizing encrypted JWT authentication, strict RBAC, and at-rest data protection.",
        "Built transactional REST APIs in Express.js and PostgreSQL, managing concurrent booking flows and preventing scheduling conflicts.",
        "Developed key modules for Cliender, a business management SaaS platform, including POS transaction handling and automated billing pipelines."
      ]
    }
  ];

  const projects = [
    {
      title: "BXTrack HRMS",
      tech: "Next.js, NestJS, PostgreSQL, Prisma, LangGraph, Supabase",
      url: "hrms-portal-beta.vercel.app",
      description: "Architected a dynamic, admin-configurable RBAC engine handling granular runtime permission assignments across multi-department enterprise hierarchies. Built a suite of LangGraph-powered AI agents to automate leave validation, payroll anomaly detection, and applicant screening."
    },
    {
      title: "RAG-Based Agentic AI Assistant",
      tech: "Python, LangChain, LangGraph, OpenAI, Gemini Pro, Pinecone",
      description: "Engineered an end-to-end RAG system featuring hybrid vector search, Corrective RAG (C-RAG) using LangGraph evaluation nodes, and a Self-RAG verification layer. Designed a supervisor-worker multi-agent architecture with a specialized SQL agent."
    },
    {
      title: "Mejora Tu Dolor",
      tech: "React, Node.js, Express.js, PostgreSQL, Webpay",
      url: "mejoratudolor.cl",
      description: "Built an asynchronous medical triage system supporting multi-file clinical uploads with automated routing to specialists under a 7-day SLA. Integrated Webpay payment gateway with automated verification webhooks."
    },
    {
      title: "Cliender",
      tech: "Next.js, TypeScript, Node.js, PostgreSQL",
      url: "cliender.com",
      description: "Built an operational engine integrating real-time POS workflows, automated subscription billing, and customer lead tracking. Designed a real-time analytics dashboard tracking employee productivity and revenue growth."
    },
    {
      title: "Padel Connect",
      tech: "Next.js, React Native, Node.js, PostgreSQL",
      url: "padel-fe.vercel.app",
      description: "Developed an administrative platform for club operators to schedule matches and track court occupancy. Built a dynamic matchmaking engine that pairs players using skill-tier algorithms and historical match outcomes."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#050505] selection:bg-[#FF6A00]/30">
      <AboutHero />
      
      {/* ── SKILLS GRID ── */}
      <section id="skills" className="relative border-t border-white/[0.08] bg-[#080808] py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6A00]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="layout-wrap relative z-10">
          <div className="mb-16 text-center md:text-left max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]"
            >
              Technical Arsenal
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display text-[2.5rem] leading-[1.1] tracking-tight text-[#FFF7ED] sm:text-[3.5rem]"
            >
              Comprehensive <span className="italic text-[#FF6A00]">Expertise.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all"
              >
                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity" style={{ color: skill.color }}>
                  <skill.icon size={160} />
                </div>
                <div className="relative z-10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-colors group-hover:bg-white/10" style={{ borderColor: `${skill.color}30` }}>
                    <skill.icon size={24} style={{ color: skill.color }} />
                  </div>
                  <h3 className="mb-4 font-display text-2xl font-bold text-white">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="rounded-md border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white/70">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="border-t border-white/[0.08] bg-[#050505] py-24 sm:py-32">
        <div className="layout-wrap">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="mb-3 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]"
              >
                <Briefcase size={14} /> Career
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="font-display text-[2.5rem] leading-[1.1] tracking-tight text-[#FFF7ED] sm:text-[3.5rem]"
              >
                Professional <span className="italic text-[#FF6A00]">Experience.</span>
              </motion.h2>
            </div>

            <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0 md:before:absolute md:before:top-0 md:before:bottom-0 md:before:left-1/2 md:before:w-px md:before:bg-white/10">
              {experience.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`relative pl-8 md:pl-0 mb-16 last:mb-0 md:flex md:justify-between md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 w-[13px] h-[13px] rounded-full bg-[#050505] border-[3px] border-[#FF6A00] top-2 md:top-auto shadow-[0_0_15px_rgba(255,106,0,0.5)] z-10" />
                  
                  <div className="hidden md:block md:w-[45%]" />
                  
                  <div className={`md:w-[45%] bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex items-center gap-2 mb-3 text-[#FF6A00] text-sm font-mono font-semibold ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      <Calendar size={14} /> {exp.year}
                    </div>
                    <h3 className="text-2xl font-display text-white font-bold mb-1">{exp.role}</h3>
                    <div className="text-white/50 text-base font-medium mb-6 flex items-center gap-2 justify-start md:justify-end">
                      <span className={i % 2 === 0 ? '' : 'md:mr-0 mr-auto'}>{exp.company}</span>
                    </div>
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className={`text-white/70 text-sm leading-relaxed flex items-start gap-3 ${i % 2 === 0 ? 'text-left' : 'md:text-right md:flex-row-reverse text-left'}`}>
                          <ChevronRight size={16} className="text-[#FF6A00] shrink-0 mt-0.5 opacity-50" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS SHOWCASE ── */}
      <section className="relative border-t border-white/[0.08] bg-[#080808] py-24 sm:py-32 overflow-hidden">
        <div className="layout-wrap relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]"
            >
              Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display text-[2.5rem] leading-[1.1] tracking-tight text-[#FFF7ED] sm:text-[3.5rem]"
            >
              Selected <span className="italic text-[#FF6A00]">Projects.</span>
            </motion.h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#FF6A00] transition-colors">{project.title}</h3>
                  {project.url && (
                    <a href={`https://${project.url}`} target="_blank" rel="noreferrer" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/50 hover:bg-[#FF6A00] hover:text-black transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.split(", ").map(t => (
                    <span key={t} className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mt-auto">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="border-t border-white/[0.08] bg-[#050505] py-24 sm:py-32">
        <div className="layout-wrap text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#FF6A00]/20 bg-gradient-to-b from-[#FF6A00]/10 to-transparent p-12 backdrop-blur-xl"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF6A00]/20 text-[#FF6A00] shadow-[0_0_30px_rgba(255,106,0,0.3)]">
              <GraduationCap size={32} />
            </div>
            <h2 className="font-display text-3xl font-bold text-white mb-2">Bachelor of Science in Computer Science</h2>
            <div className="text-[#FF6A00] font-mono mb-6">2021 — 2025 | COMSATS University Islamabad, Abbottabad</div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto">
              <strong className="text-white">Core Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Operating Systems, Software Architecture, Distributed Systems.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
