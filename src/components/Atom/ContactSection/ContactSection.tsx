"use client";
import { NextPage } from "next";
import { usePathname } from "next/navigation";
import { sendMessage } from "@/actions/sendMessage";
import { ChangeEvent, FormEvent, useState } from "react";
import { FiUser, FiMail, FiPhone, FiSend } from "react-icons/fi";



interface ContactSectionProps {
    title: string;
}



const ContactSection: NextPage<ContactSectionProps> = ({ title }) => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone_number: "",
        content: "",
    });

    const pathname = usePathname();

    const [phoneError, setPhoneError] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === "phone_number") {
            const canadaPhoneRegex = /^\+1\d{10}$/;
            if (!canadaPhoneRegex.test(value)) {
                setPhoneError("Please enter a valid Canadian phone number (e.g., +12345678901)");
            } else {
                setPhoneError("");
            }
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (phoneError) return;
        const { fullname, email, phone_number, content } = formData;
        await sendMessage(fullname, email, phone_number, content);
        setFormData({ fullname: "", email: "", phone_number: "", content: "" });
    };

    return (
        <section className="max-w-4xl mx-auto px-4 py-16 relative">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-50 to-white opacity-30 rounded-xl"></div>

            <header className="text-center relative mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    {title}
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Have questions or feedback? We’re here to help! Fill out the form below and we’ll get back to you.
                </p>
            </header>

            <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                            Fullname
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <span className="px-3 text-gray-500">
                                <FiUser size={20} aria-hidden="true" />
                            </span>
                            <input
                                id="fullname"
                                type="text"
                                value={formData.fullname}
                                name="fullname"
                                className="w-full px-4 py-3 outline-none"
                                placeholder="Enter your full name"
                                onChange={handleChange}
                                required
                                aria-label="Full Name"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                            Email Address
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <span className="px-3 text-gray-500">
                                <FiMail size={20} aria-hidden="true" />
                            </span>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                name="email"
                                className="w-full px-4 py-3 outline-none"
                                placeholder="example@domain.com"
                                onChange={handleChange}
                                required
                                aria-label="Email Address"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <label htmlFor="phone_number" className="block text-gray-700 text-sm font-medium mb-2">
                            Phone Number
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <span className="px-3 text-gray-500">
                                <FiPhone size={20} aria-hidden="true" />
                            </span>
                            <input
                                id="phone_number"
                                type="tel"
                                name="phone_number"
                                value={formData.phone_number}
                                className="w-full px-4 py-3 outline-none"
                                placeholder="+12345678901"
                                pattern="^\+1\d{10}$"
                                title="Please enter a valid Canadian phone number (e.g., +12345678901)"
                                onChange={handleChange}
                                required
                                aria-label="Phone Number"
                            />
                        </div>
                        {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-gray-700 text-sm font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Write your message here..."
                            onChange={handleChange}
                            required
                            aria-label="content"
                        ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-lg flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-lg hover:scale-105"
                            title="Send your message"
                        >
                            <FiSend size={18} aria-hidden="true" /> Send Message
                        </button>

                        { pathname !== "/contact-us" &&
                            <button
                                type="button"
                                className="w-full sm:w-auto px-8 py-3 border-2 border-secendory text-secendory hover:bg-secendory hover:text-white duration-200 transition-all hover:scale-105 rounded-lg flex items-center justify-center gap-2"
                                title="Contact our office"
                            >
                                <FiPhone size={18} aria-hidden="true" /> Contact My Office
                            </button>
                        }
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
