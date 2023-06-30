"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type SidenavContextProps = {
  content: ReactNode;
  setContent: (children: ReactNode) => void;

  portalId: string;
  getPortalContainer: () => Element;
  portalReady: boolean;
};

export const SidenavContext = createContext<SidenavContextProps>({
  content: <></>,
  setContent: () => {},

  portalId: "",
  getPortalContainer: () => document.createElement("div"),
  portalReady: false,
});

export const useSidenavContext = () => useContext(SidenavContext);

export const SidenavProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ReactNode>(<div>Hello World!</div>);
  const [portalReady, setPortalReady] = useState(false);

  const portalId = "sidenav-content-portal";

  const getPortalContainer = () => document.getElementById(portalId) as Element;

  useEffect(() => {
    setPortalReady(true);
  }, []);

  return (
    <SidenavContext.Provider
      value={{ content, setContent, portalId, getPortalContainer, portalReady }}
    >
      {children}
    </SidenavContext.Provider>
  );
};
