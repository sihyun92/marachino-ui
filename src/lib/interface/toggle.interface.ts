import { ButtonHTMLAttributes } from "react";

export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  initialChecked?: boolean;
  label?: string;
}
