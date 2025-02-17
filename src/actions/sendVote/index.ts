export const sendVote = async (first_name: string, last_name: string, email: string, postal_code: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vote`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first_name, last_name, email, postal_code }),
    });
    if (response.ok) {
        alert('Vote sent successfully!');
    } else {
        alert('Failed to send Vote!');
    }
}