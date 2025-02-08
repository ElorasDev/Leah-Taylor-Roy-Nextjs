import { fetchEvents } from "@/actions/getAllEvents";
import Events from "@/components/Molecule/Events/Events";


export const revalidate = 60; 

const EventsPage = async () => {

  const event = await fetchEvents();

  return (
    <main className="min-h-screen">
            <Events 
              event={event}
            />
    </main>
  )
}

export default EventsPage;