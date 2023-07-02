"use client";

import SettingsSidenav from "@/components/sidenav/settings-sidenav";
import { useSidenavContext } from "@/contexts/sidenav-context";
import { PropsWithChildren, useEffect } from "react";

export default function SettingsLayout({ children }: PropsWithChildren) {
  const { pushContent, popContent } = useSidenavContext();

  useEffect(() => {
    pushContent(<SettingsSidenav/>);
    return () => popContent();
  }, [pushContent, popContent]);

  // useEffect(() => {
  //   return () => popContent();
  // }, []);

  return children;
}
