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
        className={`relative h-screen w-[400px] border-r-2 border-r-zinc-400 transition-all duration-[350ms] ease-out ${className}`}
        style={{ ...style, width: isOpen ? "400px" : "100px" }}
      >
        {/* Sidenav Body */}
        <div className="flex h-full w-full flex-col items-center justify-center overflow-clip bg-gray-200">
          {props.children}
        </div>

        {/* Toggle Button */}
        <button
          className="
              absolute
              right-0
              top-20
              flex
              h-7
              w-7
              translate-x-[55%]
              items-center
              justify-center
              rounded-full
              border-2
              border-zinc-400
              bg-zinc-100
              opacity-70
              outline-none

              hover:border-blue-400
              hover:bg-zinc-200
              hover:opacity-100
              focus:border-blue-400
              focus:opacity-100
            "
          onClick={toggleSidenav}
        >
          {isOpen && <span className="material-icons">chevron_left</span>}
          {!isOpen && <span className="material-icons">chevron_right</span>}
        </button>
      </div>
    );
  }
);

Sidenav.displayName = "Sidenav";

export default Sidenav;
