import { HeroSection } from "@/components/sections/HeroSection";
import { TechStrip } from "@/components/sections/TechStrip";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import type { Metadata } from "next";
import { PERSONAL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} — Full Stack Developer`,
  description: PERSONAL_INFO.bioShort,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStrip />
      <FeaturedProjects />
      <StatsSection />
      <AboutTeaser />
      <TestimonialsSection />
    </>
  );
}
