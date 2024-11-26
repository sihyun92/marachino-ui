import { ButtonHTMLAttributes } from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonShape = "box" | "rounded";
type ButtonColor = "primary" | "secondary" | "accept" | "cancel";
type ButtonOutline = boolean;
type ButtonShadow = boolean;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  shape?: ButtonShape;
  color?: ButtonColor;
  outline?: ButtonOutline;
  shadow?: ButtonShadow;
}
