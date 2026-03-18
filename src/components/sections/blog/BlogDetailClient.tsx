"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight, Twitter, Linkedin, Link2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";
import toast from "react-hot-toast";

export function BlogDetailClient({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied!");
  };

  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-[1280px] mx-auto container-padding">

        {/* Back */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent-primary)]"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-12">

          {/* Main content */}
          <article>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category */}
              <span
                className="tag-pill capitalize mb-4 inline-flex"
                style={{ background: "var(--bg-secondary)", color: "var(--accent-primary)", borderColor: "var(--border)" }}
              >
                {post.category}
              </span>

              {/* Title */}
              <h1
                className="font-display font-bold mb-6"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "var(--text-primary)" }}
              >
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 pb-8 mb-8 border-b" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm"
                    style={{ background: "var(--surface)", color: "var(--accent-primary)" }}
                  >
                    {post.author.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{post.author.name}</p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{post.author.role}</p>
                  </div>
                </div>
                <div className="h-4 w-px" style={{ background: "var(--border)" }} />
                <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
                  <Calendar size={13} /> {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
                  <Clock size={13} /> {post.readTime}
                </span>
              </div>

              {/* Hero image placeholder */}
              <div
                className="w-full h-64 rounded-[12px] mb-10 flex items-center justify-center border"
                style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
              >
                <span className="font-display font-black" style={{ fontSize: "100px", color: "var(--border)", opacity: 0.5, lineHeight: 1 }}>
                  {post.title[0]}
                </span>
              </div>

              {/* Article content placeholder */}
              <div className="prose-custom space-y-5">
                {[...Array(4)].map((_, i) => (
                  <p key={i} className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {post.excerpt} This is where the full article content will be rendered. Replace the content field in the blog data with your actual MDX or HTML content, and render it here using a markdown renderer of your choice.
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-pill"
                    style={{ background: "var(--bg-secondary)", color: "var(--text-muted)", borderColor: "var(--border)" }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center gap-3 mt-8">
                <span className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>Share:</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://alexjohnson.dev/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-[6px] border transition-all hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                >
                  <Twitter size={14} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://alexjohnson.dev/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-[6px] border transition-all hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                >
                  <Linkedin size={14} />
                </a>
                <button
                  onClick={copyLink}
                  className="p-2 rounded-[6px] border transition-all hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                >
                  <Link2 size={14} />
                </button>
              </div>
            </motion.div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Author card */}
              <div
                className="p-5 rounded-[12px] border"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-2xl mx-auto mb-3"
                  style={{ background: "var(--bg-secondary)", color: "var(--accent-primary)" }}
                >
                  {post.author.name[0]}
                </div>
                <h4 className="font-semibold text-center text-sm mb-1" style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
                  {post.author.name}
                </h4>
                <p className="text-xs text-center mb-3" style={{ color: "var(--text-muted)" }}>{post.author.role}</p>
                <p className="text-xs leading-relaxed text-center" style={{ color: "var(--text-secondary)" }}>{post.author.bio}</p>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div
                  className="p-5 rounded-[12px] border"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <h4 className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--text-muted)" }}>
                    Related Posts
                  </h4>
                  <div className="space-y-4">
                    {related.map((p) => (
                      <Link
                        key={p.id}
                        href={`/blog/${p.slug}`}
                        className="group flex items-start gap-3"
                      >
                        <div
                          className="w-10 h-10 rounded-[6px] flex items-center justify-center font-display font-bold text-sm shrink-0"
                          style={{ background: "var(--bg-secondary)", color: "var(--accent-primary)" }}
                        >
                          {p.title[0]}
                        </div>
                        <div>
                          <p className="text-xs font-semibold leading-snug group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2" style={{ color: "var(--text-primary)" }}>
                            {p.title}
                          </p>
                          <p className="text-[10px] mt-1" style={{ color: "var(--text-muted)" }}>{p.readTime}</p>
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
