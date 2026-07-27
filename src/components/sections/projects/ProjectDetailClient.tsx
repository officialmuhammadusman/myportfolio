"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, CheckCircle2, ArrowLeft, ChevronRight, Zap, Shield, AlertTriangle, BarChart2 } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { Project } from "@/types";
import { SyntaxHighlighter } from "@/components/ui/SyntaxHighlighter";

type LucideIconName = keyof typeof LucideIcons;

function DynIcon({ name, size = 20 }: { name: string; size?: number }) {
  const Comp = (LucideIcons[name as LucideIconName] ?? LucideIcons.Star) as React.ElementType;
  return <Comp size={size} />;
}

export function ProjectDetailClient({ project, related }: { project: Project; related: Project[] }) {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>

      {/* Back link */}
      <div className="max-w-[1280px] mx-auto container-padding pt-4 pb-0">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent-primary)]"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
        >
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>

      {/* ── HERO BANNER ── */}
      <section
        className="py-16 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-[1280px] mx-auto container-padding">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Status */}
            <span
              className="tag-pill mb-4 inline-flex"
              style={{
                background: project.status === "completed" ? "var(--success-bg)" : "var(--warning-bg)",
                color: project.status === "completed" ? "var(--success)" : "var(--warning)",
                borderColor: project.status === "completed" ? "var(--success)44" : "var(--warning)44",
              }}
            >
              {project.status === "completed" ? "✓ Live in Production" : "In Progress"}
            </span>

            <h1
              className="font-display font-bold mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 64px)", color: "var(--text-primary)" }}
            >
              {project.title}
            </h1>

            <p className="text-lg max-w-2xl mb-6" style={{ color: "var(--text-secondary)" }}>
              {project.shortDescription}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="tag-pill"
                  style={{
                    background: tech.bgColor + "20",
                    color: tech.bgColor === "#000000" ? "var(--text-secondary)" : tech.bgColor,
                    borderColor: tech.bgColor + "44",
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-[8px] text-white transition-all hover:opacity-90"
                style={{ background: "var(--accent-primary)" }}
              >
                <ExternalLink size={15} /> Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-[8px] border transition-all hover:bg-[var(--surface-hover)]"
                style={{ borderColor: "var(--border-hover)", color: "var(--text-secondary)" }}
              >
                <Github size={15} /> View GitHub
              </a>
            </div>

            {/* Hero image area */}
            <div
              className="w-full rounded-[12px] border overflow-hidden"
              style={{ height: "360px", background: "var(--bg-secondary)", borderColor: "var(--border)" }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.techStack[0]?.bgColor}15, ${project.techStack[2]?.bgColor ?? "#C8622A"}15)`,
                }}
              >
                <span
                  className="font-display font-black select-none"
                  style={{ fontSize: "clamp(100px, 18vw, 200px)", color: "var(--border)", opacity: 0.4, lineHeight: 1 }}
                >
                  {project.title[0]}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto container-padding">

        {/* ── OVERVIEW ── */}
        <Section title="Project Overview" eyebrow="Overview">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.longDescription}
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Built with a production-first mindset — every feature comes with tests, documentation, and monitoring. The architecture was designed for scalability from day one, not as an afterthought.
              </p>
            </div>

            {/* Quick metrics */}
            <div className="space-y-3">
              {[
                { icon: "TestTube2", label: "Jest Tests", value: project.testCount },
                { icon: "Shield", label: "Code Coverage", value: project.testCoverage },
                { icon: "Calendar", label: "Year", value: project.year },
                { icon: "Globe", label: "Status", value: project.status === "completed" ? "Live" : "In Progress" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between px-4 py-3 rounded-[8px] border"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-center gap-2">
                    <DynIcon name={m.icon} size={14} />
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>{m.label}</span>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── FEATURES ── */}
        <Section title="Key Features" eyebrow="Features">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {project.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-5 rounded-[12px] border transition-all duration-200 hover:border-[var(--accent-primary)] hover:-translate-y-0.5"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-9 h-9 rounded-[8px] flex items-center justify-center mb-3"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  <DynIcon name={feat.icon} size={16} />
                </div>
                <h4 className="font-semibold text-sm mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
                  {feat.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── TECHNICAL DECISIONS ── */}
        <Section title="Technical Decisions" eyebrow="Architecture">
          <div className="space-y-5">
            {project.technicalDecisions.map((dec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-[12px] border"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5 font-display"
                  style={{ background: "var(--accent-primary)", color: "white" }}
                >
                  {i + 1}
                </div>
                <div>
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)" }}
                  >
                    {dec.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {dec.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── CHALLENGES & SOLUTIONS ── */}
        <Section title="Challenges & Solutions" eyebrow="Problem Solving">
          <div className="space-y-6">
            {project.challenges.map((ch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-4"
              >
                <div
                  className="p-5 rounded-[12px] border-l-4"
                  style={{
                    background: "var(--error-bg)",
                    borderColor: "var(--error)",
                    borderLeftColor: "var(--error)",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle size={14} style={{ color: "var(--error)" }} />
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--error)" }}>
                      Problem
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {ch.problem}
                  </p>
                </div>
                <div
                  className="p-5 rounded-[12px] border-l-4"
                  style={{
                    background: "var(--success-bg)",
                    borderColor: "var(--success)",
                    borderLeftColor: "var(--success)",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={14} style={{ color: "var(--success)" }} />
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--success)" }}>
                      Solution
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {ch.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── TESTING & PERFORMANCE ── */}
        <Section title="Testing & Performance" eyebrow="Quality">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testing */}
            <div
              className="p-6 rounded-[12px] border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Shield size={18} style={{ color: "var(--accent-primary)" }} />
                <h4 className="font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
                  Test Coverage
                </h4>
              </div>
              <div className="flex items-end gap-3 mb-3">
                <span className="font-display font-bold text-5xl" style={{ color: "var(--text-primary)" }}>
                  {project.testCount}
                </span>
                <span className="text-sm pb-2" style={{ color: "var(--text-muted)" }}>Jest tests written</span>
              </div>
              <div
                className="h-2 rounded-full mb-2 overflow-hidden"
                style={{ background: "var(--bg-secondary)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: project.testCoverage,
                    background: "var(--accent-gradient)",
                  }}
                />
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {project.testCoverage} code coverage on critical paths
              </p>
            </div>

            {/* Performance metrics */}
            <div
              className="p-6 rounded-[12px] border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <BarChart2 size={18} style={{ color: "var(--accent-primary)" }} />
                <h4 className="font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
                  Performance Metrics
                </h4>
              </div>
              <div className="space-y-3">
                {project.performanceMetrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>{m.label}</span>
                    <div className="text-right">
                      <span className="text-sm font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>
                        {m.value}
                      </span>
                      {m.unit && (
                        <span className="text-xs ml-1" style={{ color: "var(--text-muted)" }}>
                          {m.unit}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievement badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            {project.badges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
                style={{
                  background: "var(--success-bg)",
                  color: "var(--success)",
                  borderColor: "var(--success)33",
                }}
              >
                <CheckCircle2 size={13} />
                {b.label}
              </span>
            ))}
          </div>
        </Section>

        {/* ── CODE SNIPPETS ── */}
        {project.codeSnippets && project.codeSnippets.length > 0 && (
          <Section title="Code Highlights" eyebrow="Implementation">
            <div className="space-y-6">
              {project.codeSnippets.map((snippet, i) => (
                <div key={i}>
                  <div
                    className="flex items-center justify-between px-4 py-2 rounded-t-[8px] border border-b-0"
                    style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
                  >
                    <span className="text-xs font-medium" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      {snippet.filename}
                    </span>
                    <span
                      className="tag-pill text-[10px]"
                      style={{ background: "var(--surface)", color: "var(--accent-primary)", borderColor: "var(--border)" }}
                    >
                      {snippet.language}
                    </span>
                  </div>
                  <SyntaxHighlighter code={snippet.code} language={snippet.language} />
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* ── RELATED PROJECTS ── */}
        {related.length > 0 && (
          <Section title="Other Projects" eyebrow="Related">
            <div className="grid sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group flex items-center gap-4 p-5 rounded-[12px] border transition-all duration-200 hover:border-[var(--accent-primary)] hover:-translate-y-0.5"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <div
                    className="w-12 h-12 rounded-[8px] flex items-center justify-center font-display font-bold text-xl shrink-0"
                    style={{ background: "var(--bg-secondary)", color: "var(--accent-primary)" }}
                  >
                    {p.title[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm line-clamp-1 mb-1 group-hover:text-[var(--accent-primary)] transition-colors" style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
                      {p.title}
                    </h4>
                    <p className="text-xs line-clamp-1" style={{ color: "var(--text-muted)" }}>
                      {p.shortDescription}
                    </p>
                  </div>
                  <ChevronRight size={16} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent-primary)" }} />
                </Link>
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
}

function Section({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-14 border-b last:border-b-0"
      style={{ borderColor: "var(--border)" }}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <div className="fancy-divider" />
      <h2
        className="font-display font-bold mt-2 mb-8"
        style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {children}
    </motion.section>
  );
}
