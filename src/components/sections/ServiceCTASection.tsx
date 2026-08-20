"use client";

import { type ServiceItem } from "@/data/services";
import { ProjectCTABannerSection } from "@/components/sections/ProjectCTABannerSection";

export function ServiceCTASection({ service }: { service: ServiceItem }) {
  // We can just reuse the existing robust ProjectCTABannerSection, 
  // maybe passing custom props eventually if needed, but the default works perfectly.
  return (
    <div className="border-t border-white/[0.08]">
      <ProjectCTABannerSection />
    </div>
  );
}
