"use client";

import Link from "next/link";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { brandIcons } from "@/lib/brandAssets";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { cn } from "@/lib/utils";

interface TopUtilityBarProps {
  isHeroGlass?: boolean;
  isMobileMenuOpen?: boolean;
}

export function TopUtilityBar({ isHeroGlass = false, isMobileMenuOpen = false }: TopUtilityBarProps) {
  const whatsappUrl = SOCIAL_LINKS.find((s) => s.icon === "whatsapp")?.url ?? "/contact";

  return (
    <div
      className={cn(
        "hidden border-b transition-colors duration-300 md:block",
        isMobileMenuOpen
          ? "border-white/10 bg-[#0A0A0A] text-[#FFF7ED]/70"
          : isHeroGlass
            ? "border-white/10 bg-black/25 text-[#FFF7ED]/80"
            : "border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
      )}
    >
      <div className="layout-wrap flex h-9 w-full items-center justify-between gap-4 text-xs font-medium tracking-wide lg:text-sm">
        {/* Left: Availability & Regions */}
        <div className="flex min-w-0 flex-wrap items-center gap-x-2.5 gap-y-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6A00] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6A00]" />
          </span>
          <span className="font-semibold text-[var(--text-primary)]">
            {PERSONAL_INFO.availabilityText}
          </span>
          <span className="hidden opacity-30 sm:inline">|</span>
          <span className="hidden truncate opacity-80 sm:inline">
            USA · UK · KSA · UAE · Remote
          </span>
        </div>

        {/* Right: Quick Contacts & Utility */}
        <div className="flex shrink-0 items-center gap-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden items-center gap-1.5 transition-colors hover:text-[#FF6A00] lg:inline-flex",
              isHeroGlass || isMobileMenuOpen ? "text-[#FFF7ED]/85" : ""
            )}
          >
            <BrandIcon
              base={brandIcons.cta.whatsapp}
              tone="orange"
              size={14}
            />
            <span>WhatsApp</span>
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
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <div className="h-3 w-px bg-current opacity-20 hidden sm:block" />

          {/* Quick Currency & Language display */}
          <div className="hidden items-center gap-2 sm:flex text-[11px] uppercase tracking-wider font-semibold opacity-75">
            <span className="cursor-pointer hover:text-[#FF6A00] transition-colors">USD</span>
            <span className="opacity-40">•</span>
            <span className="cursor-pointer hover:text-[#FF6A00] transition-colors">EN</span>
          </div>
        </div>
      </div>
    </div>
  );
}
