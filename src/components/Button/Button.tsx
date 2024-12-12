import { ButtonProps } from "@lib/interface/button.interface";
import classNames from "classnames/bind";
import styles from "@components/Button/Button.module.scss";
import { CSSProperties } from "react";

const cx = classNames.bind(styles);

export default function Button({ ...rest }: ButtonProps) {
  const resolvedColor = rest.borderColor || rest.background;

  const dynamicStyle: CSSProperties = {
    borderWidth: rest.border === "thick" ? "2px" : "1px",
    borderStyle: "solid",
  };

  return (
    <button
      style={dynamicStyle}
      className={cx(
        "block",
        `bg-${rest.background}`,
        `text-${rest.color}`,
        `border-${resolvedColor}`,
        rest.size,
        rest.shadow,
        rest.shape
      )}
      {...rest}
    />
  );
}
