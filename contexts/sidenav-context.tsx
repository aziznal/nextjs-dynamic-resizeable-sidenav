"use client";

import { ReactNode, createContext, useContext, useState } from "react";

export type SidenavContextProps = {
  content: ReactNode;
  setContent: (children: ReactNode) => void;
};

export const SidenavContext = createContext<SidenavContextProps>({
  content: <></>,
  setContent: () => {},
});

export const useSidenavContext = () => useContext(SidenavContext);

export const SidenavProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ReactNode>(<div>Hello World!</div>);

  return (
    <SidenavContext.Provider value={{ content, setContent }}>
      {children}
    </SidenavContext.Provider>
  );
};
