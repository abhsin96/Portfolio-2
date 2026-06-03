"use client";

import React, { useCallback } from "react";
import styles from "./NavLink.module.css";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  onClick?: (href: string) => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  active = false,
  className,
  onClick,
}) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
        onClick?.(href);
      }
    },
    [href, onClick],
  );

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${styles.link} ${active ? styles.active : ""} ${className ?? ""}`}
    >
      {children}
    </a>
  );
};
