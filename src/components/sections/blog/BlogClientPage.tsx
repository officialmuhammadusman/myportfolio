"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { blogPosts, getFeaturedPost } from "@/data/blog";
import type { BlogCategory } from "@/types";
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
  const featured = getFeaturedPost();
  const rest = blogPosts.filter((p) => !p.isFeatured);

  const filtered = (active === "all" ? rest : rest.filter((p) => p.category === active));

  return (
    <div className="min-h-screen pt-32 pb-20" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-[1280px] mx-auto container-padding">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-eyebrow">Writing</span>
          <div className="fancy-divider" />
          <h1
            className="font-display font-bold mt-2 mb-4"
            style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "var(--text-primary)" }}
          >
            Blog
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
            Technical deep-dives on architecture, performance, and the decisions that matter in production.
          </p>
        </motion.div>

        {/* Featured post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-0 rounded-[12px] border overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              {/* Image */}
              <div
                className="h-56 lg:h-auto relative overflow-hidden"
                style={{ background: "var(--bg-secondary)" }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(200,98,42,0.15), rgba(212,168,67,0.10))" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-black select-none" style={{ fontSize: "120px", color: "var(--border)", opacity: 0.4 }}>
                    {featured.title[0]}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span
                    className="tag-pill"
                    style={{ background: "var(--accent-primary)", color: "white", borderColor: "transparent" }}
                  >
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="tag-pill capitalize"
                    style={{
                      background: "var(--bg-secondary)",
                      color: "var(--text-muted)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {featured.category}
                  </span>
                </div>

                <h2
                  className="font-display font-bold mb-3 group-hover:text-[var(--accent-primary)] transition-colors"
                  style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--text-primary)" }}
                >
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--text-secondary)" }}>
                  {featured.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
                      <Calendar size={12} />{formatDate(featured.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
                      <Clock size={12} />{featured.readTime}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium" style={{ color: "var(--accent-primary)" }}>
                    Read Article <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8 pb-6 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className="px-4 py-2 text-sm font-medium rounded-[6px] border transition-all duration-200"
              style={{
                background: active === f.value ? "var(--accent-primary)" : "var(--surface)",
                color: active === f.value ? "white" : "var(--text-secondary)",
                borderColor: active === f.value ? "var(--accent-primary)" : "var(--border)",
                fontFamily: "var(--font-body)",
              }}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Posts grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-[12px] border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  {/* Thumbnail */}
                  <div className="h-44 relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(135deg, rgba(200,98,42,0.08), rgba(212,168,67,0.06))` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display font-black select-none" style={{ fontSize: "80px", color: "var(--border)", opacity: 0.4 }}>
                        {post.title[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <span
                      className="tag-pill capitalize mb-3 self-start"
                      style={{ background: "var(--bg-secondary)", color: "var(--text-muted)", borderColor: "var(--border)" }}
                    >
                      {post.category}
                    </span>
                    <h3
                      className="font-display font-bold text-base mb-2 line-clamp-2 group-hover:text-[var(--accent-primary)] transition-colors"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed line-clamp-2 mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
                          <Clock size={11} />{post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-medium" style={{ color: "var(--accent-primary)" }}>
                        Read <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
