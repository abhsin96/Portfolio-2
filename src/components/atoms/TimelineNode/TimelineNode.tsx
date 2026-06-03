import React from "react";
import { cn } from "@/utils/cn";
import styles from "./TimelineNode.module.css";

export interface TimelineNodeProps {
  active?: boolean;
  className?: string;
}

export const TimelineNode: React.FC<TimelineNodeProps> = ({
  active = false,
  className,
}) => {
  return (
    <div
      className={cn(styles.node, active && styles.active, className)}
      aria-hidden="true"
    />
  );
};
