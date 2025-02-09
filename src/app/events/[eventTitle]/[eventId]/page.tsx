import Head from "next/head";
import type { Metadata } from 'next'
import EventDetails from "@/components/Atom/Events/EventDetails/EventDetails";
import { fetchEventByTitleAndId } from "@/actions/getEventByTitleAndId";

interface EventDetailsParams {
  params: {
    eventTitle: string;
    eventId: string;
  };
}

export const revalidate = 60;

export default async function EventDetail({ params }: EventDetailsParams) {
  const event = await fetchEventByTitleAndId(params.eventTitle, params.eventId);

  const pageTitle = event?.title || "Event Details";
  const pageDescription = event?.description || "Discover more about this event and join us for an exciting experience.";

  const structuredData = event ? {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    startDate: event.start_datetime,
    endDate: event.end_datetime,
    location: {
      "@type": "Place",
      "name": event.location,
    },
    image: event.index_image_url,
    eventStatus: event.status,
  } : null;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{`${pageTitle} | Official Website`}</title>

        <meta name="description" content={pageDescription} />

        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={event?.index_image_url || "/default-event-image.jpg"} />
        <meta property="og:url" content={`https://leahtaylorroymp-development.vercel.app/events/${params.eventTitle}/${params.eventId}`} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={event?.image || "/default-event-image.jpg"} />

        <link rel="canonical" href={`https://leahtaylorroymp-development.vercel.app/events/${params.eventTitle}/${params.eventId}`} />

        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:;"
        />
      </Head>

      <main className="min-h-screen">
        {structuredData && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        )}
        <EventDetails
          initialEvent={event}
          params={{ eventTitle: params.eventTitle, eventId: params.eventId }}
        />
      </main>
    </>
  );
}

export const generateMetadata = async ({ params }: EventDetailsParams): Promise<Metadata> => {

  const event = await fetchEventByTitleAndId(params.eventTitle, params.eventId);

  return {
    title: event.title,
    description: event.description,
    authors: {
      name: "Leah Taylor Roy"
    },
    other: {
      type: "Event",
      startDate: event.start_datetime,
      endDate: event.end_datetime,
      location: event.location,
      image: event.index_image_url,
      eventStatus: event.status,
    }
  }
}
