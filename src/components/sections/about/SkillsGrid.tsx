"use client";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

type LucideIconName = keyof typeof LucideIcons;

function Icon({ name, size = 18 }: { name: string; size?: number }) {
  const LucideIcon = (LucideIcons[name as LucideIconName] ?? LucideIcons.Code2) as React.ElementType;
  return <LucideIcon size={size} />;
}

const levelColors: Record<string, string> = {
  expert: "var(--accent-primary)",
  advanced: "var(--accent-secondary)",
  intermediate: "var(--success)",
  learning: "var(--text-muted)",
};

export function SkillsGrid() {
  return (
    <section className="section-padding border-b" style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
      <div className="max-w-[1280px] mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-eyebrow">Skills</span>
          <div className="fancy-divider" />
          <h2
            className="font-display font-bold mt-2"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--text-primary)" }}
          >
            Technical expertise
          </h2>
        </motion.div>

        {/* Responsive grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className={cn(
                "p-6 rounded-[12px] border flex flex-col gap-4",
                group.category === "learning" && "border-dashed"
              )}
              style={{
                background: "var(--surface)",
                borderColor: group.category === "learning" ? "var(--border-hover)" : "var(--border)",
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
                <div style={{ color: "var(--accent-primary)" }}>
                  <Icon name={group.icon} size={16} />
                </div>
                <h3 className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--text-secondary)" }}>
                  {group.title}
                </h3>
              </div>

              {/* Skills list */}
              <ul className="flex flex-col gap-3">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2.5">
                    <div style={{ color: levelColors[skill.level ?? "intermediate"] }}>
                      <Icon name={skill.icon} size={14} />
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}