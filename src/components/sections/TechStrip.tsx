"use client";
import { Cloud } from "lucide-react";
import {
  SiNextdotjs, SiTypescript, SiPostgresql, SiMongodb, SiRedis,
  SiNodedotjs, SiDocker, SiJest, SiPrisma,
  SiStripe, SiTailwindcss, SiGithubactions, SiVercel,
} from "react-icons/si";

const techStack = [
  { name: "Next.js 15", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Redis", Icon: SiRedis },
  { name: "Node.js", Icon: SiNodedotjs },
 
  { name: "Jest", Icon: SiJest },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Stripe", Icon: SiStripe },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "GitHub Actions", Icon: SiGithubactions },
  { name: "Vercel", Icon: SiVercel },
];

const duplicated = [...techStack, ...techStack];

export function TechStrip() {
  return (
    <div
      className="relative w-full overflow-hidden border-y py-7 sm:py-8 md:py-10 lg:py-12"
      style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
    >
      {/* Fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--bg-secondary), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, var(--bg-secondary), transparent)" }}
      />

      <div className="flex animate-marquee whitespace-nowrap gap-0">
        {duplicated.map((tech, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-3 px-8 border-r"
            style={{ borderColor: "var(--border)" }}
          >
            <tech.Icon
              size={20}
              style={{ color: "var(--text-muted)", flexShrink: 0 }}
            />
            <span
              className="whitespace-nowrap text-xs font-medium sm:text-sm"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
