import { createContext } from "react";

type AccordionContextType = {
  openId: number | undefined;
  toggleItem: (id: number) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

export default AccordionContext;
