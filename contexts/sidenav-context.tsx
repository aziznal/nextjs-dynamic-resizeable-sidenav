"use client";

import { ReactNode, createContext, useContext, useState } from "react";

export type SidenavContextProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

export const SidenavContext = createContext<SidenavContextProps>({
  isOpen: true,
  toggleOpen: () => {},
});

export const useSidenavContext = () => useContext(SidenavContext);

export const SidenavProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => setIsOpen((isOpen) => !isOpen);

  return (
    <SidenavContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </SidenavContext.Provider>
  );
};
