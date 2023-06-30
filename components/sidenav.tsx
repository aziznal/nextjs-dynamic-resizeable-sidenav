"use client";

import { useSidenavContext } from "@/contexts/sidenav-context";
import { forwardRef, useEffect } from "react";

export type SidenavProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const FooComponent = () => {
  return <div className="h-full w-full bg-blue-300"></div>;
};

const Sidenav = forwardRef<HTMLDivElement, SidenavProps>(
  ({ className, style, ...props }, ref) => {
    const { content, setContent } = useSidenavContext();

    useEffect(() => {
      const timeout = setTimeout(() => {
        setContent(FooComponent());
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }, []);

    return (
      <div
        {...props}
        ref={ref}
        className={`relative h-[100vh] w-[400px] border-r-2 border-r-zinc-400 ${className}`}
      >
        {/* Sidenav Body */}
        <div
          className="flex h-full w-full flex-col items-center justify-center bg-gray-200"
          id="sidenav-content"
        >
          {content}
        </div>
      </div>
    );
  }
);

Sidenav.displayName = "Sidenav";

export default Sidenav;
