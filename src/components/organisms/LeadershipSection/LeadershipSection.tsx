import React from "react";
import { cn } from "@/utils/cn";
import { LeadershipCard } from "@/components/molecules/LeadershipCard";
import type { LeadershipCardProps } from "@/components/molecules/LeadershipCard";
import styles from "./LeadershipSection.module.css";

export interface LeadershipSectionProps {
  id?: string;
  sectionLabel?: string;
  headline?: string;
  description?: string;
  items: LeadershipCardProps[];
  className?: string;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  id,
  sectionLabel = "IMPACT",
  headline = "Leadership & Mentorship",
  description,
  items,
  className,
}) => {
  return (
    <section id={id} className={cn(styles.section, className)}>
      <div className="section-inner">
        <div className={styles.grid}>
          {/* Intro Column */}
          <div className={styles.introColumn}>
            <span className="section-label">{sectionLabel}</span>
            <h2 className={cn("section-headline", styles.headline)}>
              {headline}
            </h2>
            {description && (
              <p className={cn("section-description", styles.description)}>
                {description}
              </p>
            )}
          </div>

          {/* Timeline Column */}
          <div className={styles.timelineColumn}>
            <div className={styles.traceLine} aria-hidden="true" />
            {items.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  styles.timelineItem,
                  index === items.length - 1 && styles.last,
                )}
              >
                <div
                  className={cn(
                    styles.node,
                    styles[`node_${item.colorVariant ?? "primary"}`],
                  )}
                  aria-hidden="true"
                />
                <LeadershipCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
