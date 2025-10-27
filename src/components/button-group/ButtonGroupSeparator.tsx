import css from "./index.module.css";
import { classNames } from "../../utils/css";

type ButtonGroupSeparatorProps = {
  color: "white" | "gray";
};

function ButtonGroupSeparator({ color }: ButtonGroupSeparatorProps) {
  return <div className={classNames(css.separator, css[color])} />;
}
export default ButtonGroupSeparator;
