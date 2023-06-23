import { useSidenavContext } from "@/contexts/sidenav-context";
import { forwardRef } from "react";

export type SidenavProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Sidenav = forwardRef<HTMLDivElement, SidenavProps>(
  ({ className, style, ...props }, ref) => {
    const { width: sidenavWidth } = useSidenavContext();

    return (
      <div
        {...props}
        ref={ref}
        className={`flex h-[100vh] flex-col items-center justify-center bg-blue-500 ${className}`}
        style={{
          flexBasis: sidenavWidth,
          ...style,
        }}
      >
        {props.children}
      </div>
    );
  }
);

Sidenav.displayName = "Sidenav";

export default Sidenav;
