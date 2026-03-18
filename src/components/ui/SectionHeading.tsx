"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import theme from "@/lib/theme";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;       // Part of title in accent color
  subtitle?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
  animate?: boolean;
}

const sizeMap = {
  sm: { title: "text-3xl md:text-4xl", subtitle: "text-[15px]" },
  md: { title: "text-4xl md:text-5xl", subtitle: "text-[16px]" },
  lg: { title: "text-5xl md:text-6xl", subtitle: "text-[17px]" },
};

const alignMap = {
  left:   "items-start text-left",
  center: "items-center text-center",
  right:  "items-end text-right",
};

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = "left",
  size = "md",
  className,
  animate = true,
}: SectionHeadingProps) {
  const Wrapper = animate ? motion.div : "div";
  const wrapperProps = animate
    ? {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.6, ease: "easeOut" },
      }
    : {};

  return (
    // @ts-ignore — motion vs div props
    <Wrapper
      className={cn("flex flex-col gap-4", alignMap[align], className)}
      {...wrapperProps}
    >
      {/* Eyebrow label */}
      {eyebrow && (
        <div className="flex items-center gap-3">
          {align !== "right" && (
            <div className="w-8 h-px bg-accent-primary shrink-0" />
          )}
          <span className="section-eyebrow">{eyebrow}</span>
          {align === "right" && (
            <div className="w-8 h-px bg-accent-primary shrink-0" />
          )}
        </div>
      )}

      {/* Main title */}
      <h2
        className={cn(
          "font-display font-bold text-[var(--text-primary)] leading-[1.1]",
          sizeMap[size].title
        )}
        style={{ letterSpacing: "-0.025em" }}
      >
        {title}
        {titleAccent && (
          <>
            {" "}
            <em className="text-accent-primary not-italic">{titleAccent}</em>
          </>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "text-[var(--text-secondary)] leading-relaxed max-w-[600px]",
            sizeMap[size].subtitle,
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </Wrapper>
  );
}
