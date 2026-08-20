"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, CheckCircle2, ArrowLeft, ChevronRight, Zap, Shield, AlertTriangle, BarChart2, ArrowUpRight } from "lucide-react";
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
    <div className="min-h-screen bg-[#050505] text-[#FFF7ED]">

      {/* Back link */}
      <div className="layout-wrap pt-8 pb-0">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF6A00] transition-colors hover:text-[#FFB347]"
        >
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>

      {/* ── FULL-WIDTH HERO BANNER ── */}
      <section className="relative isolate min-h-[70vh] flex flex-col justify-end overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 bg-[#050505]">
        
        {/* Cinematic Background Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.heroImage ? project.heroImage : "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600&h=900"}
            alt={project.title}
            className="w-full h-full object-cover object-[center_30%] opacity-30 grayscale-[20%]"
          />
          
          {/* Gradients */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.8)_60%,rgba(5,5,5,1)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,106,0,0.15),transparent_60%)]" />
        </motion.div>
        
        <div className="layout-wrap relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            {/* Status */}
            {project.liveUrl && (
              <span
                className="mb-6 inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                style={{
                  background: project.status === "completed" ? "rgba(34, 197, 94, 0.1)" : "rgba(234, 179, 8, 0.1)",
                  color: project.status === "completed" ? "#22c55e" : "#eab308",
                  borderColor: project.status === "completed" ? "rgba(34, 197, 94, 0.2)" : "rgba(234, 179, 8, 0.2)",
                }}
              >
                {project.status === "completed" ? "✓ Live in Production" : "In Progress"}
              </span>
            )}

            <h1 className="font-display text-[3rem] leading-[1.05] tracking-tight text-white sm:text-[4rem] md:text-[5rem] mb-6">
              {project.title}
            </h1>

            <p className="mt-6 text-[16px] leading-relaxed text-[#FF6A00] sm:mt-8 sm:text-[20px] max-w-2xl font-medium mb-10">
              {project.shortDescription}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {project.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="rounded-full border border-white/20 bg-black/20 backdrop-blur-md px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/90"
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FF6A00] px-8 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 text-sm font-bold text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
                >
                  <Github size={16} /> View GitHub
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="layout-wrap pb-24">

        {/* ── OVERVIEW ── */}
        <Section title="Project Overview" eyebrow="Overview">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[15px] sm:text-base leading-relaxed text-[#FFF7ED]/70">
                {project.longDescription}
              </p>
              <p className="text-[15px] sm:text-base leading-relaxed text-[#FFF7ED]/70">
                Built with a production-first mindset — every feature comes with tests, documentation, and monitoring. The architecture was designed for scalability from day one, not as an afterthought.
              </p>
            </div>

            {/* Quick metrics */}
            <div className="space-y-4">
              {[
                { icon: "TestTube2", label: "QA & Testing", value: project.testCount || "Production QA" },
                { icon: "Shield", label: "Stability", value: project.testCoverage || (project.liveUrl ? "Live product" : "Internal Release") },
                { icon: "Calendar", label: "Shipped", value: project.year },
                ...(project.liveUrl ? [{ icon: "Globe", label: "Status", value: project.status === "completed" ? "Live" : "In Progress" }] : []),
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between px-5 py-4 rounded-xl border border-white/[0.08] bg-white/[0.02]"
                >
                  <div className="flex items-center gap-3">
                    <DynIcon name={m.icon} size={16} />
                    <span className="text-[13px] text-[#FFF7ED]/50">{m.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#FFF7ED]">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── FEATURES ── */}
        <Section title="Key Features" eyebrow="Capabilities">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors duration-300"
              >
                {/* Top border glow on hover */}
                <div className="absolute inset-x-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#FF6A00]/0 to-transparent transition-all duration-500 group-hover:via-[#FF6A00]/50" />
                
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#FF6A00]">
                  <DynIcon name={feat.icon} size={20} />
                </div>
                <h4 className="mb-2 font-display text-lg tracking-tight text-[#FFF7ED]">
                  {feat.title}
                </h4>
                <p className="text-[13px] leading-relaxed text-[#FFF7ED]/50">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── TECHNICAL DECISIONS ── */}
        <Section title="Technical Decisions" eyebrow="Architecture">
          <div className="space-y-4">
            {project.technicalDecisions.map((dec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl border border-white/[0.08] bg-[#0A0A0A]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FF6A00]/30 bg-[#FF6A00]/10 text-[#FF6A00] font-bold font-mono text-sm">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="font-display text-lg tracking-tight text-[#FFF7ED] mb-2">
                    {dec.title}
                  </h4>
                  <p className="text-[14px] leading-relaxed text-[#FFF7ED]/60">
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
                <div className="p-6 rounded-2xl border-l-2 border-l-[#ef4444] border-t border-b border-r border-white/[0.04] bg-[#0A0A0A]">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle size={16} className="text-[#ef4444]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#ef4444]">
                      The Challenge
                    </span>
                  </div>
                  <p className="text-[14px] leading-relaxed text-[#FFF7ED]/70">
                    {ch.problem}
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl border-l-2 border-l-[#22c55e] border-t border-b border-r border-white/[0.04] bg-[#0A0A0A]">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={16} className="text-[#22c55e]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#22c55e]">
                      The Solution
                    </span>
                  </div>
                  <p className="text-[14px] leading-relaxed text-[#FFF7ED]/70">
                    {ch.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── TESTING & PERFORMANCE ── */}
        <Section title="Metrics & Performance" eyebrow="Outcomes">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-6">
                <BarChart2 size={20} className="text-[#FF6A00]" />
                <h4 className="font-display text-lg text-[#FFF7ED]">
                  System Metrics
                </h4>
              </div>
              <div className="space-y-4">
                {project.performanceMetrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between border-b border-white/[0.04] pb-4 last:border-0 last:pb-0">
                    <span className="text-[14px] text-[#FFF7ED]/50">{m.label}</span>
                    <div className="text-right">
                      <span className="text-[15px] font-bold text-[#FFF7ED]">
                        {m.value}
                      </span>
                      {m.unit && (
                        <span className="text-[12px] ml-2 text-[#FFF7ED]/40 uppercase tracking-wider">
                          {m.unit}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] flex flex-col justify-center">
              <h4 className="font-display text-lg text-[#FFF7ED] mb-6 text-center">
                Production Readiness
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {project.badges.map((b) => (
                  <span
                    key={b.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#FF6A00]/10 px-4 py-2 text-[12px] font-semibold text-[#FF6A00]"
                  >
                    <DynIcon name={b.icon ?? "Star"} size={14} />
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── CODE SNIPPETS ── */}
        {project.codeSnippets && project.codeSnippets.length > 0 && (
          <Section title="Code Highlights" eyebrow="Implementation">
            <div className="space-y-6">
              {project.codeSnippets.map((snippet, i) => (
                <div key={i} className="rounded-2xl border border-white/[0.08] overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-3 bg-white/[0.02] border-b border-white/[0.08]">
                    <span className="text-[13px] font-mono text-[#FFF7ED]/50">
                      {snippet.filename}
                    </span>
                    <span className="rounded-md bg-white/[0.04] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FF6A00]">
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
          <Section title="Other Work" eyebrow="Related">
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group flex flex-col p-6 rounded-2xl border border-white/[0.08] bg-[#0A0A0A] hover:bg-white/[0.02] hover:border-[#FF6A00]/30 transition-all duration-300"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                      Case Study
                    </span>
                    <ArrowUpRight size={16} className="text-[#FFF7ED]/30 group-hover:text-[#FF6A00] transition-colors" />
                  </div>
                  <h4 className="font-display text-xl text-[#FFF7ED] mb-2 group-hover:text-[#FF6A00] transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-[13px] text-[#FFF7ED]/50 line-clamp-2">
                    {p.shortDescription}
                  </p>
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
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="py-16 sm:py-20 border-b border-white/[0.08] last:border-0"
    >
      <div className="mb-10 sm:mb-12">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A00] mb-3 block">
          {eyebrow}
        </span>
        <h2 className="font-display text-[2rem] sm:text-[2.5rem] tracking-tight text-[#FFF7ED]">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}
