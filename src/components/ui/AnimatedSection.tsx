"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Scroll entrance that never blanks content on reload.
 * Soft slide only — opacity stays 1 so SSR/hydration stay visible.
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 0.55,
  once = true,
}: AnimatedSectionProps) {
  const y =
    direction === "up" ? distance : direction === "down" ? -distance : 0;
  const x =
    direction === "left" ? distance : direction === "right" ? -distance : 0;

  return (
    <motion.div
      initial={{ opacity: 1, y: direction === "none" ? 0 : y * 0.4, x: x * 0.4 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-60px", amount: 0.12 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  containerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  containerDelay = 0.1,
}: StaggerProps) {
  return (
    <motion.div
      initial="visible"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: containerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const variants = {
    hidden: {
      opacity: 1,
      y: direction === "up" ? 16 : 0,
      x: direction === "left" ? 16 : direction === "right" ? -16 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div variants={variants} initial="visible" className={cn(className)}>
      {children}
    </motion.div>
  );
}
