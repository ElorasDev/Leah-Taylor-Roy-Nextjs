import { useState } from 'react';
import CreatePostNews from './CreateEvent/CreateEvent';
import EventList from './EventList/EventList';

const EventManagement = () => {

    const [showForm, setShowForm] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [editing, setEditing] = useState(false);
    const [selectedPost, setSelectedPost] = useState<{
        id: number;
        title: string;
        description: string;
        index_image_url: string;
        start_datetime: string;
        end_datetime: string;
        location: string;
        status: 'upcoming' | 'ongoing' | 'complated' | 'canceled';
    } | null>(null);
    const [selectedNav, setSelectedNav] = useState<"All Events" | 'upcoming' | 'ongoing' | 'complated' | 'canceled'>('All Events');


    return (
        <div className="w-full">
            <div className="flex justify-between">
                <div>
                    <button
                        className="bg-primary text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            if (editing) {
                                setEditing(false);
                                setSelectedPost(null);
                            } else {
                                setShowForm(!showForm);
                            }
                        }}
                    >
                        {editing || showForm ? 'Hide Form' : 'Create Event'}
                    </button>
                </div>
                {!showForm && (
                    <div className="relative">
                        <button
                            className="
                          bg-neutral
                          text-white
                            px-4 py-2
                            rounded-md
                            font-bold
                            w-[120px]
                            hover:shadow-lg
                            transition-shadow
                            duration-300
                            "
                            onClick={() => setShowNav(!showNav)}
                        >
                            {selectedNav}
                        </button>
                        {showNav && (
                            <div
                                className="
                                absolute
                                top-full
                                left-0
                                mt-2
                                w-[150px]
                              bg-white
                              text-neutral
                                shadow-md
                                rounded
                                z-40
                                ">
                                <button
                                    className="py-2 my-2 hover:font-bold w-full text-left px-4"
                                    onClick={() => {
                                        setSelectedNav('All Events');
                                        setShowNav(false);
                                    }}
                                >
                                    All Events
                                </button>
                                <button
                                    className="py-2 my-2 hover:font-bold w-full text-left px-4"
                                    onClick={() => {
                                        setSelectedNav('upcoming');
                                        setShowNav(false);
                                    }}
                                >
                                    Upcoing
                                </button>
                                <button
                                    className="py-2 my-2 hover:font-bold w-full text-left px-4"
                                    onClick={() => {
                                        setSelectedNav('ongoing');
                                        setShowNav(false);
                                    }}
                                >
                                    Ongoing
                                </button>
                                <button
                                    className="py-2 my-2 hover:font-bold w-full text-left px-4"
                                    onClick={() => {
                                        setSelectedNav('complated');
                                        setShowNav(false);
                                    }}
                                >
                                    Complated
                                </button>
                                <button
                                    className="py-2 my-2 hover:font-bold w-full text-left px-4"
                                    onClick={() => {
                                        setSelectedNav('canceled');
                                        setShowNav(false);
                                    }}
                                >
                                    Canceled
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="my-4">
                {editing || showForm ? (
                    <CreatePostNews
                        setHideCreateEventHandler={(select) => {
                            setShowForm(select)
                            setEditing(select)
                        }}
                        event={selectedPost}
                    />
                )
                    : (
                        <EventList
                            selectedItem={selectedNav}
                            isEditing={() => {
                                setEditing(true)
                                setShowForm(false)
                            }}
                            selectEvent={(select) => {
                                setSelectedPost(select)
                            }}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default EventManagement;