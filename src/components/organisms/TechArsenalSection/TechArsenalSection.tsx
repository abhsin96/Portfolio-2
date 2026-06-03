import React from "react";
import { TechStackCard } from "@/components/molecules/TechStackCard";
import type { TechStackCardProps } from "@/components/molecules/TechStackCard";
import { StackDetail } from "@/components/molecules/StackDetail";
import type { StackDetailProps } from "@/components/molecules/StackDetail";
import styles from "./TechArsenalSection.module.css";

export interface TechArsenalSectionProps {
  id?: string;
  sectionLabel?: string;
  headline?: string;
  techStack: TechStackCardProps[];
  stackDetails: StackDetailProps[];
  className?: string;
}

export const TechArsenalSection: React.FC<TechArsenalSectionProps> = ({
  id,
  sectionLabel = "TECH STACK",
  headline = "Technical Arsenal",
  techStack,
  stackDetails,
  className,
}) => {
  return (
    <section id={id} className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>{sectionLabel}</span>
          <h2 className={styles.headline}>{headline}</h2>
        </div>

        {/* Tech Stack Grid */}
        <div className={styles.techGrid}>
          {techStack.map((tech) => (
            <TechStackCard key={tech.label} {...tech} />
          ))}
        </div>

        {/* Detailed Stack Breakdown */}
        <div className={styles.detailGrid}>
          {stackDetails.map((detail) => (
            <StackDetail key={detail.title} {...detail} />
          ))}
        </div>
      </div>
    </section>
  );
};
