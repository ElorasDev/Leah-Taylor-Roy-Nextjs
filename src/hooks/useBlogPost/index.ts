import { create } from 'zustand';

interface BlogPostState {
    loading: boolean;
    error: string | null;
    success: boolean;
    createBlogPost: (title: string, content: string, index_image_url: string, status: string, token: string) => Promise<string | null>;
    updateBlogPost: (id: string, title: string, content: string, index_image_url: string, status: string, token: string) => Promise<void>;
    getAllBlogPost: () => Promise<void>;
    deleteBlogPost: (id: string, token: string, section: string) => Promise<void>;
    blogPosts?: {
        id:number;
        title: string;
        content: string;
        index_image_url: string;
        status: string;
    }[];
}

interface BlogPostResponse {
    message: string;
    id?: string;
    data: {
        title: string;
        content: string;
        index_image_url: string;
        status: string;
    }[];
}

interface BlogPostPayload {
    title: string;
    content: string;
    index_image_url: string;
    status: string;
}

const useBlogPost = create<BlogPostState>((set) => ({
    loading: false,
    error: null,
    success: false,

    createBlogPost: async (
        title: string,
        content: string,
        index_image_url: string,
        status: string,
        token: string,
    ): Promise<string | null> => {
        set({ loading: true, error: null, success: false });
        try {
            const response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/post-blog`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ title, content, index_image_url, status } as BlogPostPayload),
            });

            console.log(response);
            

            if (!response.ok) {
                const errorData: BlogPostResponse = await response.json();
                set({ error: errorData.message, loading: false });
                return null;
            }

            const responseData: BlogPostResponse = await response.json();
            set({ success: true, loading: false });
            return responseData.id || null;
        } catch {
            set({ error: 'An unexpected error occurred', loading: false });
            return null;
        }
    },

    getAllBlogPost: async (): Promise<void> => {
        set({ loading: true, error: null, success: false });
        try {
            const response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/posts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData: BlogPostResponse = await response.json();
                set({ error: errorData.message, loading: false });
                return;
            }

            const responseData = await response.json();
            set({ blogPosts: responseData, success: true, loading: false });
        } catch {
            set({ error: 'An unexpected error occurred', loading: false });
        }
    },

    updateBlogPost: async (
        id: string,
        title: string,
        content: string,
        index_image_url: string,
        status: string,
        token: string
    ): Promise<void> => {
        set({ loading: true, error: null, success: false });
        try {
            const response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/update-blog/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ title, content, index_image_url, status } as BlogPostPayload),
            });

            if (!response.ok) {
                const errorData: BlogPostResponse = await response.json();
                set({ error: errorData.message, loading: false });
                return;
            }

            set({ success: true, loading: false });
        } catch {
            set({ error: 'An unexpected error occurred', loading: false });
        }
    },

    deleteBlogPost: async (id: string, token: string, section: string): Promise<void> => {
        set({ loading: true, error: null, success: false });
        try {
            const response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/remove-${section}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
    
            if (!response.ok) {
                const errorData: BlogPostResponse = await response.json();
                set({ error: errorData.message, loading: false });
                return;
            }
    
            set((state) => ({
                blogPosts: state.blogPosts?.filter((post) => post.id !== parseInt(id)),
                success: true,
                loading: false,
            }));
        } catch {
            set({ error: 'An unexpected error occurred', loading: false });
        }
    },
    
}));

export default useBlogPost;