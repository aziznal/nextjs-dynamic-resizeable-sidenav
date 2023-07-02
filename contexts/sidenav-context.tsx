"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type SidenavContextProps = {
  content: ReactNode;

  pushContent: (children: ReactNode) => void;
  popContent: () => void;
};

export const SidenavContext = createContext<SidenavContextProps>({
  content: <></>,
  pushContent: () => {},
  popContent: () => {},
});

export const useSidenavContext = () => useContext(SidenavContext);

export const SidenavProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ReactNode>();
  const [_stack, setStack] = useState<ReactNode[]>([]);

  const pushContent = useCallback((content: ReactNode) => {
    setStack((prevStack) => {
      const newStack = [...prevStack, content];
      setContent(newStack[newStack.length - 1]);
      return newStack;
    });
  }, []);

  const popContent = useCallback(() => {
    setStack((prevStack) => {
      if (prevStack.length <= 1) return prevStack;

      const newStack = [...prevStack.slice(0, prevStack.length - 1)];
      setContent(newStack[newStack.length - 1]);
      return newStack;
    });
  }, []);

  useEffect(() => {
    console.log(`stack updated! (length=${_stack.length})`, _stack);
  }, [_stack]);

  return (
    <SidenavContext.Provider value={{ content, pushContent, popContent }}>
      {children}
    </SidenavContext.Provider>
  );
};
