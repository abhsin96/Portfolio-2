import React from "react";
import styles from "./SectionContainer.module.css";

export interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  as?: React.ElementType;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  className,
  as: Component = "section",
}) => {
  return (
    <Component id={id} className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>{children}</div>
    </Component>
  );
};
