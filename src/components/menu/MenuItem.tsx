import type { ReactNode } from "react";
import css from "./index.module.css";

type MenuItemProps = {
  children: ReactNode;
};

function MenuItem({ children }: MenuItemProps) {
  return <div className={css.menu_item}>{children}</div>;
}

export default MenuItem;
