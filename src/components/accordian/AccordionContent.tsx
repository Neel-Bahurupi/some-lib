import type { ReactNode } from "react";
import { classNames } from "../../utils/css";
import css from "./index.module.css";

type AccordionContentProps = {
  children?: ReactNode;
  isOpen?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function AccordionContent({
  children,
  isOpen,
  ...restProps
}: AccordionContentProps) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={classNames(css.accordion_content)} {...restProps}>
      {children}
    </div>
  );
}

export default AccordionContent;
