import { forwardRef } from "react";

export type SidenavProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Sidenav = forwardRef<HTMLDivElement, SidenavProps>((props, ref) => {
  return (
    <div ref={ref} {...props}>
      {props.children}
    </div>
  );
});

Sidenav.displayName = "Sidenav";

export default Sidenav;
