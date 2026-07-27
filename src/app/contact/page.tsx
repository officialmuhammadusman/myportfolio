import { Suspense } from "react";
import { Metadata } from "next";
import { ContactClientPage } from "@/components/sections/ContactClientPage";
import { PERSONAL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact — ${PERSONAL_INFO.name}`,
  description: `Start a SaaS, AI/RAG, mobile, or backend project with ${PERSONAL_INFO.name}. Email, WhatsApp & project brief form — USA, UK, KSA, UAE & remote.`,
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactClientPage />
    </Suspense>
  );
}
