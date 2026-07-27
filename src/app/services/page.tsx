import { Metadata } from "next";
import { ServicesClientPage } from "@/components/sections/services/ServicesClientPage";
import { PERSONAL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Services — ${PERSONAL_INFO.name}`,
  description:
    "Full-stack development, AI integrations, backend APIs, and MVP delivery for clients worldwide.",
};

export default function ServicesPage() {
  return <ServicesClientPage />;
}
