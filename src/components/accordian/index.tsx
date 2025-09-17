import React, {
  createContext,
  useContext,
  useState,
  type ReactElement,
} from "react";
import { classNames } from "../../utils/css";
import Arrow from "../../icons/arrow";
import css from "./index.module.css";

type AccordionContextType = {
  openId: number | undefined;
  toggleItem: (id: number) => void;
};
type AccordionItemProps = {
  itemId: number;
  children?: React.ReactNode;
};
type AccordionHeaderProps = {
  itemId?: number;
  children?: React.ReactNode;
  isOpen?: boolean;
};
type AccordionContentProps = {
  isOpen?: boolean;
  itemId?: number;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

function Accordion({ children, ...restProps }: { children?: React.ReactNode }) {
  const [openId, setOpenId] = useState<number | undefined>(undefined);
  const toggleItem = (id: number) => {
    setOpenId((prevId) => (prevId === id ? undefined : id));
  };

  return (
    <AccordionContext.Provider value={{ openId, toggleItem }}>
      <div className={css.accordion_container} {...restProps}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ itemId, children }: AccordionItemProps) {
  const context = useContext(AccordionContext);
  const isOpen = itemId === context?.openId ? true : false;

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(
        child as ReactElement<{ itemId: number; isOpen: boolean }>,
        { itemId, isOpen }
      );
    }
    return child;
  });
}

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

function AccordionContent({ isOpen, ...restProps }: AccordionContentProps) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={classNames(css.accordion_content)} {...restProps}>
      Accordion Content
    </div>
  );
}

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export default Accordion;
export { AccordionItem, AccordionHeader, AccordionContent };
