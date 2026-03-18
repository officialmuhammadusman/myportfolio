"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { Badge } from "./Badge";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
  className?: string;
}

const categoryColors: Record<string, "accent" | "success" | "info" | "warning" | "default"> = {
  architecture: "accent",
  performance: "success",
  frontend: "info",
  backend: "warning",
  devops: "default",
  career: "default",
};

export function BlogCard({ post, index = 0, featured = false, className }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={cn(
        "group flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-[12px]",
        "hover:border-[var(--border-hover)] hover:-translate-y-[2px]",
        "transition-all duration-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
        featured && "md:flex-row md:col-span-2",
        className
      )}
    >
      {/* Thumbnail */}
      <div
        className={cn(
          "relative overflow-hidden rounded-t-[11px] bg-[var(--bg-secondary)]",
          featured ? "md:rounded-l-[11px] md:rounded-tr-none md:w-2/5 md:aspect-auto aspect-[16/9]" : "aspect-[16/9]"
        )}
      >
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Category + reading time */}
        <div className="flex items-center justify-between">
          <Badge variant={categoryColors[post.category] || "default"} size="sm">
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </Badge>
          <div className="flex items-center gap-1 text-[12px] text-[var(--text-muted)]">
            <Clock size={11} />
            {post.readTime}
          </div>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3
            className={cn(
              "font-display font-semibold text-[var(--text-primary)] leading-snug",
              "hover:text-accent-primary transition-colors duration-200",
              featured ? "text-xl md:text-2xl" : "text-[17px]"
            )}
            style={{ letterSpacing: "-0.015em" }}
          >
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[var(--divider)]">
          <div className="flex items-center gap-1.5 text-[12px] text-[var(--text-muted)]">
            <Calendar size={11} />
            {formatDate(post.publishedAt)}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-[12px] font-semibold text-accent-primary hover:gap-2 transition-all duration-200"
          >
            Read
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
