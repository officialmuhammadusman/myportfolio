"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useBackToTop } from "@/hooks";
import theme from "@/lib/theme";

export function BackToTop() {
  const { isVisible, scrollToTop } = useBackToTop(400);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{ zIndex: theme.zIndex.sticky }}
          className="fixed bottom-8 right-6 w-10 h-10 rounded-[10px] flex items-center justify-center bg-accent-primary text-white shadow-[var(--shadow-glow)] hover:bg-accent-primary-hover hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          <ArrowUp size={17} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
