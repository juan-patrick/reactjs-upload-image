import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: 100%;
  width: 100%;

  & ul {
    display: flex;
    flex-direction: column;

    width: 100%;
    list-style: none;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  object-fit: cover;
`;

export const ImageInformation = styled.div`
  display: flex;
  width: 100%;

  & span {
    margin-top: 5px;
    color: ${(props) => props.theme.colors.subtext};
    font-weight: 600;
    font-size: 0.8em;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 10px;
  }
`;
