import React from "react";
import styles from "./PerformanceLogs.module.css";

export interface LogEntry {
  label: string;
  value: string;
}

export interface PerformanceLogsProps {
  entries: LogEntry[];
  className?: string;
}

export const PerformanceLogs: React.FC<PerformanceLogsProps> = ({
  entries,
  className,
}) => {
  return (
    <div className={`${styles.container} ${className ?? ""}`}>
      <div className={styles.header}>
        <div className={styles.indicator} aria-hidden="true" />
        <p className={styles.headerLabel}>SYSTEM PERFORMANCE LOGS</p>
      </div>
      <div className={styles.entries}>
        {entries.map((entry, index) => (
          <p
            key={entry.label}
            className={`${styles.entry} ${
              index < entries.length - 1 ? styles.bordered : ""
            }`}
          >
            <span className={styles.entryLabel}>{entry.label}</span>
            <span className={styles.entryValue}>{entry.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
