import type { ReactNode } from "react";

type AlertDialogContentProps = {
  children: ReactNode;
};

function AlertDialogContent({ children }: AlertDialogContentProps) {
  return <section>{children}</section>;
}

export default AlertDialogContent;
