"use client";
import { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
}

const variantStyles = {
  primary: [
    "bg-accent-primary text-white border border-accent-primary",
    "hover:bg-accent-primary-hover hover:shadow-[var(--shadow-glow)]",
    "active:scale-[0.98]",
  ].join(" "),
  secondary: [
    "bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border)]",
    "hover:bg-[var(--surface-hover)] hover:border-[var(--border-hover)]",
  ].join(" "),
  outline: [
    "bg-transparent text-accent-primary border border-accent-primary",
    "hover:bg-accent-primary hover:text-white",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--text-secondary)] border border-transparent",
    "hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]",
  ].join(" "),
  danger: [
    "bg-transparent text-[var(--error)] border border-[var(--error)]/30",
    "hover:bg-[var(--error-bg)] hover:border-[var(--error)]",
  ].join(" "),
};

const sizeStyles = {
  sm:  "h-8 px-3 text-[12px] gap-1.5 rounded-md",
  md:  "h-10 px-4 text-[13px] gap-2 rounded-[8px]",
  lg:  "h-11 px-5 text-[14px] gap-2 rounded-[8px]",
  xl:  "h-13 px-7 text-[15px] gap-2.5 rounded-[10px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  href,
  external,
  className,
  children,
  disabled,
  ...props
}, ref) => {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold font-body",
    "transition-all duration-200 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent-primary) focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {isLoading ? (
        <Loader2 size={14} className="animate-spin shrink-0" />
      ) : leftIcon ? (
        <span className="shrink-0">{leftIcon}</span>
      ) : null}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
});

Button.displayName = "Button";
