import React from "react";
import { cn } from "@/utils/cn";
import { WindowDots } from "@/components/atoms/WindowDots";
import styles from "./CodeCard.module.css";

export interface CodeCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const CodeCard: React.FC<CodeCardProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.header}>
        <WindowDots />
        {title && <span className={styles.title}>{title}</span>}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
