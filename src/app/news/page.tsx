import Head from "next/head";
import type { Metadata } from "next";
import { fetchPublishedNews } from "@/actions/getPublishedNews";
import News from "@/components/Molecule/News/News";



export const metadata: Metadata = {
  title: "Leah Taylor Roy | Latest News & Announcements",
  description:
    "Get the latest news, updates, and announcements from Leah Taylor Roy. Stay informed about recent developments, community updates, and more.",

  robots: "index, follow",
  alternates: {
    canonical: "https://leahtaylorroymp-development.vercel.app/news",
  },
  openGraph: {
    type: "website",
    url: "https://leahtaylorroymp-development.vercel.app/news",
    title: "Leah Taylor Roy | Latest News & Announcements",
    description:
      "Get the latest news, updates, and announcements from Leah Taylor Roy. Stay informed about recent developments, community updates, and more.",
    siteName: "Leah Taylor Roy",
    images: [
      {
        url: "https://leahtaylorroymp-development.vercel.app/images/news-banner.jpg",
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
      "https://leahtaylorroymp-development.vercel.app/images/news-banner.jpg",
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
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Leah Taylor Roy | Latest News & Announcements</title>
        <meta
          name="description"
          content="Stay updated with the latest news and announcements from Leah Taylor Roy. Read about recent developments, community updates, and more."
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://leahtaylorroymp-development.vercel.app/news" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' https: data:;" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Latest News | Leah Taylor Roy" />
        <meta property="og:description" content="Stay updated with the latest news and announcements from Leah Taylor Roy." />
        <meta property="og:image" content="https://leahtaylorroy.com/images/news-thumbnail.jpg" />
        <meta property="og:url" content="https://leahtaylorroy.com/news" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Latest News | Leah Taylor Roy" />
        <meta name="twitter:description" content="Stay updated with the latest news and announcements from Leah Taylor Roy." />
        <meta name="twitter:image" content="https://leahtaylorroy.com/images/news-thumbnail.jpg" />
      </Head>

      <main className="min-h-screen">
        <h1 className="sr-only">
          Latest News & Announcements
        </h1>
        <News initialNews={news} />
      </main>


      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Latest News | Leah Taylor Roy",
            "author": { "@type": "Person", "name": "Leah Taylor Roy" },
            "publisher": { "@type": "Organization", "name": "Leah Taylor Roy Official", "logo": { "@type": "ImageObject", "url": "https://leahtaylorroy.com/images/logo.png" } },
            "datePublished": "2024-02-06",
            "dateModified": "2024-02-06",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://leahtaylorroy.com/news" }
          }
        `}
      </script>
    </>
  );
};

export default NewsPage;
