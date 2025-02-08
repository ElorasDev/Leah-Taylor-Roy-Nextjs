import { fetchAllMedia } from '@/actions/getAllMedia';
import Gallery from '@/components/Molecule/Gallery/Gallery';
import React from 'react'

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