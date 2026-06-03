import React from "react";
import styles from "./StatusBadge.module.css";

export interface StatusBadgeProps {
  label: string;
  pulse?: boolean;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  label,
  pulse = true,
  className,
}) => {
  return (
    <div className={`${styles.badge} ${className ?? ""}`}>
      <span
        className={`${styles.dot} ${pulse ? styles.pulse : ""}`}
        aria-hidden="true"
      />
      <span className={styles.label}>{label}</span>
    </div>
  );
};
