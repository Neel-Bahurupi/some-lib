import type { HTMLAttributes, ReactNode } from "react";
import css from "./index.module.css";
import { classNames } from "../../utils/css";

type Orientation = "horizontal" | "vertical";
type ButtonGroupProps = {
  children: ReactNode;
  orientation?: Orientation;
} & HTMLAttributes<HTMLDivElement>;

function ButtonGroup({
  orientation = "horizontal",
  children,
  ...restProps
}: ButtonGroupProps) {
  return (
    <div className={classNames(css.group, css[orientation])} {...restProps}>
      {children}
    </div>
  );
}

export default ButtonGroup;
