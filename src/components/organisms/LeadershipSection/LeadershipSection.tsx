import React from "react";
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
    <section id={id} className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Intro Column */}
          <div className={styles.introColumn}>
            <span className={styles.label}>{sectionLabel}</span>
            <h2 className={styles.headline}>{headline}</h2>
            {description && (
              <p className={styles.description}>{description}</p>
            )}
          </div>

          {/* Timeline Column */}
          <div className={styles.timelineColumn}>
            <div className={styles.traceLine} aria-hidden="true" />
            {items.map((item, index) => (
              <div
                key={item.title}
                className={`${styles.timelineItem} ${index === items.length - 1 ? styles.last : ""}`}
              >
                <div
                  className={`${styles.node} ${styles[`node_${item.colorVariant ?? "primary"}`]}`}
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
