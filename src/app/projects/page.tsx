import { Metadata } from "next";
import { ProjectsClientPage } from "@/components/sections/projects/ProjectsClientPage";
import { PERSONAL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Projects — ${PERSONAL_INFO.name}`,
  description: "Production-grade full-stack projects demonstrating architectural thinking, scalability, and technical depth.",
};

export default function ProjectsPage() {
  return <ProjectsClientPage />;
}
