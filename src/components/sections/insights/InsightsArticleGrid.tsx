"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { type InsightCategory } from "@/data/insightsData";
import { blogPosts } from "@/data/blog";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function InsightsArticleGrid({ category }: { category: InsightCategory }) {
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

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="layout-wrap relative z-10 max-w-6xl mx-auto">
        
        <div className="mb-12 flex items-center justify-between">
          <span className="section-eyebrow">Recent Notes</span>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-2 xl:gap-10 sm:overflow-visible sm:snap-none">
          {gridPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
              className="snap-center shrink-0 w-[85vw] sm:w-auto h-full"
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#0F0F0F] transition-all hover:border-[#FF6A00]/30"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image 
                    src={post.thumbnail} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(15,15,15,0.2)_50%,rgba(15,15,15,1)_100%)]" />
                </div>
                
                <div className="relative flex-1 p-6 sm:p-8 pt-0 -mt-8 z-10 flex flex-col">
                  <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4">
                    <span className="text-[#FF6A00] bg-[#0A0A0A]/80 px-3 py-1 rounded-full border border-[#FF6A00]/20 backdrop-blur-md">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 drop-shadow-md"><Clock size={10} /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="mb-3 text-[1.5rem] font-bold leading-[1.2] text-white group-hover:text-[#FF6A00] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="mb-6 text-[14px] leading-relaxed text-white/60 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-[#FF6A00] transition-colors">
                    Read note <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel Indicators (Visual) */}
        {gridPosts.length > 1 && (
          <div className="flex justify-center gap-2 mt-2 mb-4 sm:hidden">
            {gridPosts.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
