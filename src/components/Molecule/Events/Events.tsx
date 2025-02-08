import EventsList from "@/components/Atom/Events/EventsList";
import { NextPage } from "next";


interface IEventsProps {
    event: EventType[];
}



type EventType = {
    id: number;
    title: string;
    description: string;
    index_image_url: string;
    start_datetime: string;
    end_datetime: string;
    location: string;
    status: 'upcoming' | 'ongoing' | 'complated' | 'canceled';
    updated_at: string;
}


const Events: NextPage<IEventsProps> = ({ event }) => {
    return (
        <section>
            <div className="px-8 py-20">
                <EventsList
                    initialEvent={event}
                />
            </div>
        </section>
    )
}

export default Events;