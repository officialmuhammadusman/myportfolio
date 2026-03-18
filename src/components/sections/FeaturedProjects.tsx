"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
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
    <section className="section-padding container-padding max-w-[1280px] mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
      >
        <div>
          <span className="section-eyebrow">Featured Work</span>
          <div className="fancy-divider" />
          <h2
            className="font-display font-bold mt-2"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "var(--text-primary)" }}
          >
            Production systems
            <br />
            <span className="text-gradient">that scale.</span>
          </h2>
        </div>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium shrink-0 mb-2"
          style={{ color: "var(--accent-primary)", fontFamily: "var(--font-body)" }}
        >
          View all projects
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>

      {/* Uniform grid - all same width */}
      <motion.div
        variants={variants.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* All cards same size */}
        {projects.slice(0, 6).map((project) => (
          <motion.div key={project.id} variants={variants.item}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: ReturnType<typeof getFeaturedProjects>[0] }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col h-full rounded-[12px] border overflow-hidden transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
      )}
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Image placeholder - consistent height */}
      <div
        className="relative overflow-hidden h-48"
        style={{ background: "var(--bg-secondary)" }}
      >
        {/* Gradient placeholder */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `linear-gradient(135deg, ${project.techStack[0]?.bgColor}22, ${project.techStack[2]?.bgColor ?? "#C8622A"}22)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display font-bold"
            style={{ fontSize: "56px", color: "var(--border)", opacity: 0.5 }}
          >
            {project.title[0]}
          </span>
        </div>

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span
            className="tag-pill text-[11px]"
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

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          className="font-display font-bold mb-2 line-clamp-1"
          style={{ fontSize: "18px", color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.shortDescription}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech.name}
              className="tag-pill text-xs"
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

        {/* Achievement badges */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-5">
          {project.badges.slice(0, 2).map((badge) => (
            <span key={badge.label} className="achievement-badge text-xs">
              <CheckCircle2 size={11} />
              {badge.label}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto pt-4 flex-wrap" style={{ borderTop: "1px solid var(--border)" }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-[6px] transition-all duration-200 hover:opacity-90"
            style={{ background: "var(--accent-primary)", color: "white" }}
          >
            <ExternalLink size={12} />
            Live
          </a>

          {/* Frontend GitHub */}
          {project.githubUrlFrontend && (
            <a
              href={project.githubUrlFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-2 rounded-[6px] border transition-all duration-200 hover:bg-[var(--surface-hover)]"
              style={{ borderColor: "var(--border-hover)", color: "var(--text-secondary)" }}
              title="Frontend Repository"
            >
              <Github size={12} />
              <span className="hidden sm:inline">Frontend</span>
              <span className="sm:hidden">FE</span>
            </a>
          )}

          {/* Backend GitHub */}
          {project.githubUrlBackend && (
            <a
              href={project.githubUrlBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-2 rounded-[6px] border transition-all duration-200 hover:bg-[var(--surface-hover)]"
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
            className="group/link inline-flex items-center gap-1 text-xs font-medium ml-auto transition-colors duration-200"
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