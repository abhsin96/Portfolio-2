import React from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
      className={`${styles.button} ${styles[variant]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
