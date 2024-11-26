import { HTMLAttributes } from "react";

type ModalType = "" | "";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  zIndex?: string;
  padding?: string;
  width?: string;
  height?: string;
  shadow?: boolean;
  outline?: string;
  background?: string;
  backdrop?: boolean;
  position?: boolean;
  modalType?: ModalType;
  justifyContent?: string;
  alignItems?: string;
}
