import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;    
  }

  body{
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }

  html, body, #root{   
    height: 100%;    
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
  }

  h1{
    font-size: 2em;
  }

  a{
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;    
    transition: ease-in-out 0.2s;
  }

  a:hover{
    color: ${(props) => props.theme.colors.primary};
  }

  span {
    color: ${(props) => props.theme.colors.primary};
  }  
`;
