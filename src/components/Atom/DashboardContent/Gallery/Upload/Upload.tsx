import { useState, ChangeEvent, FormEvent } from 'react';
import useGallery from '@/hooks/useGallery/useGallery';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

interface IUploadProps {
  setHideCreateMediaHandler?: (select: boolean) => void;
  media?: {
    id: number;
    filename: string;
    path: string;
    mimetype?: string;
    size: number;
    file_type: "image" | "video" | "document";
    published: boolean;
  } | null;
}

const Upload: NextPage<IUploadProps> = ({ setHideCreateMediaHandler, media }) => {
  const [filename, setFilename] = useState(media ? media.filename : '');
  const [published, setPublished] = useState(media ? media.published : false);
  const { createMedia, loading, error } = useGallery();
  const [files, setFiles] = useState<File[]>([]);
  const savedToken = Cookies.get('auth_token');
  const supabaseClient = useSupabaseClient();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFiles(Array.from(event.target.files));
    }
  };

  const validateForm = () => {
    if (!filename.trim()) {
      alert('Please enter a title');
      return false;
    }
    if (files.length === 0) {
      alert('Please select at least one file');
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;
    
    if (!savedToken) {
      alert('Authentication token missing!');
      return;
    }

    try {
      for (const file of files) {
        const fileName = `file-${Date.now()}-${file.name}`;
        
        // Upload to Supabase Storage
        const { error } = await supabaseClient.storage
          .from('gallery')
          .upload(fileName, file);

        if (error) throw error;

        // Get public URL
        const { data: publicUrl } = supabaseClient.storage
          .from('gallery')
          .getPublicUrl(fileName);

        // Send to backend
        await createMedia(
          publicUrl.publicUrl,
          fileName,
          published,
          file,
          savedToken,
        );
      }

      setFiles([]);
      alert('Files uploaded successfully!');
      if (setHideCreateMediaHandler) setHideCreateMediaHandler(false);
    } catch (err) {
      console.error('Upload error:', err);
      alert(err instanceof Error ? err.message : 'Upload failed');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Document</h1>
      <form onSubmit={handleSubmit} className="border p-4 rounded-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-neutral">
            Title:
            <input
              type="text"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-neutral">
            Upload Files:
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-neutral">
            Publish Status:
            <select
              value={published ? 'true' : 'false'}
              onChange={(e) => setPublished(e.target.value === 'true')}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
            >
              <option value="true">Published</option>
              <option value="false">Unpublished</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark"
        >
          {loading ? 'Uploading...' : 'Upload'}
        </button>
        
        {error && <div className="mt-4 text-red-600">{error}</div>}
      </form>
    </div>
  );
};

export default Upload;