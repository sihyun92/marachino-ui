import { ButtonProps } from "@lib/interface/button.interface";
import styles from "@components/Button/Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Button({ ...rest }: ButtonProps) {
  // primary outline className
  const primaryOutline = `${
    rest.outline ? (rest.color === "primary" ? "primary-outline" : "") : ""
  }`;

  // secondary outline className
  const secondaryOutline = `${
    rest.outline ? (rest.color === "secondary" ? "secondary-outline" : "") : ""
  }`;

  // accept outline className
  const acceptOutline = `${
    rest.outline ? (rest.color === "accept" ? "accept-outline" : "") : ""
  }`;

  // cancel outline className
  const cancelOutline = `${
    rest.outline ? (rest.color === "cancel" ? "cancel-outline" : "") : ""
  }`;

  return (
    <button
      className={cx(
        `block`,
        `${rest.shape}`,
        `${rest.size}`,
        `${rest.color}`,
        `${rest.outline}`,
        `${primaryOutline}`,
        `${secondaryOutline}`,
        `${acceptOutline}`,
        `${cancelOutline}`,
        `${rest.shadow && "shadow"}`
      )}
      {...rest}
    />
  );
}
