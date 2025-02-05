


export const fetchAllMedia = async () => {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/media/published`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
        )
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }


}