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