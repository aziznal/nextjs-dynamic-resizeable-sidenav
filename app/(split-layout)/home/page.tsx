"use client";

import { useSidenavContext } from "@/contexts/sidenav-context";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Home() {
  const { getPortalContainer, portalReady } = useSidenavContext();

  const [count, setCount] = useState(0);

  if (!portalReady) return null;

  return (
    <>
      {createPortal(<h1>{count}</h1>, getPortalContainer())}

      <h1 className="flex h-full items-center justify-center gap-4 text-4xl">
        Main Content{" "}
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="rounded bg-blue-400 p-3 text-lg text-white"
        >
          Increase Count
        </button>
      </h1>
    </>
  );
}
