import React, { createContext, useState, useEffect } from 'react';

import { uniqueId } from 'lodash';

import filesize from 'filesize';

import api from '../services/api';

export const UploadContext = createContext({});

export default function UploadProvider({ children }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [filesToUpload, setFilesToUpload] = useState([]);

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    function updateFile(id, data) {
      setFilesToUpload(
        filesToUpload.map((uploadedFile) => {
          return id === uploadedFile.id
            ? { ...uploadedFile, ...data }
            : uploadedFile;
        })
      );

      setUploadedFiles((state) => [
        ...state.map((uploadedFile) => {
          return id === uploadedFile.id
            ? { ...uploadedFile, ...data }
            : uploadedFile;
        }),
      ]);
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

    if (uploading) {
      filesToUpload.forEach(processUpload);
      setUploading(false);
    }
  }, [uploading, filesToUpload]);

  function handleUpload(files) {
    const newFiles = files.map((file) => ({
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

    setFilesToUpload(newFiles);

    setUploadedFiles([...uploadedFiles, ...newFiles]);

    setUploading(true);
  }

  return (
    <UploadContext.Provider
      value={{ handleUpload, uploadedFiles, setUploadedFiles }}
    >
      {children}
    </UploadContext.Provider>
  );
}
