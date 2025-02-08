import { NextPage } from "next";
import Media from "@/components/Atom/Media/Media";


interface IMediaProps {
    initialMedia: MediaItem[];
}


type MediaType = 'image' | 'video';

type MediaItem = {
    id: string;
    file_type: MediaType;
    path: string;
    updated_at: string;
    alt?: string;
}


const Gallery: NextPage<IMediaProps> = ({ initialMedia }) => {
    return (
        <section>
            <div className="py-20 px-8">
                <Media
                    initialMedia={initialMedia}
                />
            </div>
        </section>
    )
}

export default Gallery;