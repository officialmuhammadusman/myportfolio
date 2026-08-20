import { notFound } from "next/navigation";
import { getImageForSlug } from "@/data/headerMega";
import { ABOUT_DATA } from "@/data/aboutData";

import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { AboutPhilosophySection } from "@/components/sections/about/AboutPhilosophySection";
import { AboutExperienceTimeline } from "@/components/sections/about/AboutExperienceTimeline";
import { AboutExpertiseGrid } from "@/components/sections/about/AboutExpertiseGrid";
import { AboutValuesSection } from "@/components/sections/about/AboutValuesSection";
import { AboutCTASection } from "@/components/sections/about/AboutCTASection";

export default async function AboutSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const aboutItem = ABOUT_DATA.find((item) => item.id === resolvedParams.slug);

  if (!aboutItem) {
    notFound();
  }

  const imageSrc = getImageForSlug(resolvedParams.slug) || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900";

  return (
    <main className="flex min-h-screen flex-col bg-[#050505]">
      <AboutHeroSection about={aboutItem} imageSrc={imageSrc} />
      <AboutPhilosophySection about={aboutItem} />
      <AboutExperienceTimeline about={aboutItem} />
      <AboutExpertiseGrid about={aboutItem} />
      <AboutValuesSection about={aboutItem} />
      <AboutCTASection about={aboutItem} />
    </main>
  );
}
