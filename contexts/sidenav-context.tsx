"use client";

import { ReactNode, createContext, useContext } from "react";

export type SidenavContextProps = {};

export const SidenavContext = createContext<SidenavContextProps>({});

export const useSidenavContext = () => useContext(SidenavContext);

export const SidenavProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SidenavContext.Provider value={{}}>{children}</SidenavContext.Provider>
  );
};
