import { cn } from "@/lib/utils";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
  /** Tighter vertical padding for dense pages */
  compact?: boolean;
}

/**
 * Full-width page wrapper — consistent gutter on all desktop breakpoints.
 */
export function PageShell({ children, className, compact = false }: PageShellProps) {
  return (
    <div
      className={cn(
        "layout-wrap w-full",
        compact
          ? "py-6 sm:py-8 md:py-10 lg:py-10"
          : "py-8 sm:py-10 md:py-12 lg:py-14",
        className
      )}
    >
      {children}
    </div>
  );
}

interface SectionShellProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
}

/** Full-width section band with inner layout-wrap content. */
export function SectionShell({ children, className, innerClassName, id }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 sm:py-16 md:py-20 lg:py-24",
        className
      )}
    >
      <div className={cn("layout-wrap w-full", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
