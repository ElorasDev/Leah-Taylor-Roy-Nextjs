"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import useDebounce from "@/hooks/useDebounce/useDebounce";
import { fetchEvents } from "@/actions/getAllEvents";
import CardNews from "../Events/CardEvent/CardEvent";

interface EventsItem {
    id: number;
    title: string;
    description: string;
    index_image_url: string;
    start_datetime: string;
    end_datetime: string;
    location: string;
    status: 'upcoming' | 'ongoing' | 'complated' | 'canceled';
    updated_at: string;
}

const EventsList = () => {
    const [events, setEvents] = useState<EventsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const [statusFilter, setStatusFilter] = useState<string>("all"); // فیلتر استاتوس
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    useEffect(() => {
        const getEvents = async () => {
            const data = await fetchEvents();
            setEvents(data);
            setLoading(false);
        };
        getEvents();
    }, []);

    const sortedAndFilteredNews = events
        .sort((a, b) => {
            return sortOrder === 'desc'
                ? new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
                : new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime();
        })
        .filter(item =>
            item.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
        )
        .filter(item =>
            statusFilter === "all" ? true : item.status === statusFilter
        );

    return (
        <>
            <Head>
                <title>Events - Stay Updated</title>
                <meta name="description" content="Stay updated with the latest events and happenings. Find out what's going on around you." />
                <meta name="keywords" content="events, latest events, upcoming events, event updates, event news" />
                <meta name="author" content="Leah Taylor Roy" />
            </Head>

            <section className="max-w-6xl mx-auto py-10 px-4">
                <h1 className="text-3xl font-bold text-center mb-6">Events</h1>
                <article>
                    <p className="text-lg text-center text-neutral mb-6">
                        Stay updated with the latest events and happenings. Discover upcoming events and join us to make a difference.
                    </p>
                </article>

                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 my-4">
                    {/* Search bar */}
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        />
                    </div>

                    {/* Sort options */}
                    <div className="w-full md:w-auto">
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                            className="p-2 border border-gray-300 rounded-lg"
                        >
                            <option value="desc">Newest First</option>
                            <option value="asc">Oldest First</option>
                        </select>
                    </div>

                    {/* Status Filter */}
                    <div className="w-full md:w-auto">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg"
                        >
                            <option value="all">All Statuses</option>
                            <option value="upcoming">Upcoming</option>
                            <option value="ongoing">Ongoing</option>
                            <option value="complated">Completed</option>
                            <option value="canceled">Canceled</option>
                        </select>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                ) : sortedAndFilteredNews.length === 0 ? (
                    <p className="text-center text-primary font-bold">No events available.</p>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedAndFilteredNews.map((item) => (
                            <article key={item.id}>
                                <CardNews {...item} />
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default EventsList;
