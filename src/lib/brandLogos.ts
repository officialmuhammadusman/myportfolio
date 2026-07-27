/**
 * Brand logos — /public/images/logo/ (reference: logo-system-sheet.png)
 *
 * | Asset                           | Role                                      |
 * |---------------------------------|-------------------------------------------|
 * | logo-horizontal-lockup-light    | Header wordmark — all themes (with blend) |
 * | logo-horizontal-lockup-dark     | Full-color dark-bg variant (spare asset)  |
 * | logo-mono-white                 | Single-color white lockup (alternate)     |
 * | logo-mono-black                 | Single-color lockup for light surfaces    |
 * | logo-social-avatar              | Phone navbar, favicon, social profiles    |
 * | logo-system-sheet               | Brand guidelines (not used in UI)         |
 */
export const BRAND_LOGOS = {
  /** Orange mark + black wordmark — light header (#FFFBF5) */
  horizontalLight: "/images/logo/logo-horizontal-lockup-light.png",
  /** Orange mark + white wordmark — dark header (#0A0A0A), full-color */
  horizontalDark: "/images/logo/logo-horizontal-lockup-dark.png",
  /** All-white lockup — dark theme header & mobile menu */
  monoWhite: "/images/logo/logo-mono-white.png",
  /** All-black lockup — light surfaces, print, alternate */
  monoBlack: "/images/logo/logo-mono-black.png",
  /** Orange MU mark in black circle — phones, avatars, compact UI */
  socialAvatar: "/images/logo/logo-social-avatar.png",
  systemSheet: "/images/logo/logo-system-sheet.png",
} as const;

export type LogoSurface = "light" | "dark";

/** Full horizontal wordmark — logo-horizontal-lockup-light.png on all themes. */
export function getHeaderWordmarkSrc(_surface?: LogoSurface): string {
  return BRAND_LOGOS.horizontalLight;
}

/** Compact avatar mark — phones only (md+ uses wordmark above). */
export function getHeaderAvatarSrc(): string {
  return BRAND_LOGOS.socialAvatar;
}

/** Same lockup + blend on light header, dark theme, and hero overlay. */
export function getHeaderWordmarkClassName(_surface?: LogoSurface): string {
  return "hidden h-8 w-auto mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.02] md:block md:h-10 lg:h-11";
}

/** Phone header — circular avatar, always visible below md. */
export function getHeaderAvatarClassName(): string {
  return "h-9 w-9 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-[1.02] md:hidden";
}

/**
 * Header background tone — drives wordmark variant (not avatar).
 * defaultTheme is dark — assume dark surface until theme resolves.
 */
export function getHeaderLogoSurface(options: {
  resolvedTheme: string | undefined;
  mobileMenuOpen: boolean;
  mounted: boolean;
}): LogoSurface {
  if (!options.mounted) {
    return "dark";
  }
  if (options.mobileMenuOpen || options.resolvedTheme === "dark") {
    return "dark";
  }
  return "light";
}
