import { createGlobalStyle } from 'styled-components';
import {Theme} from "../utils"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    background-color: ${Theme.colors.main};
  }
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    color: ${Theme.colors.main};
    font-family: ${Theme.fontFamilies.body} ;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
