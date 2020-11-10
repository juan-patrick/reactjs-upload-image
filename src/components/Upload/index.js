import React, { useContext } from 'react';

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

import { FaRegSadCry } from 'react-icons/fa';

import photoIcon from '../../assets/photo.svg';

import * as folderSuccess from '../../assets/folder-success.json';

import Animation from '../Animation';
import { UploadContext } from '../../providers/UploadProvider';

function Upload() {
  const { handleUpload } = useContext(UploadContext);

  const DragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return 'Arraste suas imagens aqui';
    }

    if (isDragReject) {
      return 'Ohh não! Isto não é uma imagem';
    }

    return 'Solte suas imagens';
  };
  return (
    <Dropzone accept="image/*" onDropAccepted={handleUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {!isDragReject && !isDragActive ? (
            <img src={photoIcon} alt="icon" />
          ) : !isDragReject && isDragActive ? (
            <Animation
              loop={true}
              autoplay={true}
              size={64}
              data={folderSuccess}
            />
          ) : (
            <FaRegSadCry size={64} />
          )}
          <UploadMessage>
            {DragMessage(isDragActive, isDragReject)}
          </UploadMessage>
        </DropContainer>
      )}
    </Dropzone>
  );
}

export default Upload;
