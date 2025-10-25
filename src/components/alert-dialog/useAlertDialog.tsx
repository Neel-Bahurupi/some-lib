import { useRef, type ReactNode } from "react";
import type { AlertDialogHandle } from ".";
import AlertDialog from ".";
import AlertDialogHeader from "./AlertDialogHeader";
import AlertDialogContent from "./AlertDialogContent";
import AlertDialogFooter from "./AlertDialogFooter";

type AlertDialogComponentProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLDialogElement>;

function useAlertDialog() {
  const ref = useRef<AlertDialogHandle>(null);

  function AlertDialogComponent({
    children,
    ...restProps
  }: AlertDialogComponentProps) {
    return (
      <AlertDialog ref={ref} {...restProps}>
        {children}
      </AlertDialog>
    );
  }

  AlertDialogComponent.Header = AlertDialogHeader;
  AlertDialogComponent.Content = AlertDialogContent;
  AlertDialogComponent.Footer = AlertDialogFooter;

  return {
    open: () => ref.current?.open(),
    close: () => ref.current?.close(),
    AlertDialog: AlertDialogComponent,
  };
}

export default useAlertDialog;
