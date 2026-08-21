"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { type InsightCategory } from "@/data/insightsData";
import { blogPosts } from "@/data/blog";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function InsightsArticleGrid({ category }: { category: InsightCategory }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Find all posts except the one that was featured
  let matchingPosts = blogPosts.filter(
    (post) => post.category === category.id || category.title.toLowerCase().includes(post.category)
  );
  
  // If no specific matches, just grab the latest posts as a fallback so the grid isn't empty
  if (matchingPosts.length === 0) {
    matchingPosts = [...blogPosts];
  }
  
  // Remove the first post since it's already shown in the featured section
  const gridPosts = matchingPosts.slice(1, 5);

  if (gridPosts.length === 0) return null;

  const goTo = (i: number) => {
    const len = gridPosts.length;
    setActiveIndex(((i % len) + len) % len);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="layout-wrap relative z-10 max-w-6xl mx-auto">
        
        <div className="mb-12 flex items-center justify-between">
          <span className="section-eyebrow">Recent Notes</span>
        </div>

        {/* ── MOBILE: Javascript-driven Carousel ── */}
        <div className="sm:hidden mt-6 relative">
          <div className="relative overflow-hidden -mx-4">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(calc(-${activeIndex * 100}%))` }}
            >
              {gridPosts.map((post, i) => (
                <div
                  key={post.id}
                  className="w-full shrink-0 px-4"
                  aria-hidden={i !== activeIndex}
                >
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col h-full relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#0F0F0F] transition-all hover:border-[#FF6A00]/30"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image 
                        src={post.thumbnail} 
                        alt={post.title.replace(/\s*—\s*/g, ", ")} 
                        fill 
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(15,15,15,0.2)_50%,rgba(15,15,15,1)_100%)]" />
                    </div>
                
                <div className="relative flex-1 p-6 sm:p-8 pt-0 -mt-8 z-10 flex flex-col">
                  <div className="flex flex-wrap items-center gap-4 text-[10px] font-medium uppercase tracking-widest text-white/50 mb-4">
                    <span className="text-[#FF6A00] bg-[#0A0A0A]/80 px-3 py-1 rounded-full border border-[#FF6A00]/20 backdrop-blur-md">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 drop-shadow-md"><Clock size={10} /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="mb-3 text-[1.5rem] font-medium leading-[1.2] text-white group-hover:text-[#FF6A00] transition-colors line-clamp-2">
                    {post.title.replace(/\s*—\s*/g, ", ")}
                  </h3>
                  
                  <p className="mb-6 text-[14px] leading-relaxed text-white/60 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 group-hover:text-[#FF6A00] transition-colors">
                    Read note <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-4 flex items-center justify-between px-1 pb-4">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous article"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#FFF7ED]/55 transition-colors hover:border-[#FF6A00]/40 hover:text-[#FF6A00]"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center justify-center gap-2">
              {gridPosts.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === activeIndex 
                      ? "w-6 bg-[#FF6A00]" 
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next article"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#FFF7ED]/55 transition-colors hover:border-[#FF6A00]/40 hover:text-[#FF6A00]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── DESKTOP: Grid ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-2 gap-6 xl:gap-10">
          {gridPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
              className="h-full"
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#0F0F0F] transition-all hover:border-[#FF6A00]/30"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image 
                    src={post.thumbnail} 
                    alt={post.title.replace(/\s*—\s*/g, ", ")} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(15,15,15,0.2)_50%,rgba(15,15,15,1)_100%)]" />
                </div>
                
                <div className="p-6 md:p-8 flex-1 flex flex-col bg-gradient-to-b from-transparent to-[#0F0F0F]">
                  <div className="mb-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#FF6A00]">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="opacity-70" /> {post.readTime}
                    </span>
                    <span className="opacity-40">•</span>
                    <span>{post.category}</span>
                  </div>
                  
                  <h3 className="text-[1.4rem] md:text-[1.75rem] leading-[1.2] tracking-[-0.02em] text-[#FFF7ED] group-hover:text-[#FFB347] transition-colors">
                    {post.title.replace(/\s*—\s*/g, ", ")}
                  </h3>
                  
                  <p className="mt-4 text-[14px] leading-relaxed text-[#FFF7ED]/60 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-6">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full overflow-hidden relative">
                        <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                      </div>
                      <span className="text-[12px] font-medium text-[#FFF7ED]/80">{post.author.name}</span>
                    </div>
                    
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.03] text-[#FF6A00] transition-transform group-hover:scale-110 group-hover:bg-[#FF6A00]/10">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
