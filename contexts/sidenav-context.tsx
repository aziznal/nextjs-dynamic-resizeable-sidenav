"use client";

import { ReactNode, createContext, useContext, useState } from "react";

export type SidenavContextProps = {
  isOpen: boolean;
  openSidenav: () => void;
  closeSidenav: () => void;
  toggleSidenav: () => void;
};

export const SidenavContext = createContext<SidenavContextProps>({
  isOpen: true,
  openSidenav: () => {},
  closeSidenav: () => {},
  toggleSidenav: () => {},
});

export const useSidenavContext = () => useContext(SidenavContext);

export const SidenavProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  const openSidenav = () => setIsOpen(true);
  const closeSidenav = () => setIsOpen(false);
  const toggleSidenav = () => setIsOpen((isOpen) => !isOpen);

  return (
    <SidenavContext.Provider
      value={{ isOpen, openSidenav, closeSidenav, toggleSidenav }}
    >
      {children}
    </SidenavContext.Provider>
  );
};
