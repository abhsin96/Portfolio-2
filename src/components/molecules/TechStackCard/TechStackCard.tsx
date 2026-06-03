import React from "react";
import styles from "./TechStackCard.module.css";

export interface TechStackCardProps {
  icon: string;
  label: string;
  colorVariant?: "primary" | "secondary" | "tertiary";
  className?: string;
}

export const TechStackCard: React.FC<TechStackCardProps> = ({
  icon,
  label,
  colorVariant = "primary",
  className,
}) => {
  return (
    <div
      className={`${styles.card} ${styles[colorVariant]} ${className ?? ""}`}
    >
      <div className={styles.iconWrapper}>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "36px", fontVariationSettings: "'FILL' 1" }}
        >
          {icon}
        </span>
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};
