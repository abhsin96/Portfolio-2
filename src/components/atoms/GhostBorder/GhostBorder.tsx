import React from "react";
import styles from "./GhostBorder.module.css";

export interface GhostBorderProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  hoverGlow?: boolean;
}

export const GhostBorder: React.FC<GhostBorderProps> = ({
  children,
  as: Component = "div",
  className,
  hoverGlow = false,
}) => {
  return (
    <Component
      className={`${styles.ghostBorder} ${hoverGlow ? styles.glow : ""} ${className ?? ""}`}
    >
      {children}
    </Component>
  );
};
