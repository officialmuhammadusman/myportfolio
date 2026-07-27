"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { BrandLoader, type BrandLoaderVariant } from "@/components/ui/BrandLoader";

const SESSION_KEY = "mu-agency-preloader-seen";

/** First visit — full brand stage */
const BOOT_DURATION_MS = 1600;
/** Route change — same full-screen logo moment, shorter */
const ROUTE_DURATION_MS = 750;

type LoaderPhase = "hidden" | "boot" | "route";

/**
 * Shows full-screen MU logo animation on:
 * 1) First load (once per browser session)
 * 2) Every client-side route change
 */
export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);
  // Avoid boot flash for returning visitors in the same session
  const [phase, setPhase] = useState<LoaderPhase>(() => {
    if (typeof window === "undefined") return "boot";
    return sessionStorage.getItem(SESSION_KEY) ? "hidden" : "boot";
  });

  useEffect(() => {
    // First mount
    if (prevPath.current === null) {
      prevPath.current = pathname;
      const hasSeen = sessionStorage.getItem(SESSION_KEY);

      if (hasSeen) {
        setPhase("hidden");
        return;
      }

      setPhase("boot");
      document.body.style.overflow = "hidden";

      const timer = window.setTimeout(() => {
        sessionStorage.setItem(SESSION_KEY, "1");
        setPhase("hidden");
        document.body.style.overflow = "";
      }, BOOT_DURATION_MS);

      return () => {
        window.clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }

    // Route change
    if (prevPath.current === pathname) return;

    prevPath.current = pathname;
    setPhase("route");
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setPhase("hidden");
      document.body.style.overflow = "";
    }, ROUTE_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [pathname]);

  const loaderVariant: BrandLoaderVariant = phase === "boot" ? "boot" : "route";

  return (
    <>
      <AnimatePresence mode="wait">
        {phase !== "hidden" && (
          <BrandLoader key={`${loaderVariant}-${pathname}`} variant={loaderVariant} />
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
