import { useState } from 'react';
import Upload from './Upload/Upload';
import GalleryList from './GalleryList/GalleryList';

const GalleryManagement = () => {

    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState(false);
    const [selectMedia, setSelectMedia] = useState<{
        id: number;
        filename: string;
        path: string;
        mimetype?: string;
        size: number;
        file_type: 'image' | 'video' | 'document';
        published: boolean;
    } | null>(null);


    return (
        <div className="w-full">
            <div className="flex justify-between">
                <div>
                    <button
                        className="bg-primary text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            if (editing) {
                                setEditing(false);
                                setSelectMedia(null);
                            } else {
                                setShowForm(!showForm);
                            }
                        }}
                    >
                        {editing || showForm ? 'Hide Form' : 'Create Media'}
                    </button>
                </div>
            </div>
            <div className="my-4">
                {editing || showForm ? (
                    <Upload
                        setHideCreateMediaHandler={(select) => {
                            setShowForm(select)
                            setEditing(select)
                        }}
                        media={selectMedia}
                    />
                )
                    : (
                        <GalleryList
                            isEditing={() => {
                                setEditing(true)
                                setShowForm(false)
                            }}
                            selectMedia={(select) => {
                                setSelectMedia(select)
                            }}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default GalleryManagement;