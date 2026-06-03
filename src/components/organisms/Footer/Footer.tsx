import React from "react";
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
  brandName = "DEV.ARCHIVE",
  copyright = "© 2024 Senior Frontend Developer. Built with precision.",
  links = [],
  className,
}) => {
  return (
    <footer className={`${styles.footer} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.brand}>{brandName}</div>
        <p className={styles.copyright}>{copyright}</p>
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
      </div>
    </footer>
  );
};
