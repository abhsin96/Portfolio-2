import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import styles from "./BentoProjectCard.module.css";

export interface BentoProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags?: string[];
  /** Number of columns to span in the 12-col grid (e.g. 8 or 4) */
  colSpan?: 4 | 8;
  /** Aspect ratio variant */
  aspect?: "landscape" | "square";
  /** Whether overlay is always visible or only on hover */
  overlayAlways?: boolean;
  className?: string;
}

export const BentoProjectCard: React.FC<BentoProjectCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  tags = [],
  colSpan = 8,
  aspect = "landscape",
  overlayAlways = false,
  className,
}) => {
  const spanClass = colSpan === 8 ? styles.spanLarge : styles.spanSmall;
  const aspectClass =
    aspect === "square" ? styles.aspectSquare : styles.aspectLandscape;
  const overlayClass = overlayAlways
    ? styles.overlayAlways
    : styles.overlayHover;

  return (
    <article className={cn(styles.card, spanClass, className)}>
      <div className={cn(styles.imageWrapper, aspectClass)}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes={
            colSpan === 8
              ? "(max-width: 768px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className={styles.image}
        />
      </div>
      <div className={cn(styles.overlay, overlayClass)}>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};
