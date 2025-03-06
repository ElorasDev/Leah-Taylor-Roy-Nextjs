import { ReactNode } from "react";
import { SupabaseProvider } from "@/Providers/SupabaseProvider";
import Layout from "../components/Molecule/Layout/Layout";
import "./globals.css";
import ReactQueryProvider from "@/Providers/ReactQueryProvider";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-US">
      <head>
        <Script 
          src="https://tag.simpli.fi/sifitag/fbf0d310-9803-0136-4f23-067f653fa718" 
          strategy="afterInteractive" 
        />
      </head>
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
