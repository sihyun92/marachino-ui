import styles from "@components/Input/Input.module.scss";
import { InputProps } from "@lib/interface/input.inteface";
import classNames from "classnames/bind";
import { CSSProperties, useEffect, useRef } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const cx = classNames.bind(styles);

export default function Input({ ...rest }: InputProps) {
  // hook
  const isFirstRender = useRef(true);

  // function
  const getPrefixIcon = () => {
    switch (rest.inputType) {
      case "username":
        return <FaUser />;
      case "password":
        return <FaLock />;
      default:
        return null;
    }
  };

  const validateUnit = (value: string | undefined, propName: string) => {
    if (!value) return; // value가 undefined나 null인 경우, skip

    // regex
    const rValidUnits = /^(?:\d+(?:\.\d+)?(?:px|rem|em|pt|%)?)$/;
    const rNumber = /^\d+(\.\d+)?$/;

    if (!rValidUnits.test(value)) {
      console.error(
        `[Input Component]: Invalid unit for "${propName}". Received "${value}". Please use px, rem, em, pt, or %.`
      );
    } else if (rNumber.test(value)) {
      console.error(
        `[Input Component]: Missing unit for "${propName}". Received "${value}". Please specify a unit like px, rem, em, pt, or %.`
      );
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 첫번째 렌더링에서 유효성 검사 건너뛰기
    }

    validateUnit(rest.fontSize, "fontSize");
    validateUnit(rest.width, "width");
  }, [rest.fontSize, rest.width]);

  // variable
  const prefixIcon = getPrefixIcon();
  const hasPrefix = !!prefixIcon;
  const inputTypeMapping = rest.inputType === "password" ? "password" : "text";

  // dynamic style
  const dynamicStyle: CSSProperties = {
    fontSize: rest.fontSize,
    width: rest.width,
  };

  // render
  return (
    <div className={cx("container")}>
      {hasPrefix && <span className={cx("prefix")}>{prefixIcon}</span>}
      <input
        className={cx("block", rest.inputStyle, { "has-prefix": hasPrefix })}
        style={dynamicStyle}
        type={inputTypeMapping}
      />
    </div>
  );
}
