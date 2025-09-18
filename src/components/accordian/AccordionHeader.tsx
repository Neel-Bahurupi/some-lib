import { useContext } from "react";
import { classNames } from "../../utils/css";
import css from "./index.module.css";
import Arrow from "../../icons/arrow";
import AccordionContext from "./AccordionContext";

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
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "AccordionHeader must be used within an Accordion component"
    );
  }

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
