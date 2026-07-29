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
import { externalNavLinkProps, isExternalNavHref } from "@/lib/navHref";
import { HEADER_MEGA, HEADER_MOTION, getHeaderMegaPreloadAssets } from "@/data/headerMega";
import { MegaMenuPanels, getPanelSections, type MegaKey } from "@/components/layout/MegaMenu";
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

const socialCircleBase: Record<string, string> = {
  github: brandIcons.social.githubCircle,
  linkedin: brandIcons.social.linkedinCircle,
  whatsapp: brandIcons.social.whatsappCircle,
};

export function Navbar() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const isMobileMenuOpen = useSelector((s: RootState) => s.ui.isMobileMenuOpen);
  const isScrolled = useNavbarScroll(12);
  const { isDark, toggle, mounted, resolvedTheme } = useThemeToggle();

  const [openMega, setOpenMega] = useState<MegaKey | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>("services");
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
    setMobileAccordion("services");
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
        {/* Utility strip — always opaque */}
        <div
          className={cn(
            "hidden border-b transition-colors duration-300 md:block",
            isMobileMenuOpen
              ? "border-white/10 bg-[#0A0A0A] text-[#FFF7ED]/70"
              : isHeroGlass
                ? "border-white/10 bg-black/20 text-[#FFF7ED]/75"
                : "border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
          )}
        >
          <div className="layout-wrap flex h-9 w-full items-center justify-between gap-4 text-xs font-medium tracking-wide lg:text-sm">
            <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
              <BrandIcon
                base={brandIcons.ui.availability}
                tone={isHeroGlass || isMobileMenuOpen ? "orange" : "base"}
                size={10}
              />
              <span className="shrink-0">{PERSONAL_INFO.availabilityText}</span>
              <span className="hidden opacity-30 sm:inline">|</span>
              <span className="hidden truncate opacity-80 sm:inline">
                USA · UK · KSA · UAE · Remote
              </span>
            </div>
            <div className="flex shrink-0 items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hidden items-center gap-1.5 transition-colors hover:text-[#FF6A00] lg:inline-flex",
                  isHeroGlass || isMobileMenuOpen ? "text-[#FFF7ED]/80" : ""
                )}
              >
                <BrandIcon
                  base={brandIcons.cta.whatsapp}
                  tone={isHeroGlass || isMobileMenuOpen ? "orange" : "orange"}
                  size={14}
                />
                WhatsApp
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={cn(
                  "inline-flex items-center gap-1.5 transition-colors hover:text-[#FF6A00]",
                  isHeroGlass ? "text-[#FFF7ED]/85" : ""
                )}
              >
              <BrandIcon
                base={brandIcons.cta.email}
                tone={isMobileMenuOpen ? "white" : "orange"}
                size={14}
              />
              {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
        </div>

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
              {mounted && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle();
                  }}
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                  className={cn(
                    "hidden h-10 w-10 items-center justify-center rounded-full border transition-colors lg:flex",
                    isMobileMenuOpen
                      ? "border-white/20 bg-white/5 hover:border-[#FF6A00]/50"
                      : isHeroGlass
                        ? "border-white/20 bg-white/5 hover:border-[#FF6A00]/50"
                        : "border-[var(--border)] hover:border-[#FF6A00]/40"
                  )}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={isDark ? "sun" : "moon"}
                      initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 20, scale: 0.8 }}
                      transition={{ duration: 0.18 }}
                      className="inline-flex"
                    >
                      <BrandIcon
                        base={isDark ? brandIcons.ui.sun : brandIcons.ui.moon}
                        tone={
                          isMobileMenuOpen || isDark || isHeroGlass ? "orange" : "black"
                        }
                        size={18}
                      />
                    </motion.span>
                  </AnimatePresence>
                </button>
              )}

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

      {/* Mobile / tablet full-screen menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { clipPath: "inset(0 0 100% 0)", opacity: 1 }
            }
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { clipPath: "inset(0 0 0% 0)", opacity: 1 }
            }
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { clipPath: "inset(0 0 100% 0)", opacity: 1 }
            }
            transition={{ duration: 0.48, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 flex flex-col overflow-y-auto overscroll-contain bg-[#0A0A0A] lg:hidden"
            style={{ zIndex: theme.zIndex.modal }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 50% at 100% -10%, rgba(255,106,0,0.2), transparent 55%)",
              }}
            />

            {/* Spacer matches fixed header height inside fullscreen menu */}
            <div className="h-[68px] w-full shrink-0 md:h-[104px]" />

            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.04, delayChildren: 0 },
                },
                closed: {
                  transition: { staggerChildren: 0.02, staggerDirection: -1 },
                },
              }}
              className="relative flex min-h-0 flex-1 flex-col px-5 pb-6 pt-3 md:px-8"
            >
              <motion.p
                variants={{
                  closed: { opacity: 0, y: 12 },
                  open: { opacity: 1, y: 0 },
                }}
                className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/40"
              >
                Navigate
              </motion.p>

              <nav className="flex-1 pr-1">
                {(Object.keys(HEADER_MEGA) as MegaKey[]).map((key, index) => {
                  const panel = HEADER_MEGA[key];
                  const expanded = mobileAccordion === key;
                  return (
                    <motion.div
                      key={key}
                      variants={{
                        closed: { opacity: 0, y: 18 },
                        open: { opacity: 1, y: 0 },
                      }}
                      className="border-b border-white/10"
                    >
                      <button
                        type="button"
                        onClick={() => setMobileAccordion(expanded ? null : key)}
                        className="flex w-full items-center justify-between gap-3 py-3.5 text-left"
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="font-mono text-[10px] tracking-widest text-[#FF6A00]/70">
                            0{index + 1}
                          </span>
                          <span className="text-[1.35rem] font-semibold tracking-tight text-[#FFF7ED] md:text-[1.5rem]">
                            {panel.trigger}
                          </span>
                        </span>
                        <motion.span
                          animate={{ rotate: expanded ? 180 : 0 }}
                          transition={{ duration: 0.22 }}
                          className="inline-flex shrink-0"
                        >
                          <BrandIcon base={brandIcons.ui.chevron} tone="orange" size={14} />
                        </motion.span>
                      </button>

                      <div
                        className={cn(
                          "grid transition-[grid-template-rows] duration-200 ease-out",
                          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        )}
                      >
                        <div className="overflow-hidden">
                          <div className="space-y-4 pb-3.5">
                            {getPanelSections(panel).map((section) => (
                              <div key={section.id}>
                                <p className="mb-2 px-2.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#FF6A00]/75">
                                  {section.title}
                                </p>
                                <div className="space-y-1">
                                  {section.links.map((item) => {
                                    const rowClassName =
                                      "flex items-center gap-3 rounded-xl px-2.5 py-2.5 transition-colors active:bg-white/8 hover:bg-white/5";
                                    const rowInner = (
                                      <>
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF6A00]/14">
                                          <BrandIcon base={item.iconBase} tone="orange" size={18} />
                                        </span>
                                        <span className="min-w-0 flex-1">
                                          <span className="flex flex-wrap items-center gap-2">
                                            <span className="text-[13px] font-semibold text-[#FFF7ED]">
                                              {item.label}
                                            </span>
                                            {item.badge && (
                                              <span className="rounded-full bg-[#FF6A00]/20 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-[#FFB347]">
                                                {item.badge}
                                              </span>
                                            )}
                                          </span>
                                          <span className="mt-0.5 block text-[11px] leading-snug text-white/45">
                                            {item.description}
                                          </span>
                                        </span>
                                      </>
                                    );

                                    if (isExternalNavHref(item.href)) {
                                      return (
                                        <a
                                          key={item.id}
                                          href={item.href}
                                          tabIndex={expanded ? 0 : -1}
                                          className={rowClassName}
                                          onClick={() => dispatch(closeMobileMenu())}
                                          {...externalNavLinkProps(item.href)}
                                        >
                                          {rowInner}
                                        </a>
                                      );
                                    }

                                    return (
                                      <Link
                                        key={item.id}
                                        href={item.href}
                                        tabIndex={expanded ? 0 : -1}
                                        className={rowClassName}
                                        onClick={() => dispatch(closeMobileMenu())}
                                      >
                                        {rowInner}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

              </nav>

              <motion.div
                variants={{
                  closed: { opacity: 0, y: 16 },
                  open: { opacity: 1, y: 0 },
                }}
                className="mt-5 space-y-4 border-t border-white/10 pt-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <Image
                      src={avatarSrc}
                      alt=""
                      width={36}
                      height={36}
                      unoptimized
                      className="h-9 w-9 shrink-0 rounded-full"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-semibold text-[#FFF7ED]">
                        {PERSONAL_INFO.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[#FFB347]/85">
                        Software Agency
                      </p>
                    </div>
                  </div>

                  {mounted && (
                    <button
                      type="button"
                      onClick={toggle}
                      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5"
                    >
                      <BrandIcon
                        base={isDark ? brandIcons.ui.sun : brandIcons.ui.moon}
                        tone="orange"
                        size={16}
                      />
                    </button>
                  )}
                </div>

                <div className="flex gap-2">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                      className="transition-transform active:scale-95"
                    >
                      <BrandIcon
                        base={socialCircleBase[social.icon] ?? brandIcons.social.githubCircle}
                        tone="orange"
                        size={36}
                      />
                    </a>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="btn-action btn-action-primary w-full"
                >
                  Let&apos;s Talk
                  <BrandIcon base={brandIcons.cta.letsTalk} tone="black" size={14} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
