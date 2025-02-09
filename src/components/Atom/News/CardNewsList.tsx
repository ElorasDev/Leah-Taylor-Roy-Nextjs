"use client";
import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import CardNews from "./CardNews/CardNews";
import useDebounce from "@/hooks/useDebounce/useDebounce";

interface NewsItem {
    id: number;
    title: string;
    content: string;
    index_image_url: string;
    updated_at: string;
}

interface INewsProps {
    initialNews: NewsItem[];
}

const CardNewsList: NextPage<INewsProps> = ({ initialNews }) => {

    const [news] = useState<NewsItem[]>(initialNews);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    // Sort news by date (newest first) and filter by debounced search query
    const sortedAndFilteredNews = news
        .sort((a, b) => {
            if (sortOrder === 'desc') {
                return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
            } else {
                return new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime();
            }
        })
        .filter(item =>
            item.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
        );


        if (!initialNews) {
            return (
              <div className="text-center py-28">
                <p className="text-primary font-bold text-xl">
                    Posts Not found!
                </p>
              </div>
            );
          }


    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <meta name="description" content="Read the latest news updates and stay informed about trending topics." />
                <meta name="keywords" content="news, latest news, trending news, updates, headlines" />
                <meta name="author" content="Leah Taylor Roy" />
            </Head>

            <section className="max-w-6xl mx-auto py-10 px-4">
                <h1 className="text-3xl font-bold text-center mb-6">Latest News & Announcements</h1>
                <article>
                    <p className="text-lg text-center text-neutral mb-6">
                        Dedicated to supporting the residents and improving our constituency
                    </p>
                </article>

                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 my-4">

                    {/* Search bar */}
                    <div className="mb-6 md:mb-0 w-full md:w-80">
                        <input
                            type="text"
                            placeholder="Search news..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        />
                    </div>

                    {/* Sort options */}
                    <div className="mb-6 md:mb-0 w-full md:w-auto">
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                            className="p-2 border border-gray-300 rounded-lg"
                        >
                            <option value="desc">Newest First</option>
                            <option value="asc">Oldest First</option>
                        </select>
                    </div>
                </div>


                {/* Loading spinner or news content */}
                {sortedAndFilteredNews.length === 0 ? (
                    <p className="text-center text-primary font-bold">No news available.</p>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedAndFilteredNews.map((item) => (
                            <article key={item.id}>
                                <CardNews {...item} />
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default CardNewsList;
