import { NextPage } from "next";
import EventDetails from "@/components/Atom/Events/EventDetails/EventDetails";


type EventDetailsParams = {
    params: {
        eventTitle: string;
        eventId: string;
    };
};


const EventDetail: NextPage<EventDetailsParams> = ({ params }) => {
    return (
        <main className="min-h-screen">
            <EventDetails
                params={{ eventTitle: params.eventTitle, eventId: params.eventId }}
            />
        </main>
    )
}

export default EventDetail