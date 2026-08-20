"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BottomSheet } from "@/components/ui/BottomSheet";
import { Calendar, Clock, ArrowRight, BookOpen, Filter, Check } from "lucide-react";
import { blogPosts, getFeaturedPost } from "@/data/blog";
import { formatDate } from "@/lib/utils";

const filters: { label: string; value: string }[] = [
  { label: "All", value: "all" },
  { label: "Architecture", value: "architecture" },
  { label: "Performance", value: "performance" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "DevOps", value: "devops" },
  { label: "Career", value: "career" },
];

export function BlogClientPage() {
  const [active, setActive] = useState("all");
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const featured = getFeaturedPost();
  const rest = blogPosts.filter((p) => !p.isFeatured);

  const filtered = (active === "all" ? rest : rest.filter((p) => p.category === active));

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
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600&h=900"
            alt="Blog Hero"
            className="w-full h-full object-cover object-[center_30%] opacity-40 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.4)_0%,rgba(5,5,5,0.9)_70%,rgba(5,5,5,1)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,106,0,0.15),transparent_60%)]" />
        </motion.div>
        
        <div className="layout-wrap relative z-10 w-full">
          <div className="max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="mb-4 inline-flex items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#FF6A00]">
                <BookOpen size={14} className="mr-2" />
                Engineering Notes
              </span>
              <h1 className="mt-4 font-display text-[3.5rem] leading-[1.05] tracking-tight text-white sm:text-[4.5rem] md:text-[5.5rem]">
                Insights & <span className="italic text-[#FF6A00]">Architecture.</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-[16px] leading-relaxed text-white/70 sm:mt-8 sm:text-[20px] max-w-2xl font-medium"
            >
              Technical deep-dives on system architecture, performance optimization, and the decisions that actually matter when shipping production code.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="layout-wrap pt-16 relative z-10">

        {/* Featured post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-20"
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group flex flex-col lg:flex-row gap-0 rounded-[32px] border border-white/10 overflow-hidden bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Image abstract */}
              <div className="lg:w-[45%] h-72 lg:h-auto relative overflow-hidden bg-[#0A0A0A]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800&h=800"
                  alt={featured.title}
                  className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/20 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute top-8 left-8">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="rounded-md border border-[#FF6A00]/30 bg-[#FF6A00]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FF6A00]">
                    {featured.category}
                  </span>
                </div>

                <h2 className="font-display mb-6 text-[2rem] font-bold leading-[1.1] tracking-tight text-white transition-colors group-hover:text-[#FF6A00] sm:text-[2.5rem]">
                  {featured.title}
                </h2>
                
                <p className="text-[16px] leading-relaxed text-white/60 mb-10 max-w-xl">
                  {featured.excerpt}
                </p>

                <div className="flex flex-wrap items-center justify-between border-t border-white/10 pt-8 gap-4">
                  <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2 text-[12px] uppercase tracking-wider text-white/40 font-mono">
                      <Calendar size={14} className="text-[#FF6A00]" />
                      {formatDate(featured.publishedAt)}
                    </span>
                    <span className="flex items-center gap-2 text-[12px] uppercase tracking-wider text-white/40 font-mono">
                      <Clock size={14} className="text-[#FF6A00]" />
                      {featured.readTime}
                    </span>
                  </div>
                  <span className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-white group-hover:text-[#FF6A00] transition-colors">
                    Read Article <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Mobile Filter Trigger */}
        <div className="flex justify-center mb-8 lg:hidden">
          <button 
            onClick={() => setIsFilterSheetOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            <Filter size={16} />
            Filter Insights
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
        <BottomSheet isOpen={isFilterSheetOpen} onClose={() => setIsFilterSheetOpen(false)} title="Filter Insights">
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

        {/* Posts grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 no-scrollbar lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:snap-none"
          >
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="snap-center shrink-0 w-[85vw] sm:w-[60vw] lg:w-auto h-full"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-[24px] border border-white/10 overflow-hidden bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#FF6A00]/40 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                >
                  {/* Thumbnail */}
                  <div className="h-52 relative overflow-hidden bg-[#0A0A0A]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://images.unsplash.com/photo-${i % 2 === 0 ? "1517694712202-14dd9538aa97" : "1460925895917-afdab827c52f"}?auto=format&fit=crop&q=80&w=600&h=400`}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 grayscale-[20%]"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.1),transparent_70%)] transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
                  </div>

                  <div className="flex flex-col flex-1 p-8">
                    <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-white/60 self-start mb-5 group-hover:border-[#FF6A00]/30 group-hover:text-[#FF6A00] transition-colors">
                      {post.category}
                    </span>
                    <h3 className="font-display font-bold text-2xl mb-4 line-clamp-2 text-white group-hover:text-[#FF6A00] transition-colors leading-[1.2]">
                      {post.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed line-clamp-3 mb-8 flex-1 text-white/50">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-5 border-t border-white/10">
                      <span className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/40 font-mono">
                        <Clock size={12} className="text-[#FF6A00]" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white group-hover:text-[#FF6A00] transition-colors">
                        Read <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
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
      </div>
    </div>
  );
}
