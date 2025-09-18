import React, { useEffect, useMemo, useState } from "react";
import css from "./index.module.css";
import AccordionItem from "./AccordionItem";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";
import AccordionContext from "./AccordionContext";

type AccordionProps = {
  controlledOpenId?: number;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Accordion({
  controlledOpenId,
  children,
  ...restProps
}: AccordionProps) {
  const [openId, setOpenId] = useState(controlledOpenId);
  const toggleItem = (id: number) => {
    setOpenId((prevId) => (prevId === id ? undefined : id));
  };

  const contextValue = useMemo(() => ({ openId, toggleItem }), [openId]);

  useEffect(() => {
    if (controlledOpenId) setOpenId(controlledOpenId);
  }, [controlledOpenId]);

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={css.accordion_container} {...restProps}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export default Accordion;
