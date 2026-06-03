import React from "react";
import styles from "./StackDetail.module.css";

export interface StackDetailProps {
  title: string;
  description: string;
  colorVariant?: "primary" | "secondary" | "tertiary";
  className?: string;
}

export const StackDetail: React.FC<StackDetailProps> = ({
  title,
  description,
  colorVariant = "primary",
  className,
}) => {
  return (
    <div className={`${styles.detail} ${className ?? ""}`}>
      <div className={styles.header}>
        <span className={`${styles.dot} ${styles[colorVariant]}`} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
