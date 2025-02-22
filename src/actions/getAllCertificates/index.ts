
export const fetchAllCertificates = async (token: string, certificate_type: string) => {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/certificates/${certificate_type}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching certificate:', error);
        return [];
    }

}