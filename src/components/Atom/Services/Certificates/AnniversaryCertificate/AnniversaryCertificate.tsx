"use client";

import { sendCertificateRequest } from "@/actions/sendCertificateRequest";
import { useState, ChangeEvent, FormEvent } from "react";

type CertificateFormData = {
    first_name: string;
    last_name: string;
    phone_number: string;
    select_certificate: "this certificate is for my anniversary" | "this certificate is for someone else";
    recipient1_first_name: string,
    recipient1_last_name: string,
    recipient2_first_name: string,
    recipient2_last_name: string,
    email: string;
    recipient_address?: string;
    date_of_marriage: string;
    postal_code: string;
    certificate_destination: "mail the certificate to me" | "mail the certificate to the recipient";
    additional_certificates: boolean;
    note?: string;
    section: string;
}

const AnniversaryCertificate = () => {
    const [formData, setFormData] = useState<CertificateFormData>({
        first_name: "",
        last_name: "",
        phone_number: "",
        select_certificate: "this certificate is for my anniversary",
        recipient1_first_name: "",
        recipient1_last_name: "",
        recipient2_first_name: "",
        recipient2_last_name: "",
        email: "",
        recipient_address: "",
        date_of_marriage: "",
        postal_code: "",
        certificate_destination: "mail the certificate to me",
        additional_certificates: false,
        note: "",
        section: "anniversary",
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
                    first_name: "",
                    last_name: "",
                    phone_number: "",
                    select_certificate: "this certificate is for my anniversary",
                    recipient1_first_name: "",
                    recipient1_last_name: "",
                    recipient2_first_name: "",
                    recipient2_last_name: "",
                    email: "",
                    recipient_address: "",
                    date_of_marriage: "",
                    postal_code: "",
                    certificate_destination: "mail the certificate to me",
                    additional_certificates: false,
                    note: "",
                    section: "birthday",
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
                    <label htmlFor="first_name">First Name:</label>
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
                    <label htmlFor="last_name">Last Name:</label>
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
                    <label htmlFor="phone_number">Phone Number:</label>
                    <input
                        type="number"
                        id="phone_number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="select_certificate">Certificate Selection:</label>
                    <select
                        id="select_certificate"
                        name="select_certificate"
                        value={formData.select_certificate}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    >
                        <option value="this certificate is for my anniversary">
                            This certificate is for my anniversary
                        </option>
                        <option value="this certificate is for someone else">
                            This certificate is for someone else
                        </option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="recipient1_first_name">Recipient 1 First Name:</label>
                    <input
                        type="text"
                        id="recipient1_first_name"
                        name="recipient1_first_name"
                        value={formData.recipient1_first_name}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="recipient1_last_name">Recipient 1 Last Name:</label>
                    <input
                        type="text"
                        id="recipient1_last_name"
                        name="recipient1_last_name"
                        value={formData.recipient1_last_name}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="recipient2_first_name">Recipient 2 First Name:</label>
                    <input
                        type="text"
                        id="recipient2_first_name"
                        name="recipient2_first_name"
                        value={formData.recipient2_first_name}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="recipient2_last_name">Recipient 2 Last Name:</label>
                    <input
                        type="text"
                        id="recipient2_last_name"
                        name="recipient2_last_name"
                        value={formData.recipient2_last_name}
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
                    <label htmlFor="date_of_marriage">Date of Marriage:</label>
                    <input
                        type="date"
                        id="date_of_marriage"
                        name="date_of_marriage"
                        value={formData.date_of_marriage}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="postal_code">Postal Code:</label>
                    <input
                        type="text"
                        id="postal_code"
                        name="postal_code"
                        value={formData.postal_code}
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
                        value={formData.certificate_destination}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    >
                        <option value="mail the certificate to me">
                            Mail the certificate to me
                        </option>
                        <option value="mail the certificate to the recipient">
                            Mail the certificate to the recipient
                        </option>
                    </select>
                </div>

                <div className="mb-3 flex items-center">
                    <input
                        type="checkbox"
                        id="additional_certificates"
                        name="additional_certificates"
                        checked={formData.additional_certificates}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="additional_certificates">Additional Certificates</label>
                </div>
                <p className="my-2 text-gray-700">
                    Please check this box if you would like to request all applicable certificates from the Prime Minister, Governor General, and/or Her Majesty the Queen.
                    If you would only like to apply for some of the applicable certificates, please indicate in the note field.
                </p>
                <div className="mb-3">
                    <label htmlFor="note">Note:</label>
                    <textarea
                        id="note"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        className="w-full border p-2"
                    ></textarea>
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

export default AnniversaryCertificate;
