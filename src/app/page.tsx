import Head from "next/head";
import Landing from "@/components/Molecule/Landing/Landing";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Leah Taylor Roy | Official Website",
  description: "Discover information about Leah Taylor Roy, her key initiatives, and contact details. Explore her parliamentary work and learn more about her public service commitments.",
  robots: "index, follow",
  alternates: {
    canonical: "https://leahtaylorroymp-development.vercel.app",
  },
  openGraph: {
    type: "website",
    url: "https://leahtaylorroymp-development.vercel.app",
    title: "Leah Taylor Roy | Official Website",
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
    title: "Leah Taylor Roy | Official Website",
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
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Discover information about Leah Taylor Roy, her key initiatives, and contact details. Explore her parliamentary work and learn more about her public service commitments."
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Landing Page | Official Website" />
        <meta property="og:description" content="Discover information about Leah Taylor Roy, her key initiatives, and contact details. Explore her parliamentary work and learn more about her public service commitments." />
        <meta property="og:image" content="https://leahtaylorroymp-development.vercel.app/images/landing-preview.jpg" />
        <meta property="og:url" content="https://leahtaylorroymp-development.vercel.app" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Landing Page | Official Website" />
        <meta name="twitter:description" content="Discover information about Leah Taylor Roy, her key initiatives, and contact details. Explore her parliamentary work and learn more about her public service commitments." />
        <meta name="twitter:image" content="https://leahtaylorroymp-development.vercel.app/images/landing-preview.jpg" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://leahtaylorroymp-development.vercel.app" />

        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:;"
        />
      </Head>
      <main>
        <h1 className="sr-only">
          Leah Taylor Roy | Official Website
        </h1>
        <Landing />
      </main>
    </>
  );
}
