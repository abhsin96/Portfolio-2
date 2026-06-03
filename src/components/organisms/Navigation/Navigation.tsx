"use client";

import React from "react";
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
  return (
    <nav className={`${styles.nav} ${className ?? ""}`} id="main-navigation">
      <div className={styles.inner}>
        <span className={styles.brand}>{brandName}</span>
        <div className={styles.links}>
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              active={activeHref === link.href}
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
