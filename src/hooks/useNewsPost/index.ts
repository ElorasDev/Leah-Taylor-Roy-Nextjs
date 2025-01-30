import { create } from 'zustand';

interface NewsPostState {
    loading: boolean;
    error: string | null;
    success: boolean;
    createNewsPost: (title: string, content: string, index_image_url: string, status: string, token: string) => Promise<string | null>;
    updateNewsPost: (id: string, title: string, content: string, index_image_url: string, status: string, token: string) => Promise<void>;
    getAllNewsPost: () => Promise<void>;
    deleteNewsPost: (id: string, token: string, section: string) => Promise<void>;
    newsPosts?: {
        id:number;
        title: string;
        content: string;
        index_image_url: string;
        status: string;
    }[];
}

interface NewsPostResponse {
    message: string;
    id?: string;
    data: {
        title: string;
        content: string;
        index_image_url: string;
        status: string;
    }[];
}

interface NewsPostPayload {
    title: string;
    content: string;
    index_image_url: string;
    status: string;
}

const useNewsPost = create<NewsPostState>((set) => ({
    loading: false,
    error: null,
    success: false,

    createNewsPost: async (
        title: string,
        content: string,
        index_image_url: string,
        status: string,
        token: string,
    ): Promise<string | null> => {
        set({ loading: true, error: null, success: false });
        try {
            const response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/post-news`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ title, content, index_image_url, status } as NewsPostPayload),
            });

            if (!response.ok) {
                const errorData: NewsPostResponse = await response.json();
                set({ error: errorData.message, loading: false });
                return null;
            }

            const responseData: NewsPostResponse = await response.json();
            set({ success: true, loading: false });
            return responseData.id || null;
        } catch {
            set({ error: 'An unexpected error occurred', loading: false });
            return null;
        }
    },

    getAllNewsPost: async (): Promise<void> => {
        set({ loading: true, error: null, success: false });
        try {
            const response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData: NewsPostResponse = await response.json();
                set({ error: errorData.message, loading: false });
                return;
            }

            const responseData = await response.json();
            set({ newsPosts: responseData, success: true, loading: false });
        } catch {
            set({ error: 'An unexpected error occurred', loading: false });
        }
    },

    updateNewsPost: async (
        id: string,
        title: string,
        content: string,
        index_image_url: string,
        status: string,
        token: string
    ): Promise<void> => {
        set({ loading: true, error: null, success: false });
        try {
            const response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/update-news/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ title, content, index_image_url, status } as NewsPostPayload),
            });

            if (!response.ok) {
                const errorData: NewsPostResponse = await response.json();
                set({ error: errorData.message, loading: false });
                return;
            }

            set({ success: true, loading: false });
        } catch {
            set({ error: 'An unexpected error occurred', loading: false });
        }
    },

    deleteNewsPost: async (id: string, token: string, section: string): Promise<void> => {
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
                const errorData: NewsPostResponse = await response.json();
                set({ error: errorData.message, loading: false });
                return;
            }
    
            set((state) => ({
                newsPosts: state.newsPosts?.filter((post) => post.id !== parseInt(id)),
                success: true,
                loading: false,
            }));
        } catch {
            set({ error: 'An unexpected error occurred', loading: false });
        }
    },
    
}));

export default useNewsPost;