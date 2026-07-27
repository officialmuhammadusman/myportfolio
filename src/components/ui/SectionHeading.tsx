"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
  animate?: boolean;
}

const titleSizeMap = {
  sm: "text-3xl sm:text-4xl lg:text-[2.75rem]",
  md: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  lg: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
};

const subtitleSizeMap = {
  sm: "text-base lg:text-lg",
  md: "text-base sm:text-lg lg:text-xl",
  lg: "text-lg sm:text-xl lg:text-[1.375rem]",
};

const alignMap = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
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
    // @ts-expect-error motion vs div props
    <Wrapper
      className={cn("flex flex-col gap-3 sm:gap-4", alignMap[align], className)}
      {...wrapperProps}
    >
      {eyebrow && (
        <div className="flex items-center gap-3">
          {align !== "right" && (
            <div className="h-px w-6 shrink-0 bg-accent-primary sm:w-8" />
          )}
          <span className="section-eyebrow">{eyebrow}</span>
          {align === "right" && (
            <div className="h-px w-6 shrink-0 bg-accent-primary sm:w-8" />
          )}
        </div>
      )}

      <h2
        className={cn(
          "font-display font-bold leading-[1.1] tracking-[-0.025em] text-[var(--text-primary)]",
          titleSizeMap[size]
        )}
      >
        {title}
        {titleAccent && (
          <>
            {" "}
            <em className="text-accent-primary not-italic">{titleAccent}</em>
          </>
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "max-w-3xl leading-relaxed text-[var(--text-secondary)]",
            subtitleSizeMap[size],
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </Wrapper>
  );
}
