// ─────────────────────────────────────────
// GLOBAL TYPES — Portfolio Project
// ─────────────────────────────────────────

// Navigation
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Projects
export type ProjectCategory = "full-stack" | "backend" | "frontend" | "real-time" | "performance";

export interface TechTag {
  name: string;
  color: string;       // brand color hex
  bgColor: string;     // tag background hex
}

export interface ProjectBadge {
  label: string;
  icon?: string;
}

export interface ProjectFeature {
  icon: string;        // lucide icon name
  title: string;
  description: string;
}

export interface TechnicalDecision {
  title: string;
  content: string;
}

export interface Challenge {
  problem: string;
  solution: string;
}

export interface PerformanceMetric {
  label: string;
  value: string;
  unit?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: ProjectCategory[];
  status: "completed" | "in-progress" | "planned";
  year: string;
  techStack: TechTag[];
  badges: ProjectBadge[];
  features: ProjectFeature[];
  technicalDecisions: TechnicalDecision[];
  challenges: Challenge[];
  performanceMetrics: PerformanceMetric[];
  testCount: string;
  testCoverage: string;
  screenshots: string[];
  heroImage: string;
  liveUrl: string;
  
  githubUrl?: string; // Fallback for single repo
  githubUrlFrontend?: string; // Frontend repo
  githubUrlBackend?: string; // Backend repo
  swaggerUrl?: string;
  architectureDiagram?: string;
  codeSnippets?: CodeSnippet[];
  isFeatured: boolean;
}

export interface CodeSnippet {
  filename: string;
  language: string;
  code: string;
  description: string;
}

// Blog
export type BlogCategory = "architecture" | "performance" | "devops" | "frontend" | "backend" | "career";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  readTime: string;
  thumbnail: string;
  isFeatured: boolean;
  author: Author;
}

// Author
export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

// Skills
export type SkillCategory = "frontend" | "backend" | "databases" | "devops" | "learning";

export interface Skill {
  name: string;
  icon: string;       // lucide or react-icons name
  level?: "expert" | "advanced" | "intermediate" | "learning";
}

export interface SkillGroup {
  category: SkillCategory;
  title: string;
  icon: string;
  skills: Skill[];
}

// Experience
export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  location: string;
  type: "full-time" | "contract" | "freelance" | "project";
  description: string[];
  technologies: string[];
  logo?: string;
}

// Education
export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  location: string;
  logo?: string;
}

export interface Certification {
  title: string;
  platform: string;
  completedAt: string;
  logo?: string;
  url?: string;
}

// Stats
export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

// Contact Form
export type ContactSubject =
  | "Full-Stack Product Build"
  | "AI / RAG / Agentic System"
  | "Backend & API Development"
  | "MVP / Startup Launch"
  | "Freelance / Upwork Project"
  | "General Inquiry";

export interface ContactFormData {
  name: string;
  email: string;
  subject: ContactSubject;
  message: string;
}

// Social Links
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

// Work Philosophy
export interface PhilosophyItem {
  icon: string;
  statement: string;
  highlight: string; // word to highlight in accent color
}

// UI Component Props
export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  href?: string;
}

export interface BadgeProps {
  variant?: "default" | "success" | "warning" | "error" | "info" | "accent";
  size?: "sm" | "md";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
