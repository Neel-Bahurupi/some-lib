import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ReactNode,
  type Ref,
} from "react";
import css from "./index.module.css";
import AlertDialogHeader from "./AlertDialogHeader";
import AlertDialogContent from "./AlertDialogContent";
import AlertDialogFooter from "./AlertDialogFooter";
import { createPortal } from "react-dom";

type AlertDialogProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLDialogElement>;

type AlertDialogHandle = {
  open: () => void;
  close: () => void;
};

type AlertDialogType = typeof AlertDialogWithRef & {
  Header: typeof AlertDialogHeader;
  Content: typeof AlertDialogContent;
  Footer: typeof AlertDialogFooter;
};

function AlertDialogComponent(
  { children, ...restProps }: AlertDialogProps,
  ref: Ref<AlertDialogHandle>
) {
  if (!ref) {
    throw new Error(
      "AlertDialog needs a ref. Use useAlertDialog hook if you want to avoid passing a ref"
    );
  }
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));

  return createPortal(
    <dialog ref={dialogRef} className={css.dialog} {...restProps}>
      {children}
    </dialog>,
    document.body
  );
}

const AlertDialogWithRef = forwardRef(AlertDialogComponent);

const AlertDialog = AlertDialogWithRef as AlertDialogType;

export default AlertDialog;
export type { AlertDialogHandle };

AlertDialog.Header = AlertDialogHeader;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Footer = AlertDialogFooter;
