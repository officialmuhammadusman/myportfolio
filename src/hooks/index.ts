"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { toggleTheme } from "@/store/slices/themeSlice";
import { setIsScrolled } from "@/store/slices/uiSlice";
import { useTheme as useNextTheme } from "next-themes";

// ─────────────────────────────────────────
// USE SCROLL Y
// ─────────────────────────────────────────
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}

// ─────────────────────────────────────────
// USE NAVBAR SCROLL STATE
// ─────────────────────────────────────────
export function useNavbarScroll(threshold = 20) {
  const dispatch = useDispatch();
  const isScrolled = useSelector((state: RootState) => state.ui.isScrolled);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setIsScrolled(window.scrollY > threshold));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, threshold]);

  return isScrolled;
}

// ─────────────────────────────────────────
// USE IN VIEW (intersection observer)
// ─────────────────────────────────────────
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}

// ─────────────────────────────────────────
// USE THEME TOGGLE
// ─────────────────────────────────────────
export function useThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const toggle = useCallback(() => {
    // Use resolvedTheme so "system" mode still toggles correctly
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return {
    theme,
    resolvedTheme,
    isDark,
    toggle,
    mounted,
  };
}

// ─────────────────────────────────────────
// USE BACK TO TOP
// ─────────────────────────────────────────
export function useBackToTop(threshold = 400) {
  const scrollY = useScrollY();
  const isVisible = scrollY > threshold;

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { isVisible, scrollToTop };
}

// ─────────────────────────────────────────
// USE LOCK BODY SCROLL
// ─────────────────────────────────────────
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (locked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [locked]);
}

// ─────────────────────────────────────────
// USE OUTSIDE CLICK
// ─────────────────────────────────────────
export function useOutsideClick(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [callback]);

  return ref;
}
