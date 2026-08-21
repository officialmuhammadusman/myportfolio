"use client";

import { useState, type ComponentType } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
import { cn } from "@/lib/utils";

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

export function HomeTechStackStrip() {
  const reduceMotion = useReducedMotion();
  
  // Flatten all tech items into a single array
  const allItems = HOME_TECH_STACK_GROUPS.flatMap(g => g.items);
  const midIndex = Math.ceil(allItems.length / 2);
  
  const row1Items = allItems.slice(0, midIndex);
  const row2Items = allItems.slice(midIndex);

  return (
    <section
      id="home-tech-stack"
      aria-label="Tech stack"
      className="relative isolate overflow-hidden border-y border-white/[0.08] bg-[#0A0A0A] py-16 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 50% 100% at 50% 0%, rgba(255,106,0,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="layout-wrap relative z-10">
        <motion.header
          initial={false}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: easeOut }}
          style={{ opacity: 1 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 mb-6">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#FFF7ED]/50">
              {HOME_TECH_STACK_COPY.eyebrow}
            </span>
          </div>
          <h2 className="text-[1.6rem] font-medium leading-[1.1] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2rem] lg:text-[2.5rem]">
            {HOME_TECH_STACK_COPY.title}{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient italic">
              {HOME_TECH_STACK_COPY.titleAccent}
            </span>
          </h2>
        </motion.header>
      </div>

      {/* ── INFINITE MARQUEE ── */}
      <div className="relative flex flex-col gap-4 w-full overflow-hidden mask-horizontal">
        
        {/* Row 1 (Moving Left) */}
        <motion.div
          initial={reduceMotion ? { x: 0 } : { x: "0%" }}
          animate={reduceMotion ? {} : { x: "-50%" }}
          transition={{
            duration: 180,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-4 whitespace-nowrap pr-4 w-max"
        >
          {[...row1Items, ...row1Items, ...row1Items, ...row1Items, ...row1Items, ...row1Items].map((item, index) => {
            const Icon = techIcons[item.icon] ?? Code2;
            return (
              <div
                key={`row1-${item.name}-${index}`}
                className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 hover:border-[#FF6A00]/30 transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#FF6A00]/25 bg-[#FF6A00]/10">
                  <Icon size={20} className="text-[#FF6A00]" aria-hidden />
                </div>
                <span className="text-sm font-medium tracking-tight text-[#FFF7ED]">
                  {item.name}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* Row 2 (Moving Right) */}
        <motion.div
          initial={reduceMotion ? { x: "-50%" } : { x: "-50%" }}
          animate={reduceMotion ? {} : { x: "0%" }}
          transition={{
            duration: 180,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-4 whitespace-nowrap pr-4 w-max"
        >
          {[...row2Items, ...row2Items, ...row2Items, ...row2Items, ...row2Items, ...row2Items].map((item, index) => {
            const Icon = techIcons[item.icon] ?? Code2;
            return (
              <div
                key={`row2-${item.name}-${index}`}
                className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 hover:border-[#FF6A00]/30 transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#FF6A00]/25 bg-[#FF6A00]/10">
                  <Icon size={20} className="text-[#FF6A00]" aria-hidden />
                </div>
                <span className="text-sm font-medium tracking-tight text-[#FFF7ED]">
                  {item.name}
                </span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
