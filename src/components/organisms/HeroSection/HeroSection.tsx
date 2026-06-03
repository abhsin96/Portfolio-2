import React from "react";
import { cn } from "@/utils/cn";
import { StatusBadge } from "@/components/atoms/StatusBadge";
import { Button } from "@/components/atoms/Button";
import { MaterialIcon } from "@/components/atoms/MaterialIcon";
import styles from "./HeroSection.module.css";

export interface TechItem {
  icon: string;
  label: string;
}

export interface HeroSectionProps {
  id?: string;
  badge?: string;
  headline: React.ReactNode;
  description: string;
  techStack: TechItem[];
  primaryCta: string;
  secondaryCta: string;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  id,
  badge = "AVAILABLE FOR NEW PROJECTS",
  headline,
  description,
  techStack,
  primaryCta,
  secondaryCta,
  className,
}) => {
  return (
    <section
      id={id}
      className={cn(styles.hero, className)}
      aria-label="Hero section"
    >
      <div className={styles.gradient} aria-hidden="true" />

      <div className={styles.content}>
        <StatusBadge label={badge} />

        <h1 className={styles.headline}>{headline}</h1>

        <p className={styles.description}>{description}</p>

        {/* Tech Stack Cloud */}
        <div className={styles.techCloud}>
          {techStack.map((tech) => (
            <div key={tech.label} className={styles.techChip}>
              <MaterialIcon name={tech.icon} className={styles.techIcon} />
              <span className={styles.techLabel}>{tech.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className={styles.ctaGroup}>
          <Button variant="primary" className={styles.ctaPrimary}>
            {primaryCta}
          </Button>
          <Button variant="ghost" className={styles.ctaGhost}>
            {secondaryCta}
          </Button>
        </div>
      </div>

      {/* Abstract Graphic */}
      <div className={styles.orbitalGraphic} aria-hidden="true">
        <div className={styles.orbitOuter}>
          <div className={styles.orbitMiddle}>
            <div className={styles.orbitInner} />
          </div>
        </div>
      </div>
    </section>
  );
};
