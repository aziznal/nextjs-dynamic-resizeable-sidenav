"use client";

import { useSidenavContext } from "@/contexts/sidenav-context";
import { forwardRef } from "react";

export type SidenavProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Sidenav = forwardRef<HTMLDivElement, SidenavProps>(
  ({ className, style, ...props }, ref) => {
    const { isOpen, toggleSidenav } = useSidenavContext();

    return (
      <div
        {...props}
        ref={ref}
        className={`relative h-[100vh] w-[400px] border-r-2 border-r-zinc-400 transition-all duration-200 ease-out ${className}`}
        style={{ ...style, width: isOpen ? "400px" : "100px" }}
      >
        {/* Sidenav Body */}
        <div className="flex h-full w-full flex-col items-center justify-center overflow-clip bg-gray-200">
          {props.children}
        </div>

        {/* Toggle Button */}
        <button className="absolute right-0 top-20" onClick={toggleSidenav}>
          {isOpen && <span className="material-icons">chevron_left</span>}
          {!isOpen && <span className="material-icons">chevron_right</span>}
        </button>
      </div>
    );
  }
);

Sidenav.displayName = "Sidenav";

export default Sidenav;
