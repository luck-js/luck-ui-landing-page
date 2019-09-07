import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #d45858;
    color: white;
    transition: color 0.1s;
  }
  
  html body{
    color: transparent !important;
  }
  html.lato body{
    color: white !important;
  }
`;

export default GlobalStyle;
