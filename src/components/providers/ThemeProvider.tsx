"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setResolvedTheme } from "@/store/slices/themeSlice";
import { useTheme } from "next-themes";

function ThemeSyncer() {
  const { resolvedTheme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    if (resolvedTheme === "light" || resolvedTheme === "dark") {
      dispatch(setResolvedTheme(resolvedTheme));
    }
  }, [resolvedTheme, dispatch]);

  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      <ThemeSyncer />
      {children}
    </NextThemesProvider>
  );
}
