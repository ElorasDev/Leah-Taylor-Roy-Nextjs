import type { Metadata } from "next";
import { fetchAllMedia } from '@/actions/getAllMedia';
import Gallery from '@/components/Molecule/Gallery/Gallery';


export const metadata: Metadata = {
  title: "Leah Taylor Roy | Gallery of Leadership & Community Engagement",
  description:
    "Explore the vibrant gallery of Leah Taylor Roy, featuring memorable photos from key events, community engagements, and inspiring moments. Discover the stories behind the images that reflect her leadership and commitment to public service.",

  robots: "index, follow",
  alternates: {
    canonical: "https://www.leahtaylorroymp.ca/gallery",
  },
  openGraph: {
    type: "website",
    url: "https://www.leahtaylorroymp.ca/gallery",
    title: "Leah Taylor Roy | Gallery of Leadership & Community Engagement",
    description:
      "Explore the vibrant gallery of Leah Taylor Roy, featuring memorable photos from key events, community engagements, and inspiring moments. Discover the stories behind the images that reflect her leadership and commitment to public service.",
    siteName: "Leah Taylor Roy",
    images: [
      {
        url: "https://www.leahtaylorroymp.ca/images/gallery-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Leah Taylor Roy Gallery",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LeahTaylorRoy",
    creator: "@LeahTaylorRoy",
    title: "Leah Taylor Roy | Gallery of Leadership & Community Engagement",
    description:
      "Explore the vibrant gallery of Leah Taylor Roy, featuring memorable photos from key events, community engagements, and inspiring moments. Discover the stories behind the images that reflect her leadership and commitment to public service.",
    images: [
      "https://www.leahtaylorroymp.ca/images/gallery-preview.jpg",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export const revalidate = 60;

const GalleryPage = async () => {

  const media = await fetchAllMedia();

  return (
    <main className="min-h-screen">
      <h1 className="sr-only">
        Gallery of Leadership & Community Engagement
      </h1>
      <p className="sr-only">
        Explore a collection of moments showcasing leadership and community engagement.
      </p>
      <Gallery
        initialMedia={media}
      />

    </main>
  )
}

export default GalleryPage;