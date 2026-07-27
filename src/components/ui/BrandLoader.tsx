"use client";

import { motion, useReducedMotion } from "framer-motion";
import theme from "@/lib/theme";

export type BrandLoaderVariant = "boot" | "route";

interface BrandLoaderProps {
  variant?: BrandLoaderVariant;
}

/**
 * Full-screen brand logo animation for:
 * - boot: first visit / first paint (cinematic)
 * - route: page navigation (same brand moment, shorter)
 *
 * Pattern used by premium agency sites: black stage → logo reveal →
 * progress / hold → curtain wipe exit. Keep under ~1.6s boot / ~0.7s route.
 */
export function BrandLoader({ variant = "route" }: BrandLoaderProps) {
  const reduceMotion = useReducedMotion();
  const isBoot = variant === "boot";
  const markSize = isBoot ? 120 : 88;

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label={isBoot ? "Loading Muhammad Usman" : "Loading page"}
      initial={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 1, clipPath: "inset(0 0 0% 0)" }
      }
      animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      exit={
        reduceMotion
          ? { opacity: 0, transition: { duration: 0.2 } }
          : {
              clipPath: "inset(0 0 100% 0)",
              transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
            }
      }
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden px-6"
      style={{
        zIndex: theme.zIndex.toast + 40,
        background: "#0A0A0A",
        pointerEvents: "all",
      }}
    >
      {/* Brand atmosphere */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 42%, rgba(255,106,0,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-7">
        {/* MU mark with layered entrance */}
        <motion.div
          initial={reduceMotion ? false : { scale: 0.72, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          style={{ width: markSize, height: markSize }}
        >
          {/* Halo ring */}
          {!reduceMotion && (
            <motion.span
              className="absolute inset-[-12%] rounded-full border border-[#FF6A00]/50"
              initial={{ scale: 0.7, opacity: 0.6 }}
              animate={{ scale: 1.35, opacity: 0 }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          )}

          <MuMarkSvg size={markSize} animate={!reduceMotion} />
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-2 text-center"
        >
          <p className="text-[15px] font-semibold tracking-[0.18em] text-[#FFF7ED] uppercase sm:text-[16px]">
            Muhammad Usman
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#FFB347]/80">
            Software Agency
          </p>
        </motion.div>

        {/* Progress — boot: full bar, route: slim pulse bar */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="mt-1 w-[180px] sm:w-[220px]"
        >
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #FF6A00 0%, #FFB347 100%)",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: isBoot ? 1.15 : 0.5,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.15,
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function MuMarkSvg({ size, animate }: { size: number; animate: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="relative z-[1]"
    >
      <defs>
        <linearGradient id="muLoaderGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6A00" />
          <stop offset="78%" stopColor="#FF6A00" />
          <stop offset="100%" stopColor="#FFB347" />
        </linearGradient>
      </defs>

      <motion.path
        d="M12 88V20L46 48L60 37V88H48V58L46 60L24 42V88Z"
        fill="url(#muLoaderGradient)"
        initial={animate ? { opacity: 0, x: -8 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d="M60 54V88H88V31H76V73C76 78 72 82 67 82C63 82 60 78 60 74V54Z"
        fill="url(#muLoaderGradient)"
        initial={animate ? { opacity: 0, x: 8 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d="M76 18L88 10V25L76 33Z"
        fill="#FFB347"
        initial={animate ? { opacity: 0, scale: 0.5 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
