"use client"
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import useBlogPost from '@/hooks/useBlogPost';
import useNewsPost from '@/hooks/useNewsPost';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

interface IPosts {
    post: {
        id: number;
        title: string;
        content: string;
        index_image_url: string;
        status: string;
    };
    isEditing: (select: boolean) => void;
    selectPost: (select: {
        id: number;
        title: string;
        content: string;
        index_image_url: string;
        status: string;
    }) => void;
    section: string;
}

const Posts: NextPage<IPosts> = ({ post, isEditing, selectPost, section }) => {

    const { deleteNewsPost } = useNewsPost();
    const { deleteBlogPost } = useBlogPost();

    const router = useRouter()
    const savedToken = Cookies.get('auth_token');

    const handleEdit = () => {
        selectPost(post)
        isEditing(true);
    };

    const handleDelete = async (id: number) => {
        if (section === "news") await deleteNewsPost(id.toString(), savedToken!, section)
        else await deleteBlogPost(id.toString(), savedToken!, section)
    };

    const handleView = (id: number) => {
        router.push(`/${section}/${id}`)
    };

    return (
        <>
            <div
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                {post.index_image_url && (
                    <Image
                        src={`${post.index_image_url}`}
                        alt={post.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                        loading='lazy'
                    />
                )}
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 truncate">
                        {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-2 capitalize">
                        {post.status}
                    </p>
                    <button
                        onClick={() => handleView(post.id)}
                        className="text-blue-500 mt-4 hover:text-blue-700 flex items-center gap-1">
                        <FaEye /> View
                    </button>
                </div>
                <div className="flex justify-between items-center p-4 border-t border-primary">
                    <button
                        onClick={() => handleEdit()}
                        className="flex items-center text-green-500 hover:text-green-700">
                        <FaEdit className="mr-2" /> Edit
                    </button>
                    <button
                        onClick={() => handleDelete(post.id)}
                        className="flex items-center text-red-500 hover:text-red-700">
                        <FaTrash className="mr-2" /> Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default Posts;