"use client";

import Sidenav from "@/components/Sidenav/Sidenav";

export default function Layout_SplitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-full">
      <Sidenav className="sticky top-0">
        <h1 className="text-4xl font-bold">Sidenav</h1>
      </Sidenav>

      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
}
