import { useState, ChangeEvent, FormEvent } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Cookies from 'js-cookie';
import toast, { Toaster } from "react-hot-toast";
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import useGallery from '@/hooks/useGallery/useGallery';
import { FaCloudUploadAlt } from 'react-icons/fa';

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
  const [published, setPublished] = useState(false);
  const { createMedia, loading, error } = useGallery();
  const [files, setFiles] = useState<File[]>([]);
  const savedToken = Cookies.get('auth_token');
  const supabaseClient = useSupabaseClient();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
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
      toast.error('Authentication token missing!');
      return;
    }

    try {
      for (const file of files) {
        const fileName = `file-${Date.now()}-${file.name}`;
        const { error } = await supabaseClient.storage.from('gallery').upload(fileName, file);
        if (error) throw error;
        toast.success('Files uploaded successfully!');
        const { data: publicUrl } = supabaseClient.storage.from('gallery').getPublicUrl(fileName);
        await createMedia(publicUrl.publicUrl, fileName, published, file, savedToken);
      }

      setFiles([]);
      if (setHideCreateMediaHandler) setHideCreateMediaHandler(false);
    } catch (err) {
      console.error('Upload error:', err);
      toast.error(err instanceof Error ? err.message : 'Upload failed');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <Toaster />
      <h1 className="text-2xl font-bold text-center mb-6">Upload Media</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          value={filename} 
          onChange={(e) => setFilename(e.target.value)} 
          placeholder="Enter a title..." 
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary" 
          required 
        />

        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
          <FaCloudUploadAlt size={50} className="text-gray-500" />
          <span className="text-sm text-gray-500">Click or drag files to upload</span>
          <input type="file" multiple onChange={handleFileChange} className="hidden" required />
        </label>

        <div className="grid grid-cols-3 gap-2">
          {files.map((file, index) => (
            file.type.startsWith('image') ? (
              <Image
                key={index}
                width={80}
                height={80}
                src={URL.createObjectURL(file)} 
                alt="preview"
                className="w-full h-20 object-cover rounded-md"
                />
            ) : file.type.startsWith('video') ? (
              <video key={index} src={URL.createObjectURL(file)} className="w-full h-20 object-cover rounded-md" controls />
            ) : null
          ))}
        </div>

        <select 
          value={published ? 'true' : 'false'} 
          onChange={(e) => setPublished(e.target.value === 'true' ? true : false)} 
          className="w-full px-3 py-2 border rounded-md">
          <option value="true">Published</option>
          <option value="false">Unpublished</option>
        </select>

        <button 
          type="submit" 
          disabled={loading} 
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-red-700">
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default Upload;
