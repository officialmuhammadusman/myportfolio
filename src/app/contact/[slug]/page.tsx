import { notFound } from "next/navigation";
import { getImageForSlug } from "@/data/headerMega";
import { CONTACT_CATEGORIES } from "@/data/contactData";

import { ContactHeroSection } from "@/components/sections/contact/ContactHeroSection";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { ContactFAQSection } from "@/components/sections/contact/ContactFAQSection";
import { ContactSocialsSection } from "@/components/sections/contact/ContactSocialsSection";

export default async function ContactSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Try to find the exact category, or fallback to the general one if it's not found 
  // (since some contact slugs like 'email' or 'whatsapp' might be intercepted by dynamic routes locally)
  const category = CONTACT_CATEGORIES.find((item) => item.id === resolvedParams.slug) || CONTACT_CATEGORIES.find(c => c.id === "general");

  if (!category) {
    notFound();
  }

  const imageSrc = getImageForSlug(resolvedParams.slug) || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900";

  return (
    <main className="flex min-h-screen flex-col bg-[#050505]">
      <ContactHeroSection category={category} imageSrc={imageSrc} />
      <ContactFormSection category={category} />
      <ContactFAQSection category={category} />
      <ContactSocialsSection />
    </main>
  );
}
