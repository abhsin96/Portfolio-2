import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/utils/cn";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevPortfolio | Frontend Architect",
  description:
    "I specialize in building complex, high-performance web applications with a focus on scalable architecture and impeccable user experience.",
  other: {
    "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(geistSans.variable, geistMono.variable)}>
      <head>
        {/* Preconnect to Google Fonts to reduce discovery time */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Inline critical CSS for LCP optimization */}
        <style>{`
          :root {
            --color-on-surface: #dae2fd;
            --color-primary: #c0c1ff;
            --color-background: #0b1326;
            --font-sans: "Geist", system-ui, -apple-system, sans-serif;
            --text-headline-xl-mobile-size: 40px;
            --text-headline-xl-weight: 700;
            --text-headline-xl-lh: 1.1;
            --text-headline-xl-ls: -0.04em;
            --spacing-4: 32px;
            --spacing-3: 24px;
          }
          
          h1 {
            margin: 0;
            padding: 0;
          }
          
          .hero-headline {
            font-family: var(--font-sans);
            font-size: var(--text-headline-xl-mobile-size);
            font-weight: var(--text-headline-xl-weight);
            line-height: var(--text-headline-xl-lh);
            letter-spacing: var(--text-headline-xl-ls);
            color: var(--color-on-surface);
            margin-top: var(--spacing-4);
            margin-bottom: var(--spacing-3);
          }
          
          /* Prevent CLS from Material Symbols font loading */
          .material-symbols-outlined {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 24px;
            min-height: 24px;
            font-size: 24px;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
