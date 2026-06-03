import React from "react";
import { cn } from "@/utils/cn";
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
    <div className={cn(styles.badge, className)}>
      <span
        className={cn(styles.dot, pulse && styles.pulse)}
        aria-hidden="true"
      />
      <span className={styles.label}>{label}</span>
    </div>
  );
};
