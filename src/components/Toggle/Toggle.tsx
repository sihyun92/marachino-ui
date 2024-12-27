import classNames from "classnames/bind";
import styles from "@components/Toggle/Toggle.module.scss";
import { CSSProperties, FormEventHandler, useState } from "react";
import { ToggleProps } from "@lib/interface/toggle.interface";

const cx = classNames.bind(styles);

export default function Toggle({ ...rest }: ToggleProps) {
  const [isChecked, setIsChecked] = useState(rest.initialChecked);

  const onToggle: FormEventHandler<HTMLButtonElement> = (event) => {
    setIsChecked((prev) => !prev);
    rest.onChange?.(event); // 확인 필요
  };
  // dynamic style
  const dynamicStyle: CSSProperties = {};

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      onClick={onToggle}
      className={cx("block", { checked: isChecked })}
      {...rest}
    >
      <span className={cx("circle", isChecked ? "checked" : null)} />
    </button>
  );
}
