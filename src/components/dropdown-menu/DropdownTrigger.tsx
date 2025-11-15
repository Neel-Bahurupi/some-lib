import { useContext, type HTMLAttributes, type ReactNode } from "react";
import { DropdownContext } from ".";

type DropdownTriggerProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function DropdownTrigger({ children, ...restProps }: DropdownTriggerProps) {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("DropdownTrigger must be used within a Dropdown");
  }

  const { setOpen, dropdownTriggerRef } = context;

  return (
    <div
      {...restProps}
      onClick={() => {
        setOpen((isOpen: boolean) => !isOpen);
      }}
      ref={dropdownTriggerRef}
    >
      {children}
    </div>
  );
}

export default DropdownTrigger;
