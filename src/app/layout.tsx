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
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16897279532"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16897279532');
          `}
        </Script>
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
