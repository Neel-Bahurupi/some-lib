import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";

type AccordionItemProps = {
  itemId: number;
  children?: React.ReactNode;
};

function AccordionItem({ itemId, children }: AccordionItemProps) {
  const context = useContext(AccordionContext);
  const isOpen = itemId === context?.openId ? true : false;

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(
        child as React.ReactElement<{ itemId: number; isOpen: boolean }>,
        { itemId, isOpen }
      );
    }
    return child;
  });
}

export default AccordionItem;
