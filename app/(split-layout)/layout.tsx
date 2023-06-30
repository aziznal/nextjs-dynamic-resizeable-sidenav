import Sidenav from "@/components/sidenav";

export default function Layout_SplitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-full">
      <Sidenav className="sticky top-0" />
      <main className="flex flex-1 flex-col overflow-y-clip">{children}</main>
    </div>
  );
}
