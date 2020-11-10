import styled, { keyframes } from 'styled-components';

const showAnimation = keyframes`  
  0% {
    opacity:0;
    transform: scaleY(0) translateY(-100%);
  }
  100% {
    opacity:1;
    transform:  scaleY(1) translateY(0%);
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 50px;
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

  padding: 0 20px 0 0;

  max-height: 200px;
  overflow-x: auto;

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: ${showAnimation} linear 0.3s;
    animation-iteration-count: 1;

    & + li {
      margin-top: 10px;
    }
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
