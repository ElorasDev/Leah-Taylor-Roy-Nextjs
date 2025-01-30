import { useState } from 'react';
import CreateBlogPost from './CreateBlogPost/CreateBlogPost';
import BlogPostList from './BlogPostList/BlogPostList';

const BlogManagement = () => {

    const [showForm, setShowForm] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [editing, setEditing] = useState(false);
    const [selectedPost, setSelectedPost] = useState<{
        id: number;
        title: string;
        content: string;
        index_image_url: string;
        status: string;
    } | null>(null);
    const [selectedNav, setSelectedNav] = useState<"All Posts" | "Published" | "Archived" | "Draft">('All Posts');


    return (
        <div className="w-full">
            <div className="flex justify-between">
                <div>
                    <button
                        className="bg-primary text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            if (editing) {
                                setEditing(false);
                                setSelectedPost(null);
                            } else {
                                setShowForm(!showForm);
                            }
                        }}
                    >
                        {editing || showForm ? 'Hide Form' : 'Create Blog Post'}
                    </button>
                </div>
                {!showForm && (
                    <div className="relative">
                        <button
                            className="
                          bg-neutral
                          text-white
                            px-4 py-2
                            rounded-md
                            font-bold
                            w-[120px]
                            hover:shadow-lg
                            transition-shadow
                            duration-300
                            "
                            onClick={() => setShowNav(!showNav)}
                        >
                            {selectedNav}
                        </button>
                        {showNav && (
                            <div
                                className="
                                absolute
                                top-full
                                left-0
                                mt-2
                                w-[150px]
                              bg-white
                              text-neutral
                                shadow-md
                                rounded
                                z-40
                                ">
                                <button
                                    className="py-2 my-2 hover:font-bold w-full text-left px-4"
                                    onClick={() => {
                                        setSelectedNav('All Posts');
                                        setShowNav(false);
                                    }}
                                >
                                    All Posts
                                </button>
                                <button
                                    className="py-2 my-2 hover:font-bold w-full text-left px-4"
                                    onClick={() => {
                                        setSelectedNav('Published');
                                        setShowNav(false);
                                    }}
                                >
                                    Published
                                </button>
                                <button
                                    className="py-2 my-2 hover:font-bold w-full text-left px-4"
                                    onClick={() => {
                                        setSelectedNav('Archived');
                                        setShowNav(false);
                                    }}
                                >
                                    Archived
                                </button>
                                <button
                                    className="py-2 my-2 hover:font-bold w-full text-left px-4"
                                    onClick={() => {
                                        setSelectedNav('Draft');
                                        setShowNav(false);
                                    }}
                                >
                                    Draft
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="my-4">
                {editing || showForm ? (
                    <CreateBlogPost
                        setHideCreatePostHandler={(select) => {
                            setShowForm(select)
                            setEditing(select)
                        }}
                        post={selectedPost}
                    />
                )
                    : (
                        <BlogPostList
                            selectedItem={selectedNav}
                            isEditing={() => {
                                setEditing(true)
                                setShowForm(false)
                            }}
                            selectPost={(select) => {
                                setSelectedPost(select)
                            }}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default BlogManagement;