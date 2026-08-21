"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileTextDrawerProps {
  text: string;
  className?: string;
  triggerClassName?: string;
  lines?: number;
  children?: React.ReactNode;
}

export function MobileTextDrawer({ 
  text, 
  className = "", 
  triggerClassName = "",
  lines = 4,
  children
}: MobileTextDrawerProps) {
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
      // Lock both body and html to prevent scroll chaining on iOS
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

  // On desktop, just render the text normally
  if (!isMobile) {
    return (
      <>
        <p className={`${className} text-left`}>{text}</p>
        {children}
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col items-start w-full">
        <p 
          className={`${className} text-left`}
          style={{
            display: '-webkit-box',
            WebkitLineClamp: lines,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {text}
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(true);
          }}
          className={`mt-3 font-mono text-[12px] font-bold uppercase tracking-wider text-[#FF6A00] hover:text-white transition-colors ${triggerClassName}`}
        >
          Read More +
        </button>
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
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
              }}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-[101] flex flex-col max-h-[85vh] rounded-t-[32px] border-t border-white/10 bg-[#0A0A0A] shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
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
                  Full Description
                </span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="rounded-full bg-white/5 p-2 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Content area */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-8 pb-12">
                <p className={`${className} text-left leading-[1.8]`}>
                  {text}
                </p>
                {children && <div className="mt-8">{children}</div>}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
