import { NextPage } from 'next';
import Image from 'next/image';
import { formatDate } from '@/utils/FormatData';

type MediaType = 'image' | 'video';

interface MediaCardProps {
    file_type: MediaType;
    path: string;
    updated_at: string;
    alt?: string;
}

const MediaCard: NextPage<MediaCardProps> = ({
    file_type,
    path,
    updated_at,
    alt = 'Media content'
}) => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "MediaObject",
        "contentUrl": path,
        "uploadDate": updated_at,
        "description": alt,
        "encodingFormat": file_type === 'image' ? 'image/*' : 'video/mp4'
    };

    return (
        <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Media Container */}
            <div className="relative aspect-video w-full">
                {file_type === 'image' ? (
                    <Image
                        src={path}
                        alt={alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                    />
                ) : (
                    <video
                        controls
                        className="w-full h-full object-cover"
                        title={alt}
                    >
                        <source src={path} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>

            {/* Metadata */}
            <div className={`p-4 ${file_type === 'image' ? 'bg-gradient-to-t from-black/80 via-black/50' : ''} absolute ${file_type === 'image' ? 'bottom-0' : 'top-0'} w-full`}>
                <div className="flex items-center justify-between text-sm text-white">
                    <span className="inline-block px-3 py-1 bg-primary/90 rounded-full text-xs font-medium capitalize">
                        {file_type}
                    </span>
                    <time
                        dateTime={updated_at}
                        className="font-mono opacity-90 hover:opacity-100 transition-opacity"
                        title="Last updated"
                    >
                        {formatDate(updated_at)}
                    </time>
                </div>
            </div>

            {/* Hover Overlay */}
            {file_type === 'image' &&
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            }
        </div>
    );
};

export default MediaCard;