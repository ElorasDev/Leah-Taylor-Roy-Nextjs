import { ReactNode } from "react";
import { SupabaseProvider } from "@/Providers/SupabaseProvider";
import type { Metadata } from "next";
import Layout from "../components/Molecule/Layout/Layout";
import "./globals.css";

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
      <body className="antialiased bg-[#F2F3F4]">
        <SupabaseProvider>
          <Layout>
            {children}
          </Layout>
        </SupabaseProvider>
      </body>
    </html>
  );
}
