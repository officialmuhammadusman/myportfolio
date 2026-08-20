"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, CheckCircle2 } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { cn, externalLinkProps } from "@/lib/utils";
import { TechTagList } from "./TechTag";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
  className?: string;
}

export function ProjectCard({ project, index = 0, className }: ProjectCardProps) {
  const statusColors = {
    completed: "text-[var(--success)] bg-[var(--success-bg)] border-[var(--success)]/20",
    "in-progress": "text-[var(--warning)] bg-[var(--warning-bg)] border-[var(--warning)]/20",
    planned: "text-[var(--text-muted)] bg-[var(--surface)] border-[var(--border)]",
  };

  const statusLabels = {
    completed: "Live",
    "in-progress": "In Progress",
    planned: "Planned",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-[12px]",
        "hover:border-[var(--border-hover)] hover:-translate-y-[3px]",
        "transition-all duration-300",
        "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
        className
      )}
    >
      {/* ── Screenshot ── */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-[11px] bg-[var(--bg-secondary)]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            // Fallback gradient if image missing
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={cn("tag-pill border text-[11px]", statusColors[project.status])}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {statusLabels[project.status]}
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Title + description */}
        <div className="flex flex-col gap-1.5">
          <h3
            className="font-display font-semibold text-[19px] text-[var(--text-primary)] leading-tight line-clamp-1"
            style={{ letterSpacing: "-0.015em" }}
          >
            {project.title}
          </h3>
          <p className="text-[13px] text-[var(--text-secondary)] leading-snug line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech tags */}
        <TechTagList tags={project.techStack} max={4} size="sm" />

        {/* Achievement badges */}
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {project.badges.slice(0, 3).map((badge) => (
            <span key={badge.label} className="achievement-badge">
              <CheckCircle2 size={11} className="shrink-0" />
              {badge.label}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* ── Actions ── */}
        <div className="flex items-center justify-between pt-3 border-t border-[var(--divider)]">
          <div className="flex items-center gap-2">
            {/* Live demo */}
            <a
              href={project.liveUrl ?? undefined}
              {...externalLinkProps}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-semibold text-white bg-accent-primary hover:bg-accent-primary-hover transition-colors duration-200"
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
            {/* GitHub */}
            <a
              href={project.githubUrl}
              {...externalLinkProps}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-semibold text-[var(--text-secondary)] border border-[var(--border)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all duration-200"
            >
              <Github size={12} />
              GitHub
            </a>
          </div>

          {/* Case study link */}
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1 text-[12px] font-semibold text-accent-primary hover:gap-2 transition-all duration-200"
          >
            Case Study
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
