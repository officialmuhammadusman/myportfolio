"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { BrandLoader } from "@/components/ui/BrandLoader";
import { lockBodyScroll } from "@/lib/scrollLock";

const SESSION_KEY = "mu-agency-preloader-seen";

/** First visit only — short brand moment */
const BOOT_DURATION_MS = 1200;
/** In-app navigations — shorter brand wipe */
const ROUTE_DURATION_MS = 650;

type LoaderPhase = "hidden" | "boot" | "route";

/**
 * Hydration-safe brand loaders:
 * - Server + first client paint always render `hidden` (identical markup)
 * - Boot / route overlays only mount after client `ready`
 * - Never reads sessionStorage during render
 * - Children always stay mounted underneath (no remount / hydrate clash)
 */
export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [phase, setPhase] = useState<LoaderPhase>("hidden");
  const [ready, setReady] = useState(false);

  const prevPathname = useRef<string | null>(null);
  const isBooting = useRef(false);
  const timerRef = useRef<number | null>(null);
  const unlockRef = useRef<(() => void) | null>(null);

  const clearTimer = () => {
    if (timerRef.current != null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const releaseScroll = () => {
    unlockRef.current?.();
    unlockRef.current = null;
  };

  // Gate: identical SSR + first paint, then enable client-only loaders
  useEffect(() => {
    setReady(true);
  }, []);

  // Boot loader — once per browser session, after mount only
  useEffect(() => {
    if (!ready) return;

    let cancelled = false;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      seen = true;
    }

    prevPathname.current = pathname;

    if (seen) return;

    isBooting.current = true;
    setPhase("boot");
    unlockRef.current = lockBodyScroll();

    timerRef.current = window.setTimeout(() => {
      if (cancelled) return;
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* private mode / blocked storage */
      }
      isBooting.current = false;
      releaseScroll();
      setPhase("hidden");
      timerRef.current = null;
    }, BOOT_DURATION_MS);

    return () => {
      cancelled = true;
      clearTimer();
      releaseScroll();
      isBooting.current = false;
      setPhase("hidden");
    };
    // Boot once when client is ready — pathname seeded above
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  // Route loader — client navigations only (skip first path seed + boot)
  useEffect(() => {
    if (!ready) return;

    if (prevPathname.current === null) {
      prevPathname.current = pathname;
      return;
    }

    if (pathname === prevPathname.current) return;

    prevPathname.current = pathname;

    if (isBooting.current) return;

    let cancelled = false;

    clearTimer();
    releaseScroll();
    setPhase("route");
    unlockRef.current = lockBodyScroll();

    timerRef.current = window.setTimeout(() => {
      if (cancelled) return;
      releaseScroll();
      setPhase("hidden");
      timerRef.current = null;
    }, ROUTE_DURATION_MS);

    return () => {
      cancelled = true;
      clearTimer();
      releaseScroll();
      setPhase("hidden");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, ready]);

  return (
    <>
      <AnimatePresence mode="wait">
        {phase === "boot" ? <BrandLoader key="boot" variant="boot" /> : null}
        {phase === "route" ? <BrandLoader key="route" variant="route" /> : null}
      </AnimatePresence>
      {children}
    </>
  );
}
