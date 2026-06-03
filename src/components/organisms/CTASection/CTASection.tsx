import React from "react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/atoms/Button";
import { MaterialIcon } from "@/components/atoms/MaterialIcon";
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
      className={cn("section-padding", styles.section, className)}
      aria-label="Call to action"
    >
      <div className="section-inner">
        <div className={styles.panel}>
          <div className={styles.iconDecor} aria-hidden="true">
            <MaterialIcon name="terminal" />
          </div>
          <h2 className={cn("section-headline", styles.headline)}>
            {headline}
          </h2>
          <p className={cn("section-description", styles.description)}>
            {description}
          </p>
          <Button variant="primary" className={styles.cta}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
};
