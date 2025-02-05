"use client";
import { NextPage } from "next";
import Image from "next/image";
import Cookies from "js-cookie";
import { FaTrash, FaCopy } from "react-icons/fa";
import useGallery from "@/hooks/useGallery/useGallery";
import { ChangeEvent } from "react";

interface IMedia {
    isEditing: (select: boolean) => void;
    media: {
        id: number;
        filename: string;
        path: string;
        size: number;
        file_type: "image" | "video" | "document";
        published: boolean;
    };
    galleryData: (select: {
        id: number;
        filename: string;
        path: string;
        size: number;
        file_type: "image" | "video" | "document";
        published: boolean;
    }) => void;
    section: string;
}

const Media: NextPage<IMedia> = ({ media }) => {
    const { deleteMedia, updateMedia } = useGallery();
    const savedToken = Cookies.get("auth_token");

    const handleDelete = async (id: number) => {
        await deleteMedia(id, savedToken!);
    };

    const handleCopyPath = (path: string) => {
        navigator.clipboard.writeText(path).then(() => {
            alert("File path copied successfully!");
        });
    };

    const handleStatusChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        const newStatus = event.target.value === "published";
        await updateMedia(media.id, savedToken!, newStatus);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
            {media.file_type === "image" ? (
                <Image
                    src={media.path}
                    alt={media.filename}
                    width={200}
                    height={150}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                />
            ) : media.file_type === "video" ? (
                <video
                    controls
                    className="w-full h-48 object-cover"
                >
                    <source src={media.path} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : null}

            <div className="p-4">
                <p className="text-sm text-center text-gray-500 mt-2 capitalize">
                    {media.published ? "Published" : "Unpublished"}
                </p>
                <select
                    value={media.published ? "published" : "unpublished"}
                    onChange={handleStatusChange}
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                >
                    <option value="published">Published</option>
                    <option value="unpublished">Unpublished</option>
                </select>
            </div>
            <div className="flex justify-between items-center p-4 border-t border-primary">
                <button
                    onClick={() => handleCopyPath(media.path)}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <FaCopy className="text-lg" /> Get URL
                </button>
                <button
                    onClick={() => handleDelete(media.id)}
                    className="flex items-center gap-2 text-red-500 hover:text-red-700 transition-colors"
                >
                    <FaTrash className="text-lg" /> Delete
                </button>
            </div>
        </div>
    );
};

export default Media;
