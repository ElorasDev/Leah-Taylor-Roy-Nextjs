import type { Metadata } from "next";
import { fetchPublishedNews } from "@/actions/getPublishedNews";
import News from "@/components/Molecule/News/News";



export const metadata: Metadata = {
  title: "Leah Taylor Roy | Latest News & Announcements",
  description:
    "Get the latest news, updates, and announcements from Leah Taylor Roy. Stay informed about recent developments, community updates, and more.",

  robots: "index, follow",
  alternates: {
    canonical: "https://www.leahtaylorroymp.ca/news",
  },
  openGraph: {
    type: "website",
    url: "https://www.leahtaylorroymp.ca/news",
    title: "Leah Taylor Roy | Latest News & Announcements",
    description:
      "Get the latest news, updates, and announcements from Leah Taylor Roy. Stay informed about recent developments, community updates, and more.",
    siteName: "Leah Taylor Roy",
    images: [
      {
        url: "https://www.leahtaylorroymp.ca/images/news-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Leah Taylor Roy - Latest News & Updates",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LeahTaylorRoy",
    creator: "@LeahTaylorRoy",
    title: "Leah Taylor Roy | Latest News & Announcements",
    description:
      "Get the latest news, updates, and announcements from Leah Taylor Roy. Stay informed about recent developments, community updates, and more.",
    images: [
      "https://www.leahtaylorroymp.ca/images/news-banner.jpg",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};



export const revalidate = 60;

const NewsPage = async () => {
  const news = await fetchPublishedNews();

  return (
    <>
      <main className="min-h-screen">
        <h1 className="sr-only">
          Latest News & Announcements
        </h1>
        <p className="sr-only">
          Stay updated with the latest news and important announcements.
        </p>
        <News initialNews={news} />
      </main>


      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Latest News | Leah Taylor Roy",
            "author": { "@type": "Person", "name": "Leah Taylor Roy" },
            "publisher": { "@type": "Organization", "name": "Leah Taylor Roy Official", "logo": { "@type": "ImageObject", "url": "https://www.leahtaylorroymp.ca/images/logo.png" } },
            "datePublished": "2024-02-06",
            "dateModified": "2024-02-06",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.leahtaylorroymp.ca/news" }
          }
        `}
      </script>
    </>
  );
};

export default NewsPage;
