import { FormEvent, useState, useEffect } from 'react';
import { NextPage } from 'next';
import Cookies from 'js-cookie';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useEvent } from '@/hooks/useEvent';
import { generateRandomFiveDigitNumber } from '@/utils/RandomNumber';

interface ICreateEventProps {
    setHideCreateEventHandler?: (select: boolean) => void;
    event?: {
        id: number;
        title: string;
        description: string;
        index_image_url: string;
        start_datetime: string;
        end_datetime: string;
        location: string;
        status: 'upcoming' | 'ongoing' | 'complated' | 'canceled';
    } | null;
}

const CreateEvent: NextPage<ICreateEventProps> = ({ setHideCreateEventHandler, event }) => {
    const { createEvent, updateEvent, loading, error } = useEvent();
    const [isLoading, setLoading] = useState(false);
    const [eventId, seteventId] = useState<string | null>(event ? event.id.toString() : null);
    const [title, setTitle] = useState(event ? event.title : '');
    const [description, setDescription] = useState(event ? event.description : '');
    const [status, setStatus] = useState<'upcoming' | 'ongoing' | 'complated' | 'canceled'>(event ? event.status : 'upcoming');
    const [location, setLocation] = useState(event ? event.location : '');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [startDatetime, setStartDatetime] = useState<string | null | Date>(event ? new Date(event.start_datetime) : null);
    const [endDatetime, setEndDatetime] = useState<string | null | Date>(event ? new Date(event.end_datetime) : null);
    const savedToken = Cookies.get('auth_token');
    const randomNumber = generateRandomFiveDigitNumber();

    const supabaseClient = useSupabaseClient();

    useEffect(() => {
        const savedTitle = localStorage.getItem('draftTitle');
        const savedContent = localStorage.getItem('draftContent');
        const savedStatus = localStorage.getItem('draftStatus');
        const savedLocation = localStorage.getItem('draftLocation');
        const savedStartDatetime = localStorage.getItem('draftStartDatetime');
        const savedEndDatetime = localStorage.getItem('draftEndDatetime');

        if (savedTitle) setTitle(savedTitle);
        if (savedContent) setDescription(savedContent);
        if (savedStatus) setStatus(savedStatus as 'upcoming' | 'ongoing' | 'complated' | 'canceled');
        if (savedLocation) setLocation(savedLocation);
        if (savedStartDatetime) setStartDatetime(savedStartDatetime);
        if (savedEndDatetime) setEndDatetime(savedEndDatetime);
    }, []);

    useEffect(() => {
        const saveDraft = () => {
            localStorage.setItem('draftTitle', title);
            localStorage.setItem('draftDescription', description);
            localStorage.setItem('draftStatus', status);
            localStorage.setItem('draftLocation', location);
            localStorage.setItem('draftStartDatetime', startDatetime ? startDatetime.toString() : '');
            localStorage.setItem('draftEndDatetime', endDatetime ? endDatetime.toString() : '');
        };

        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            saveDraft();
            e.preventDefault();
            e.returnValue = '';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [title, description, status, startDatetime, endDatetime, location]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title || !description || !imageFile || !startDatetime || !endDatetime || !location) {
            alert('Title, content, image, start date, and end date are required.');
            return;
        }

        let imageUrl = '';

        try {
            setLoading(true);
            if (imageFile) {
                const { error } = await supabaseClient.storage
                    .from('event')
                    .upload(`image-event-${randomNumber}-${imageFile.name}`, imageFile);

                if (error) {
                    console.error('Image upload failed', error);
                    alert('Failed to upload image.');
                    setLoading(false);
                    return;
                }

                const { data } = supabaseClient.storage
                    .from('event')
                    .getPublicUrl(`image-event-${randomNumber}-${imageFile.name}`);

                imageUrl = data.publicUrl || '';
            }

            if (eventId) {
                await updateEvent(
                    eventId,
                    title,
                    location,
                    description,
                    imageUrl,
                    status,
                    savedToken || '',
                    startDatetime ? startDatetime.toString() : '',
                    endDatetime ? endDatetime.toString() : '');
                alert('Post updated!');
                if (setHideCreateEventHandler) {
                    setHideCreateEventHandler(false);
                }
            } else {

                const response = await createEvent(
                    title,
                    location,
                    description,
                    imageUrl,
                    status,
                    savedToken || '',
                    startDatetime ? startDatetime.toString() : '',
                    endDatetime ? endDatetime.toString() : ''
                );

                seteventId(response ? response.toString() : null)

                localStorage.removeItem('draftTitle');
                localStorage.removeItem('draftDescription');
                localStorage.removeItem('draftStatus');
                localStorage.removeItem('draftLocation');
                localStorage.removeItem('draftStartDatetime');
                localStorage.removeItem('draftEndDatetime');
                alert('Event created successfully!');
                if (setHideCreateEventHandler) {
                    setHideCreateEventHandler(false);
                }
            }
        } catch (err) {
            console.error('Error creating event:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="border p-4 rounded-md">
            <h2 className="text-2xl mb-4">Create Event</h2>

            <div className="mb-4">
                <label htmlFor="imageFile" className="block text-sm font-medium text-neutral">
                    Upload Image:
                </label>
                <input
                    type="file"
                    id="imageFile"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-neutral">
                    Title:
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="content" className="block mb-2 text-sm font-medium text-neutral">
                    Description
                </label>
                <ReactQuill
                    value={description}
                    onChange={setDescription}
                    className="block w-full h-fit focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-neutral">
                    Location:
                </label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="startDatetime" className="block text-sm font-medium text-neutral">
                    Start Date and Time:
                </label>
                <input
                    type="datetime-local"
                    id="startDatetime"
                    value={startDatetime ? (startDatetime instanceof Date ? startDatetime.toISOString().slice(0, 16) : startDatetime) : ''}
                    onChange={(e) => setStartDatetime(e.target.value ? e.target.value : null)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="endDatetime" className="block text-sm font-medium text-neutral">
                    End Date and Time:
                </label>
                <input
                    type="datetime-local"
                    id="endDatetime"
                    value={endDatetime ? (endDatetime instanceof Date ? endDatetime.toISOString().slice(0, 16) : endDatetime) : ''}
                    onChange={(e) => setEndDatetime(e.target.value ? e.target.value : null)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
            </div>

            <div className="my-4">
                <label htmlFor="status" className="block text-sm font-medium text-neutral">
                    Status:
                </label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as 'upcoming' | 'ongoing' | 'complated' | 'canceled')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                >
                    <option value="upcoming">Upcoming</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                    <option value="canceled">Canceled</option>
                </select>
            </div>

            <button
                disabled={isLoading || loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
                {isLoading || loading ? 'Sending...' : 'Send Event'}
            </button>

            {error && <div className="mt-4 text-red-600 text-center">{error}</div>}
        </form>
    );
};

export default CreateEvent;
