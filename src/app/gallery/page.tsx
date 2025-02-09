import type { Metadata } from "next";
import { fetchAllMedia } from '@/actions/getAllMedia';
import Gallery from '@/components/Molecule/Gallery/Gallery';


export const metadata: Metadata = {
  title: "Leah Taylor Roy | Gallery",
  description: "Immerse yourself in the Gallery of Leah Taylor Roy. Explore a curated collection of vibrant photos capturing memorable events, community engagements, and inspiring moments that showcase her leadership and dedication to public service. Each image tells a unique story, offering a visual journey through her impactful work and the dynamic communities she serves.",
};


export const revalidate = 60;

const GalleryPage = async () => {

  const media = await fetchAllMedia();

  return (
    <main className="min-h-screen">

      <Gallery
        initialMedia={media}
      />

    </main>
  )
}

export default GalleryPage;