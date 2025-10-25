import type { ReactNode } from "react";
import css from "./index.module.css";

type AlertDialogFooterProps = {
  children: ReactNode;
};

function AlertDialogFooter({ children }: AlertDialogFooterProps) {
  return <footer className={css.dialog_footer}>{children}</footer>;
}

export default AlertDialogFooter;
