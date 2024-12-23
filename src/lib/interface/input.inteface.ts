import { InputHTMLAttributes } from "react";

type InputStyle = "box" | "line";
type InputType = "username" | "password";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputStyle?: InputStyle;
  inputType?: InputType;
  fontSize?: string;
  width?: string;
}
