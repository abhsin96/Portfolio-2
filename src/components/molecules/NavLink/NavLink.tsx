"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
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
  const isAnchorOnly = href.startsWith("#");
  const isRouteWithAnchor = href.startsWith("/") && href.includes("#");

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isAnchorOnly) {
        e.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
        onClick?.(href);
      } else {
        onClick?.(href);
      }
    },
    [href, isAnchorOnly, onClick],
  );

  const linkClassName = cn(styles.link, active && styles.active, className);

  /* Route-based links (/ or /projects) use Next.js Link for client-side nav */
  if (!isAnchorOnly) {
    return (
      <Link href={href} onClick={handleClick} className={linkClassName}>
        {children}
      </Link>
    );
  }

  /* Anchor-only links (#home, #projects) use plain <a> for scroll */
  return (
    <a href={href} onClick={handleClick} className={linkClassName}>
      {children}
    </a>
  );
};
