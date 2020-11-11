import React, { useContext } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';

import { Container, FileInfo, Preview, List } from './styles';

import { ThemeContext } from 'styled-components';

import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';
import { UploadContext } from '../../providers/UploadProvider';

function FileList() {
  const themeContext = useContext(ThemeContext);
  const { uploadedFiles, handleDelete } = useContext(UploadContext);

  return (
    <Container>
      <h4>Imagens carregadas</h4>
      <List>
        {uploadedFiles.map((file) => (
          <li key={file.id}>
            <FileInfo>
              <Preview src={file.preview} alt="preview" />

              <div>
                <strong>{file.name}</strong>
                <span>
                  {file.readableSize}
                  {!!file.url && (
                    <button onClick={(e) => handleDelete(file.id)}>
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
          </li>
        ))}
      </List>
    </Container>
  );
}

export default FileList;
