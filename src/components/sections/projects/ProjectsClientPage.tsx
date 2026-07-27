"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import { PageShell } from "@/components/layout/PageShell";

const filters: { label: string; value: string }[] = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "full-stack" },
  { label: "Real-Time", value: "real-time" },
  { label: "Performance", value: "performance" },
  { label: "Backend", value: "backend" },
  { label: "Frontend", value: "frontend" },
];

export function ProjectsClientPage() {
  const [active, setActive] = useState("all");

  const filtered = projects.filter((p) =>
    active === "all" ? true : p.category.includes(active as ProjectCategory)
  );

  return (
    <div className="min-h-screen pb-12 sm:pb-16 md:pb-20" style={{ background: "var(--bg-primary)" }}>
      <PageShell>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 md:mb-14"
        >
          <span className="section-eyebrow">Portfolio</span>
          <div className="fancy-divider" />
          <h1 className="font-display mt-2 mb-3 text-3xl font-bold text-[var(--text-primary)] sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            My Work
          </h1>
          <p className="max-w-2xl text-base sm:text-lg lg:text-xl" style={{ color: "var(--text-secondary)" }}>
            Three production systems demonstrating architectural thinking, technical depth, and production-grade quality.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex flex-wrap gap-2 border-b pb-4 sm:mb-10 sm:gap-2.5 sm:pb-5 md:mb-12 md:pb-6"
          style={{ borderColor: "var(--border)" }}
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className="rounded-[6px] border px-3 py-1.5 text-xs font-medium transition-all duration-200 sm:px-4 sm:py-2 sm:text-sm md:px-5"
              style={{
                background: active === f.value ? "var(--accent-primary)" : "var(--surface)",
                color: active === f.value ? "white" : "var(--text-secondary)",
                borderColor: active === f.value ? "var(--accent-primary)" : "var(--border)",
                fontFamily: "var(--font-body)",
              }}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col rounded-[12px] border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
                style={{ background: "var(--surface)", borderColor: "var(--border)", boxShadow: "var(--shadow-card)" }}
              >
                {/* Image area */}
                <div className="relative h-52 overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${project.techStack[0]?.bgColor}18, ${project.techStack[2]?.bgColor ?? "#C8622A"}18)`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-display font-black select-none"
                      style={{ fontSize: "96px", color: "var(--border)", opacity: 0.5, lineHeight: 1 }}
                    >
                      {project.title[0]}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="tag-pill text-[10px]"
                      style={{
                        background: project.status === "completed" ? "var(--success-bg)" : "var(--warning-bg)",
                        color: project.status === "completed" ? "var(--success)" : "var(--warning)",
                        borderColor: project.status === "completed" ? "var(--success)44" : "var(--warning)44",
                      }}
                    >
                      {project.status === "completed" ? "✓ Live" : "In Progress"}
                    </span>
                  </div>

                  {/* Year */}
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-mono" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-display font-bold text-lg mb-2 line-clamp-1" style={{ color: "var(--text-primary)" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                    {project.shortDescription}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech.name}
                        className="tag-pill"
                        style={{
                          background: tech.bgColor + "18",
                          color: tech.bgColor === "#000000" ? "var(--text-secondary)" : tech.bgColor,
                          borderColor: tech.bgColor + "44",
                        }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5">
                    {project.badges.slice(0, 3).map((b) => (
                      <span key={b.label} className="achievement-badge">
                        <CheckCircle2 size={10} />
                        {b.label}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-auto pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-[6px] transition-all hover:opacity-90"
                      style={{ background: "var(--accent-primary)", color: "white" }}
                    >
                      <ExternalLink size={11} /> Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-[6px] border transition-all hover:bg-[var(--surface-hover)]"
                      style={{ borderColor: "var(--border-hover)", color: "var(--text-secondary)" }}
                    >
                      <Github size={11} /> GitHub
                    </a>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/l inline-flex items-center gap-1 text-xs font-medium ml-auto"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      Case Study
                      <ArrowRight size={11} className="group-hover/l:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p style={{ color: "var(--text-muted)" }}>No projects in this category yet.</p>
          </div>
        )}
      </PageShell>
    </div>
  );
}
