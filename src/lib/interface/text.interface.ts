import { HTMLAttributes } from "react";

type textSize =
  | "small"
  | "medium"
  | "large"
  | "larger"
  | "largest"
  | `${number}`;
type wordBreak = "normal" | "keep-all" | "break-all" | "break-word";
type fontWeight =
  | "light"
  | "normal"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: textSize;
  fontUrl?: string;
  fontFamily?: string;
  wordBreak?: wordBreak;
  fontWeight?: fontWeight;
  color?: string;
}
