import React from "react";
import { TimelineNode } from "@/components/atoms/TimelineNode";
import styles from "./TimelineItem.module.css";

export interface TimelineItemProps {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  active?: boolean;
  children?: React.ReactNode;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  description,
  active = false,
  children,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.nodeColumn}>
        <TimelineNode active={active} />
      </div>
      <div className={styles.content}>
        {period && <span className={styles.period}>{period}</span>}
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </div>
    </div>
  );
};
