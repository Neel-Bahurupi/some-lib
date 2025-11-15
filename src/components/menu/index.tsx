import type { HTMLAttributes, ReactNode } from "react";
import css from "./index.module.css";
import MenuItem from "./MenuItem";

type Menu = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function Menu({ children, ...restProps }: Menu) {
  return (
    <div className={css.menu} {...restProps}>
      {children}
    </div>
  );
}

Menu.Item = MenuItem;

export default Menu;
