import React from "react";
import { cn } from "@/utils/cn";
import { MaterialIcon } from "@/components/atoms/MaterialIcon";
import styles from "./AboutHeroSection.module.css";

export interface AboutHeroSectionProps {
  id?: string;
  sectionLabel?: string;
  headline: React.ReactNode;
  headlineMobile?: React.ReactNode;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({
  id,
  sectionLabel = "EXECUTIVE SUMMARY",
  headline,
  headlineMobile,
  paragraphs,
  imageSrc,
  imageAlt,
  className,
}) => {
  return (
    <section id={id} className={cn(styles.section, className)}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Text Column */}
          <div className={styles.textColumn}>
            <span className={styles.label}>{sectionLabel}</span>
            <h1 className={styles.headlineDesktop}>{headline}</h1>
            {headlineMobile && (
              <h1 className={styles.headlineMobile}>{headlineMobile}</h1>
            )}
            <div className={styles.paragraphs}>
              {paragraphs.map((text, index) => (
                <p key={index} className={styles.paragraph}>
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className={styles.imageColumn}>
            <div className={styles.imageCard}>
              <img
                src={imageSrc}
                alt={imageAlt}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.imageOverlay}>
                <MaterialIcon name="terminal" size={24} fill />
              </div>
            </div>
            {/* Background glow */}
            <div className={styles.glow} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};
