"use client";

import { useSidenavContext } from "@/contexts/sidenav-context";
import { forwardRef } from "react";

export type SidenavProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Sidenav = forwardRef<HTMLDivElement, SidenavProps>(
  ({ className, style, ...props }, ref) => {
    const { portalId } = useSidenavContext();

    return (
      <div
        {...props}
        ref={ref}
        className={`relative h-[100vh] w-[400px] border-r-2 border-r-zinc-400 ${className}`}
      >
        {/* Sidenav Body */}
        <div
          className="flex h-full w-full flex-col items-center justify-center bg-gray-200"
          id={portalId}
        ></div>
      </div>
    );
  }
);

Sidenav.displayName = "Sidenav";

export default Sidenav;
