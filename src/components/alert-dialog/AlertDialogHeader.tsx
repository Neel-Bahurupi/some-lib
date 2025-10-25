import type { ReactNode } from "react";
import css from "./index.module.css";

type AlertDialogHeaderProps = {
  children: ReactNode;
};

function AlertDialogHeader({ children }: AlertDialogHeaderProps) {
  return (
    <header className={css.dialog_header}>
      <h2>{children}</h2>
    </header>
  );
}

export default AlertDialogHeader;
