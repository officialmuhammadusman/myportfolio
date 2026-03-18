import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ─────────────────────────────────────────
// CLASS NAME MERGER
// ─────────────────────────────────────────
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─────────────────────────────────────────
// DATE FORMATTER
// ─────────────────────────────────────────
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

// ─────────────────────────────────────────
// READ TIME ESTIMATOR
// ─────────────────────────────────────────
export function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// ─────────────────────────────────────────
// SLUG GENERATOR
// ─────────────────────────────────────────
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ─────────────────────────────────────────
// TRUNCATE TEXT
// ─────────────────────────────────────────
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "…";
}

// ─────────────────────────────────────────
// DELAY HELPER (for staggered animations)
// ─────────────────────────────────────────
export function getStaggerDelay(index: number, base: number = 0.1): number {
  return index * base;
}

// ─────────────────────────────────────────
// EXTERNAL LINK PROPS
// ─────────────────────────────────────────
export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

// ─────────────────────────────────────────
// SCROLL TO ELEMENT
// ─────────────────────────────────────────
export function scrollToElement(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
