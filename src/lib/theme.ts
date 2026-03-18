/**
 * GLOBAL THEME — Single Source of Truth
 * Every color, font, spacing, animation used across the entire portfolio
 * comes from this file. Never hardcode values anywhere else.
 */

export const theme = {
  // ─────────────────────────────────────────
  // COLOR PALETTE
  // ─────────────────────────────────────────
  colors: {
    // Primary accent — Burnished Copper (unique in tech space)
    accent: {
      primary: "#C8622A",       // Burnished copper — hero CTAs, active states
      primaryHover: "#B5521F",  // Darker on hover
      primaryLight: "#E8835A",  // Lighter tint
      secondary: "#D4A843",     // Warm gold — gradients, highlights
      secondaryLight: "#E8C56A",
      gradient: "linear-gradient(135deg, #C8622A 0%, #D4A843 100%)",
      gradientText: "linear-gradient(135deg, #C8622A, #D4A843)",
    },

    // Dark mode palette — Warm Ink (NOT cold black)
    dark: {
      bg: "#0F0D0B",            // Primary background — warm deep ink
      bgSecondary: "#151210",   // Slightly lighter bg for variety
      surface: "#1C1915",       // Cards, modals, panels
      surfaceHover: "#232018",  // Card hover state
      surfaceElevated: "#2A2520",// Elevated components
      border: "#2E2A24",        // Subtle borders
      borderHover: "#4A4035",   // Border on hover
      divider: "#201D18",       // Section dividers
      text: {
        primary: "#EDE8E0",     // Main text — warm off-white
        secondary: "#A89880",   // Secondary text
        muted: "#6B5F52",       // Muted / placeholders
        inverse: "#0F0D0B",     // Text on light backgrounds
      },
      overlay: "rgba(15,13,11,0.85)", // Modal overlays
    },

    // Light mode palette — Warm Parchment (NOT cold white)
    light: {
      bg: "#FAF7F2",            // Primary background — warm parchment
      bgSecondary: "#F5F0E8",   // Slightly off for variety
      surface: "#FFFFFF",       // Cards, panels
      surfaceHover: "#F7F4EF",  // Card hover
      surfaceElevated: "#FFFFFF",
      border: "#E0D8CC",        // Subtle warm borders
      borderHover: "#C8BAA8",
      divider: "#EDE6DB",
      text: {
        primary: "#1A1410",     // Main text — warm espresso
        secondary: "#6B5F52",   // Secondary
        muted: "#A89880",       // Muted
        inverse: "#EDE8E0",
      },
      overlay: "rgba(250,247,242,0.9)",
    },

    // Semantic colors
    semantic: {
      success: "#2D6A4F",       // Forest green — achievement badges
      successLight: "#52B788",
      successBg: "#1B3D2F",
      error: "#C0392B",         // Terracotta red
      errorLight: "#E74C3C",
      errorBg: "#3D1B1B",
      warning: "#B7791F",       // Warm amber
      warningLight: "#D4A843",
      warningBg: "#3D2E0F",
      info: "#2E7DA8",
      infoLight: "#4A9CC0",
      infoBg: "#1B2D3D",
    },
  },

  // ─────────────────────────────────────────
  // TYPOGRAPHY
  // ─────────────────────────────────────────
  fonts: {
    display: "'Playfair Display', Georgia, serif",   // Hero headings — editorial
    heading: "'DM Sans', system-ui, sans-serif",     // Section headings
    body: "'DM Sans', system-ui, sans-serif",        // Body text
    ui: "'DM Sans', system-ui, sans-serif",          // UI elements, buttons
    mono: "'JetBrains Mono', 'Fira Code', monospace", // Code blocks

    sizes: {
      xs: "0.75rem",    // 12px
      sm: "0.875rem",   // 14px
      base: "1rem",     // 16px
      md: "1.125rem",   // 18px
      lg: "1.25rem",    // 20px
      xl: "1.5rem",     // 24px
      "2xl": "1.875rem",// 30px
      "3xl": "2.25rem", // 36px
      "4xl": "3rem",    // 48px
      "5xl": "3.75rem", // 60px
      "6xl": "4.5rem",  // 72px
      "7xl": "6rem",    // 96px
      "8xl": "8rem",    // 128px
    },

    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },

    lineHeights: {
      tight: 1.1,
      snug: 1.25,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },

    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.15em",
      caps: "0.1em",
    },
  },

  // ─────────────────────────────────────────
  // SPACING SYSTEM (8px base grid)
  // ─────────────────────────────────────────
  spacing: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
    20: "80px",
    24: "96px",
    32: "128px",
    40: "160px",
    sectionY: "120px",   // Vertical section padding
    containerX: "24px",  // Horizontal container padding
  },

  // ─────────────────────────────────────────
  // BORDER RADIUS
  // ─────────────────────────────────────────
  radius: {
    none: "0px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "24px",
    "3xl": "32px",
    full: "9999px",
    card: "12px",
    button: "8px",
    badge: "6px",
    input: "8px",
  },

  // ─────────────────────────────────────────
  // SHADOWS
  // ─────────────────────────────────────────
  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",
    md: "0 4px 16px rgba(0,0,0,0.12)",
    lg: "0 8px 32px rgba(0,0,0,0.16)",
    xl: "0 16px 64px rgba(0,0,0,0.20)",
    "2xl": "0 24px 80px rgba(0,0,0,0.28)",
    // Accent glows — copper tinted
    glowSm: "0 0 16px rgba(200,98,42,0.25)",
    glowMd: "0 0 32px rgba(200,98,42,0.30)",
    glowLg: "0 0 64px rgba(200,98,42,0.20)",
    // Card specific
    card: "0 2px 8px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.06)",
    cardHover: "0 8px 32px rgba(0,0,0,0.16), 0 2px 8px rgba(200,98,42,0.08)",
    cardDark: "0 2px 8px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.2)",
    cardDarkHover: "0 8px 40px rgba(0,0,0,0.4), 0 2px 8px rgba(200,98,42,0.15)",
  },

  // ─────────────────────────────────────────
  // BREAKPOINTS
  // ─────────────────────────────────────────
  breakpoints: {
    xs: "375px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
    "3xl": "1920px",
  },

  // ─────────────────────────────────────────
  // ANIMATIONS
  // ─────────────────────────────────────────
  animation: {
    durations: {
      instant: 0.1,
      fast: 0.2,
      normal: 0.35,
      slow: 0.5,
      slower: 0.8,
      slowest: 1.2,
    },
    easing: {
      // Standard easings
      linear: [0, 0, 1, 1],
      easeIn: [0.4, 0, 1, 1],
      easeOut: [0, 0, 0.2, 1],
      easeInOut: [0.4, 0, 0.2, 1],
      // Custom signature easings
      smooth: [0.25, 0.1, 0.25, 1],
      spring: { type: "spring", stiffness: 300, damping: 30 },
      springGentle: { type: "spring", stiffness: 150, damping: 20 },
      springBouncy: { type: "spring", stiffness: 400, damping: 25 },
    },
    // Reusable motion variants
    variants: {
      fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      },
      slideUp: {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      },
      slideDown: {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
      },
      slideLeft: {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
      },
      slideRight: {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
      },
      scaleIn: {
        hidden: { opacity: 0, scale: 0.92 },
        visible: { opacity: 1, scale: 1 },
      },
      staggerContainer: {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
      },
      staggerContainerFast: {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.06, delayChildren: 0.1 },
        },
      },
    },
  },

  // ─────────────────────────────────────────
  // Z-INDEX LAYERS
  // ─────────────────────────────────────────
  zIndex: {
    behind: -1,
    base: 0,
    raised: 10,
    dropdown: 100,
    sticky: 200,
    navbar: 300,
    overlay: 400,
    modal: 500,
    toast: 600,
    tooltip: 700,
    cursor: 9999,
  },

  // ─────────────────────────────────────────
  // LAYOUT
  // ─────────────────────────────────────────
  layout: {
    maxWidth: "1280px",
    containerPadding: "clamp(16px, 5vw, 80px)",
    navHeight: "72px",
    sectionPadding: "clamp(64px, 10vw, 128px)",
  },
} as const;

// ─────────────────────────────────────────
// CSS VARIABLE NAMES (for use in globals.css)
// ─────────────────────────────────────────
export const cssVars = {
  // Accent
  accentPrimary: "var(--accent-primary)",
  accentPrimaryHover: "var(--accent-primary-hover)",
  accentPrimaryLight: "var(--accent-primary-light)",
  accentSecondary: "var(--accent-secondary)",
  accentGradient: "var(--accent-gradient)",

  // Backgrounds
  bgPrimary: "var(--bg-primary)",
  bgSecondary: "var(--bg-secondary)",
  surface: "var(--surface)",
  surfaceHover: "var(--surface-hover)",
  surfaceElevated: "var(--surface-elevated)",

  // Borders
  border: "var(--border)",
  borderHover: "var(--border-hover)",
  divider: "var(--divider)",

  // Text
  textPrimary: "var(--text-primary)",
  textSecondary: "var(--text-secondary)",
  textMuted: "var(--text-muted)",
  textInverse: "var(--text-inverse)",

  // Semantic
  success: "var(--success)",
  successLight: "var(--success-light)",
  error: "var(--error)",
  warning: "var(--warning)",
} as const;

export type Theme = typeof theme;
export default theme;
