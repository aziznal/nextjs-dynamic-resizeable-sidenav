import { SidenavProvider } from "@/contexts/sidenav-context";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
          as="style"
        />

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
          as="style"
        />
      </head>

      <body className={`${inter.className} h-full`}>
        <SidenavProvider>{children}</SidenavProvider>
      </body>
    </html>
  );
}
