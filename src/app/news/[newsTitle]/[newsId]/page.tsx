import Head from "next/head";
import type { Metadata } from "next";
import NewsPost from "@/components/Atom/News/NewsPost/NewsPost";
import { fetchPublishedNewsByTitle } from "@/actions/getNewsByTitle";

interface NewsTitleParams {
  params: {
    newsTitle: string;
    newsId: string;
  };
}

export const revalidate = 60;

export default async function NewsTitle({ params }: NewsTitleParams) {

  const news = await fetchPublishedNewsByTitle(params.newsTitle, params.newsId);

  // Structured Data for SEO
  const structuredData = news ? {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: news.title,
    datePublished: news.updated_at,
    image: news.index_image_url,
    author: {
      "@type": "Person",
      "name": "Leah Taylor Roy"
    },
  } : null;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{news?.title || "News Article"} | Official News</title>

        <meta
          name="description"
          content={news?.content || "Read the latest news and updates on important topics."}
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={news?.title || "News Article"} />
        <meta property="og:description" content={news?.content || "Stay updated with the latest news."} />
        <meta property="og:image" content={news?.image || "/default-news-image.jpg"} />
        <meta property="og:url" content={`https://leahtaylorroy.com/news/${params.newsTitle}/${params.newsId}`} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={news?.title || "News Article"} />
        <meta name="twitter:description" content={news?.content || "Read the latest updates and insights."} />
        <meta name="twitter:image" content={news?.index_image_url || "/default-news-image.jpg"} />

        <link rel="canonical" href={`https://leahtaylorroy.com/news/${params.newsTitle}/${params.newsId}`} />

        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:;"
        />
      </Head>

      <main className="min-h-screen">

        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )}

        <NewsPost initialNews={news} params={{ newsTitle: params.newsTitle }} />
      </main>
    </>
  );
}



export const generateMetadata = async ({ params }: NewsTitleParams): Promise<Metadata> => {

  const news = await fetchPublishedNewsByTitle(params.newsTitle, params.newsId);

  return {
    title: news.title,
    description: news.description,
    authors: {
      name: "Leah Taylor Roy"
    },
    other: {
      type: "News",
      image: news.index_image_url,
      eventStatus: news.status,
    }
  }
}