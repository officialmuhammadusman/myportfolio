"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { SELECTED_PROJECTS_COPY, SELECTED_PROJECTS_DATA } from "@/data/selectedProjects";
import { cn } from "@/lib/utils";
import Link from "next/link";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function SelectedProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] py-16 sm:py-24 border-t border-white/[0.08]">
      <div className="layout-wrap relative z-10">
        <motion.header
          initial={false}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeOut }}
          style={{ opacity: 1 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="section-eyebrow">{SELECTED_PROJECTS_COPY.eyebrow}</span>
          <div className="fancy-divider mx-auto" />
          <h2 className="text-[1.6rem] font-medium leading-[1.1] tracking-[-0.03em] text-[#FFF7ED] sm:text-[2rem] lg:text-[2.5rem]">
            {SELECTED_PROJECTS_COPY.title}{" "}
            <span className="text-gradient italic">{SELECTED_PROJECTS_COPY.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#FFF7ED]/70 sm:text-base">
            {SELECTED_PROJECTS_COPY.support}
          </p>
        </motion.header>

        {/* ── Mobile: Native Horizontal Carousel ── */}
        <div className="sm:hidden -mx-4 px-4 snap-scroll-x pb-8">
          {SELECTED_PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: easeOut }}
              className="snap-card-full mobile-card flex flex-col justify-between p-6 shrink-0"
            >
              <Link href={`/work/${project.id}`} className="flex flex-col flex-1">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#FF6A00] mb-2">
                    {project.subtitle}
                  </p>
                  <h3 className="text-[1.25rem] font-medium tracking-tight text-[#FFF7ED] mb-4">
                    {project.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#FFF7ED]/70 line-clamp-4">
                    {project.description[0]}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="rounded-full bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-[10px] text-[#FFF7ED]/60 font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="rounded-full bg-white/[0.02] border border-transparent px-1.5 py-1 text-[10px] text-[#FFF7ED]/40">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              
                <span className="mt-6 flex items-center justify-between w-full rounded-xl bg-white/[0.03] border border-white/[0.08] p-3 text-xs font-medium uppercase tracking-[0.1em] text-[#FFF7ED]/80 hover:bg-white/[0.08] transition-colors">
                  View Project
                  <ArrowUpRight size={14} className="text-[#FF6A00]" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Desktop: Staggered Editorial Grid ── */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {SELECTED_PROJECTS_DATA.map((project, index) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
            >
              <motion.div
                initial={false}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: easeOut }}
                style={{ opacity: 1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04] hover:border-[#FF6A00]/20 h-full cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#FF6A00]">
                      {project.subtitle}
                    </p>
                    <span className="h-8 w-8 rounded-full bg-white/[0.05] flex items-center justify-center shrink-0 border border-white/[0.05] group-hover:bg-[#FF6A00] transition-colors">
                      <ArrowUpRight size={16} className="text-[#FFF7ED]/50 group-hover:text-[#0A0A0A]" />
                    </span>
                  </div>
                  
                  <h3 className="text-[1.6rem] font-medium tracking-tight text-[#FFF7ED] mb-5">
                    {project.title}
                  </h3>
                  
                  <ul className="space-y-3 mb-8">
                    {project.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#FFF7ED]/70">
                        <span className="text-[#FF6A00] mt-1.5 text-[8px] opacity-70">●</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full bg-[#0A0A0A] border border-white/[0.1] px-3 py-1.5 text-[11px] font-medium tracking-[0.02em] text-[#FFF7ED]/70">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
