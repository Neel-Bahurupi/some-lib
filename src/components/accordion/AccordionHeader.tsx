import { classNames } from "../../utils/css";
import css from "./index.module.css";
import Arrow from "../../icons/arrow";
import { useAccordionItemContext } from "./AccordionItem";
import { useAccordionContext } from ".";

type AccordionHeaderProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function AccordionHeader({ children, ...restProps }: AccordionHeaderProps) {
  const context = useAccordionContext();
  const { itemId } = useAccordionItemContext();

  const isOpen = itemId === context?.openId ? true : false;

  return (
    <div
      className={classNames(
        css.accordion_header,
        isOpen ? css.accordion_header_open : ""
      )}
      onClick={() => context?.toggleItem(itemId!)}
      {...restProps}
    >
      <div>{children}</div>
      <Arrow className={classNames(css.arrow, isOpen ? css.rotate : "")} />
    </div>
  );
}

export default AccordionHeader;
