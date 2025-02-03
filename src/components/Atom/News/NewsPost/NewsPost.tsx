"use client";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { fetchPublishNewsByTitle } from "@/actions/getNewsByTitle";
import { formatDate } from "@/utils/FormatData";

type NewsData = {
    title: string;
    content: string;
    index_image_url: string;
    updated_at: string;
    author: string;
};

type NewsTitleParams = {
    params: { 
        newsTitle: string;
        newsId: string;
     };
};

const NewsPost: NextPage<NewsTitleParams> = ({ params }) => {
    const [news, setNews] = useState<NewsData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (params && params.newsTitle) {
                    const newsData = await fetchPublishNewsByTitle(params.newsTitle, params.newsId);
                    console.log(newsData)
                    if (newsData.title) {
                        setNews(newsData);
                    } else {
                        setNews(null);
                    }
                }
            } catch {
                setError('Failed to fetch news');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [params]);

    // **Structured Data for SEO**
    const structuredData = news
        ? {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: news.title,
            datePublished: news.updated_at,
            image: news.index_image_url,
            author: {
                "@type": "Person",
                name: news.author,
            },
        }
        : null;

    if (loading) {
        return (
            <div className="max-w-3xl mx-auto py-28 px-4 animate-pulse">
                <div className="h-96 w-full bg-gray-300 rounded-lg"></div>
                <div className="h-8 w-2/3 bg-gray-300 mt-6 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-300 mt-2 rounded"></div>
                <div className="h-24 w-full bg-gray-300 mt-6 rounded"></div>
            </div>
        );
    }

    if (error) {
        return <p className="text-center text-primary mt-28 font-bold">{error}</p>;
    }

    if (news === null) {
        return <p className="text-center text-primary mt-28 font-bold">No news found.</p>;
    }

    return (
        <>
            <Head>
                <title>{news.title} - Latest News</title>
                <meta name="description" content={`${news.title} - Read the latest news by ${news.author}.`} />
                <meta name="keywords" content={`${news.title}, news, latest updates`} />
                <meta property="og:title" content={news.title} />
                <meta property="og:description" content={news?.content ? news.content.slice(0, 150) : ''} />
                <meta property="og:image" content={news.index_image_url} />
                <meta property="og:type" content="article" />
            </Head>

            <section className="max-w-3xl mx-auto py-28 px-4">
                {/* SEO JSON-LD */}
                {structuredData && (
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
                )}

                {/* News Image */}
                <div className="relative overflow-hidden rounded-lg md:h-[550px] h-96 w-full shadow-lg">
                    <Image
                        src={news.index_image_url}
                        alt={news.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 leading-tight">{news.title}</h1>
                <p className="text-gray-500 text-sm mt-2">
                    Published on {formatDate(news.updated_at)} by <span className="font-semibold">{news.author}</span>
                </p>

                {/* News Content */}
                <article className="mt-6 text-gray-800 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: news.content }} />
            </section>
        </>
    );
};

export default NewsPost;
