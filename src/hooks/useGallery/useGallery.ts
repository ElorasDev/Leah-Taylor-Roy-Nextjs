import { create } from 'zustand';

interface Media {
    id: number;
    filename: string;
    file_type: 'image' | 'video' | 'document';
    path: string;
    published: boolean;
    size: number;
}

interface MediaState {
    loading: boolean;
    error: string | null;
    media: Media[] | null;
    getAllMedia: (fileType?: string) => Promise<void>;
    getAllPublishedMedia: (fileType?: string) => Promise<void>;
    getPublishedMediaById: (id: number) => Promise<Media | null>;
    createMedia: (publicUrl: string, filename: string, status: boolean, file: File, token: string) => Promise<void>;
    updateMedia: (id: number, token: string, published: boolean) => Promise<void>;
    deleteMedia: (id: number, token: string) => Promise<void>;
}

const useGallery = create<MediaState>((set) => ({
    loading: false,
    error: null,
    media: null,

    getAllMedia: async (fileType?: string): Promise<void> => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(
                `${process.env.API_URL}/media${fileType ? `?fileType=${fileType}` : ''}`,
                {
                    method: 'GET', headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch media');
            }

            const responseData = await response.json();
            set({ media: responseData, loading: false });
        } catch {
            set({ error: 'An unexpected error occurred', loading: false });
        }
    },

    getAllPublishedMedia: async (fileType?: string): Promise<void> => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(
                `${process.env.API_URL}/media/published${fileType ? `?fileType=${fileType}` : ''}`,
                {
                    method: 'GET', headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache',
                    }
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch published media');
            }

            const responseData = await response.json();
            set({ media: responseData, loading: false });
        } catch {
            set({ error: 'An unexpected error occurred', loading: false });
        }
    },

    getPublishedMediaById: async (id: number): Promise<Media | null> => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`${process.env.API_URL}/media/published/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch media');
            }

            const responseData = await response.json();
            set({ loading: false });
            return responseData;
        } catch {
            set({ error: 'An unexpected error occurred', loading: false });
            return null;
        }
    },

    createMedia: async (publicUrl: string, filename: string, status: boolean, file: File, token: string): Promise<void> => {
        set({ loading: true, error: null });
        const response = await fetch(`${process.env.API_URL}/dashboard/upload`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                filename,
                path: publicUrl,
                mimetype: file.type,
                size: file.size,
                published: status,
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Upload failed');
        }
    },


    updateMedia: async (id: number, token: string, published: boolean): Promise<void> => {
        set({ loading: true, error: null });

        try {
            const response = await fetch(`${process.env.API_URL}/dashboard/update-file/${id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ published }),
            });

            if (!response.ok) {
                throw new Error('Failed to update media');
            }

            set({ loading: false });
            const { getAllMedia } = useGallery.getState();
            await getAllMedia();
        } catch {
            set({ error: 'An unexpected error occurred', loading: false });
        }
    },

    deleteMedia: async (id: number, token: string): Promise<void> => {
        set({ loading: true, error: null });

        try {
            const response = await fetch(`${process.env.API_URL}/dashboard/delete-file/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete media');
            }

            set({ loading: false });
            const { getAllMedia } = useGallery.getState();
            await getAllMedia();
        } catch {
            set({ error: 'An unexpected error occurred', loading: false });
        }
    },
}));

export default useGallery;
