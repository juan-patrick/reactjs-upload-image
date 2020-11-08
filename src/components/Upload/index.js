import React from 'react';

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

import { BiImageAdd } from 'react-icons/bi';

import { FaRegSadCry } from 'react-icons/fa';

function Upload() {
  const DragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return 'Arraste suas imagens aqui...';
    }

    if (isDragReject) {
      return 'Ohh não! Isto não é uma imagem...';
    }

    return 'Solte seus arquivos...';
  };
  return (
    <Dropzone accept="image/*" onDropAccepted={() => {}}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {!isDragReject ? <BiImageAdd size={64} /> : <FaRegSadCry size={64} />}
          <UploadMessage>
            {DragMessage(isDragActive, isDragReject)}
          </UploadMessage>
        </DropContainer>
      )}
    </Dropzone>
  );
}

export default Upload;
