"use client";

import { useSidenavContext } from "@/contexts/sidenav-context";
import { forwardRef } from "react";

export type SidenavProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Sidenav = forwardRef<HTMLDivElement, SidenavProps>(
  ({ className, style, ...props }, ref) => {
    const sidenavContext = useSidenavContext();

    return (
      <div
        {...props}
        ref={ref}
        className={`
          relative
          h-[100vh]
          w-[400px]
          ${className}
        `}
      >
        {/* Sidenav Body */}
        <div className="flex h-full w-full flex-col items-center justify-center bg-gray-200">
          {props.children}
        </div>
      </div>
    );
  }
);

Sidenav.displayName = "Sidenav";

export default Sidenav;
