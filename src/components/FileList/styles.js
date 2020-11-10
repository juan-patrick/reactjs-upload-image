import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  & h4 {
    font-size: 1.2em;
    color: ${(props) => props.theme.colors.subtext};
    margin-bottom: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  list-style: none;

  & + li {
    margin-top: 10px;
  }

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Preview = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  object-fit: cover;
`;

export const FileInfo = styled.div`
  display: flex;
  width: 100%;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 10px;
  }

  & span {
    margin-top: 5px;
    color: ${(props) => props.theme.colors.subtext};
    font-weight: 600;
    font-size: 0.85em;

    button {
      margin-left: 5px;
      border: none;
      background: transparent;
      font-size: 1em;
      color: ${(props) => props.theme.colors.error};
    }

    button:hover {
      color: #da3d31;
      cursor: pointer;
    }
  }
`;
