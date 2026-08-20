"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BottomSheet } from "@/components/ui/BottomSheet";
import { ExternalLink, Github, CheckCircle2, ArrowRight, MonitorSmartphone, Filter, Check } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";

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
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);

  const filtered = projects.filter((p) =>
    active === "all" ? true : p.category.includes(active as ProjectCategory)
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFF7ED] pb-16 sm:pb-24">
      {/* ── HERO BANNER ── */}
      <section className="relative isolate min-h-[60vh] flex flex-col justify-end overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 bg-[#050505]">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1600&h=900"
            alt="Work Hero"
            className="w-full h-full object-cover object-[center_30%] opacity-40 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.4)_0%,rgba(5,5,5,0.9)_70%,rgba(5,5,5,1)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,106,0,0.15),transparent_60%)]" />
        </motion.div>
        
        <div className="layout-wrap relative z-10 w-full">
          <div className="max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="mb-4 inline-flex items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#FF6A00]">
                <MonitorSmartphone size={14} className="mr-2" />
                Case Studies
              </span>
              <h1 className="mt-4 font-display text-[3.5rem] leading-[1.05] tracking-tight text-white sm:text-[4.5rem] md:text-[5.5rem]">
                Production <span className="italic text-[#FF6A00]">Builds.</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-[16px] leading-relaxed text-white/70 sm:mt-8 sm:text-[20px] max-w-2xl font-medium"
            >
              Explore live SaaS platforms, complex AI architectures, and full-stack systems that are currently serving real users in production.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="layout-wrap pt-16 relative z-10">

        {/* Mobile Filter Trigger */}
        <div className="flex justify-center mb-8 lg:hidden">
          <button 
            onClick={() => setIsFilterSheetOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            <Filter size={16} />
            Filter Projects
          </button>
        </div>

        {/* Desktop Inline Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider rounded-full border transition-all duration-300 ${
                active === f.value
                  ? "bg-[#FF6A00] border-[#FF6A00] text-white shadow-[0_0_20px_rgba(255,106,0,0.4)] scale-105"
                  : "bg-white/[0.02] border-white/10 text-white/50 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Mobile Filters Bottom Sheet */}
        <BottomSheet isOpen={isFilterSheetOpen} onClose={() => setIsFilterSheetOpen(false)} title="Filter Projects">
          <div className="flex flex-col gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => { setActive(f.value); setIsFilterSheetOpen(false); }}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all text-left font-semibold ${
                  active === f.value
                    ? "border-[#FF6A00]/50 bg-[#FF6A00]/10 text-[#FF6A00]"
                    : "border-white/5 bg-white/[0.02] text-white/70 hover:bg-white/[0.05]"
                }`}
              >
                {f.label}
                {active === f.value && <Check size={16} />}
              </button>
            ))}
          </div>
        </BottomSheet>

        {/* Project grid / carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 no-scrollbar lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:snap-none"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="snap-center shrink-0 w-[85vw] sm:w-[60vw] lg:w-auto group relative flex flex-col rounded-[32px] border border-white/[0.08] overflow-hidden bg-[#0A0A0A] transition-all duration-500 hover:-translate-y-2 hover:border-[#FF6A00]/50 hover:shadow-[0_20px_60px_-15px_rgba(255,106,0,0.3)]"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(255,106,0,0.12),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />
                
                {/* Image area */}
                <div className="relative z-10 h-64 overflow-hidden bg-[#0A0A0A] border-b border-white/[0.08]">
                  {project.heroImage ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img 
                      src={project.heroImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105" 
                    />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 opacity-40 mix-blend-screen transition-opacity duration-500 group-hover:opacity-80"
                        style={{
                          background: `linear-gradient(135deg, ${project.techStack[0]?.bgColor}33, ${project.techStack[2]?.bgColor ?? "#C8622A"}33)`,
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display font-black select-none text-[100px] text-white/5 transition-transform duration-700 group-hover:scale-125 leading-none">
                          {project.title[0]}
                        </span>
                      </div>
                    </>
                  )}

                  {/* Status */}
                  {project.liveUrl && (
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md ${
                          project.status === "completed" 
                          ? "border-[#22c55e]/30 bg-[#22c55e]/10 text-[#22c55e]" 
                          : "border-[#FF6A00]/30 bg-[#FF6A00]/10 text-[#FF6A00]"
                        }`}
                      >
                        {project.status === "completed" && <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />}
                        {project.status === "completed" ? "Live" : "In Progress"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-8 sm:p-10 relative z-10">
                  <div className="absolute inset-x-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#FF6A00]/0 to-transparent transition-all duration-700 group-hover:via-[#FF6A00]/40" />
                  
                  <h3 className="font-display font-bold text-2xl mb-4 line-clamp-1 text-white group-hover:text-[#FF6A00] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed mb-8 line-clamp-2 text-white/50">
                    {project.shortDescription}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech.name}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/70"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                    <div className="flex gap-3">
                      {project.liveUrl && project.liveUrl !== "" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-9 px-4 items-center justify-center gap-2 rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] border border-[#FF6A00]/20 transition-all hover:bg-[#FF6A00] hover:text-white"
                        >
                          <ExternalLink size={14} />
                          <span className="text-[11px] font-bold uppercase tracking-widest">View Live</span>
                        </a>
                      )}
                      {project.githubUrl && project.githubUrl !== "" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/70 border border-white/10 transition-all hover:bg-white/10 hover:text-white"
                          title="View Source"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                    
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/l inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-white transition-colors hover:text-[#FF6A00]"
                    >
                      Case Study
                      <ArrowRight size={14} className="group-hover/l:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mobile Carousel Indicators (Visual) */}
        {filtered.length > 1 && (
          <div className="flex justify-center gap-2 mt-2 mb-12 lg:hidden">
            {filtered.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
