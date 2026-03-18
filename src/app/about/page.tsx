import { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { SkillsGrid } from "@/components/sections/about/SkillsGrid";
import { ExperienceTimeline } from "@/components/sections/about/ExperienceTimeline";
import { EducationSection } from "@/components/sections/about/EducationSection";
import { PhilosophySection } from "@/components/sections/about/PhilosophySection";
import { PERSONAL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About — ${PERSONAL_INFO.name}`,
  description: `Learn about ${PERSONAL_INFO.name} — ${PERSONAL_INFO.role} specializing in Next.js, PostgreSQL, and Redis.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SkillsGrid />
      <ExperienceTimeline />
      <EducationSection />
      <PhilosophySection />
    </>
  );
}
