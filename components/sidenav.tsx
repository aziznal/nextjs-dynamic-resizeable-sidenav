"use client";

import { useSidenavContext } from "@/contexts/sidenav-context";
import { forwardRef } from "react";

export type SidenavProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Sidenav = forwardRef<HTMLDivElement, SidenavProps>(
  ({ className, style, ...props }, ref) => {
    const { content: sidenavContent } = useSidenavContext();

    return (
      <div
        {...props}
        ref={ref}
        className={`relative h-[100vh] w-[300px] border-r-2 border-r-zinc-400 ${className}`}
      >
        {/* Sidenav Body */}
        <div className="flex h-full w-full flex-col bg-gray-200">
          {sidenavContent}
        </div>
      </div>
    );
  }
);

Sidenav.displayName = "Sidenav";

export default Sidenav;
