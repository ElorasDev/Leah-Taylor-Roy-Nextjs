import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leah Taylor Roy",
  description: "Personal website of Leah Taylor Roy, featuring blog posts, news, and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
