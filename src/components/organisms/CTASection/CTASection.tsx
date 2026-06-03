import React from "react";
import { Button } from "@/components/atoms/Button";
import styles from "./CTASection.module.css";

export interface CTASectionProps {
  id?: string;
  headline?: string;
  description?: string;
  ctaLabel?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  id,
  headline = "Let's build the future of the web together.",
  description = "Currently open to senior-level roles, freelance architecture consultations, and speaking engagements.",
  ctaLabel = "Schedule a Consultation",
  className,
}) => {
  return (
    <section
      id={id}
      className={`${styles.section} ${className ?? ""}`}
      aria-label="Call to action"
    >
      <div className={styles.inner}>
        <div className={styles.panel}>
          <div className={styles.iconDecor} aria-hidden="true">
            <span className="material-symbols-outlined">terminal</span>
          </div>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.description}>{description}</p>
          <Button variant="primary" className={styles.cta}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
};
