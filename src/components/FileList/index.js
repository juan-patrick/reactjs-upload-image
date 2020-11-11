import React, { useContext, useState } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';

import { Container, FileInfo, Preview, List, ListItem } from './styles';

import { ThemeContext } from 'styled-components';

import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';
import { UploadContext } from '../../providers/UploadProvider';

function FileList() {
  const themeContext = useContext(ThemeContext);
  const { uploadedFiles, handleDelete } = useContext(UploadContext);
  const [deleteFileAnimation, setDeleteFileAnimation] = useState('');

  return (
    <Container initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
      <h4>Imagens carregadas</h4>
      <List>
        {uploadedFiles.map((file) => (
          <ListItem
            key={file.id}
            initial={{ opacity: 0, x: -100 }}
            animate={
              deleteFileAnimation === file.id
                ? { opacity: 0, scale: 0 }
                : { opacity: 1, x: 0 }
            }
          >
            <FileInfo>
              <Preview src={file.preview} alt="preview" />
              <div>
                <strong>{file.name}</strong>
                <span>
                  {file.readableSize}
                  {!!file.url && (
                    <button
                      onClick={(e) => {
                        setDeleteFileAnimation(file.id);
                        handleDelete(file.id);
                      }}
                    >
                      Excluir
                    </button>
                  )}
                </span>
              </div>
            </FileInfo>
            <div>
              {!file.uploaded && !file.error && (
                <CircularProgressbar
                  styles={{
                    root: { width: 35 },
                    path: {
                      stroke: themeContext.colors.primary,
                      strokeLinecap: 'round',
                    },
                    trail: {
                      stroke: themeContext.colors.subtext,
                    },
                  }}
                  strokeWidth={10}
                  value={file.progress}
                />
              )}
            </div>

            {file.url && (
              <a href={file.url} target="_blank" rel="noopener noreferrer">
                <MdLink style={{ marginRight: 8 }} size={34} color="#222" />
              </a>
            )}
            {file.uploaded && <MdCheckCircle size={34} color="#4caf50" />}
            {file.error && <MdError size={34} color="#f44336" />}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default FileList;
