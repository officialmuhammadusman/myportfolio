"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

interface MobileBottomSheetProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const springConfig = {
  type: "tween" as const,
  duration: 0.55,
  ease: [0.32, 0.72, 0, 1] as const,
};

/**
 * Reusable mobile bottom sheet.
 * - Spring enter/exit animation
 * - Swipe down to dismiss (drag)
 * - Locks body scroll while open
 * - Safe-area aware bottom padding
 * - Backdrop blur overlay
 */
export function MobileBottomSheet({
  open,
  onClose,
  title,
  children,
}: MobileBottomSheetProps) {
  const reduceMotion = useReducedMotion();
  const sheetRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="sheet-backdrop"
            className="fixed inset-0 z-[80] touch-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)" }}
            onClick={onClose}
            aria-hidden
          />

          {/* Sheet */}
          <motion.div
            ref={sheetRef}
            key="sheet-panel"
            role="dialog"
            aria-modal="true"
            aria-label={title ?? "Details"}
            className="fixed inset-x-0 bottom-0 z-[90] flex flex-col overflow-hidden rounded-t-[28px] border-t border-white/[0.08] bg-[#111111] shadow-[0_-16px_64px_rgba(0,0,0,0.7)]"
            style={{
              maxHeight: "90dvh",
              paddingBottom: "env(safe-area-inset-bottom, 0px)",
            }}
            initial={reduceMotion ? false : { y: "100%" }}
            animate={{ y: 0 }}
            exit={reduceMotion ? undefined : { y: "100%" }}
            transition={reduceMotion ? { duration: 0 } : springConfig}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.4 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 80 || info.velocity.y > 600) {
                onClose();
              }
            }}
          >
            {/* Drag handle */}
            <div className="flex shrink-0 flex-col items-center pt-3 pb-2">
              <div className="h-1 w-10 rounded-full bg-white/25" />
            </div>

            {/* Header */}
            {title && (
              <div className="flex shrink-0 items-center justify-between border-b border-white/[0.06] px-5 py-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                  {title}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-[#FFF7ED]/55 transition-colors hover:border-[#FF6A00]/40 hover:text-[#FF6A00]"
                >
                  <X size={15} />
                </button>
              </div>
            )}

            {/* Content — scrollable */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 pt-2 pb-8">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
