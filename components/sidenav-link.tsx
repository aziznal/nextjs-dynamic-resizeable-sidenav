"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, forwardRef } from "react";

export type SidenavLinkProps = React.HTMLAttributes<HTMLAnchorElement> &
  PropsWithChildren & {
    href: string;
  };

const SidenavLink = forwardRef<HTMLAnchorElement, SidenavLinkProps>(
  ({ className, style, ...props }, ref) => {
    const pathname = usePathname();

    const isActive = pathname === props.href;

    return (
      <Link
        {...props}
        ref={ref}
        className={`
          relative
          flex
          items-center
          rounded
          p-3
          ps-5
          transition
          duration-100

          hover:bg-blue-200
          focus:bg-blue-200
          focus:outline-none

          ${
            isActive &&
            `
              bg-blue-200
              before:absolute
              before:left-0
              before:h-[24px]
              before:w-[5px]
              before:rounded-e-full
              before:bg-blue-500
              before:content-['']
            `
          }

          ${className}
        `}
      >
        {props.children}
      </Link>
    );
  }
);

SidenavLink.displayName = "SidenavLink";

export default SidenavLink;
