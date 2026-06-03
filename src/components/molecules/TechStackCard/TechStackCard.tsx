import React from "react";
import { cn } from "@/utils/cn";
import { MaterialIcon } from "@/components/atoms/MaterialIcon";
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
    <div className={cn(styles.card, styles[colorVariant], className)}>
      <div className={styles.iconWrapper}>
        <MaterialIcon name={icon} size={36} fill />
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};
