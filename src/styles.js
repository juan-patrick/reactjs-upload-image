import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  gap: 20px;
  width: 100%;

  max-width: 500px;

  transition: all 2 ease;

  margin: 30px;
  padding: 20px;

  border-radius: 4px;
  background: ${(props) => props.theme.colors.background};
`;

export const Header = styled.header`
  text-align: center;

  & p {
    margin-top: 3px;
    font-size: 0.9em;
    color: ${(props) => props.theme.colors.subtext};
    font-weight: 600;
  }
`;
