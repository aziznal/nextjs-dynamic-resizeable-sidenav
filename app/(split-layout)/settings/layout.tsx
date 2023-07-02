"use client";

import SettingsSidenav from "@/components/sidenav/settings-sidenav";
import { useSidenavContext } from "@/contexts/sidenav-context";
import { PropsWithChildren, useEffect } from "react";

export default function SettingsLayout({ children }: PropsWithChildren) {
  const { pushContent, popContent } = useSidenavContext();

  useEffect(() => {
    console.log("pushing settings sidenav");
    pushContent(<SettingsSidenav />);
    return () => popContent();
  }, [pushContent, popContent]);

  return children;
}
