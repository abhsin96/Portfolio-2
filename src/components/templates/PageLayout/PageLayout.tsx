"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navigation } from "@/components/organisms/Navigation";
import { Footer } from "@/components/organisms/Footer";
import {
  getNavLinks,
  FOOTER_LINKS,
  BRAND_NAME,
  CTA_LABEL,
  FOOTER_COPYRIGHT,
} from "@/constants";

export interface PageLayoutProps {
  /** The page content to render between Navigation and Footer */
  children: React.ReactNode;
  /** Override the auto-detected active navigation link */
  activeHref?: string;
  /** Override the default footer brand name */
  footerBrandName?: string;
}

/**
 * Shared layout template that wraps page content with Navigation and Footer.
 *
 * Uses `usePathname()` to auto-detect the active navigation link and
 * resolve the correct set of nav links for the current route.
 * This eliminates the repeated Navigation + Footer pattern across pages.
 */
export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  activeHref,
  footerBrandName,
}) => {
  const pathname = usePathname();
  const resolvedActiveHref = activeHref ?? pathname;
  const navLinks = getNavLinks(pathname);

  return (
    <>
      <Navigation
        links={navLinks}
        activeHref={resolvedActiveHref}
        brandName={BRAND_NAME}
        ctaLabel={CTA_LABEL}
      />

      {children}

      <Footer
        brandName={footerBrandName ?? BRAND_NAME}
        copyright={FOOTER_COPYRIGHT}
        links={FOOTER_LINKS}
      />
    </>
  );
};
