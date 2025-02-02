"use client";
import { useRouter } from "next/navigation";
import { FiPhone } from "react-icons/fi";
import { govermentServicesData } from "./data";

const GovernmentServices = () => {

    const router = useRouter();

    return (
        <section className="max-w-4xl mx-auto">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-center">
                    Assistance with Government Services
                </h1>
            </header>
            <article>
                <p className="mb-4">
                    One of the most important parts of my job is to help you interact with
                    the federal government. We are here to help guide you through the
                    process of dealing with federal departments, programs, and services
                    including:
                </p>
                <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    {govermentServicesData.map((service) => (
                        <li key={service.id}>{service.title}</li>
                    ))}
                </ul>
                <p>
                    If you have any questions or need assistance with any of these
                    services, please contact our office{" "}
                    <button
                        type="button"
                        className="w-full my-2 sm:w-auto px-8 py-3 border-2 border-secendory text-secendory hover:bg-secendory hover:text-white duration-200 transition-all hover:scale-105 rounded-lg flex items-center justify-center gap-2"
                        title="Contact our office"
                        onClick={() => router.push("contact-leah") }
                    >
                        <FiPhone size={18} aria-hidden="true" /> Contact Us
                    </button>
                </p>
            </article>
        </section>
    );
};

export default GovernmentServices;
