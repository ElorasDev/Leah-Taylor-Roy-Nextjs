"use client";
import { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import useDebounce from "@/hooks/useDebounce/useDebounce";
import CardNews from "../Events/CardEvent/CardEvent";


type EventsItem = {
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

interface EventListProps {
    initialEvent: EventsItem[];
}

const EventsList:NextPage<EventListProps> = ({initialEvent}) => {

    const [events] = useState<EventsItem[]>(initialEvent);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

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

        if (!initialEvent) {
            return (
                <div className="text-center text-primary">
                    <p>An error occurred while loading data</p>
                </div>
            );
        }

    return (
        <>
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

                { sortedAndFilteredNews.length === 0 ? (
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

                <div className="text-center mt-10 flex justify-center">
                    <p className="text-lg">
                        For more information on events, please visit the{" "}
                        <Link href="https://liberal.ca/eda-meetings" passHref className="w-fit" target="_blank" rel="noopener noreferrer">
                          <p className="text-primary font-bold hover:underline">
                                EDA website
                          </p>
                        </Link>
                    </p>
                </div>
                
            </section>
        </>
    );
};

export default EventsList;
