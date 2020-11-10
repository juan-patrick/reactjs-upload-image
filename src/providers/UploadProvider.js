import React, { createContext, useState, useEffect } from 'react';

import { uniqueId } from 'lodash';

import filesize from 'filesize';

import api from '../services/api';

export const UploadContext = createContext({});

export default function UploadProvider({ children }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (uploading) {
      uploadedFiles.forEach(processUpload);
      setUploading(false);
    }
  }, [uploading]);

  function handleUpload(files) {
    const filesToUpload = files.map((file) => ({
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

    setUploadedFiles(uploadedFiles.concat(filesToUpload));

    setUploading(true);
  }

  function updateFile(id, data) {
    setUploadedFiles(
      uploadedFiles.map((uploadedFile) => {
        return id === uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    );
  }

  function processUpload(uploadedFile) {
    const data = new FormData();

    data.append('file', uploadedFile.file, uploadedFile.name);

    api
      .post('/posts', data, {
        onUploadProgress: (e) => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          updateFile(uploadedFile.id, {
            progress,
          });
        },
      })
      .then(({ data }) => {
        updateFile(uploadedFile.id, {
          uploaded: true,
          id: data._id,
          url: data.url,
        });
      })
      .catch(() => {
        updateFile(uploadedFile.id, {
          error: true,
        });
      });
  }

  return (
    <UploadContext.Provider
      value={{ handleUpload, uploadedFiles, setUploadedFiles }}
    >
      {children}
    </UploadContext.Provider>
  );
}
