import React, { useState } from 'react';
import { useViewContext } from '../context/ViewContext';

const UploadModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { addLinkedElement } = useViewContext();
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [isWebLink, setIsWebLink] = useState(true);
  const [icon, setIcon] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (title && (isWebLink ? link : file)) {
      const iconUrl = icon ? URL.createObjectURL(icon) : 'default-icon.png';
      const fileUrl = file ? URL.createObjectURL(file) : '';

      addLinkedElement({
        icon: iconUrl,
        title,
        link: isWebLink ? link : fileUrl,
        isWebLink,
      });

      onClose();
    }
  };

  const handleIconBrowse = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIcon(e.target.files[0]);
    }
  };

  const handleFileBrowse = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const clearIcon = () => setIcon(null);
  const clearFile = () => setFile(null);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl mb-4">Upload New Element</h2>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-grow p-2 rounded shadow mr-2"
            style={{ border: 'none' }}
          />
          <input type="file" onChange={handleIconBrowse} className="hidden" id="icon-upload" />
          <label htmlFor="icon-upload" className="bg-gray-200 p-2 rounded cursor-pointer">
            {icon ? (
              <div className="flex items-center">
                {icon.name}
                <button onClick={clearIcon} className="ml-2 text-red-500">x</button>
              </div>
            ) : (
              'Browse Icon'
            )}
          </label>
        </div>
        <div className="mb-4">
          <label>
            <input type="radio" checked={isWebLink} onChange={() => setIsWebLink(true)} />
            Weblink
          </label>
          <label className="ml-4">
            <input type="radio" checked={!isWebLink} onChange={() => setIsWebLink(false)} />
            Filepath
          </label>
        </div>
        {isWebLink ? (
          <input
            type="text"
            placeholder="Paste link here"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full mb-4 p-2 rounded shadow"
            style={{ border: 'none' }}
          />
        ) : (
          <>
            <input type="file" onChange={handleFileBrowse} className="hidden" id="file-upload" />
            <label htmlFor="file-upload" className="bg-gray-200 p-2 rounded flex cursor-pointer w-full mb-4 text-center">
              {file ? (
                <div className="flex">
                  {file.name}
                  <button onClick={clearFile} className="ml-2 text-red-500">x</button>
                </div>
              ) : (
                'Browse File'
              )}
            </label>
          </>
        )}
        <div className="flex justify-end">
          <button
            onClick={handleUpload}
            className={`bg-blue-500 text-white p-2 rounded ${!title || (!file && !isWebLink) ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!title || !icon || (!file && !isWebLink)}
          >
            Upload
          </button>
          <button onClick={onClose} className="p-2 rounded ml-2">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
