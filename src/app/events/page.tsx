import type { Metadata } from "next";
import { fetchEvents } from "@/actions/getAllEvents";
import Events from "@/components/Molecule/Events/Events";


export const metadata: Metadata = {
  title: "Leah Taylor Roy | Events & Community Gatherings",
  description:
    "Stay updated with upcoming events, gatherings, and community meetings hosted by Leah Taylor Roy. Find details, dates, and locations here.",

  robots: "index, follow",
  alternates: {
    canonical: "https://www.leahtaylorroymp.ca/events",
  },
  openGraph: {
    type: "website",
    url: "https://www.leahtaylorroymp.ca/events",
    title: "Leah Taylor Roy | Events & Community Gatherings",
    description:
      "Stay updated with upcoming events, gatherings, and community meetings hosted by Leah Taylor Roy. Find details, dates, and locations here.",
    siteName: "Leah Taylor Roy",
    images: [
      {
        url: "https://www.leahtaylorroymp.ca/images/events-banner.jpg",
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
      "https://www.leahtaylorroymp.ca/images/events-banner.jpg",
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
      <main className="min-h-screen">
        <h1 className="sr-only">
          Events & Community Gatherings
        </h1>
        <p className="sr-only">
          Explore upcoming events and community gatherings happening near you.
        </p>
        <Events event={event} />
      </main>
    </>
  );
};

export default EventsPage;
