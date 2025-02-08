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

  return (
    <main className="min-h-screen">
      <EventDetails
        initialEvent={event}
        params={{ eventTitle: params.eventTitle, eventId: params.eventId }}
      />
    </main>
  );
}
