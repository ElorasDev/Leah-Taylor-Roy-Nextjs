import Head from "next/head";
import Landing from "@/components/Molecule/Landing/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <title>Landing Page | Official Website</title>

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
        <Landing />
      </main>
    </>
  );
}
