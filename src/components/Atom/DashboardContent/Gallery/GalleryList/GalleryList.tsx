"use client";

import { NextPage } from "next";
import Media from "../Media";
import useGallery from "@/hooks/useGallery/useGallery";
import { Fragment, useEffect } from "react";

interface IGalleryListProps {
    isEditing: (select: boolean) => void;
    selectMedia: (select: {
        id: number;
        filename: string;
        path: string;
        mimetype?: string;
        size: number;
        file_type: 'image' | 'video' | 'document';
        published: boolean;
    }) => void;
}

const GalleryList: NextPage<IGalleryListProps> = ({ isEditing, selectMedia }) => {

    const { getAllMedia, media, loading, error } = useGallery();

    useEffect(() => {
        getAllMedia();
    }, [getAllMedia]);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-neutral mb-6">
                All Media
            </h1>

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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {media && media.length > 0 ? (
                        media.map((media, index) => (
                            <Fragment key={index}>
                                <Media
                                    media={media}
                                    isEditing={(select) => {
                                        isEditing(select);
                                    }}
                                    galleryData={(select) => {
                                        selectMedia(select)
                                    }}
                                    section="media"
                                />
                            </Fragment>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-primary font-bold text-lg">
                            No news posts available.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default GalleryList;