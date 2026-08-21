"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

interface MobileListDrawerProps {
  items: string[];
  listClassName?: string;
  itemClassName?: string;
  iconClassName?: string;
}

export function MobileListDrawer({ 
  items, 
  listClassName = "space-y-4", 
  itemClassName = "text-[#FFF7ED]/75 text-[15px] sm:text-[16px] leading-[1.7] flex items-start gap-3 text-left",
  iconClassName = "text-[#FF6A00] shrink-0 mt-1 opacity-60"
}: MobileListDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const renderItem = (text: string, idx: number) => (
    <li key={idx} className={itemClassName}>
      <ChevronRight size={18} className={iconClassName} />
      <span>{text}</span>
    </li>
  );

  // On desktop, just render the full list
  if (!isMobile) {
    return (
      <ul className={listClassName}>
        {items.map((item, idx) => renderItem(item, idx))}
      </ul>
    );
  }

  return (
    <>
      <div className="flex flex-col items-start w-full">
        <ul className={listClassName}>
          {items.slice(0, 1).map((item, idx) => renderItem(item, idx))}
        </ul>
        {items.length > 1 && (
          <button
            onClick={() => setIsOpen(true)}
            className="mt-5 font-mono text-[12px] font-bold uppercase tracking-wider text-[#FF6A00] hover:text-white transition-colors"
          >
            Read More ({items.length - 1} details) +
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-[101] flex flex-col max-h-[85vh] rounded-t-[32px] border-t border-white/10 bg-[#0A0A0A] shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.y > 100 || velocity.y > 500) {
                  setIsOpen(false);
                }
              }}
            >
              {/* Drag Handle */}
              <div className="flex w-full justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing" onClick={() => setIsOpen(false)}>
                <div className="h-1.5 w-12 rounded-full bg-white/20 hover:bg-white/40 transition-colors" />
              </div>
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 pb-4 border-b border-white/[0.06]">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                  Responsibilities
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-white/5 p-2 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Content area */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-8 pb-12">
                <ul className={listClassName}>
                  {items.map((item, idx) => renderItem(item, idx))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
