"use client";

import { ReactNode, createContext, useContext, useState } from "react";

export type SidenavContextProps = {
  isVisible: boolean;
  setVisibility: (isVisible: boolean) => void;

  width: number;
  setWidth: (width: number) => void;
};

export const SidenavContext = createContext<SidenavContextProps>({
  isVisible: true,
  setVisibility: () => {},
  width: 0,
  setWidth: () => {},
});

export const useSidenavContext = () => useContext(SidenavContext);

export const SidenavProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(true);

  const [width, setWidth] = useState(400);

  return (
    <SidenavContext.Provider
      value={{ width, setWidth, isVisible, setVisibility: setIsVisible }}
    >
      {children}
    </SidenavContext.Provider>
  );
};
