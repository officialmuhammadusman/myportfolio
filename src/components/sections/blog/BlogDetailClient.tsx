"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Twitter, Linkedin, Link2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";
import toast from "react-hot-toast";

export function BlogDetailClient({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied!");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFF7ED] pb-24 relative">
      
      {/* ── HEADER HERO ── */}
      <section className="relative isolate pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#050505] border-b border-white/[0.08]">
        <div className="layout-wrap relative z-10 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-white/50 transition-colors hover:text-[#FF6A00] mb-8 sm:mb-12"
          >
            <ArrowLeft size={14} /> Back to Insights
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-flex rounded-md border border-[#FF6A00]/30 bg-[#FF6A00]/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-[#FF6A00]">
              {post.category}
            </span>

            <h1 className="text-[1.1rem] font-normal leading-snug tracking-tight text-white sm:text-[1.4rem] md:text-[1.6rem] mb-6">
              {post.title.replace(/\s*—\s*/g, ", ")}
            </h1>

            <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 relative bg-white/5">
                  <Image 
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{post.author.name}</p>
                  <p className="text-[12px] text-white/50">{post.author.role}</p>
                </div>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2 text-[12px] uppercase tracking-wider text-white/40 font-mono">
                  <Calendar size={14} className="text-[#FF6A00]" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-2 text-[12px] uppercase tracking-wider text-white/40 font-mono">
                  <Clock size={14} className="text-[#FF6A00]" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="layout-wrap pt-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-20">
          
          {/* Main content */}
          <article>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Hero image placeholder */}
              <div className="w-full h-72 sm:h-96 rounded-[24px] mb-12 overflow-hidden border border-white/10 relative">
                <Image 
                  src={post.thumbnail}
                  alt={post.title.replace(/\s*—\s*/g, ", ")}
                  fill
                  className="object-cover opacity-60 grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.15),transparent_70%)]" />
              </div>

              {/* Article content placeholder */}
              <div className="prose prose-invert prose-orange max-w-none">
                <p className="text-xl leading-relaxed text-white/80 font-medium mb-8">
                  {post.excerpt}
                </p>
                {[...Array(4)].map((_, i) => (
                  <p key={i} className="text-[16px] leading-relaxed text-white/60 mb-6">
                    This is where the full article content will be rendered. Replace the content field in the blog data with your actual MDX or HTML content, and render it here using a markdown renderer of your choice. Production systems often require careful orchestration of multiple moving parts.
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-white/10">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-white/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center gap-4 mt-12 bg-white/[0.02] border border-white/10 p-6 rounded-2xl">
                <span className="text-[13px] font-medium uppercase tracking-widest text-white/60">Share this article:</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://muhammadusman.dev/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-[#FF6A00]/50 hover:text-[#FF6A00] hover:bg-[#FF6A00]/10"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://muhammadusman.dev/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-[#FF6A00]/50 hover:text-[#FF6A00] hover:bg-[#FF6A00]/10"
                >
                  <Linkedin size={16} />
                </a>
                <button
                  onClick={copyLink}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-[#FF6A00]/50 hover:text-[#FF6A00] hover:bg-[#FF6A00]/10"
                >
                  <Link2 size={16} />
                </button>
              </div>
            </motion.div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-8">
              
              {/* Author card */}
              <div className="rounded-[24px] border border-white/10 bg-[#0A0A0A] p-6">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden border border-white/10 relative bg-white/5">
                  <Image 
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-medium text-center text-lg mb-1 text-white">
                  {post.author.name}
                </h4>
                <p className="text-[12px] text-center mb-4 text-[#FF6A00] font-medium uppercase tracking-wider">{post.author.role}</p>
                <p className="text-[14px] leading-relaxed text-center text-white/50">{post.author.bio}</p>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="rounded-[24px] border border-white/10 bg-[#0A0A0A] p-6">
                  <h4 className="text-[11px] font-medium uppercase tracking-widest text-white/40 mb-6">
                    Related Reading
                  </h4>
                  <div className="space-y-6">
                    {related.map((p, i) => (
                      <Link
                        key={p.id}
                        href={`/blog/${p.slug}`}
                        className="group flex gap-4"
                      >
                        <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 relative">
                          <Image 
                            src={p.thumbnail}
                            alt={p.title}
                            fill
                            className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <p className="text-[13px] font-medium leading-snug group-hover:text-[#FF6A00] transition-colors line-clamp-2 text-white">
                            {p.title}
                          </p>
                          <p className="text-[10px] mt-1.5 text-white/40 uppercase tracking-wider font-mono">
                            <Clock size={10} className="inline mr-1 text-[#FF6A00]" />
                            {p.readTime}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
