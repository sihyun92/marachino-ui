import { HTMLAttributes } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  backdrop?: boolean;
  shadow?: boolean;
}
