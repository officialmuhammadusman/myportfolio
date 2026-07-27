"use client";

import { cn } from "@/lib/utils";
import { brandIconSrc, type BrandIconTone } from "@/lib/brandAssets";

interface BrandIconProps {
  /** Path without extension, e.g. brandIcons.services.ai */
  base: string;
  tone?: BrandIconTone;
  size?: number;
  alt?: string;
  className?: string;
}

/** Uses native img for SVG brand assets (Next/Image blocks SVGs by default). */
export function BrandIcon({
  base,
  tone = "base",
  size = 20,
  alt = "",
  className,
}: BrandIconProps) {
  const src = brandIconSrc(base, tone);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      draggable={false}
      className={cn("object-contain select-none", className)}
      style={{ width: size, height: size }}
    />
  );
}
