"use client";

import React from "react";
import Link from "next/link";
import styles from "./NavLink.module.css";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  active = false,
  className,
}) => {
  return (
    <Link
      href={href}
      className={`${styles.link} ${active ? styles.active : ""} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
};
