import React, { createContext, useState } from 'react';

import { uniqueId } from 'lodash';

import filesize from 'filesize';

export const UploadContext = createContext({});

export default function UploadProvider({ children }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleUpload = (files) => {
    const uploadFiles = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedFiles([...uploadedFiles, ...uploadFiles]);
  };
  return (
    <UploadContext.Provider
      value={{ handleUpload, uploadedFiles, setUploadedFiles }}
    >
      {children}
    </UploadContext.Provider>
  );
}
