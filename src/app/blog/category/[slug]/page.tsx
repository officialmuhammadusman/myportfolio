import { notFound } from "next/navigation";
import { getImageForSlug } from "@/data/headerMega";
import { INSIGHTS_CATEGORIES } from "@/data/insightsData";

import { InsightsHeroSection } from "@/components/sections/insights/InsightsHeroSection";
import { InsightsFeaturedArticle } from "@/components/sections/insights/InsightsFeaturedArticle";
import { InsightsArticleGrid } from "@/components/sections/insights/InsightsArticleGrid";
import { InsightsNewsletterCTA } from "@/components/sections/insights/InsightsNewsletterCTA";

export default async function InsightsSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const category = INSIGHTS_CATEGORIES.find((item) => item.id === resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const imageSrc = getImageForSlug(resolvedParams.slug) || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900";

  return (
    <main className="flex min-h-screen flex-col bg-[#050505]">
      <InsightsHeroSection category={category} imageSrc={imageSrc} />
      <InsightsFeaturedArticle category={category} />
      <InsightsArticleGrid category={category} />
      <InsightsNewsletterCTA category={category} />
    </main>
  );
}
