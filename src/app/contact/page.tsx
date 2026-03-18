import { Metadata } from "next";
import { ContactClientPage } from "@/components/sections/ContactClientPage";
import { PERSONAL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact — ${PERSONAL_INFO.name}`,
  description: `Get in touch with ${PERSONAL_INFO.name}. Available for full-stack developer roles, freelance work, and collaboration.`,
};

export default function ContactPage() {
  return <ContactClientPage />;
}
