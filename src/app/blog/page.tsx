import { Metadata } from "next";
import { BlogClientPage } from "@/components/sections/blog/BlogClientPage";
import { PERSONAL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Blog — ${PERSONAL_INFO.name}`,
  description: "Technical articles on system architecture, performance optimization, and full-stack development.",
};

export default function BlogPage() {
  return <BlogClientPage />;
}
