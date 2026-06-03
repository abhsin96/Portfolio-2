import React from "react";
import { BentoProjectCard } from "@/components/molecules/BentoProjectCard";
import type { BentoProjectCardProps } from "@/components/molecules/BentoProjectCard";
import styles from "./ProjectsSection.module.css";

export interface ProjectsSectionProps {
  sectionLabel?: string;
  headline?: string;
  browseLabel?: string;
  browseHref?: string;
  projects: BentoProjectCardProps[];
  className?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  sectionLabel = "SELECTED WORKS",
  headline = "Architectural Excellence",
  browseLabel = "Browse Full Gallery",
  browseHref = "#",
  projects,
  className,
}) => {
  return (
    <section
      className={`${styles.section} ${className ?? ""}`}
      aria-label="Featured Projects"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <span className={styles.label}>{sectionLabel}</span>
            <h2 className={styles.headline}>{headline}</h2>
          </div>
          <a href={browseHref} className={styles.browseLink}>
            {browseLabel}{" "}
            <span
              className={`material-symbols-outlined ${styles.browseArrow}`}
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </a>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <BentoProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
