import { NextPage } from "next";
import EventDetails from "@/components/Atom/Events/EventDetails/EventDetails";
import { fetchEventByTitleAndId } from "@/actions/getEventByTitleAndId";

type EventDetailsParams = {
    params: {
        eventTitle: string;
        eventId: string;
    };
};


export const revalidate = 60;

const EventDetail: NextPage<EventDetailsParams> = async ({ params }) => {

    const event = await fetchEventByTitleAndId(params.eventTitle, params.eventId);

    return (
        <main className="min-h-screen">
            <EventDetails
                initialEvent={event}
                params={{ eventTitle: params.eventTitle, eventId: params.eventId }}
            />
        </main>
    )
}

export default EventDetail