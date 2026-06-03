import React from "react";
import styles from "./WindowDots.module.css";

export interface WindowDotsProps {
  className?: string;
}

export const WindowDots: React.FC<WindowDotsProps> = ({ className }) => {
  return (
    <div className={`${styles.dots} ${className ?? ""}`} aria-hidden="true">
      <span className={styles.dot} data-color="red" />
      <span className={styles.dot} data-color="yellow" />
      <span className={styles.dot} data-color="green" />
    </div>
  );
};
