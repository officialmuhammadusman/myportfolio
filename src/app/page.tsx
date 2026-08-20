import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { HomeServicesSection } from "@/components/sections/HomeServicesSection";
import { HomeFeaturedWorkSection } from "@/components/sections/HomeFeaturedWorkSection";
import { HomeHowIWorkSection } from "@/components/sections/HomeHowIWorkSection";
import { HomeTechStackStrip } from "@/components/sections/HomeTechStackStrip";
import { StatsSection } from "@/components/sections/StatsSection";
import { AgencyIndustriesSection } from "@/components/sections/AgencyIndustriesSection";
import { AgencyImpactSection } from "@/components/sections/AgencyImpactSection";
import { ClientLogosSection } from "@/components/sections/ClientLogosSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProjectCTABannerSection } from "@/components/sections/ProjectCTABannerSection";
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
      <HomeHowIWorkSection />
      <HomeTechStackStrip />
      <StatsSection />
      <AgencyIndustriesSection />
      <AgencyImpactSection />
      <ClientLogosSection />
      <WhyChooseUsSection />
      <ProjectCTABannerSection />
    </>
  );
}
