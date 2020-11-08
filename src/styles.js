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
  height: 100%;

  max-width: 500px;
  max-height: 500px;

  margin: 30px;
  padding: 20px;

  border-radius: 4px;
  background: ${(props) => props.theme.colors.background};

  @media (max-width: 1000px) {
    & {
    }
  }
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
