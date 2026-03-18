import { cn } from "@/lib/utils";
import type { TechTag as TechTagType } from "@/types";

interface TechTagProps {
  tag: TechTagType;
  size?: "sm" | "md";
  className?: string;
}

export function TechTag({ tag, size = "md", className }: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-[6px] font-body border",
        size === "sm" ? "text-[11px] px-2 py-0.5" : "text-[12px] px-2.5 py-1",
        className
      )}
      style={{
        backgroundColor: `${tag.bgColor}20`,
        color: tag.bgColor === "#000000" ? "var(--text-primary)" : tag.bgColor,
        borderColor: `${tag.bgColor}30`,
      }}
    >
      {tag.name}
    </span>
  );
}

interface TechTagListProps {
  tags: TechTagType[];
  max?: number;
  size?: "sm" | "md";
  className?: string;
}

export function TechTagList({ tags, max, size = "md", className }: TechTagListProps) {
  const visibleTags = max ? tags.slice(0, max) : tags;
  const remaining = max ? tags.length - max : 0;

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {visibleTags.map((tag) => (
        <TechTag key={tag.name} tag={tag} size={size} />
      ))}
      {remaining > 0 && (
        <span className="inline-flex items-center text-[11px] px-2 py-0.5 rounded-[6px] bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)]">
          +{remaining}
        </span>
      )}
    </div>
  );
}
