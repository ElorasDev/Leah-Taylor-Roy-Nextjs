"use client";
import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { formatDate } from "@/utils/FormatData";

interface INewsPostProps {
  initialNews: NewsData;
  params: {
    newsTitle: string;
  }
};

type NewsData = {
  id: number;
  title: string;
  content: string;
  index_image_url: string;
  updated_at: string;
};

const NewsPost: NextPage<INewsPostProps> = ({ initialNews, params }) => {

  const [news] = useState<NewsData>(initialNews);

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



  if (news === null) {
    return (
      <div className="text-center py-28">
        <p className="text-primary font-bold text-xl">No news found.</p>
      </div>
    );
  }

  return (
    <>
      <Head>

        <title>{`${news.title} - Leah Taylor Roy`}</title>
        <meta name="description" content={`${news.title} - Read the latest news by Leah Taylor Roy.`} />
        <meta name="keywords" content={`${news.title}, news, latest updates`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={news.title} />
        <meta property="og:description" content={news?.content?.slice(0, 150) || ''} />
        <meta property="og:image" content={news.index_image_url} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://leahtaylorroymp-development.vercel.app/news/${params.newsTitle}`} />

      </Head>

      <section className="max-w-4xl mx-auto py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        {structuredData && (
          <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
          />
        )}

        {/* News Image */}
        <div className="relative my-10 overflow-hidden rounded-xl md:h-[550px] h-96 w-full shadow-xl group">
          <Image
            src={news.index_image_url}
            alt={news.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </div>

        {/* Article Header */}
        <div className="mt-8 md:mt-12">
            
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Leah Taylor Roy
              </span>
            </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight 
            bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {news.title}
          </h1>

          {/* Date */}
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 flex items-center gap-2">
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            Published on {formatDate(news.updated_at)}
          </p>
        </div>

        {/* Content */}
        <article 
          className="mt-8 text-gray-800 dark:text-gray-200 leading-relaxed text-lg 
          prose prose-lg dark:prose-invert max-w-none
          prose-headings:text-gray-900 dark:prose-headings:text-gray-100
          prose-a:text-primary hover:prose-a:text-primary/80
          prose-img:rounded-xl prose-img:shadow-lg
          break-words
          "
          dangerouslySetInnerHTML={{ __html: news.content}} />

      </section>
    </>
  );
};

export default NewsPost;