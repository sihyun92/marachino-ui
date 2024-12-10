import { ButtonHTMLAttributes } from "react";

type ColorShades = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type ColorSet =
  | "gray"
  | "red"
  | "pink"
  | "grape"
  | "violet"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "green"
  | "lime"
  | "yellow"
  | "orange";
type DefaultColor = "black" | "white";
type Color = `${ColorSet}-${ColorShades}`;
type Shadow = "light" | "heavy";
type Shape = "box" | "rounded";
type Size = "small" | "medium" | "large";
type Border = "thin" | "thick";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: Color | DefaultColor;
  color: Color | DefaultColor;
  size: Size;
  shadow?: Shadow;
  shape?: Shape;
  borderColor?: Color | DefaultColor;
  border?: Border;
}
