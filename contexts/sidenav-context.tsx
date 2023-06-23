"use client";

import { ReactNode, createContext, useContext, useMemo, useState } from "react";

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
  const [_width, setWidth] = useState(400);
  const width = useMemo(() => _width, [_width]);

  return (
    <SidenavContext.Provider value={{ width, setWidth }}>
      {children}
    </SidenavContext.Provider>
  );
};
