import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    list-style: none;
    text-decoration: none;
  }

  html, body, #root{
    min-width: 100%;
  }

  body{
    font-family: 'Nunito', Helvetica, sans-serif;
    font-size: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;