"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandIcons } from "@/lib/brandAssets";
import { cn } from "@/lib/utils";

interface BrandMenuToggleProps {
  open: boolean;
  onClick: () => void;
  className?: string;
  /** dark = white/orange icons on dark overlay */
  tone?: "light" | "dark";
}

export function BrandMenuToggle({
  open,
  onClick,
  className,
  tone = "light",
}: BrandMenuToggleProps) {
  const reduceMotion = useReducedMotion();
  const iconTone = tone === "dark" ? "white" : "orange";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className={cn(
        "relative z-[2] flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300",
        tone === "dark"
          ? "border-white/15 bg-white/5 hover:border-[#FF6A00]/50"
          : "border-[var(--border)] bg-[var(--surface)] hover:border-[#FF6A00]/45",
        className
      )}
    >
      <motion.span
        key={open ? "close" : "open"}
        initial={reduceMotion ? false : { opacity: 0, rotate: -20, scale: 0.85 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="inline-flex"
      >
        <BrandIcon
          base={open ? brandIcons.ui.close : brandIcons.ui.hamburger}
          tone={iconTone}
          size={22}
        />
      </motion.span>
    </button>
  );
}
