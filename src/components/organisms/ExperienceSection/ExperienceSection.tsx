import React from "react";
import { cn } from "@/utils/cn";
import styles from "./ExperienceSection.module.css";

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  bullets?: string[];
  active?: boolean;
}

export interface ExperienceSectionProps {
  id?: string;
  sectionLabel?: string;
  headline?: string;
  entries: ExperienceEntry[];
  className?: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  id,
  sectionLabel = "EXPERIENCE",
  headline = "Career Path",
  entries,
  className,
}) => {
  return (
    <section
      id={id}
      className={cn("section-padding", className)}
      aria-label="Experience"
    >
      <div className="section-inner">
        <div className={styles.header}>
          <span className="section-label">{sectionLabel}</span>
          <h2 className="section-headline">{headline}</h2>
        </div>

        <div className={styles.entries}>
          {entries.map((entry) => (
            <div
              key={`${entry.company}-${entry.period}`}
              className={styles.entry}
            >
              <div
                className={cn(styles.node, entry.active && styles.nodeActive)}
              >
                <span
                  className={cn(
                    styles.nodeDot,
                    entry.active && styles.nodeDotActive,
                  )}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{entry.title}</h3>
                <p className={styles.meta}>
                  {entry.company} · {entry.period}
                </p>
                {entry.bullets && entry.bullets.length > 0 && (
                  <ul className={styles.bullets}>
                    {entry.bullets.map((bullet, i) => (
                      <li key={i} className={styles.bullet}>
                        <span className={styles.bulletDot} aria-hidden="true">
                          ▸
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
