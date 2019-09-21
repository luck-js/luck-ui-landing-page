import { createGlobalStyle } from 'styled-components';
import {Theme} from "../utils/theme"

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
`;

export default GlobalStyle;
