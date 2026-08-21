
"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ArrowUpRight, Filter, Check, X, Layers, Cpu, Globe, Zap, Monitor } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import { MobileBottomSheet } from "@/components/ui/MobileBottomSheet";
import { MobileTextDrawer } from "@/components/ui/MobileTextDrawer";

const ease = [0.22, 1, 0.36, 1] as const;

const filters: { label: string; value: string; icon: React.ReactNode }[] = [
  { label: "All Work", value: "all", icon: <Layers size={13} /> },
  { label: "Full Stack", value: "full-stack", icon: <Monitor size={13} /> },
  { label: "Backend", value: "backend", icon: <Cpu size={13} /> },
  { label: "Real-Time", value: "real-time", icon: <Zap size={13} /> },
  { label: "Frontend", value: "frontend", icon: <Globe size={13} /> },
];

const categoryColors: Record<string, string> = {
  "full-stack": "#FF6A00",
  backend: "#6366f1",
  frontend: "#22c55e",
  "real-time": "#f59e0b",
  performance: "#ef4444",
};

function ProjectCard({
  project,
  index,
  size = "default",
}: {
  project: (typeof projects)[0];
  index: number;
  size?: "default" | "large" | "wide";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const catColor = categoryColors[project.category[0]] ?? "#FF6A00";
  // Pseudo-random delay based on index for the entrance stagger
  const delay = (Math.abs(Math.sin(index * 43.2)) * 0.3);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease }}
      className={`group relative flex flex-col overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0C0C0C] transition-all duration-500 hover:border-white/[0.18] hover:shadow-[0_32px_80px_-20px_rgba(0,0,0,0.7)] ${
        size === "large" ? "lg:col-span-2" : size === "wide" ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      {/* Glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at top right, ${catColor}18, transparent 55%)` }}
      />

      {/* Color accent bar top */}
      <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: `linear-gradient(90deg, ${catColor}, transparent)` }}
      />

      {/* Image */}
      <div className={`relative overflow-hidden bg-[#111] ${size === "large" ? "h-80 lg:h-96" : size === "wide" ? "h-64 lg:h-full lg:w-[55%] lg:shrink-0" : "h-56"}`}>
        {project.heroImage ? (
          <motion.img
            style={size === "large" ? { y: imgY, scale: 1.15 } : {}}
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center" style={{ background: `linear-gradient(135deg, ${catColor}22, transparent)` }}>
            <span className="text-[6rem] font-medium text-white/[0.06] select-none">
              {project.title[0]}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent" />

        {/* Status + year badge */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-md">
            {project.status === "completed" && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
            {project.status === "completed" ? "Live" : "In Progress"}
          </span>
          <span className="rounded-full border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[10px] text-white/60 backdrop-blur-md">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`relative flex flex-1 flex-col p-7 sm:p-8 ${size === "wide" ? "lg:p-10" : ""}`}>
        {/* Category chips */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.category.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="rounded-full px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.14em]"
              style={{ background: `${categoryColors[cat] ?? "#FF6A00"}18`, color: categoryColors[cat] ?? "#FF6A00" }}
            >
              {cat}
            </span>
          ))}
        </div>

        <h3 className={`font-medium leading-[1.15] tracking-tight text-white transition-colors duration-300 group-hover:text-[#FF6A00] ${size === "large" ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}>
          {size === "large" ? (
            <motion.span
              initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
              whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {project.title}
            </motion.span>
          ) : (
            project.title
          )}
        </h3>

        <div className="mt-3 flex-1">
          <MobileTextDrawer
            text={project.shortDescription}
            className="text-[13px] leading-relaxed text-white/50"
            lines={2}
          />
        </div>

        {/* Tech pills */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, size === "large" ? 5 : 4).map((tech) => (
            <span
              key={tech.name}
              className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-white/60"
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-5">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] px-3.5 text-[11px] font-medium text-white/80 transition-all hover:border-[#FF6A00]/40 hover:bg-[#FF6A00]/10 hover:text-[#FF6A00]"
              >
                <ExternalLink size={12} /> Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/60 transition-all hover:border-white/20 hover:text-white"
              >
                <Github size={14} />
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="group/a inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/50 transition-all hover:text-[#FF6A00]"
          >
            Case Study
            <ArrowUpRight size={14} className="transition-transform group-hover/a:translate-x-0.5 group-hover/a:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Stats Strip ─── */
function StatsStrip() {
  const stats = [
    { value: "5+", label: "Live Products" },
    { value: "2+", label: "Years Delivery" },
    { value: "5", label: "Global Markets" },
    { value: "10+", label: "Case Studies" },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease }}
      className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] sm:grid-cols-4"
    >
      {stats.map((s, i) => (
        <div key={i} className="flex flex-col items-center bg-[#080808] px-6 py-6 text-center">
          <span className="text-3xl font-medium text-[#FF6A00] sm:text-2xl">{s.value}</span>
          <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">{s.label}</span>
        </div>
      ))}
    </motion.div>
  );
}

export function ProjectsClientPage() {
  const [active, setActive] = useState("all");

  const filtered = projects.filter((p) =>
    active === "all" ? true : p.category.includes(active as ProjectCategory)
  );

  /* Editorial layout: large card + 2 normal, then row of 3, repeat */
  const renderGrid = () => {
    if (filtered.length === 0) return (
      <div className="py-32 text-center">
        <p className="text-white/30 text-lg">No projects in this category yet.</p>
      </div>
    );

    const rows = [];
    let i = 0;
    let rowIndex = 0;

    while (i < filtered.length) {
      if (rowIndex % 3 === 0 && filtered.length - i >= 2) {
        // Row A: 1 large (col-span-2) + 1 normal
        rows.push(
          <div key={`row-a-${i}`} className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <ProjectCard project={filtered[i]!} index={i} size="large" />
            {filtered[i + 1] && <ProjectCard project={filtered[i + 1]!} index={i + 1} />}
          </div>
        );
        i += 2;
      } else {
        // Row B: up to 3 normal cards
        rows.push(
          <div key={`row-b-${i}`} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(i, i + 3).map((p, ci) => (
              <ProjectCard key={p.id} project={p} index={i + ci} />
            ))}
          </div>
        );
        i += filtered.slice(i, i + 3).length;
      }
      rowIndex++;
    }
    return <div className="flex flex-col gap-5">{rows}</div>;
  };

  return (
    <div className="noise-texture min-h-screen bg-[#050505] text-[#FFF7ED]">
      {/* ── HERO WITH IMAGE ── */}
      <section className="relative isolate flex min-h-[60vh] flex-col justify-end overflow-hidden pb-20 pt-36 sm:pt-44 sm:pb-24 bg-[#050505]">

        {/* Background image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900"
            alt="Projects Hero"
            className="w-full h-full object-cover object-center opacity-35 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.4)_0%,rgba(5,5,5,0.88)_70%,rgba(5,5,5,1)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,106,0,0.15),transparent_60%)]" />
        </motion.div>

        <span className="pointer-events-none absolute right-0 top-20 select-none text-[15vw] font-medium leading-none tracking-tighter text-white/[0.025] z-[1]" aria-hidden>
          WORK
        </span>

        <div className="layout-wrap relative z-10 w-full">
          <div className="max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#FF6A00]" />
                <span className="font-mono text-[12px] font-medium uppercase tracking-[0.2em] text-[#FF6A00]">
                  Portfolio &amp; Case Studies
                </span>
              </div>
              <h1 className="font-medium leading-[1.05] tracking-tight text-white text-[3rem] sm:text-[4rem] md:text-[5rem]">
                Proven <span className="text-white/50">Track Record.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-[16px] leading-relaxed text-white/60 max-w-2xl sm:text-[18px]"
            >
              Production systems, AI-powered platforms, and full-stack applications — built to scale and ship.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="layout-wrap -mt-2 pb-16">
        <StatsStrip />
      </section>

      {/* ── FILTER + GRID ── */}
      <section id="projects-grid" className="layout-wrap pb-24 sm:pb-32">

        {/* Unified Filter Pills */}
        <div className="mb-10 flex items-center gap-3">
          {/* Filter icon */}
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
            <Filter size={13} className="text-[#FF6A00]" />
          </div>

          {/* Scrollable pills - Native scrollbar hidden completely */}
          <div className="flex gap-2 overflow-x-auto flex-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`shrink-0 inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-all duration-300 ${
                  active === f.value
                    ? "border-[#FF6A00] bg-[#FF6A00] text-black shadow-[0_0_20px_rgba(255,106,0,0.3)]"
                    : "border-white/[0.08] bg-transparent text-white/45 hover:border-white/20 hover:text-white"
                }`}
              >
                {f.icon}
                {f.label}
              </button>
            ))}
          </div>

          {/* Count */}
          <span className="ml-auto shrink-0 font-mono text-[11px] text-white/30">
            {filtered.length}
          </span>
        </div>

        {/* Project Grid — animated on filter change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease }}
          >
            {renderGrid()}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#080808] py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,106,0,0.08),transparent)]" />
        <div className="layout-wrap relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-[#FF6A00]/80">
              Next Project
            </span>
            <h2 className="text-[2rem] font-medium leading-[1.1] tracking-tight text-white sm:text-[2.75rem]">
              Ready to build something{" "}
              <em className="text-[#FF6A00] not-italic">real?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/50">
              Tell me what you&apos;re building — I&apos;ll reply with a technical scope, timeline, and next steps within 24 hours.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-[#FF6A00] px-10 text-[13px] font-medium tracking-[0.08em] text-black transition-all hover:brightness-110 hover:shadow-[0_12px_40px_rgba(255,106,0,0.4)] sm:w-auto"
              >
                Start a Conversation <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-white/15 px-8 text-[13px] font-medium text-white/70 transition-all hover:border-white/30 hover:text-white sm:w-auto"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}