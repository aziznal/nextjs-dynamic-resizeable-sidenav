"use client";

import { ReactNode, createContext, useContext, useState } from "react";

export type SidenavContextProps = {
  width: number;
  setWidth: (width: number) => void;
};

export const SidenavContext = createContext<SidenavContextProps>({
  width: 0,
  setWidth: () => {},
});

export const useSidenavContext = () => useContext(SidenavContext);

export const SidenavProvider = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState(400);

  return (
    <SidenavContext.Provider value={{ width, setWidth }}>
      {children}
    </SidenavContext.Provider>
  );
};
