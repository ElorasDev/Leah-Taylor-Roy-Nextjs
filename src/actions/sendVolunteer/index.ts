export const sendVolunteer = async (first_name: string, last_name: string, email: string, phone_number:string, postal_code: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/volunteer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first_name, last_name, email, postal_code, phone_number }),
    });
    if (response.ok) {
        alert('Volunteer sent successfully!');
    } else {
        alert('Failed to send Volunteer!');
    }
}