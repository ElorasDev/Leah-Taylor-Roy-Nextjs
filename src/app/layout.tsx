import { ReactNode } from "react";
import { SupabaseProvider } from "@/Providers/SupabaseProvider";
import Layout from "../components/Molecule/Layout/Layout";
import "./globals.css";
import ReactQueryProvider from "@/Providers/ReactQueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
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
