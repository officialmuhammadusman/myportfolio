import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "default" | "success" | "warning" | "error" | "info" | "accent" | "outline";
  size?: "sm" | "md";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  default:  "bg-[var(--surface)] text-[var(--text-secondary)] border-[var(--border)]",
  success:  "bg-[var(--success-bg)] text-[var(--success)] border-[var(--success)]/20",
  warning:  "bg-[var(--warning-bg)] text-[var(--warning)] border-[var(--warning)]/20",
  error:    "bg-[var(--error-bg)] text-[var(--error)] border-[var(--error)]/20",
  info:     "bg-blue-500/10 text-blue-400 border-blue-500/20",
  accent:   "bg-accent-primary/10 text-accent-primary border-accent-primary/20",
  outline:  "bg-transparent text-[var(--text-secondary)] border-[var(--border)]",
};

const sizeStyles = {
  sm: "text-[11px] px-2 py-0.5 gap-1",
  md: "text-[12px] px-2.5 py-1 gap-1.5",
};

export function Badge({ variant = "default", size = "md", icon, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium border rounded-[6px] font-body leading-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
