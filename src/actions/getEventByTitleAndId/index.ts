
export const fetchEventByTitleAndId = async (eventTitle: string, eventId: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/${eventTitle}/${eventId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                next: {
                    revalidate: 60,
                }
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching event:', error);
        return [];
    }
};
