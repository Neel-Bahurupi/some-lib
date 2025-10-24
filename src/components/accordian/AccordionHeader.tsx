import { classNames } from "../../utils/css";
import css from "./index.module.css";
import Arrow from "../../icons/arrow";
import { useAccordionContext } from "./AccordionContext";

type AccordionHeaderProps = {
  itemId?: number;
  children?: React.ReactNode;
  isOpen?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function AccordionHeader({
  itemId,
  isOpen,
  children,
  ...restProps
}: AccordionHeaderProps) {
  const context = useAccordionContext();

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
