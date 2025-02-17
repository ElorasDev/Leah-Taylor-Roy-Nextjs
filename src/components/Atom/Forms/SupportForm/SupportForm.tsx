"use client";
import { sendSupportRequest } from '@/actions/sendSupportRequest';
import { ChangeEvent, FormEvent, useState } from 'react'

const SupportForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    postal_code: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { first_name, last_name, email, phone_number, postal_code } = formData;
    await sendSupportRequest(first_name, last_name, email, phone_number, postal_code)
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      postal_code: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 border border-gray-300  rounded-lg bg-white sm:bg-neutral sm:border-neutral"
            required
          />
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded-lg bg-white sm:bg-neutral sm:border-neutral"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-lg bg-white sm:bg-neutral sm:border-neutral"
            required
          />
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-300 rounded-lg bg-white sm:bg-neutral sm:border-neutral"
            required
          />
          <input
            type="text"
            name="postal_code"
            value={formData.postal_code}
            onChange={handleChange}
            placeholder="Postal Code"
            className="w-full p-2 border border-gray-300 rounded-lg bg-white sm:bg-neutral sm:border-neutral"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 rounded-lg shadow-sm hover:opacity-90 transition-opacity"
          >
            Send your Request
          </button>
        </div>
      </form>
    </>
  );
}

export default SupportForm;
