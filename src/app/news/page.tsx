import Head from "next/head";
import type { Metadata } from "next";
import { fetchPublishedNews } from "@/actions/getPublishedNews";
import News from "@/components/Molecule/News/News";



export const metadata: Metadata = {
  title: "Leah Taylor Roy | Latest News",
  description: "Stay updated with the latest news and announcements from Leah Taylor Roy. Read about recent developments, community updates, and more.",
};


export const revalidate = 60;

const NewsPage = async () => {
  const news = await fetchPublishedNews();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Leah Taylor Roy | Latest News</title>
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
