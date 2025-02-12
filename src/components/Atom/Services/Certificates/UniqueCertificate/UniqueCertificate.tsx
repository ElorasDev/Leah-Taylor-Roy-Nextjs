"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { sendCertificateRequest } from "@/actions/sendCertificateRequest";

type UniqueCertificateFormData = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  certificate_description?: string;
  section: string;
};

const UniqueCertificate = () => {
  const [formData, setFormData] = useState<UniqueCertificateFormData>({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    certificate_description: "",
    section: "unique",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await sendCertificateRequest(formData);
      if (response && !response.ok) {
        const errorData = await response.json();
        setMessage("Error: " + errorData.message);
      } else if (response) {
        setMessage("Unique certificate request submitted successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          phone_number: "",
          email: "",
          certificate_description: "",
          section: "unique",
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
      <h1 className="text-2xl font-bold mb-4">Unique Certificate Request Form</h1>
      {message && <p className="mb-4">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="first_name" className="block mb-1">
            First Name:
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className="w-full border p-2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="block mb-1">
            Last Name:
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="w-full border p-2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone_number" className="block mb-1">
            Phone Number:
          </label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            className="w-full border p-2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
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
          <label htmlFor="certificate_description" className="block mb-1">
            Certificate Description:
          </label>
          <textarea
            id="certificate_description"
            name="certificate_description"
            value={formData.certificate_description}
            onChange={handleChange}
            className="w-full border p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
};

export default UniqueCertificate;
