"use client";

import Sidenav from "@/components/sidenav";
import DefaultSidenav from "@/components/sidenav/default-sidenav";
import { useSidenavContext } from "@/contexts/sidenav-context";
import { useEffect } from "react";

export default function Layout_SplitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pushContent } = useSidenavContext();

  // sets the default sidenav
  useEffect(() => {
    pushContent(<DefaultSidenav />);
  }, [pushContent]);

  return (
    <div className="relative flex min-h-full">
      <Sidenav className="sticky top-0" />
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
}
