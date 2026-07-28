import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { HomeServicesSection } from "@/components/sections/HomeServicesSection";
import { HomeFeaturedWorkSection } from "@/components/sections/HomeFeaturedWorkSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import type { Metadata } from "next";
import { PERSONAL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} — Software Agency`,
  description: PERSONAL_INFO.bioShort,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <HomeServicesSection />
      <HomeFeaturedWorkSection />
      <StatsSection />
      <AboutTeaser />
      <TestimonialsSection />
    </>
  );
}
