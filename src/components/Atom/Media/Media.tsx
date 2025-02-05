"use client";

import { useEffect, useState } from "react";
import { fetchAllMedia } from "@/actions/getAllMedia";
import MediaCard from "@/components/Atom/Media/MediaCrad/MediaCard";

type MediaType = 'image' | 'video';

interface MediaItem {
  id: string;
  file_type: MediaType;
  path: string;
  updated_at: string;
  alt?: string;
}

const Media = () => {
  const [mediaData, setMediaData] = useState<MediaItem[]>([]);

  useEffect(() => {
    const getMedia = async () => {
      const data = await fetchAllMedia();
      setMediaData(data);
    };
    getMedia();
  }, []);

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Media Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mediaData.length > 0 ? (
          mediaData.map((media) => (
            <MediaCard
              key={media.id}
              file_type={media.file_type}
              path={media.path}
              updated_at={media.updated_at}
              alt={media.alt || "Media content"}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No media available</p>
        )}
      </div>
    </section>
  );
};

export default Media;
