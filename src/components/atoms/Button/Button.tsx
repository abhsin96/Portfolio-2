import React from "react";
import { cn } from "@/utils/cn";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "ghost";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
