import React, { createContext, useContext } from "react";

type AccordionItemProps = {
  itemId: number;
  children?: React.ReactNode;
};

type AccordionContextType = {
  itemId: number;
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
  return (
    <AccordionItemContext.Provider value={{ itemId }}>
      {children}
    </AccordionItemContext.Provider>
  );
}

export default AccordionItem;
export { useAccordionItemContext };
