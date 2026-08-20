"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { type InsightCategory } from "@/data/insightsData";
import { blogPosts } from "@/data/blog";
import { type BlogPost } from "@/types";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function InsightsFeaturedArticle({ category }: { category: InsightCategory }) {
  // Find a featured or matching post
  let featuredPost: BlogPost | undefined = blogPosts.find(
    (post) => post.category === category.id || category.title.toLowerCase().includes(post.category)
  );

  // Fallback to the first global featured post if no exact match
  if (!featuredPost) {
    featuredPost = blogPosts.find((p) => p.isFeatured) || blogPosts[0];
  }

  if (!featuredPost) return null;

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] pt-24 pb-12 sm:pt-32 sm:pb-16 border-t border-white/5">
      <div className="layout-wrap relative z-10 max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-12"
        >
          <span className="section-eyebrow">Featured Insight</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <Link 
            href={`/blog/${featuredPost.slug}`}
            className="group block relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0F0F0F] transition-all hover:border-[#FF6A00]/40 lg:flex lg:h-[450px]"
          >
            {/* Image Side */}
            <div className="relative h-64 w-full overflow-hidden lg:h-full lg:w-3/5">
              <Image 
                src={featuredPost.thumbnail} 
                alt={featuredPost.title} 
                fill 
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(15,15,15,0.8)_100%)] hidden lg:block" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,15,15,1)_0%,transparent_100%)] lg:hidden" />
            </div>
            
            {/* Content Side */}
            <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:w-2/5 z-10 bg-[#0F0F0F] lg:bg-transparent">
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/50 mb-6">
                <span className="text-[#FF6A00] bg-[#FF6A00]/10 px-3 py-1 rounded-full border border-[#FF6A00]/20">
                  {featuredPost.category}
                </span>
                <span className="flex items-center gap-1"><Clock size={12} /> {featuredPost.readTime}</span>
              </div>
              
              <h3 className="mb-4 font-display text-[2rem] leading-[1.1] tracking-tight text-white sm:text-[2.5rem] group-hover:text-[#FF6A00] transition-colors">
                {featuredPost.title}
              </h3>
              
              <p className="mb-8 text-[15px] leading-relaxed text-white/70 line-clamp-3">
                {featuredPost.excerpt}
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full border border-white/20">
                    <Image src={featuredPost.author.avatar} alt={featuredPost.author.name} width={32} height={32} />
                  </div>
                  <span className="text-sm font-medium text-white/80">{featuredPost.author.name}</span>
                </div>
                
                <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                  Read <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
