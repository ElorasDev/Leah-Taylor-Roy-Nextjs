"use client";
import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import * as XLSX from 'xlsx';
import { useEvent } from '@/hooks/useEvent';
import { FaEdit, FaEye, FaFileCsv, FaFileExcel, FaTrash, FaUsers } from 'react-icons/fa';
import ModalMembers from '../ModalMembers/ModalMembers';
import { fetchAllParticipants } from '@/actions/getAllParticipants';

interface IEvent {
    event: {
        id: number;
        title: string;
        description: string;
        index_image_url: string;
        start_datetime: string;
        end_datetime: string;
        location: string;
        status: 'upcoming' | 'ongoing' | 'complated' | 'canceled';
    };
    isEditing: (select: boolean) => void;
    selectEvent: (select: {
        id: number;
        title: string;
        description: string;
        index_image_url: string;
        start_datetime: string;
        end_datetime: string;
        location: string;
        status: 'upcoming' | 'ongoing' | 'complated' | 'canceled';
    }) => void;
}


type ParticipantsProps = {
    id: string;
    fullname: string;
    phone_number: string;
    email: string
};

const EventItem: NextPage<IEvent> = ({ event, isEditing, selectEvent }) => {

    const { deleteEvent } = useEvent();
    const router = useRouter();
    const savedToken = Cookies.get('auth_token');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [participants, setParticipants] = useState<ParticipantsProps[]>([]);

    const handleExportExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(participants);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Participants");
        XLSX.writeFile(workbook, `participants_${event.title}.xlsx`);
    };

    const handleExportCSV = () => {
        const csvContent = [
            ['Full Name', 'Phone Number', 'Email'],
            ...participants.map(p => [p.fullname, p.phone_number, p.email])
        ]
            .map(e => e.join(','))
            .join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.setAttribute('href', url);
        link.setAttribute('download', `participants_${event.title}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleOpenModal = async (id: number) => {
        setParticipants(await fetchAllParticipants(id.toString(), savedToken!));
        console.log(participants)
        setIsModalOpen(true);
    }

    const handleEdit = () => {
        selectEvent(event);
        isEditing(true);
    };

    const handleDelete = async (id: number) => {
        await deleteEvent(id.toString(), savedToken!);
    };

    const handleView = (id: number) => {
        router.push(`/events/${id}`);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {event.index_image_url && (
                <div className="relative w-full h-48">
                    <Image
                        src={event.index_image_url}
                        alt={event.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-2xl"
                    />
                </div>
            )}
            <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900 truncate">
                    {event.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2 capitalize">
                    {event.status}
                </p>
                <button
                    onClick={() => handleView(event.id)}
                    className="text-blue-500 mt-4 hover:text-blue-700 flex items-center gap-2 transition-all">
                    <FaEye /> View
                </button>
            </div>
            <div className="flex justify-between items-center p-4 border-t border-gray-200 bg-gray-50">
                <button
                    onClick={handleEdit}
                    className="flex items-center text-green-600 hover:text-green-800 transition-all">
                    <FaEdit className="mr-2" /> Edit
                </button>
                <button
                    onClick={() => handleOpenModal(event.id)}
                    className="flex items-center text-purple-600 hover:text-purple-800 transition-all">
                    <FaUsers className="mr-2" /> Members
                </button>
                <button
                    onClick={() => handleDelete(event.id)}
                    className="flex items-center text-red-600 hover:text-red-800 transition-all">
                    <FaTrash className="mr-2" /> Delete
                </button>
            </div>
            {isModalOpen && (
                <ModalMembers onClose={() => setIsModalOpen(false)} isOpen={true} title={"Members"}>

                    {participants && participants.length > 0 ? (
                        <>
                            <div className="flex justify-between">
                                <button
                                    onClick={handleExportExcel}
                                    className="flex mx-2 items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    <FaFileExcel className="mr-2" />
                                    Export Excel
                                </button>

                                <button
                                    onClick={handleExportCSV}
                                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    <FaFileCsv className="mr-2" />
                                    Export CSV
                                </button>
                            </div>
                            <table className="w-full mt-4 border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 p-2">Fullname</th>
                                        <th className="border border-gray-300 p-2">Phone Number</th>
                                        <th className="border border-gray-300 p-2">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {participants.map((participant) => (
                                        <tr key={participant.id} className="hover:bg-gray-50">
                                            <td className="border border-gray-300 p-2">{participant.fullname}</td>
                                            <td className="border border-gray-300 p-2">{participant.phone_number}</td>
                                            <td className="border border-gray-300 p-2">{participant.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    ) : (
                        <p className="text-primary font-bold mt-4">Members Not Found!</p>
                    )}
                </ModalMembers>
            )}
        </div>
    );
};

export default EventItem;