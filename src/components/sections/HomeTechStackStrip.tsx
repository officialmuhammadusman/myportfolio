"use client";

import type { ComponentType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import {
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFramer,
  SiGithubactions,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiSocketdotio,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import {
  HOME_TECH_STACK_COPY,
  HOME_TECH_STACK_GROUPS,
} from "@/data/techStack";

const easeOut = [0.22, 1, 0.36, 1] as const;

type IconComp = ComponentType<{
  size?: number;
  className?: string;
  color?: string;
  "aria-hidden"?: boolean;
}>;

const techIcons: Record<string, IconComp> = {
  nextjs: SiNextdotjs,
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  redux: SiRedux,
  reactquery: SiReactquery,
  framermotion: SiFramer,
  zustand: Layers,
  nodejs: SiNodedotjs,
  express: SiExpress,
  nestjs: SiNestjs,
  python: SiPython,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  prisma: SiPrisma,
  langgraph: Workflow,
  langchain: Bot,
  openai: SiOpenai,
  rag: Sparkles,
  pgvector: Database,
  redis: SiRedis,
  llm: BrainCircuit,
  tools: Wrench,
  docker: SiDocker,
  aws: Cloud,
  vercel: SiVercel,
  stripe: SiStripe,
  supabase: SiSupabase,
  githubactions: SiGithubactions,
  socketio: SiSocketdotio,
  cicd: GitBranch,
};

/**
 * Agency tech stack strip — all tools visible at once (icon + name, no filters).
 */
export function HomeTechStackStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home-tech-stack"
      aria-label="Tech stack"
      className="relative isolate overflow-hidden border-y border-white/[0.08] bg-[#0A0A0A]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 55% 80% at 50% 0%, rgba(255,106,0,0.12) 0%, transparent 55%)",
            "radial-gradient(ellipse 40% 70% at 100% 60%, rgba(255,106,0,0.05) 0%, transparent 50%)",
          ].join(", "),
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/55 to-transparent"
      />

      <div className="layout-wrap relative z-10 py-10 sm:py-12 md:py-14 lg:py-16">
        <motion.header
          initial={false}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: easeOut }}
          style={{ opacity: 1 }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12"
        >
          <span className="section-eyebrow">{HOME_TECH_STACK_COPY.eyebrow}</span>
          <div className="fancy-divider mx-auto" />
          <h2 className="font-display text-[1.65rem] leading-[1.12] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2rem] md:text-[2.35rem] lg:text-[2.65rem]">
            {HOME_TECH_STACK_COPY.title}{" "}
            <span className="text-gradient italic">
              {HOME_TECH_STACK_COPY.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-[32rem] text-sm leading-[1.65] text-[#FFF7ED]/72 sm:mt-4 sm:text-[0.95rem]">
            {HOME_TECH_STACK_COPY.support}
          </p>
        </motion.header>

        <div className="space-y-8 sm:space-y-10">
          {HOME_TECH_STACK_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              initial={false}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: reduceMotion ? 0 : groupIndex * 0.05,
                ease: easeOut,
              }}
              style={{ opacity: 1 }}
            >
              <div className="mb-4 flex flex-col gap-1 sm:mb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF6A00] sm:text-[11px]">
                    {group.label}
                  </p>
                  <p className="mt-1.5 max-w-xl text-sm text-[#FFF7ED]/55">
                    {group.description}
                  </p>
                </div>
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[#FFF7ED]/3 sm:inline">
                  {String(group.items.length).padStart(2, "0")} tools
                </span>
              </div>

              <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 xl:gap-3">
                {group.items.map((item) => {
                  const Icon = techIcons[item.icon] ?? Code2;
                  return (
                    <li
                      key={item.name}
                      className="group flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-3 transition duration-300 hover:border-[#FF6A00]/35 hover:bg-[#FF6A00]/06 sm:gap-3 sm:px-3.5 sm:py-3.5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#FF6A00]/25 bg-[#FF6A00]/10">
                        <Icon
                          size={18}
                          color="#FF6A00"
                          className="shrink-0"
                          aria-hidden
                        />
                      </span>
                      <span className="min-w-0 text-left text-[12px] font-semibold leading-snug tracking-[0.01em] text-[#FFF7ED] sm:text-[13px]">
                        {item.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
