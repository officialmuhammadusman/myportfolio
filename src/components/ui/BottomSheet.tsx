"use client";

import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  snapPoints?: string[]; // e.g., ["50vh", "85vh"]
}

export function BottomSheet({ isOpen, onClose, children, title, snapPoints = ["75vh"] }: BottomSheetProps) {
  const dragControls = useDragControls();

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Mobile: slide up from bottom */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            drag="y"
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) {
                onClose();
              }
            }}
            style={{ height: snapPoints[0], maxHeight: "80vh" }}
            className="fixed bottom-0 inset-x-0 w-full bg-[#0A0A0A] rounded-t-[32px] border-t border-white/10 z-[60] flex flex-col shadow-[0_-20px_60px_rgba(0,0,0,0.5)] lg:hidden"
          >
            {/* Drag Handle Area */}
            <div
              className="flex justify-center pt-4 pb-2 w-full cursor-grab active:cursor-grabbing shrink-0"
              onPointerDown={(e) => dragControls.start(e)}
            >
              <div className="w-12 h-1.5 rounded-full bg-white/20" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 pb-4 border-b border-white/5 shrink-0">
              {title ? (
                <h2 className="text-base font-medium text-[#FFF7ED]">{title}</h2>
              ) : (
                <div />
              )}
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-white/50 hover:text-white transition-colors rounded-full bg-white/5 hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto px-6 py-4 no-scrollbar">
              {children}
            </div>
          </motion.div>

          {/* Desktop: centered modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex fixed inset-0 z-[60] items-center justify-center pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-xl max-h-[75vh] bg-[#0A0A0A] rounded-[24px] border border-white/10 flex flex-col shadow-[0_24px_80px_rgba(0,0,0,0.7)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 shrink-0">
                {title ? (
                  <h2 className="text-base font-medium text-[#FFF7ED]">{title}</h2>
                ) : (
                  <div />
                )}
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 text-white/50 hover:text-white transition-colors rounded-full bg-white/5 hover:bg-white/10"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-1 overflow-y-auto px-6 py-5 no-scrollbar">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
