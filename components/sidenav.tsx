"use client";

import { useSidenavContext } from "@/contexts/sidenav-context";
import { forwardRef, useCallback, useEffect, useState } from "react";

export type SidenavProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Sidenav = forwardRef<HTMLDivElement, SidenavProps>(
  ({ className, style, ...props }, ref) => {
    const [resizeEvent, setResizeEvent] = useState({
      isResizing: false,

      // used to calculate new width relative to starting width and mouse x
      startingCursorX: 0,
      startingWidth: 0,
    });

    const { width: sidenavWidth, setWidth: setSidenavWidth } =
      useSidenavContext();

    const startResizing = (event: React.MouseEvent<HTMLDivElement>) => {
      setResizeEvent({
        isResizing: true,
        startingCursorX: event.nativeEvent.clientX,
        startingWidth: sidenavWidth,
      });
    };

    const resize = useCallback(
      (event: MouseEvent) => {
        const cursorDeltaX = event.clientX - resizeEvent.startingCursorX;

        const newWidth = resizeEvent.startingWidth + cursorDeltaX;

        setSidenavWidth(newWidth);
      },
      [resizeEvent, setSidenavWidth]
    );

    const stopResizing = () => {
      setResizeEvent((prevEvent) => ({
        ...prevEvent,
        isResizing: false,
      }));
    };

    // the resize event is stopped based on window events
    // to account for when the user releases the mouse while
    // not hovering on the sidenav
    useEffect(() => {
      window.addEventListener("mouseup", (_event) => {
        stopResizing();
      });
    }, []);

    // the resize event is stopped based on window events
    // to account for when the user releases the mouse while
    // not hovering on the sidenav
    useEffect(() => {
      if (!resizeEvent.isResizing) {
        return;
      }

      window.addEventListener("mousemove", resize);

      return () => {
        window.removeEventListener("mousemove", resize);
      };
    }, [resize, resizeEvent.isResizing]);

    return (
      <div
        {...props}
        ref={ref}
        className={`relative  h-[100vh] ${className}`}
        style={{
          flexBasis: sidenavWidth,
          ...style,
        }}
      >
        {/* Sidenav Body */}
        <div className="flex h-full w-full flex-col items-center justify-center bg-gray-200">
          {props.children}
        </div>

        {/* Resize Handle */}
        <div
          onMouseDown={startResizing}
          className="
            absolute
            right-0
            top-0
            h-full
            border-r-2
            border-r-zinc-400
            transition
            duration-100
            before:absolute
            before:top-0
            before:h-full
            before:w-[30px]
            before:translate-x-[-50%]
            before:cursor-col-resize
            before:opacity-20
            before:content-['']
            hover:border-r-blue-500
          "
        />
      </div>
    );
  }
);

Sidenav.displayName = "Sidenav";

export default Sidenav;
