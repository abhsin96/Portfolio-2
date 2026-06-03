import React from "react";
import { cn } from "@/utils/cn";
import { TimelineItem } from "@/components/molecules/TimelineItem";
import type { TimelineItemProps } from "@/components/molecules/TimelineItem";
import styles from "./TimelineList.module.css";

export interface TimelineListProps {
  items: TimelineItemProps[];
  className?: string;
}

export const TimelineList: React.FC<TimelineListProps> = ({
  items,
  className,
}) => {
  return (
    <div className={cn(styles.timeline, className)}>
      <div className={styles.line} aria-hidden="true" />
      <div className={styles.items}>
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
