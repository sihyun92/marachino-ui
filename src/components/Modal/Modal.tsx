import { ModalProps } from "../../lib/interface/modal.interface";
import styles from "../Modal/Modal.module.scss";
import classNames from "classnames/bind";
import { CSSProperties } from "react";

const cx = classNames.bind(styles);

export default function Modal({ ...rest }: ModalProps) {
  // position
  const isPosition = rest.position ? "position" : "";

  // shadow
  const isShadow = rest.shadow ? "shadow" : "";

  // Dynamic Style
  const dynamicStyle: CSSProperties = {
    border: rest.outline || undefined,
    padding: rest.padding || undefined,
    width: rest.width || undefined,
    height: rest.height || undefined,
    zIndex: rest.zIndex || undefined,
    outline: rest.outline || undefined,
    background: rest.background || undefined,
  };

  return rest.backdrop ? (
    <div className={cx(`backdrop`)}>
      <div
        className={cx("block", isPosition, isShadow)}
        style={dynamicStyle}
        {...rest}
      />
    </div>
  ) : (
    <div
      className={cx("block", isPosition, isShadow)}
      style={dynamicStyle}
      {...rest}
    />
  );
}
