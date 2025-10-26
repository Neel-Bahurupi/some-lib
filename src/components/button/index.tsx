import type { HTMLAttributes, ReactNode } from "react";
import css from "./index.module.css";
import { classNames } from "../../utils/css";

type ButtonVariant = "dark" | "outline" | "secondary" | "ghost" | "destructive";
type ButtonSize = "sm" | "md" | "lg";
type ButtonProps = {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
} & HTMLAttributes<HTMLButtonElement>;

function Button({
  size = "md",
  variant = "outline",
  children,
  ...restProps
}: ButtonProps) {
  return (
    <button
      className={classNames(css.button, css[size], css[variant])}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Button;
