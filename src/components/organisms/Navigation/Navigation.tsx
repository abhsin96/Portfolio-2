"use client";

import React, { useState, useEffect, useCallback } from "react";
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
  activeHref = "#home",
  ctaLabel,
  className,
}) => {
  const [currentActive, setCurrentActive] = useState(activeHref);

  const handleNavClick = useCallback((href: string) => {
    setCurrentActive(href);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.slice(1));
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
    <nav className={`${styles.nav} ${className ?? ""}`} id="main-navigation">
      <div className={styles.inner}>
        <span className={styles.brand}>{brandName}</span>
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
