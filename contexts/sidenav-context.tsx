"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

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
  const [_isVisible, setIsVisible] = useState(true);
  const isVisible = useMemo(() => _isVisible, [_isVisible]);

  const [_width, setWidth] = useState(400);
  const width = useMemo(() => _width, [_width]);

  return (
    <SidenavContext.Provider
      value={{ width, setWidth, isVisible, setVisibility: setIsVisible }}
    >
      {children}
    </SidenavContext.Provider>
  );
};
