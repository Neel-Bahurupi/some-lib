import React, { createContext, useContext } from "react";
import { useAccordionContext } from ".";

type AccordionItemProps = {
  itemId: number;
  children?: React.ReactNode;
};

type AccordionContextType = {
  itemId: number;
  isOpen: boolean;
};

const AccordionItemContext = createContext<AccordionContextType | undefined>(
  undefined
);

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      "AccordionItem related components should be wrapped inside <Accordion.Item>"
    );
  }
  return context;
}

function AccordionItem({ itemId, children }: AccordionItemProps) {
  const context = useAccordionContext();
  const isOpen = itemId === context?.openId ? true : false;

  return (
    <AccordionItemContext.Provider value={{ itemId, isOpen }}>
      {children}
    </AccordionItemContext.Provider>
  );
}

export default AccordionItem;
export { useAccordionItemContext };
