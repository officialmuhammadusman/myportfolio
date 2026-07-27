"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/** Home hero sits under the fixed header; other pages keep standard offset. */
export function MainShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main
      className={cn(
        "min-h-[100dvh]",
        !isHome && "pt-[68px] md:pt-[104px]"
      )}
    >
      {children}
    </main>
  );
}
