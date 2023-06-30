"use client";

import { useSidenavContext } from "@/contexts/sidenav-context";
import { createPortal } from "react-dom";

export default function Test() {
  const { getPortalContainer, portalReady } = useSidenavContext();

  if (!portalReady) return null;

  return (
    <>
      {createPortal(<h1>Test Sidenav</h1>, getPortalContainer())}

      <h1 className="flex h-full items-center justify-center gap-4 text-4xl">
        Test Page
      </h1>
    </>
  );
}
