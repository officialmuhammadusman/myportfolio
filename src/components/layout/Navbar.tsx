"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Download, Menu, X, ArrowUpRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { toggleMobileMenu, closeMobileMenu } from "@/store/slices/uiSlice";
import { useNavbarScroll, useThemeToggle, useLockBodyScroll } from "@/hooks";
import { NAV_LINKS, PERSONAL_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import theme from "@/lib/theme";

export function Navbar() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const isMobileMenuOpen = useSelector((s: RootState) => s.ui.isMobileMenuOpen);
  const isScrolled = useNavbarScroll(30);
  const { isDark, toggle, mounted } = useThemeToggle();

  useLockBodyScroll(isMobileMenuOpen);

  // Close mobile menu on route change
  useEffect(() => {
    dispatch(closeMobileMenu());
  }, [pathname, dispatch]);

  return (
    <>
      {/* ── Main Navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ zIndex: theme.zIndex.navbar }}
        className={cn(
          "fixed top-0 left-0 right-0 transition-all duration-300",
          isScrolled
            ? "bg-[var(--bg-primary)] border-b border-[var(--border)] shadow-[var(--shadow-sm)]"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">

          {/* ── Logo / Name ── */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            {/* Monogram mark */}
            <div className="relative w-9 h-9 rounded-[8px] bg-accent-primary flex items-center justify-center overflow-hidden">
              <span
                className="text-white font-display font-bold text-base leading-none select-none"
                style={{ letterSpacing: "-0.02em" }}
              >
                MU
              </span>
              {/* subtle shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            </div>
            <span
              className="font-display font-semibold text-[17px] text-[var(--text-primary)] group-hover:text-accent-primary transition-colors duration-200"
              style={{ letterSpacing: "-0.02em" }}
            >
              {PERSONAL_INFO.firstName}
              <span className="text-accent-primary">.</span>
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-[14px] font-medium rounded-md transition-all duration-200",
                      "hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]",
                      isActive
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)]"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-dot"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className={cn(
                  "w-9 h-9 rounded-md flex items-center justify-center transition-all duration-200",
                  "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"
                )}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDark ? "moon" : "sun"}
                    initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <Sun size={17} /> : <Moon size={17} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            )}

            {/* Download CV — desktop only */}
            <a
              href={PERSONAL_INFO.cvUrl}
              download
              className={cn(
                "hidden md:flex items-center gap-2 px-4 py-2 rounded-md text-[13px] font-semibold",
                "bg-accent-primary text-white hover:bg-accent-primary-hover",
                "transition-all duration-200 hover:shadow-[var(--shadow-glow)]",
                "group"
              )}
            >
              <Download size={14} className="group-hover:-translate-y-px transition-transform duration-200" />
              Download CV
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => dispatch(toggleMobileMenu())}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              className={cn(
                "md:hidden w-9 h-9 rounded-md flex items-center justify-center transition-all duration-200",
                "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMobileMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -20 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 20 }}
                  transition={{ duration: 0.15 }}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
              style={{ zIndex: theme.zIndex.overlay }}
              onClick={() => dispatch(closeMobileMenu())}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ zIndex: theme.zIndex.modal }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[var(--surface)] border-l border-[var(--border)] md:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
                <span className="font-display font-semibold text-[16px] text-[var(--text-primary)]">
                  Navigation
                </span>
                <button
                  onClick={() => dispatch(closeMobileMenu())}
                  className="w-8 h-8 rounded-md flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--surface-hover)]"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 p-4 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-200",
                          isActive
                            ? "bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"
                        )}
                      >
                        {link.label}
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer footer */}
              <div className="p-4 border-t border-[var(--border)]">
                <a
                  href={PERSONAL_INFO.cvUrl}
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-accent-primary text-white text-[14px] font-semibold hover:bg-accent-primary-hover transition-colors duration-200"
                >
                  <Download size={15} />
                  Download CV
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
