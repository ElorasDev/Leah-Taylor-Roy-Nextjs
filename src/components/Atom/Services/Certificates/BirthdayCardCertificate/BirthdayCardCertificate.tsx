"use client";

import { sendCertificateRequest } from "@/actions/sendCertificateRequest";
import { useState, ChangeEvent, FormEvent } from "react";

type CertificateFormData = {
  recipient_first_name: string;
  recipient_last_name: string;
  email: string;
  recipient_address?: string;
  recipient_birthday: string;
  recipient_postal_code: string,
  is_for_self: "this card is for my birthday" | "this card is for someone else",
  section: string;
}

const BirthdayCardCertificate = () => {
  const [formData, setFormData] = useState<CertificateFormData>({
    recipient_first_name: "",
    recipient_last_name: "",
    email: "",
    recipient_address: "",
    recipient_birthday: "",
    recipient_postal_code: "",
    is_for_self: "this card is for my birthday",
    section: "birthday-card",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await sendCertificateRequest(formData)
      if (response && !response.ok) {
        const errorData = await response.json();
        setMessage("Error: " + errorData.message);
      } else if (response) {
        setMessage("Certificate request submitted successfully!");
        setFormData({
          recipient_first_name: "",
          recipient_last_name: "",
          email: "",
          recipient_address: "",
          recipient_birthday: "",
          recipient_postal_code: "",
          is_for_self: "this card is for my birthday",
          section: "birthday-card",
        });
      }
    } catch (error) {
      setMessage("An error occurred while submitting the request.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Certificate Request Form</h1>
      {message && <p className="mb-4">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="recipient_first_name">Recipient First Name:</label>
          <input
            type="text"
            id="recipient_first_name"
            name="recipient_first_name"
            value={formData.recipient_first_name}
            onChange={handleChange}
            required
            className="w-full border p-2"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="recipient_last_name">Recipient Last Name:</label>
          <input
            type="text"
            id="recipient_last_name"
            name="recipient_last_name"
            value={formData.recipient_last_name}
            onChange={handleChange}
            required
            className="w-full border p-2"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2"
          />
        </div>


        <div className="mb-3">
          <label htmlFor="recipient_address">Recipient Address:</label>
          <input
            type="text"
            id="recipient_address"
            name="recipient_address"
            value={formData.recipient_address}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="recipient_birthday">Recipient Birthday:</label>
          <input
            type="date"
            id="recipient_birthday"
            name="recipient_birthday"
            value={formData.recipient_birthday}
            onChange={handleChange}
            required
            className="w-full border p-2"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="recipient_postal_code">Recipient Postal Code:</label>
          <input
            type="text"
            id="recipient_postal_code"
            name="recipient_postal_code"
            value={formData.recipient_postal_code}
            onChange={handleChange}
            required
            className="w-full border p-2"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="certificate_destination">Certificate Destination:</label>
          <select
            id="certificate_destination"
            name="certificate_destination"
            value={formData.is_for_self}
            onChange={handleChange}
            required
            className="w-full border p-2"
          >
            <option value="mail the certificate to me">
              this card is for my birthday
            </option>
            <option value="mail the certificate to the recipient">
              this card is for someone else
            </option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white py-2 px-4 rounded"
        >
          {loading ? "Submitting..." : "Submit Certificate Request"}
        </button>
      </form>
    </div>
  );
};

export default BirthdayCardCertificate;
