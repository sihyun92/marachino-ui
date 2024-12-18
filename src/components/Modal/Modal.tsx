import { ModalProps } from "@lib/interface/modal.interface";
import styles from "../Modal/Modal.module.scss";
import classNames from "classnames/bind";
import { CSSProperties, useState } from "react";

const cx = classNames.bind(styles);

export default function Modal({ ...rest }: ModalProps) {
  // Hooks & Function
  const [modalClose, setModalClose] = useState(false);

  const onClose = () => {
    setModalClose(true);
  };

  // shadow
  const isShadow = rest.shadow ? "shadow" : "";

  // Dynamic Style
  const dynamicStyle: CSSProperties = {
    width: rest.width,
    height: rest.height,
  };

  return rest.backdrop ? (
    modalClose ? null : (
      <div className={cx(`backdrop`)}>
        <div className={cx("block", isShadow)} style={dynamicStyle} {...rest}>
          <button className={cx("close")} onClick={onClose}>
            <span />
            <span />
          </button>
          {rest.children}
        </div>
      </div>
    )
  ) : modalClose ? null : (
    <div className={cx("block", isShadow)} style={dynamicStyle} {...rest}>
      <button className={cx("close")} onClick={onClose}>
        <span />
        <span />
      </button>
      {rest.children}
    </div>
  );
}
