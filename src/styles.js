import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Content = styled.main`
  width: 100%;
  height: 100%;
  max-height: 450px;
  max-width: 450px;
  margin: 30px;
  padding: 20px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.background};
`;
