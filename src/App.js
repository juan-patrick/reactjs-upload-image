import React from 'react';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import { Container, Content } from './styles';
import Upload from './components/Upload';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Container>
        <Content>
          <Upload />
        </Content>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
