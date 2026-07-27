"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BrandLoader } from "@/components/ui/BrandLoader";
import { lockBodyScroll } from "@/lib/scrollLock";

const SESSION_KEY = "mu-agency-preloader-seen";

/** First visit only — short brand moment, no route-change overlay */
const BOOT_DURATION_MS = 1200;

type LoaderPhase = "hidden" | "boot";

/**
 * Boot loader on first visit per session only.
 * Route changes render instantly — no full-screen black overlay.
 */
export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const bootStarted = useRef(false);
  const [phase, setPhase] = useState<LoaderPhase>("hidden");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || bootStarted.current) return;
    bootStarted.current = true;

    if (sessionStorage.getItem(SESSION_KEY)) return;

    setPhase("boot");
    const unlock = lockBodyScroll();

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setPhase("hidden");
      unlock();
    }, BOOT_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
      unlock();
    };
  }, [mounted]);

  return (
    <>
      <AnimatePresence mode="wait">
        {phase === "boot" && <BrandLoader key="boot" variant="boot" />}
      </AnimatePresence>
      {children}
    </>
  );
}
