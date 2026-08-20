"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { toggleMobileMenu, closeMobileMenu } from "@/store/slices/uiSlice";
import { useNavbarScroll, useThemeToggle, useLockBodyScroll } from "@/hooks";
import { NAV_LINKS, PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { HEADER_MOTION, getHeaderMegaPreloadAssets } from "@/data/headerMega";
import { MegaMenuPanels, type MegaKey } from "@/components/layout/MegaMenu";
import { TopUtilityBar } from "@/components/layout/TopUtilityBar";
import { MobileHeaderNav } from "@/components/layout/MobileHeaderNav";
import { brandIcons } from "@/lib/brandAssets";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { BrandMenuToggle } from "@/components/ui/BrandMenuToggle";
import { cn } from "@/lib/utils";
import theme from "@/lib/theme";
import {
  getHeaderAvatarClassName,
  getHeaderAvatarSrc,
  getHeaderLogoSurface,
  getHeaderWordmarkClassName,
  getHeaderWordmarkSrc,
} from "@/lib/brandLogos";

export function Navbar() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const isMobileMenuOpen = useSelector((s: RootState) => s.ui.isMobileMenuOpen);
  const isScrolled = useNavbarScroll(12);
  const { isDark, toggle, mounted, resolvedTheme } = useThemeToggle();

  const [openMega, setOpenMega] = useState<MegaKey | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useLockBodyScroll(isMobileMenuOpen);

  const clearTimers = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    const urls = getHeaderMegaPreloadAssets();
    urls.forEach((url) => {
      const img = new window.Image();
      img.src = url;
    });
  }, []);

  useEffect(() => {
    dispatch(closeMobileMenu());
    setOpenMega(null);
  }, [pathname, dispatch]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMega(null);
        dispatch(closeMobileMenu());
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dispatch]);

  const scheduleOpen = (key: MegaKey) => {
    clearTimers();
    setOpenMega(key);
  };

  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = setTimeout(() => setOpenMega(null), HEADER_MOTION.closeDelayMs);
  };

  const keepOpen = (key: MegaKey) => {
    clearTimers();
    setOpenMega(key);
  };

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const logoSurface = getHeaderLogoSurface({
    resolvedTheme,
    mobileMenuOpen: isMobileMenuOpen,
    mounted,
  });
  const wordmarkSrc = getHeaderWordmarkSrc(logoSurface);
  const avatarSrc = getHeaderAvatarSrc();
  const wordmarkClassName = getHeaderWordmarkClassName(logoSurface);
  const avatarClassName = getHeaderAvatarClassName();

  const headerElevated = isScrolled || !!openMega || isMobileMenuOpen;
  const isHome = pathname === "/";
  const isHeaderOnHero = isHome && !isScrolled && !isMobileMenuOpen;
  const isHeroGlass = isHeaderOnHero && !openMega;

  const whatsappUrl =
    SOCIAL_LINKS.find((s) => s.icon === "whatsapp")?.url ?? "/contact";

  const megaKeyForHref = (href: string): MegaKey | null => {
    if (href === "/services") return "services";
    if (href === "/projects") return "work";
    if (href === "/about") return "about";
    if (href === "/blog") return "insights";
    if (href === "/contact") return "contact";
    return null;
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: HEADER_MOTION.ease }}
        style={{
          zIndex: isMobileMenuOpen ? theme.zIndex.modal + 2 : theme.zIndex.navbar,
        }}
        className={cn(
          "fixed top-0 left-0 right-0 w-full transition-[background,box-shadow] duration-300",
          isMobileMenuOpen
            ? "bg-[#0A0A0A]"
            : isHeroGlass
              ? "bg-[#0A0A0A]/35 backdrop-blur-xl"
              : "bg-[var(--bg-primary)]",
          isHeroGlass && "shadow-[0_8px_32px_rgba(0,0,0,0.18)]"
        )}
      >
        {/* Top Utility Bar */}
        <TopUtilityBar isHeroGlass={isHeroGlass} isMobileMenuOpen={isMobileMenuOpen} />

        {/* Main bar */}
        <div
          className={cn(
            "border-b transition-all duration-300",
            isMobileMenuOpen
              ? "border-white/10 bg-[#0A0A0A]"
              : isHeroGlass
                ? "border-white/10 bg-transparent"
                : "border-[var(--border)] bg-[var(--bg-primary)]",
            headerElevated && !isMobileMenuOpen && !isHeroGlass && "shadow-[var(--shadow-sm)]"
          )}
        >
          <nav className="layout-wrap flex h-[68px] w-full items-center justify-between gap-3 md:gap-5 lg:gap-6">
            <Link
              href="/"
              className="group relative z-[2] flex shrink-0 items-center gap-2.5"
              onClick={() => dispatch(closeMobileMenu())}
            >
              {mounted ? (
                <>
                  <Image
                    key={`avatar-${avatarSrc}`}
                    src={avatarSrc}
                    alt={`${PERSONAL_INFO.name} Software Agency`}
                    width={36}
                    height={36}
                    priority
                    unoptimized
                    className={avatarClassName}
                  />
                  <Image
                    key={`wordmark-${wordmarkSrc}`}
                    src={wordmarkSrc}
                    alt={`${PERSONAL_INFO.name} Software Agency`}
                    width={240}
                    height={44}
                    priority
                    unoptimized
                    className={wordmarkClassName}
                  />
                </>
              ) : (
                <>
                  <span className="inline-block h-9 w-9 rounded-full md:hidden" aria-hidden />
                  <span className="hidden h-10 w-[160px] md:inline-block" aria-hidden />
                </>
              )}
            </Link>

            <ul className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                const megaKey = megaKeyForHref(link.href);
                const active = isActive(link.href);
                const isOpen = megaKey !== null && openMega === megaKey;

                if (megaKey) {
                  return (
                    <li
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => scheduleOpen(megaKey)}
                      onMouseLeave={scheduleClose}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={() => setOpenMega(isOpen ? null : megaKey)}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors lg:text-[15px]",
                          active || isOpen
                            ? "text-[#FF6A00]"
                            : isHeroGlass
                              ? "text-[#FFF7ED]/75 hover:text-[#FFF7ED]"
                              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        )}
                      >
                        {link.label}
                        <BrandIcon
                          base={brandIcons.ui.chevron}
                          tone={active || isOpen ? "orange" : isHeroGlass ? "white" : "base"}
                          size={14}
                          className={cn(
                            "shrink-0 transition-transform duration-200",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative block rounded-md px-3 py-2 text-sm font-medium transition-colors lg:text-[15px]",
                        active
                          ? "text-[#FF6A00]"
                          : isHeroGlass
                            ? "text-[#FFF7ED]/75 hover:text-[#FFF7ED]"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      )}
                    >
                      {link.label}
                      {active && (
                        <motion.span
                          layoutId="agency-active-line"
                          className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] rounded-full bg-[#FF6A00]"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="relative z-[2] flex items-center gap-2">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "btn-action btn-action-accent !hidden !w-auto !px-4 !py-2.5 !text-xs lg:!inline-flex lg:!px-5 lg:!py-2.5 lg:!text-[13px]",
                  !isHeroGlass &&
                    "border-[var(--border)] !bg-transparent text-[var(--text-primary)] hover:border-[#FF6A00]/45 hover:!bg-[#FF6A00]/08"
                )}
              >
                <BrandIcon base={brandIcons.cta.whatsapp} tone="orange" size={16} />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="btn-action btn-action-primary !hidden !w-auto !px-5 !py-2.5 !text-xs lg:!inline-flex lg:!px-6 lg:!py-2.5 lg:!text-[13px]"
              >
                Let&apos;s Talk
                <BrandIcon base={brandIcons.cta.startProject} tone="black" size={14} />
              </Link>

              <BrandMenuToggle
                open={isMobileMenuOpen}
                onClick={() => dispatch(toggleMobileMenu())}
                tone={isMobileMenuOpen || isHeroGlass ? "dark" : "light"}
                className="lg:hidden"
              />
            </div>
          </nav>
        </div>

        {/* Desktop mega panels — kept mounted so icons are never fetched late */}
        <div className="relative hidden lg:block">
          <MegaMenuPanels
            openMega={openMega}
            reduceMotion={reduceMotion}
            keepOpen={keepOpen}
            scheduleClose={scheduleClose}
            onNavigate={() => setOpenMega(null)}
          />
        </div>
      </motion.header>

      {/* Mobile Off-Canvas Drawer with Nested Sliding Navigation */}
      <MobileHeaderNav
        isOpen={isMobileMenuOpen}
        onClose={() => dispatch(closeMobileMenu())}
      />
    </>
  );
}
