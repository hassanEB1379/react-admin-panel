import React, { FC } from "react";
import clsx from "clsx";

type TButton = {
  label: string;
  size?: "normal" | "small" | "medium" | "large";
  color?:
    | "primary"
    | "link"
    | "info"
    | "success"
    | "danger"
    | "warning"
    | "white"
    | "black"
    | "dark"
    | "light";
  light?: boolean;
  fullwidth?: boolean;
  rounded?: boolean;
  loading?: boolean;
  outlined?: boolean;
  className?: string;
};

const Button: FC<TButton> = ({
  label,
  size = "normal",
  color = "primary",
  light = false,
  fullwidth = false,
  rounded = false,
  loading = false,
  outlined = false,
  className = "",
  ...rest
}) => {
  const classes = clsx("button", {
    [className]: className,
    ["is-" + size]: size,
    ["is-" + color]: color,
    "is-light": light,
    "is-fullwidth": fullwidth,
    "is-rounded": rounded,
    "is-loading": loading,
    "is-outlined": outlined,
  });

  return (
    <button {...rest} className={classes}>
      {label}
    </button>
  );
};

export default Button;
