import React from "react";
import { cn } from "@/utils/cn";

export interface MaterialIconProps {
  /** The Material Symbols icon name (e.g., "terminal", "arrow_forward"). */
  name: string;
  /** Icon size in pixels. Defaults to 24. */
  size?: number;
  /** Whether to use the filled variant. Defaults to false. */
  fill?: boolean;
  /** Additional CSS class names. */
  className?: string;
}

/**
 * Reusable atom for rendering Material Symbols Outlined icons.
 * Replaces all inline `material-symbols-outlined` spans with
 * consistent sizing and fill control via props.
 *
 * Prevents Cumulative Layout Shift (CLS) by:
 * 1. Using display: inline-flex to create a flex container
 * 2. Setting fixed dimensions to reserve space before font loads
 * 3. Using font-display: optional to prevent text reflow
 */
export const MaterialIcon: React.FC<MaterialIconProps> = ({
  name,
  size = 24,
  fill = false,
  className,
}) => {
  return (
    <span
      className={cn("material-symbols-outlined", className)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        fontSize: `${size}px`,
        lineHeight: 1,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}`,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
};
