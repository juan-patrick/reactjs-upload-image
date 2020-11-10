import React, { useContext } from 'react';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import { Container, Header, Content } from './styles';
import Upload from './components/Upload';
import FileList from './components/FileList';

import { UploadContext } from './providers/UploadProvider';

function App() {
  const { uploadedFiles } = useContext(UploadContext);

  return (
    <ThemeProvider theme={light}>
      <Container>
        <Content>
          <Header>
            <h2>Upload de Imagens</h2>
            <p>Imagens do tipo .png ou .jpg</p>
          </Header>
          <Upload />
          {!!uploadedFiles.length && <FileList />}
        </Content>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
