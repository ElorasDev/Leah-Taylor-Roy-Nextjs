import { create } from "zustand";

interface Event {
    id: number;
    title: string;
    description: string;
    index_image_url: string;
    start_datetime: string;
    end_datetime: string;
    location: string;
    status: 'upcoming' | 'ongoing' | 'complated' | 'canceled';
}

type RegisterType = {
    fullname: string;
    phone_number: string;
    email: string;
}

interface EventState {
    loading: boolean;
    error: string | null;
    success: boolean;
    events: Event[];

    getAllEvents: () => Promise<void>;
    getUpcomingEvents: () => Promise<void>;
    getOngoingEvents: () => Promise<void>;
    getCompletedEvents: () => Promise<void>;
    getEventByTitle: (title: string, status: string) => Promise<void>;
    createEvent: (title: string, location: string, description: string, index_image_url: string, status: string, token: string, start_datetime: string, end_datetime: string) => Promise<number | null>;
    updateEvent: (id: string, title: string, location: string, description: string, index_image_url: string, status: string, token: string, start_datetime: string, end_datetime: string) => Promise<void>;
    deleteEvent: (id: string, token: string) => Promise<void>;
    registerEvent: (title: string, id: string, data: RegisterType) => Promise<number | null>;
}

export const useEvent = create<EventState>((set) => ({
    loading: false,
    error: null,
    success: false,
    events: [],

    getAllEvents: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`);
            const data = await response.json();
            set({ events: data, loading: false, success: true });
        } catch {
            set({ error: "Failed to fetch events", loading: false });
        }
    },

    getUpcomingEvents: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch("/api/event/upcoming");
            const data = await response.json();
            set({ events: data, loading: false, success: true });
        } catch {
            set({ error: "Failed to fetch upcoming events", loading: false });
        }
    },

    getOngoingEvents: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch("/api/event/ongoing");
            const data = await response.json();
            set({ events: data, loading: false, success: true });
        } catch {
            set({ error: "Failed to fetch ongoing events", loading: false });
        }
    },

    getCompletedEvents: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch("/api/event/completed");
            const data = await response.json();
            set({ events: data, loading: false, success: true });
        } catch {
            set({ error: "Failed to fetch completed events", loading: false });
        }
    },

    getEventByTitle: async (title, status) => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`/api/event/${status}/${title}`);
            const data = await response.json();
            set({ events: [data], loading: false, success: true });
        } catch {
            set({ error: `Failed to fetch event: ${title}`, loading: false });
        }
    },

    createEvent: async (
        title: string,
        location: string,
        description: string,
        index_image_url: string,
        status: string,
        token: string,
        start_datetime: string,
        end_datetime: string,
    ): Promise<number | null> => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/post-event`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },

                body: JSON.stringify({
                    title,
                    description,
                    index_image_url,
                    status,
                    start_datetime,
                    end_datetime,
                    location,
                } as Event),
            });

            if (!response.ok) throw new Error("Failed to create event");

            const data = await response.json();

            set({ success: true, loading: false });

            return data.id;

        } catch (error) {
            set({ error: "Failed to create event", loading: false });
            return Promise.reject(error);
        }

    },

    updateEvent: async (
        id: string,
        title: string,
        location: string,
        description: string,
        index_image_url: string,
        status: string,
        token: string,
        start_datetime: string,
        end_datetime: string,
    ) => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/update-event/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title,
                    description,
                    index_image_url,
                    status,
                    start_datetime,
                    end_datetime,
                    location,
                } as Event),
            });
            if (!response.ok) throw new Error("Failed to update event");
            set({ success: true, loading: false });
        } catch {
            set({ error: "Failed to update event", loading: false });
        }
    },

    deleteEvent: async (id: string, token: string) => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/remove-event/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) throw new Error("Failed to delete event");

            set((state) => ({
                events: state.events?.filter((event) => event.id !== parseInt(id)),
                success: true,
                loading: false,
            }));

        } catch {
            set({ error: "Failed to delete event", loading: false });
        }
    },

    registerEvent: async (title: string, id: string, data: RegisterType) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/upcoming/${title}/${id}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    id,
                    fullname: data.fullname,
                    phone_number: data.phone_number,
                    email: data.email,
                }),
            });
            if (!response.ok) throw new Error("Failed to register event");

            const responseData = await response.json();

            set({ success: true, loading: false });

            return responseData.id;

        } catch (error) {
            set({ error: "Failed to register event", loading: false });
            return Promise.reject(error);
        }
    }

}));
