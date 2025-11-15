import { useContext, type HTMLAttributes, type ReactNode } from "react";
import { DropdownContext } from ".";
import { createPortal } from "react-dom";
import css from "./index.module.css";
import { classNames } from "../../utils/css";

type DropdownContentProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function DropdownContent({ children, ...restProps }: DropdownContentProps) {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("DropdownContent must be used within a Dropdown");
  }

  const { open, dropdownTriggerRef } = context;
  const rect = dropdownTriggerRef.current?.getBoundingClientRect();

  //   if (!open) return null;

  return createPortal(
    <div
      className={classNames(css.content, open ? css.open : "")}
      style={{
        top: rect ? rect.bottom + window.scrollX : 0,
        left: rect ? rect.left + window.scrollY : 0,
      }}
      {...restProps}
    >
      {children}
    </div>,
    document.body
  );
}

export default DropdownContent;
