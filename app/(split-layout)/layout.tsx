import Sidenav from "@/components/sidenav";
import Link from "next/link";

export default function Layout_SplitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-full">
      <Sidenav className="sticky top-0" />

      <main className="flex flex-1 flex-col">
        <div className="flex gap-4">
          <Link href="/home">Home</Link>
          <Link href="/test">Test</Link>
        </div>

        {children}
      </main>
    </div>
  );
}
