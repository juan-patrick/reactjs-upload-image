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

  & ul {
    display: flex;
    flex-direction: column;

    width: 100%;
    list-style: none;
  }

  & ul li {
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

  & span {
    margin-top: 5px;
    color: ${(props) => props.theme.colors.subtext};
    font-weight: 600;
    font-size: 0.85em;
  }

  & span a {
    margin-left: 12px;
    color: ${(props) => props.theme.colors.error};    
  } 

  & span a:hover{
    color: #da3d31;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 10px;
  }
`;
