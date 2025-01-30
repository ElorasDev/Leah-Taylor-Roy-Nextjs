import { FormEvent, useState, useEffect } from 'react';
import { NextPage } from 'next';
import Cookies from 'js-cookie';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import useBlogPost from '@/hooks/useBlogPost';
import { generateRandomFiveDigitNumber } from '@/utils/RandomNumber';


interface ICreateBlogPostProps {
    setHideCreatePostHandler?: (select: boolean) => void;
    post?: {
        id: number;
        title: string;
        content: string;
        index_image_url: string;
        status: string;
    } | null;
}

const CreateBlogPost: NextPage<ICreateBlogPostProps> = ({ setHideCreatePostHandler, post }) => {
    const { createBlogPost, updateBlogPost, loading, error } = useBlogPost();
    const [postId, setPostId] = useState<string | null>(post ? post.id.toString() : null);
    const [title, setTitle] = useState(post ? post.title : '');
    const [content, setContent] = useState(post ? post.content : '');
    const [status, setStatus] = useState(post ? post.status : 'draft');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const savedToken = Cookies.get('auth_token');
    const randomNumber = generateRandomFiveDigitNumber();

    const supabaseClient = useSupabaseClient();

    useEffect(() => {
        const savedTitle = localStorage.getItem('draftTitle');
        const savedContent = localStorage.getItem('draftContent');
        const savedStatus = localStorage.getItem('draftStatus');

        if (savedTitle) setTitle(savedTitle);
        if (savedContent) setContent(savedContent);
        if (savedStatus) setStatus(savedStatus);
    }, []);

    useEffect(() => {
        const saveDraft = () => {
            localStorage.setItem('draftTitle', title);
            localStorage.setItem('draftContent', content);
            localStorage.setItem('draftStatus', status);
        };

        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            saveDraft();
            e.preventDefault();
            e.returnValue = '';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [title, content, status]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title || !content || !imageFile) {
            alert('Title, content, and image are required.');
            return;
        }

        let imageUrl = '';

        try {
            if (imageFile) {
                const { error } = await supabaseClient.storage
                    .from('news')
                    .upload(`image-blog-${randomNumber}-${imageFile.name}`, imageFile);

                if (error) {
                    console.error('Image upload failed', error);
                    alert('Failed to upload image.');
                    return;
                }

                const { data } = supabaseClient.storage
                    .from('news')
                    .getPublicUrl(`image-blog-${randomNumber}-${imageFile.name}`)

                imageUrl = data.publicUrl || '';
            }

            if (postId) {
                await updateBlogPost(postId, title, content, imageUrl, status, savedToken!);
                alert('Post updated!');
                if (setHideCreatePostHandler) {
                    setHideCreatePostHandler(false);
                }
            } else {

                const response = await createBlogPost(title, content, imageUrl, status, savedToken || '');
                setPostId(response);

                console.log(postId);


                if (response) {
                    localStorage.removeItem('draftTitle');
                    localStorage.removeItem('draftContent');
                    localStorage.removeItem('draftStatus');
                    alert('Post submitted successfully!');
                    if (setHideCreatePostHandler) {
                        setHideCreatePostHandler(false);
                    }
                } else {
                    alert('Failed to submit post.');
                }
            }

        } catch (err) {
            console.error('Error submitting post:', err);
            alert('An unexpected error occurred.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="border p-4 rounded-md">
            <h2 className="text-2xl mb-4">Create Blog Post</h2>

            <div className="mb-4">
                <label htmlFor="imageFile" className="block text-sm font-medium text-neutral">
                    Upload Image:
                </label>
                <input
                    type="file"
                    id="imageFile"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-neutral">
                    Title:
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="content" className="block mb-2 text-sm font-medium text-neutral">
                    Content:
                </label>
                <ReactQuill
                    value={content}
                    onChange={setContent}
                    className="block w-full h-fit focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
            </div>

            <div className="my-4">
                <label htmlFor="status" className="block text-sm font-medium text-neutral">
                    Status:
                </label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                >
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                    <option value="published">Published</option>
                </select>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
                {loading ? 'Sending...' : 'Send Post'}
            </button>

            {error && <div className="mt-4 text-red-600 text-center">{error}</div>}
        </form>
    );
};

export default CreateBlogPost;
