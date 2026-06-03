import React from "react";
import styles from "./TechChip.module.css";

export interface TechChipProps {
  label: string;
  className?: string;
}

export const TechChip: React.FC<TechChipProps> = ({ label, className }) => {
  return (
    <span className={`${styles.chip} ${className ?? ""}`}>
      {label}
    </span>
  );
};
