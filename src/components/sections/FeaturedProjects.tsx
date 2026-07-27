"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { SectionShell } from "@/components/layout/PageShell";
import { cn } from "@/lib/utils";

const variants = {
  container: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  },
  item: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
};

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <SectionShell>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end sm:gap-6 md:mb-14 lg:mb-16"
      >
        <div>
          <span className="section-eyebrow">Featured Work</span>
          <div className="fancy-divider" />
          <h2 className="font-display mt-2 text-3xl font-bold leading-[1.1] text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-6xl">
            Production systems
            <br />
            <span className="text-gradient">that scale.</span>
          </h2>
        </div>
        <Link
          href="/projects"
          className="group mb-1 inline-flex shrink-0 items-center gap-2 text-xs font-medium sm:mb-2 sm:text-sm"
          style={{ color: "var(--accent-primary)", fontFamily: "var(--font-body)" }}
        >
          View all projects
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>

      <motion.div
        variants={variants.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-7"
      >
        {projects.slice(0, 6).map((project) => (
          <motion.div key={project.id} variants={variants.item}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}

function ProjectCard({ project }: { project: ReturnType<typeof getFeaturedProjects>[0] }) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[12px] border transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
      )}
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div
        className="relative h-40 overflow-hidden sm:h-44 md:h-48 lg:h-52"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `linear-gradient(135deg, ${project.techStack[0]?.bgColor}22, ${project.techStack[2]?.bgColor ?? "#C8622A"}22)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display text-4xl font-bold opacity-50 sm:text-5xl md:text-[56px]"
            style={{ color: "var(--border)" }}
          >
            {project.title[0]}
          </span>
        </div>

        <div className="absolute right-3 top-3">
          <span
            className="tag-pill text-[10px] sm:text-[11px]"
            style={{
              background: project.status === "completed" ? "var(--success-bg)" : "var(--warning-bg)",
              color: project.status === "completed" ? "var(--success)" : "var(--warning)",
              border: `1px solid ${project.status === "completed" ? "var(--success)" : "var(--warning)"}33`,
            }}
          >
            {project.status === "completed" ? "Live" : "In Progress"}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        <h3 className="font-display mb-2 line-clamp-1 text-base font-bold text-[var(--text-primary)] sm:text-lg md:text-xl">
          {project.title}
        </h3>
        <p className="mb-3 line-clamp-2 text-xs leading-relaxed sm:mb-4 sm:text-sm" style={{ color: "var(--text-secondary)" }}>
          {project.shortDescription}
        </p>

        <div className="mb-3 flex flex-wrap gap-2 sm:mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech.name}
              className="tag-pill text-[10px] sm:text-xs"
              style={{
                background: tech.bgColor + "22",
                color: tech.bgColor === "#000000" ? "var(--text-secondary)" : tech.bgColor,
                borderColor: tech.bgColor + "44",
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1 sm:mb-5 sm:gap-x-4">
          {project.badges.slice(0, 2).map((badge) => (
            <span key={badge.label} className="achievement-badge text-[10px] sm:text-xs">
              <CheckCircle2 size={11} />
              {badge.label}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-3 sm:pt-4" style={{ borderTop: "1px solid var(--border)" }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[6px] px-3 py-1.5 text-[10px] font-semibold transition-all duration-200 hover:opacity-90 sm:px-4 sm:py-2 sm:text-xs"
            style={{ background: "var(--accent-primary)", color: "white" }}
          >
            <ExternalLink size={12} />
            Live
          </a>

          {project.githubUrlFrontend && (
            <a
              href={project.githubUrlFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[6px] border px-2 py-1.5 text-[10px] font-semibold transition-all duration-200 hover:bg-[var(--surface-hover)] sm:px-2 sm:py-2 sm:text-xs"
              style={{ borderColor: "var(--border-hover)", color: "var(--text-secondary)" }}
              title="Frontend Repository"
            >
              <Github size={12} />
              <span className="hidden sm:inline">Frontend</span>
              <span className="sm:hidden">FE</span>
            </a>
          )}

          {project.githubUrlBackend && (
            <a
              href={project.githubUrlBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[6px] border px-2 py-1.5 text-[10px] font-semibold transition-all duration-200 hover:bg-[var(--surface-hover)] sm:px-2 sm:py-2 sm:text-xs"
              style={{ borderColor: "var(--border-hover)", color: "var(--text-secondary)" }}
              title="Backend Repository"
            >
              <Github size={12} />
              <span className="hidden sm:inline">Backend</span>
              <span className="sm:hidden">BE</span>
            </a>
          )}

          <Link
            href={`/projects/${project.slug}`}
            className="group/link ml-auto inline-flex items-center gap-1 text-[10px] font-medium transition-colors duration-200 sm:text-xs"
            style={{ color: "var(--accent-primary)" }}
          >
            <span className="hidden sm:inline">Case Study</span>
            <span className="sm:hidden">More</span>
            <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
