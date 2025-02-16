
type CertificateFormData = {
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    select_certificate?: "this certificate is for my birthday" | "this certificate is for my anniversary" | "this certificate is for someone else";
    recipient_first_name?: string;
    recipient_last_name?: string;
    recipient1_first_name?: string;
    recipient1_last_name?: string;
    recipient2_first_name?: string;
    recipient2_last_name?: string;
    email: string;
    recipient_address?: string;
    recipient_birthday?: string;
    date_of_marriage?: string;
    postal_code?: string;
    certificate_destination?: "mail the certificate to me" | "mail the certificate to the recipient";
    additional_certificates?: boolean;
    certificate_description?: string;
    note?: string;
    recipient_postal_code?: string;
    is_for_self?: "this card is for my birthday" | "this card is for someone else",
    section: string;
  }
export const sendCertificateRequest = async (formData: CertificateFormData): Promise<Response | undefined> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/certificates/${formData.section}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), 
      });
  
      if (!response.ok) {
        throw new Error('Failed to send message.');
      }
  
      alert('Message sent successfully!');
      return response
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message || 'Failed to send message.');
      } else {
        alert('Failed to send message.');
      }
    }
  };
  