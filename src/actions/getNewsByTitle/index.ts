
export const fetchPublishNewsByTitle = async (newsTitle: string, newsId: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/published/${newsTitle}/${newsId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching published news:', error);
        return [];
    }
};
