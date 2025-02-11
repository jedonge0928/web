import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import QueryProvider from "./_components/QueryProvider";

import Gnb from "./_components/_gnb/Gnb";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="defaultFont">
        <QueryProvider>
          <Gnb />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
