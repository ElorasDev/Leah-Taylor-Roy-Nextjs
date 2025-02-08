"use client";
import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { formatDate } from '@/utils/FormatData';
import { FiCalendar, FiMapPin, FiClock, FiAlertCircle } from "react-icons/fi";
import RegisterEventModal from "../RegisterEventModal/RegisterEventModal";
import { useEvent } from "@/hooks/useEvent";



interface EventDetails {
    initialEvent: EventData;
    params: {
        eventTitle: string;
        eventId: string;
    };
}


type EventData = {
    id: number;
    title: string;
    description: string;
    index_image_url: string;
    start_datetime: string;
    end_datetime: string;
    location: string;
    status: 'upcoming' | 'ongoing' | 'completed' | 'canceled';
    updated_at: string;
};

type RegisterType = {
    fullname: string;
    phone_number: string;
    email: string;
}


const EventDetails: NextPage<EventDetails> = ({ params, initialEvent }) => {

    const { registerEvent } = useEvent();
    const [event] = useState<EventData>(initialEvent);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRegister = async (data: RegisterType) => {
        try {
            await registerEvent(
                params.eventTitle,
                params.eventId,
                data
            )
            toast.success("Registration successful!")
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : "Registration failed"
            );
        }
    }

    const structuredData = event ? {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": event.title,
        startDate: event.start_datetime,
        endDate: event.end_datetime,
        location: {
            "@type": "Place",
            "name": event.location,
        },
        image: event.index_image_url,
        eventStatus: event.status,
    } : null;

    if (!initialEvent) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center max-w-md p-8 bg-white rounded-xl shadow-lg">
                    <FiAlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
                    <p className="text-gray-600 mb-4">We&apos;re having trouble loading the event details. Please try again later.</p>
                </div>
            </div>
        );
    }

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center max-w-md p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h2>
                    <p className="text-neutral">The requested event could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{`${event.title} - Event Details`}</title>
                <meta name="description" content={event.description.slice(0, 160)} />
                <meta property="og:title" content={event.title} />
                <meta property="og:description" content={event.description.slice(0, 150)} />
                <meta property="og:image" content={event.index_image_url} />
                <meta property="og:type" content="event" />
            </Head>

            {structuredData && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            )}

            <section className="bg-gray-50 py-28 px-4">
                <Toaster />
                <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-3xl mx-auto">
                        {/* Image Section */}
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-8 group">
                            <Image
                                src={event.index_image_url}
                                alt={event.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <span className="inline-block font-bold bg-primary text-sm px-4 py-2 rounded-full mb-4">
                                    {event.status}
                                </span>
                                <h1 className="text-4xl font-bold tracking-tight drop-shadow-md">
                                    {event.title}
                                </h1>
                            </div>
                        </div>

                        {/* Event Meta */}
                        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-neutral">
                                <div className="flex items-center space-x-3">
                                    <FiCalendar className="w-6 h-6 text-primary" />
                                    <div>
                                        <p className="text-sm font-medium">Published</p>
                                        <p className="font-semibold">
                                            {formatDate(event.start_datetime)}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FiClock className="w-6 h-6 text-primary" />
                                    <div>
                                        <p className="text-sm font-medium">Time</p>
                                        <p className="font-semibold">
                                            {formatDate(event.start_datetime)} -{' '}
                                            {formatDate(event.end_datetime)}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FiMapPin className="w-6 h-6 text-primary" />
                                    <div>
                                        <p className="text-sm font-medium">Location</p>
                                        <p className="font-semibold">{event.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event Content */}
                        <article
                            className="mt-8 text-gray-800 dark:text-gray-200 leading-relaxed text-lg 
          prose prose-lg dark:prose-invert max-w-none
          prose-headings:text-gray-900 dark:prose-headings:text-gray-100
          prose-a:text-primary hover:prose-a:text-primary/80
          prose-img:rounded-xl prose-img:shadow-lg
          break-words
          "
                            dangerouslySetInnerHTML={{ __html: event.description }} />

                        {/* CTA Section */}
                        {event.status === "upcoming" &&
                            <div className="mt-12 border-t pt-12 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Ready to Join the Event?
                                </h3>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105">
                                    Register Now
                                    <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                <RegisterEventModal
                                    isOpen={isModalOpen}
                                    onClose={() => setIsModalOpen(false)}
                                    eventTitle={event.title}
                                    eventId={event.id}
                                    onRegister={handleRegister}
                                />
                            </div>
                        }
                    </div>
                </article>
            </section >
        </>
    );
};

export default EventDetails;