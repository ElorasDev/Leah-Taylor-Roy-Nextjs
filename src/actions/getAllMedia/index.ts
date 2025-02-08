


export const fetchAllMedia = async () => {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/media/published`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                revalidate: 60,
            }
        }
        )
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching media:', error);
        return [];
    }


}