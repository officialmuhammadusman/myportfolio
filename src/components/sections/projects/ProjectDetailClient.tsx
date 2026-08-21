"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import {
  ExternalLink, Github, ArrowLeft, ArrowRight, ArrowUpRight,
  CheckCircle2, AlertTriangle, Zap, BarChart2, ChevronDown, ChevronUp
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { Project } from "@/types";
import { SyntaxHighlighter } from "@/components/ui/SyntaxHighlighter";
import { BottomSheet } from "@/components/ui/BottomSheet";

type LucideIconName = keyof typeof LucideIcons;
function DynIcon({ name, size = 20 }: { name: string; size?: number }) {
  const Comp = (LucideIcons[name as LucideIconName] ?? LucideIcons.Star) as React.ElementType;
  return <Comp size={size} />;
}

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Section wrapper with scroll reveal ─── */
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ─── Section label ─── */
function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-[11px] font-medium text-[#FF6A00]/60">{number}</span>
      <span className="h-px flex-1 max-w-[40px] bg-[#FF6A00]/30" />
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-white/35">
        {label}
      </span>
    </div>
  );
}

export function ProjectDetailClient({ project, related }: { project: Project; related: Project[] }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const [openDecision, setOpenDecision] = useState<number | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFF7ED]">

      {/* ── FULL-VIEWPORT HERO w/ PARALLAX ── */}
      <section ref={heroRef} className="relative isolate flex min-h-[100dvh] flex-col justify-end overflow-hidden pb-16 pt-24 sm:pb-24">

        {/* Parallax background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: imgY, scale: imgScale }}
        >
          <img
            src={project.heroImage || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1920&h=1080"}
            alt={project.title}
            className="h-full w-full object-cover opacity-20 filter grayscale blur-[1px]"
          />
        </motion.div>
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(5,5,5,0.4)_0%,rgba(5,5,5,0.85)_50%,rgba(5,5,5,1)_100%)]" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_100%_60%_at_0%_100%,rgba(255,106,0,0.15),transparent)]" />

        {/* Large project number watermark */}
        <span
          className="pointer-events-none absolute right-[-5%] top-[10%] z-[2] select-none font-medium leading-none tracking-tighter text-white/[0.03]"
          style={{ fontSize: "clamp(12rem, 35vw, 30rem)" }}
          aria-hidden
        >
          {String(related.length + 1).padStart(2, "0")}
        </span>

        <div className="layout-wrap relative z-[3] w-full">

          {/* Back nav */}
          <Link
            href="/projects"
            className="mb-12 inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-white/40 transition-colors hover:text-[#FF6A00]"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>

          {/* Title */}
          <div className="flex flex-col mb-12">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF6A00]/25 bg-[#FF6A00]/10 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#FF6A00]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00] animate-pulse-dot" />
                  Live in Production
                </span>
              )}
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 font-mono text-[10px] text-white/45">
                {project.year}
              </span>
              {project.category.map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/60">
                  {c}
                </span>
              ))}
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-medium leading-[0.95] tracking-[-0.02em] text-white"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
              >
                {project.title}
              </motion.h1>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16 items-end">
            {/* Short description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl text-[16px] leading-[1.8] text-white/50 sm:text-[20px]"
            >
              {project.shortDescription}
            </motion.p>

            {/* Action row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
            >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#FF6A00] px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] text-black transition-all hover:brightness-110 hover:shadow-[0_8px_28px_rgba(255,106,0,0.4)]"
              >
                <ExternalLink size={15} /> View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.05] px-7 py-3.5 text-[13px] font-medium text-white/80 transition-all hover:border-white/30 hover:text-white"
              >
                <Github size={15} /> GitHub
              </a>
            )}
          </motion.div>
          </div>

          {/* Tech stack marquee row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {project.techStack.map((tech) => (
              <span
                key={tech.name}
                className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-[11px] font-medium text-white/60 backdrop-blur-sm"
              >
                {tech.name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="layout-wrap max-w-6xl py-24 sm:py-32">

        {/* 01 — Overview */}
        <Section className="mb-32 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_400px]">
          <div className="glass-panel-heavy p-10 sm:p-16 rounded-[40px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[#FF6A00]/5 opacity-0 transition-opacity duration-700 hover:opacity-100" />
            <SectionLabel number="01" label="Overview" />
            <h2 className="mb-6 text-[1.2rem] font-medium leading-snug tracking-tight text-white mt-4">
              About the Project
            </h2>
            <p className="text-[15px] leading-[1.8] text-white/60 line-clamp-3">
              {project.longDescription}
            </p>
            <button
              onClick={() => setIsAboutOpen(true)}
              className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-wider text-[#FF6A00] hover:text-[#FF6A00]/70 transition-colors"
            >
              Read More <ChevronDown size={14} />
            </button>
          </div>

          {/* Stats cards / Bento Side */}
          <div className="flex flex-col gap-6">
            {project.badges.map((badge, i) => (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                key={badge.label}
                className="glass-panel p-8 rounded-[32px] flex items-center gap-6 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00]/0 to-[#FF6A00]/10 translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0" />
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#FF6A00]/30 bg-[#FF6A00]/10 text-[#FF6A00] transition-transform duration-500 group-hover:scale-110">
                  <DynIcon name={badge.icon ?? "Star"} size={24} />
                </div>
                <span className="text-[16px] font-medium text-white tracking-wide">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* About BottomSheet — rendered outside the grid */}
        <BottomSheet isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} title="About the Project">
          <p className="text-[15px] leading-[1.9] text-white/70 pb-4">
            {project.longDescription}
          </p>
        </BottomSheet>

        {/* 02 — Key Features */}
        <Section className="mb-32">
          <SectionLabel number="02" label="Key Features" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-8">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-[32px] glass-panel p-10 transition-all hover:border-[#FF6A00]/30"
              >
                {/* Large number bg */}
                <span className="pointer-events-none absolute right-6 top-6 select-none text-[5rem] font-medium leading-none text-white/[0.03] transition-colors duration-500 group-hover:text-[#FF6A00]/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,106,0,0.1),transparent_60%)]" />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF6A00]/30 bg-[#FF6A00]/10 text-[#FF6A00] transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(255,106,0,0.2)]">
                    <DynIcon name={feature.icon} size={24} />
                  </div>
                  <h3 className="mb-4 text-[1.5rem] font-medium text-white leading-tight">{feature.title}</h3>
                  <p className="text-[15px] leading-relaxed text-white/50 flex-1">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* 03 — Technical Decisions */}
        {project.technicalDecisions?.length > 0 && (
          <Section className="mb-32">
            <SectionLabel number="03" label="Technical Decisions" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {project.technicalDecisions.map((decision, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel p-8 rounded-[32px] group relative overflow-hidden flex flex-col h-full min-h-[250px]"
                >
                  <div className="absolute inset-0 bg-[#FF6A00]/5 translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0" />
                  <span className="font-mono text-[3.5rem] font-medium text-white/5 absolute -top-4 -right-2 transition-colors duration-500 group-hover:text-[#FF6A00]/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  
                  <div className="relative z-10">
                    <h3 className="mb-4 text-[1.4rem] font-medium text-white leading-tight">{decision.title}</h3>
                    <p className="text-[14px] leading-[1.8] text-white/50">{decision.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        )}

        {/* 04 — Challenges & Solutions */}
        {project.challenges?.length > 0 && (
          <Section className="mb-32">
            <SectionLabel number="04" label="Challenges & Solutions" />
            <div className="flex flex-col gap-8 mt-8">
              {project.challenges.map((ch, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 gap-6 lg:grid-cols-2"
                >
                  <div className="rounded-[32px] border border-red-500/20 bg-red-500/[0.03] p-10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.08),transparent_50%)]" />
                    <div className="mb-6 flex items-center gap-3 text-red-400 relative z-10">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                        <AlertTriangle size={18} />
                      </div>
                      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em]">The Challenge</span>
                    </div>
                    <p className="text-[16px] leading-[1.8] text-white/70 relative z-10">{ch.problem}</p>
                  </div>
                  
                  <div className="rounded-[32px] border border-[#FF6A00]/20 bg-[#FF6A00]/[0.03] p-10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,106,0,0.08),transparent_50%)]" />
                    <div className="mb-6 flex items-center gap-3 text-[#FF6A00] relative z-10">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6A00]/10">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em]">Our Solution</span>
                    </div>
                    <p className="text-[16px] leading-[1.8] text-white/70 relative z-10">{ch.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        )}

        {/* 05 — Performance */}
        {project.performanceMetrics?.length > 0 && (
          <Section className="mb-32">
            <SectionLabel number="05" label="Performance & Results" />
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mt-8">
              {project.performanceMetrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center rounded-[32px] glass-panel p-8 text-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[#FF6A00]/0 transition-colors duration-500 group-hover:bg-[#FF6A00]/5" />
                  <span className="text-[2.5rem] md:text-[3.5rem] font-medium text-white group-hover:text-[#FF6A00] transition-colors duration-500 leading-none">
                    {metric.value}
                  </span>
                  <div className="mt-4 flex flex-col items-center">
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#FF6A00]/80">{metric.label}</span>
                    {metric.unit && (
                      <span className="mt-2 font-mono text-[10px] text-white/30">{metric.unit}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        )}

        {/* Code Snippets */}
        {project.codeSnippets?.map((snippet, i) => (
          <Section key={i} className="mb-12">
            <div className="overflow-hidden rounded-2xl border border-white/[0.07]">
              <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#0C0C0C] px-5 py-3.5">
                <span className="font-mono text-[12px] text-white/50">{snippet.filename}</span>
                <span className="rounded-md bg-white/[0.05] px-2.5 py-1 font-mono text-[10px] text-white/35">{snippet.language}</span>
              </div>
              <SyntaxHighlighter code={snippet.code} language={snippet.language} />
            </div>
          </Section>
        ))}
      </div>

      {/* ── RELATED PROJECTS ── */}
      {related.length > 0 && (
        <section className="border-t border-white/[0.06] bg-[#080808] py-20 sm:py-28">
          <div className="layout-wrap">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-[1.6rem] font-medium text-white sm:text-[2rem]">
                More Work
              </h2>
              <Link
                href="/projects"
                className="flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-[#FF6A00]"
              >
                All Projects <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {related.map((rel, i) => (
                <Link
                  key={rel.id}
                  href={`/projects/${rel.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#0C0C0C] transition-all hover:border-white/[0.18] hover:-translate-y-1"
                >
                  <div className="relative h-52 overflow-hidden">
                    {rel.heroImage ? (
                      <img src={rel.heroImage} alt={rel.title} className="h-full w-full object-cover opacity-65 transition-all duration-700 group-hover:opacity-95 group-hover:scale-105" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-white/[0.03]">
                        <span className="text-[5rem] font-medium text-white/[0.06]">{rel.title[0]}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] to-transparent" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-[1.2rem] font-medium text-white transition-colors group-hover:text-[#FF6A00]">
                      {rel.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-white/45 line-clamp-2">{rel.shortDescription}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/35 transition-colors group-hover:text-[#FF6A00]">
                      Case Study <ArrowUpRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ── */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,106,0,0.07),transparent)]" />
        <div className="layout-wrap relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="text-[2rem] font-medium text-white sm:text-[2.75rem]">
              Build something like <em className="text-[#FF6A00] not-italic">this?</em>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/50">
              Let&apos;s scope your project — I&apos;ll reply with technical architecture and timeline within 24 hours.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-14 items-center gap-2.5 rounded-full bg-[#FF6A00] px-10 text-[13px] font-medium tracking-[0.08em] text-black transition-all hover:brightness-110 hover:shadow-[0_12px_40px_rgba(255,106,0,0.4)]"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
