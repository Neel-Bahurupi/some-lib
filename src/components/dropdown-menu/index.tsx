import {
  createContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import css from "./index.module.css";

import Menu from "../menu";
import MenuItem from "../menu/MenuItem";
import DropdownTrigger from "./DropdownTrigger";
import DropdownContent from "./DropdownContent";

type DropdownContext = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownTriggerRef: React.RefObject<HTMLDivElement | null>;
};
type DropdownProps = {
  children: ReactNode;
};

const DropdownContext = createContext<DropdownContext | undefined>(undefined);

function Dropdown({ children }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownTriggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const contextValue = { open, setOpen, dropdownTriggerRef };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContext.Provider value={contextValue}>
      <div ref={menuRef} className={css.dropdown_menu}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;
Dropdown.Menu = Menu;
Dropdown.Item = MenuItem;

export default Dropdown;
export { DropdownContext };
