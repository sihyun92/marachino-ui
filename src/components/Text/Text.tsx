import styles from "../Text/Text.module.scss";
import { TextProps } from "../../lib/interface/text.interface";
import classNames from "classnames/bind";
import { CSSProperties, useEffect } from "react";

const cx = classNames.bind(styles);

export default function Text({ ...rest }: TextProps) {
  // Hooks & Function
  useEffect(() => {
    if (rest.fontUrl) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = rest.fontUrl;

      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [rest.fontUrl]);

  const isValidFontSize = (value: string | undefined) => {
    if (!value) return false;
    const rValid = /^(?:\d+(?:\.\d+)?(px|rem|em|pt))$/;
    const isValid = rValid.test(value);

    if (!isValid) {
      console.error(
        `Invalid fontSize value: "${value}". Only "px", "rem", "em" or "pt" are allowed.`,
      );
    }

    return isValid;
  };

  // Dynamic Style
  const dynamicStyle: CSSProperties = {
    fontFamily: rest.fontFamily || undefined,
    color: rest.color || undefined,
    fontSize: isValidFontSize(rest.size) ? `${rest.size}` : undefined,
    ...rest,
  };

  return (
    <p
      className={cx("block", rest.size, rest.wordBreak, rest.fontWeight)}
      style={dynamicStyle}
      {...rest}
    />
  );
}
