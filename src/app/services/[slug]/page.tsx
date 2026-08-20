import { notFound } from "next/navigation";
import { SERVICES } from "@/data/services";

import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceCapabilitiesSection } from "@/components/sections/ServiceCapabilitiesSection";
import { ServiceMethodologySection } from "@/components/sections/ServiceMethodologySection";
import { ServiceTechStackSection } from "@/components/sections/ServiceTechStackSection";
import { ServiceCaseStudiesSection } from "@/components/sections/ServiceCaseStudiesSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";



export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = SERVICES.find((s) => s.id === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#050505]">
      <ServiceHeroSection service={service} />
      <ServiceCapabilitiesSection service={service} />
      <ServiceMethodologySection />
      <ServiceTechStackSection service={service} />
      <ServiceCaseStudiesSection service={service} />
      <ServiceCTASection service={service} />
    </main>
  );
}
