"use client";

import { Fragment, useEffect, useState } from "react";
import { NextPage } from "next";
import { useEvent } from "@/hooks/useEvent";
import EventItem from "../EventsItems/EventItem";

interface INewsPostListProps {
    selectedItem: 'All Events' | 'upcoming' | 'ongoing' | 'complated' | 'canceled';
    isEditing: (select: boolean) => void;
    selectEvent: (select: {
        id: number;
        title: string;
        description: string;
        index_image_url: string;
        start_datetime: string;
        location: string;
        end_datetime: string;
        status: 'upcoming' | 'ongoing' | 'complated' | 'canceled';
    }) => void;
}

const EventList: NextPage<INewsPostListProps> = ({ selectedItem, isEditing, selectEvent }) => {
    const { getAllEvents, events, loading, error } = useEvent();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        getAllEvents();
    }, [getAllEvents]);

    const filteredevent = events?.filter(event => {
        const matchesCategory = selectedItem === 'All Events' || event.status === selectedItem.toLowerCase();
        const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-neutral mb-4">
                {selectedItem}
            </h1>

            {/* Input Search Bar */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search by title..."
                    className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {loading && (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            )}

            {error && (
                <div className="text-red-500 text-center font-medium">
                    Error: {error}
                </div>
            )}

            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredevent && filteredevent.length > 0 ? (
                        filteredevent.map((event, index) => (
                            <Fragment key={index}>
                                <EventItem
                                    event={event}
                                    isEditing={(select) => isEditing(select)}
                                    selectEvent={(select) => selectEvent(select)}
                                />
                            </Fragment>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-primary font-bold text-lg">
                            No Event available.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default EventList;
