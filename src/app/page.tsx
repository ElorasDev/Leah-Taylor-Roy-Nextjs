import Landing from "@/components/Molecule/Landing/Landing";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "MP Leah Taylor Roy | Official Website",
  description: "Discover information about Leah Taylor Roy, her key initiatives, and contact details. Explore her parliamentary work and learn more about her public service commitments.",
  robots: "index, follow",
  alternates: {
    canonical: "https://leahtaylorroymp-development.vercel.app",
  },
  openGraph: {
    type: "website",
    url: "https://leahtaylorroymp-development.vercel.app",
    title: "MP Leah Taylor Roy | Official Website",
    description:
      "Discover information about Leah Taylor Roy, her key initiatives, and contact details.",
    siteName: "Leah Taylor Roy",
    images: [
      {
        url: "https://leahtaylorroymp-development.vercel.app/images/about-leah.jpg",
        width: 1200,
        height: 630,
        alt: "Leah Taylor Roy Portrait",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LeahTaylorRoy",
    creator: "@LeahTaylorRoy",
    title: "MP Leah Taylor Roy | Official Website",
    description:
      "Discover information about Leah Taylor Roy, her key initiatives, and contact details.",
    images: [
      "https://leahtaylorroymp-development.vercel.app/images/about-leah.jpg",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function Home() {
  return (
    <>
      <main>
        <h1 className="sr-only">
          MP Leah Taylor Roy | Official Website
        </h1>
        <Landing />
      </main>
    </>
  );
}
