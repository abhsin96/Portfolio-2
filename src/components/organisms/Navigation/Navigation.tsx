"use client";

import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { NavLink } from "@/components/molecules/NavLink";
import { Button } from "@/components/atoms/Button";
import styles from "./Navigation.module.css";

export interface NavigationLink {
  href: string;
  label: string;
}

export interface NavigationProps {
  links: NavigationLink[];
  brandName?: string;
  activeHref?: string;
  ctaLabel?: string;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  links,
  brandName = "DevPortfolio",
  activeHref,
  ctaLabel,
  className,
}) => {
  const pathname = usePathname();
  const [currentActive, setCurrentActive] = useState(
    activeHref ?? (pathname === "/" ? "#home" : pathname),
  );

  const handleNavClick = useCallback((href: string) => {
    setCurrentActive(href);
  }, []);

  /* Sync active state with current route for route-based links */
  useEffect(() => {
    const routeLink = links.find(
      (link) => link.href === pathname && !link.href.startsWith("#"),
    );
    if (routeLink) {
      setCurrentActive(routeLink.href);
    }
  }, [pathname, links]);

  /* Intersection observer for anchor-based links on the same page */
  useEffect(() => {
    const anchorLinks = links.filter((link) => link.href.startsWith("#"));
    if (anchorLinks.length === 0) return;

    const sectionIds = anchorLinks.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setCurrentActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, [links]);

  return (
    <nav className={cn(styles.nav, className)} id="main-navigation">
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          {brandName}
        </Link>
        <div className={styles.links}>
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              active={currentActive === link.href}
              onClick={handleNavClick}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        {ctaLabel && (
          <Button variant="primary" className={styles.cta}>
            {ctaLabel}
          </Button>
        )}
      </div>
    </nav>
  );
};
