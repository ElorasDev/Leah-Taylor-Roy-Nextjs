import Head from "next/head";
import type { Metadata } from "next";
import { fetchEvents } from "@/actions/getAllEvents";
import Events from "@/components/Molecule/Events/Events";


export const metadata: Metadata = {
  title: "Leah Taylor Roy | Events & Community Gatherings",
  description:
    "Stay updated with upcoming events, gatherings, and community meetings hosted by Leah Taylor Roy. Find details, dates, and locations here.",

  robots: "index, follow",
  alternates: {
    canonical: "https://leahtaylorroymp-development.vercel.app/events",
  },
  openGraph: {
    type: "website",
    url: "https://leahtaylorroymp-development.vercel.app/events",
    title: "Leah Taylor Roy | Events & Community Gatherings",
    description:
      "Stay updated with upcoming events, gatherings, and community meetings hosted by Leah Taylor Roy. Find details, dates, and locations here.",
    siteName: "Leah Taylor Roy",
    images: [
      {
        url: "https://leahtaylorroymp-development.vercel.app/images/events-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Leah Taylor Roy - Events & Gatherings",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LeahTaylorRoy",
    creator: "@LeahTaylorRoy",
    title: "Leah Taylor Roy | Events & Community Gatherings",
    description:
      "Stay updated with upcoming events, gatherings, and community meetings hosted by Leah Taylor Roy. Find details, dates, and locations here.",
    images: [
      "https://leahtaylorroymp-development.vercel.app/images/events-banner.jpg",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export const revalidate = 60;


const EventsPage = async () => {
  const event = await fetchEvents();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Leah Taylor Roy | Events & Community Gatherings</title>

        <meta
          name="description"
          content="Stay updated with events, gatherings, and community meetings. Check out the latest event details here."
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Events | Official Website" />
        <meta property="og:description" content="Explore events and join us for community gatherings." />
        <meta property="og:image" content="/default-event-image.jpg" />
        <meta property="og:url" content="https://leahtaylorroymp-development.vercel.app/events" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Events | Official Website" />
        <meta name="twitter:description" content="Stay updated with events and join our community." />
        <meta name="twitter:image" content="/default-event-image.jpg" />

        <link rel="canonical" href="https://leahtaylorroymp-development.vercel.app/events" />

        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:;"
        />
      </Head>

      <main className="min-h-screen">
        <h1 className="sr-only">
          Events & Community Gatherings
        </h1>
        <Events event={event} />ط
      </main>
    </>
  );
};

export default EventsPage;
