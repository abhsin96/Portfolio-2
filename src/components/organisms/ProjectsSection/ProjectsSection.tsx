import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { BentoProjectCard } from "@/components/molecules/BentoProjectCard";
import type { BentoProjectCardProps } from "@/components/molecules/BentoProjectCard";
import styles from "./ProjectsSection.module.css";

export interface ProjectsSectionProps {
  id?: string;
  sectionLabel?: string;
  headline?: string;
  browseLabel?: string;
  browseHref?: string;
  projects: BentoProjectCardProps[];
  className?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  id,
  sectionLabel = "SELECTED WORKS",
  headline = "Architectural Excellence",
  browseLabel = "Browse Full Gallery",
  browseHref = "/projects",
  projects,
  className,
}) => {
  return (
    <section
      id={id}
      className={cn(styles.section, className)}
      aria-label="Featured Projects"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <span className={styles.label}>{sectionLabel}</span>
            <h2 className={styles.headline}>{headline}</h2>
          </div>
          <Link href={browseHref} className={styles.browseLink}>
            {browseLabel}{" "}
            <span
              className={cn("material-symbols-outlined", styles.browseArrow)}
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </Link>
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
