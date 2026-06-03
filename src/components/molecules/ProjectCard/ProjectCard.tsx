import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { WindowDots } from "@/components/atoms/WindowDots";
import { TechChip } from "@/components/atoms/TechChip";
import styles from "./ProjectCard.module.css";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  techStack: string[];
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  techStack,
  className,
}) => {
  return (
    <article className={cn(styles.card, className)}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
        />
        <div className={styles.dotsOverlay}>
          <WindowDots />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.arrow} aria-hidden="true">
            ↗
          </span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.chips}>
          {techStack.map((tech) => (
            <TechChip key={tech} label={tech} />
          ))}
        </div>
      </div>
    </article>
  );
};
