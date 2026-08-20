"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronRight, Moon, Sun, Check, Circle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HEADER_MEGA } from "@/data/headerMega";
import { getPanelSections, type MegaKey } from "@/components/layout/MegaMenu";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { brandIcons } from "@/lib/brandAssets";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { externalNavLinkProps, isExternalNavHref } from "@/lib/navHref";
import { getHeaderAvatarSrc } from "@/lib/brandLogos";

interface MobileHeaderNavProps {
  isOpen: boolean;
  onClose: () => void;
}

type ActiveViewType = "MAIN" | MegaKey;

export function MobileHeaderNav({ isOpen, onClose }: MobileHeaderNavProps) {
  const [activeView, setActiveView] = useState<ActiveViewType>("MAIN");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const avatarSrc = getHeaderAvatarSrc();

  // Reset view to MAIN when drawer closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setActiveView("MAIN");
        setExpandedSections({});
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const activePanel = activeView !== "MAIN" ? HEADER_MEGA[activeView] : null;
  const sections = activePanel ? getPanelSections(activePanel) : [];

  const whatsappUrl = SOCIAL_LINKS.find((s) => s.icon === "whatsapp")?.url ?? "/contact";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Side Drawer (Nested Sliding Navigation) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed inset-y-0 right-0 w-[90vw] max-w-md bg-[#0A0A0A] text-[#FFF7ED] z-50 overflow-hidden flex flex-col lg:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.5)] border-l border-white/10"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between px-5 h-[68px] border-b border-white/10 shrink-0 bg-[#0A0A0A]/90 backdrop-blur-md">
              {activeView !== "MAIN" ? (
                <button
                  type="button"
                  onClick={() => setActiveView("MAIN")}
                  className="flex items-center gap-2 font-bold text-sm text-[#FF6A00] hover:text-[#FF8533] transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Menu</span>
                </button>
              ) : (
                <div className="flex items-center gap-2.5">
                  <Image
                    src={avatarSrc}
                    alt={PERSONAL_INFO.name}
                    width={32}
                    height={32}
                    className="rounded-full border border-[#FF6A00]/40"
                  />
                  <span className="font-display font-semibold text-sm tracking-tight text-[#FFF7ED]">
                    {PERSONAL_INFO.name}
                  </span>
                </div>
              )}

              <button
                type="button"
                onClick={onClose}
                className="p-2 -mr-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Sliding Content Container */}
            <div className="relative flex-1 overflow-hidden bg-[#0A0A0A]">
              <AnimatePresence initial={false} mode="wait">

                {/* VIEW 1: MAIN DRILL-DOWN MENU */}
                {activeView === "MAIN" && (
                  <motion.div
                    key="main-view"
                    initial={{ x: "-25%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-25%", opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="absolute inset-0 overflow-y-auto px-5 py-4 space-y-6"
                  >
                    {/* Primary Drill-Down Categories */}
                    <div>
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF6A00]/80">
                        Explore
                      </p>
                      <nav className="space-y-1">
                        {(Object.keys(HEADER_MEGA) as MegaKey[]).map((key, idx) => {
                          const panel = HEADER_MEGA[key];
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => setActiveView(key)}
                              className="w-full flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] hover:border-[#FF6A00]/30 transition-all text-left group"
                            >
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-[11px] font-bold text-[#FF6A00]">
                                  0{idx + 1}
                                </span>
                                <div>
                                  <span className="block font-display font-semibold text-base text-[#FFF7ED] group-hover:text-[#FF6A00] transition-colors">
                                    {panel.trigger}
                                  </span>
                                  <span className="block text-[11px] text-white/50 line-clamp-1">
                                    {panel.eyebrow}
                                  </span>
                                </div>
                              </div>
                              <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-[#FF6A00] group-hover:translate-x-0.5 transition-all" />
                            </button>
                          );
                        })}
                      </nav>
                    </div>

                    <div className="h-px bg-white/10" />

                    {/* Direct Contact & Quick Actions */}
                    <div>
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                        Connect & Actions
                      </p>
                      <div className="space-y-2">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-[#FF6A00]/10 transition-colors"
                        >
                          <span className="flex items-center gap-2.5 text-sm font-semibold text-[#FFF7ED]">
                            <BrandIcon base={brandIcons.cta.whatsapp} tone="orange" size={16} />
                            WhatsApp Us
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FF6A00]/20 text-[#FFB347] px-2 py-0.5 rounded-full">
                            Fast Response
                          </span>
                        </a>

                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                        >
                          <span className="flex items-center gap-2.5 text-sm font-semibold text-[#FFF7ED]">
                            <BrandIcon base={brandIcons.cta.email} tone="white" size={16} />
                            Email Brief
                          </span>
                          <span className="text-xs text-white/50 truncate max-w-[180px]">
                            {PERSONAL_INFO.email}
                          </span>
                        </a>


                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/contact"
                        onClick={onClose}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FF6A00] py-3.5 font-bold text-xs uppercase tracking-[0.14em] text-white shadow-[0_4px_20px_rgba(255,106,0,0.35)] hover:brightness-110 transition-all"
                      >
                        Let&apos;s Talk
                        <BrandIcon base={brandIcons.cta.startProject} tone="white" size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )}

                {/* VIEW 2: SUB-CATEGORY DRILL-DOWN */}
                {activePanel && (
                  <motion.div
                    key={`sub-view-${activePanel.id}`}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute inset-0 overflow-y-auto px-5 py-4 space-y-6 bg-[#0A0A0A]"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF6A00]">
                        {activePanel.eyebrow}
                      </span>
                      <h2 className="font-display text-2xl font-bold text-[#FFF7ED] mt-0.5">
                        {activePanel.trigger}
                      </h2>
                    </div>

                    {/* Grouped Section Links with Rich Images */}
                    <div className="space-y-6">
                      {sections.map((section) => (
                        <div key={section.id} className="space-y-2.5">
                          <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 pb-1 border-b border-white/10">
                            {section.title}
                          </h3>
                          <div className="space-y-2">
                            {(() => {
                              const displayLinks = expandedSections[section.id] ? section.links : section.links.slice(0, 4);
                              
                              return (
                                <>
                                  {displayLinks.map((item) => {
                                    const cardInner = (
                                      <>
                                        {item.imageSrc ? (
                                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white/5 shadow-md">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.label}
                                              className="h-full w-full object-cover"
                                            />
                                          </div>
                                        ) : (
                                          <div className="h-11 w-11 shrink-0 rounded-xl border border-white/15 bg-[#FF6A00]/10 flex items-center justify-center">
                                            <BrandIcon base={item.iconBase} tone="orange" size={20} />
                                          </div>
                                        )}

                                        <div className="min-w-0 flex-1">
                                          <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                                            <span className="text-sm font-semibold text-[#FFF7ED]">
                                              {item.label}
                                            </span>
                                            {item.badge && (
                                              <span className="rounded-full bg-[#FF6A00]/20 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#FFB347]">
                                                {item.badge}
                                              </span>
                                            )}
                                          </div>
                                          <p className="text-[11px] text-white/50 leading-snug line-clamp-2">
                                            {item.description}
                                          </p>
                                        </div>
                                      </>
                                    );

                                    if (isExternalNavHref(item.href)) {
                                      return (
                                        <a
                                          key={item.id}
                                          href={item.href}
                                          onClick={onClose}
                                          className="flex items-center gap-3 p-2.5 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#FF6A00]/30 transition-all"
                                          {...externalNavLinkProps(item.href)}
                                        >
                                          {cardInner}
                                        </a>
                                      );
                                    }

                                    return (
                                      <Link
                                        key={item.id}
                                        href={item.href}
                                        onClick={onClose}
                                        className="flex items-center gap-3 p-2.5 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#FF6A00]/30 transition-all"
                                      >
                                        {cardInner}
                                      </Link>
                                    );
                                  })}
                                  
                                  {section.links.length > 4 && !expandedSections[section.id] && (
                                    <button
                                      type="button"
                                      onClick={() => setExpandedSections(p => ({ ...p, [section.id]: true }))}
                                      className="w-full mt-2 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#FF6A00] hover:text-[#FFB347] transition-colors border border-dashed border-[#FF6A00]/30 rounded-xl bg-[#FF6A00]/5"
                                    >
                                      See More ({section.links.length - 4})
                                    </button>
                                  )}
                                  
                                  {section.links.length > 4 && expandedSections[section.id] && (
                                    <button
                                      type="button"
                                      onClick={() => setExpandedSections(p => ({ ...p, [section.id]: false }))}
                                      className="w-full mt-2 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white/50 hover:text-white transition-colors border border-dashed border-white/20 rounded-xl bg-white/[0.02]"
                                    >
                                      See Less
                                    </button>
                                  )}
                                </>
                              );
                            })()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View All Button */}
                    <div className="pt-4 border-t border-white/10">
                      <Link
                        href={activePanel.href}
                        onClick={onClose}
                        className="w-full flex items-center justify-center gap-2 rounded-xl border border-[#FF6A00]/40 bg-[#FF6A00]/10 py-3 text-xs font-bold uppercase tracking-wider text-[#FFB347] hover:bg-[#FF6A00]/20 transition-all"
                      >
                        View all {activePanel.trigger}
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </Link>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
