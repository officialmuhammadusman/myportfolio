import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { ReduxProvider } from "@/components/providers/ReduxProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { Toaster } from "react-hot-toast";
import { PERSONAL_INFO } from "@/lib/constants";
import { MainShell } from "@/components/layout/MainShell";
import { PageTransitionProvider } from "@/components/providers/PageTransitionProvider";

export const metadata: Metadata = {
  title: {
    default: `${PERSONAL_INFO.name} — Full Stack Developer`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description: PERSONAL_INFO.bioShort,
  keywords: ["Full Stack Developer", "Next.js", "TypeScript", "PostgreSQL", "Redis"],
  authors: [{ name: PERSONAL_INFO.name }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    title: `${PERSONAL_INFO.name} — Full Stack Developer`,
    description: PERSONAL_INFO.bioShort,
  },
  twitter: {
    card: "summary_large_image",
    title: `Portfolio | ${PERSONAL_INFO.name}`,
    description: PERSONAL_INFO.tagline,
    creator: "@muhammadusman",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-base text-primary-color font-body antialiased overflow-x-hidden">
        <ReduxProvider>
          <ThemeProvider>
            <PageTransitionProvider>
              <Navbar />
              {/*
                Standard agency pattern: fixed header + explicit main offset.
                Hardcoded heights (not CSS vars) so content never starts under the nav.
                68px = main bar (mobile) · 104px = utility 36px + main bar 68px (md+)
              */}
              <MainShell>{children}</MainShell>
              <Footer />
              <BackToTop />
              <Toaster
                position="bottom-right"
                toastOptions={{
                  style: {
                    background: "var(--surface)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border)",
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                  },
                }}
              />
            </PageTransitionProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
