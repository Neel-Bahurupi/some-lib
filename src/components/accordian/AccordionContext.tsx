import { createContext, useContext } from "react";

type AccordionContextType = {
  openId: number | undefined;
  toggleItem: (id: number) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "AccordionHeader must be used within an Accordion component"
    );
  }

  return context;
}

export default AccordionContext;
export { useAccordionContext };
