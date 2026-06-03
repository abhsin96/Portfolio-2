import React from "react";
import { cn } from "@/utils/cn";
import styles from "./LeadershipCard.module.css";

export interface LeadershipCardProps {
  title: string;
  description: string;
  tags?: string[];
  colorVariant?: "primary" | "secondary" | "tertiary";
  className?: string;
}

export const LeadershipCard: React.FC<LeadershipCardProps> = ({
  title,
  description,
  tags = [],
  colorVariant = "primary",
  className,
}) => {
  return (
    <div className={cn(styles.card, className)}>
      <h4 className={cn(styles.title, styles[`title_${colorVariant}`])}>
        {title}
      </h4>
      <p className={styles.description}>{description}</p>
      {tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(styles.tag, styles[`tag_${colorVariant}`])}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
