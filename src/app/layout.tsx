import { ReactNode } from "react";
import { SupabaseProvider } from "@/Providers/SupabaseProvider";
import type { Metadata } from "next";
import Layout from "../components/Molecule/Layout/Layout";
import "./globals.css";
import ReactQueryProvider from "@/Providers/ReactQueryProvider";

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
        <ReactQueryProvider>
          <SupabaseProvider>
            <Layout>
              {children}
            </Layout>
          </SupabaseProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
