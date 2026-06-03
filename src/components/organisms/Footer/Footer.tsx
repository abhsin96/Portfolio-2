import React from "react";
import { cn } from "@/utils/cn";
import styles from "./Footer.module.css";

export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterProps {
  brandName?: string;
  copyright?: string;
  links?: FooterLink[];
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  brandName = "DEV_ARCHITECT",
  copyright = "© 2024 Senior Frontend Developer. Built with precision.",
  links = [],
  className,
}) => {
  return (
    <footer className={cn(styles.footer, className)}>
      <div className={cn("section-inner", styles.inner)}>
        <div className={styles.brand}>{brandName}</div>
        <div className={styles.links}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className={styles.copyright}>{copyright}</p>
      </div>
    </footer>
  );
};
