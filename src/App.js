import React from 'react';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import { Container, Header, Content } from './styles';
import Upload from './components/Upload';
import FileList from './components/FileList';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Container>
        <Content>
          <Header>
            <h2>Upload de Imagens</h2>
            <p>Imagens do tipo .png ou .jpg</p>
          </Header>
          <Upload />
          <FileList />
        </Content>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
