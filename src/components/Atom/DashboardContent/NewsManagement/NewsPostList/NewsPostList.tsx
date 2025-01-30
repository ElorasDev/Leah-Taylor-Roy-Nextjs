"use client";

import { Fragment, useEffect, useState } from "react";
import { NextPage } from "next";
import useNewsPost from "@/hooks/useNewsPost";
import Posts from "../../PostsI/Posts";

interface INewsPostListProps {
    selectedItem: 'All News' | 'Published' | 'Archived' | 'Draft';
    isEditing: (select: boolean) => void;
    selectPost: (select: {
        id: number;
        title: string;
        content: string;
        index_image_url: string;
        status: string;
    }) => void;
}

const NewsPostList: NextPage<INewsPostListProps> = ({ selectedItem, isEditing, selectPost }) => {
    const { getAllNewsPost, newsPosts, loading, error } = useNewsPost();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        getAllNewsPost();
    }, [getAllNewsPost]);

    const filteredNewsPosts = newsPosts?.filter(post => {
        const matchesCategory = selectedItem === 'All News' || post.status === selectedItem.toLowerCase();
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-neutral mb-4">
                {selectedItem}
            </h1>

            {/* Input Search Bar */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search by title..."
                    className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {loading && (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            )}

            {error && (
                <div className="text-red-500 text-center font-medium">
                    Error: {error}
                </div>
            )}

            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredNewsPosts && filteredNewsPosts.length > 0 ? (
                        filteredNewsPosts.map((post, index) => (
                            <Fragment key={index}>
                                <Posts
                                    post={post}
                                    isEditing={(select) => isEditing(select)}
                                    selectPost={(select) => selectPost(select)}
                                    section="news"
                                />
                            </Fragment>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-primary font-bold text-lg">
                            No news posts available.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NewsPostList;
