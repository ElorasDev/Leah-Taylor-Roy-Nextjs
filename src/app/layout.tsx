import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Layout from "../components/Molecule/Layout/Layout";

export const metadata: Metadata = {
  title: "Leah Taylor Roy",
  description: "Personal website of Leah Taylor Roy, featuring blog posts, news, and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
