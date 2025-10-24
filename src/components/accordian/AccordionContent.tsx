import type { ReactNode } from "react";
import { classNames } from "../../utils/css";
import css from "./index.module.css";
import { useAccordionItemContext } from "./AccordionItem";

type AccordionContentProps = {
  children?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function AccordionContent({ children, ...restProps }: AccordionContentProps) {
  const { isOpen } = useAccordionItemContext();

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
