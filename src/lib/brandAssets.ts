/**
 * Paths into public/images/brand/header
 * Variants: base | --hover | --orange | --white | --black
 */

export type BrandIconTone = "base" | "hover" | "orange" | "white" | "black";

const HEADER = "/images/brand/header";

function withTone(basePathWithoutExt: string, tone: BrandIconTone = "base") {
  if (tone === "base") return `${basePathWithoutExt}.svg`;
  return `${basePathWithoutExt}--${tone}.svg`;
}

export const brandIcons = {
  services: {
    fullstack: `${HEADER}/icons/services/icon-service-fullstack`,
    ai: `${HEADER}/icons/services/icon-service-ai`,
    backend: `${HEADER}/icons/services/icon-service-backend`,
    mvp: `${HEADER}/icons/services/icon-service-mvp`,
    cloud: `${HEADER}/icons/services/icon-service-cloud`,
    mobile: `${HEADER}/icons/services/icon-service-mobile`,
    fullstackTile: `${HEADER}/icons/services/icon-service-fullstack-tile`,
    aiTile: `${HEADER}/icons/services/icon-service-ai-tile`,
    backendTile: `${HEADER}/icons/services/icon-service-backend-tile`,
    mvpTile: `${HEADER}/icons/services/icon-service-mvp-tile`,
    cloudTile: `${HEADER}/icons/services/icon-service-cloud-tile`,
    mobileTile: `${HEADER}/icons/services/icon-service-mobile-tile`,
  },
  work: {
    featured: `${HEADER}/icons/work/icon-work-featured`,
    all: `${HEADER}/icons/work/icon-work-all-projects`,
    caseStudy: `${HEADER}/icons/work/icon-work-case-study`,
    liveDemo: `${HEADER}/icons/work/icon-work-live-demo`,
  },
  about: {
    story: `${HEADER}/icons/about/icon-about-story`,
    skills: `${HEADER}/icons/about/icon-about-skills`,
    experience: `${HEADER}/icons/about/icon-about-experience`,
    process: `${HEADER}/icons/about/icon-about-process`,
  },
  insights: {
    featured: `${HEADER}/icons/insights/icon-insights-featured`,
    article: `${HEADER}/icons/insights/icon-insights-article`,
    tutorial: `${HEADER}/icons/insights/icon-insights-tutorial`,
    news: `${HEADER}/icons/insights/icon-insights-news`,
  },
  cta: {
    letsTalk: `${HEADER}/icons/cta/icon-cta-lets-talk`,
    startProject: `${HEADER}/icons/cta/icon-cta-start-project`,
    email: `${HEADER}/icons/cta/icon-cta-email`,
    whatsapp: `${HEADER}/icons/cta/icon-cta-whatsapp`,
    calendar: `${HEADER}/icons/cta/icon-cta-calendar`,
  },
  ui: {
    hamburger: `${HEADER}/icons/ui/menu-hamburger`,
    close: `${HEADER}/icons/ui/menu-close`,
    chevron: `${HEADER}/icons/ui/nav-chevron`,
    sun: `${HEADER}/icons/ui/theme-sun`,
    moon: `${HEADER}/icons/ui/theme-moon`,
    availability: `${HEADER}/icons/ui/availability-dot`,
    divider: `${HEADER}/icons/ui/mega-divider`,
    muMarkAnimated: `${HEADER}/icons/ui/header-mu-mark-animated.svg`,
  },
  social: {
    github: `${HEADER}/icons/social/social-github`,
    githubCircle: `${HEADER}/icons/social/social-github-circle`,
    linkedin: `${HEADER}/icons/social/social-linkedin`,
    linkedinCircle: `${HEADER}/icons/social/social-linkedin-circle`,
    whatsapp: `${HEADER}/icons/social/social-whatsapp`,
    whatsappCircle: `${HEADER}/icons/social/social-whatsapp-circle`,
  },
  images: {
    workCover: `${HEADER}/images/img-mega-work-cover.png`,
    aboutPanel: `${HEADER}/images/img-mega-about-panel.png`,
    insightsCover: `${HEADER}/images/img-mega-insights-cover.png`,
    projectPlaceholder: `${HEADER}/images/img-project-thumb-placeholder.png`,
    glowOrb: `${HEADER}/images/header-glow-orb.png`,
    servicesAtmosphere: `${HEADER}/images/img-services-atmosphere-plate.webp`,
    servicesFeatured: `${HEADER}/images/img-services-featured-panel.webp`,
  },
  muMark: `${HEADER}/mu-mark.svg`,
} as const;

export function brandIconSrc(basePathWithoutExt: string, tone: BrandIconTone = "base") {
  return withTone(basePathWithoutExt, tone);
}

/** Pick tone for light vs dark surfaces */
export function surfaceTone(surface: "light" | "dark", preferred: "color" | "mono" = "color"): BrandIconTone {
  if (surface === "dark") return preferred === "mono" ? "white" : "orange";
  return preferred === "mono" ? "black" : "base";
}
