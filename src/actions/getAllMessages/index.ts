


export const fetchAllMessages = async (token: string) => {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }

}