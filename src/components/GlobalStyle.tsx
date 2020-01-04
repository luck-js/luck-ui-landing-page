import {createGlobalStyle} from 'styled-components';
import {Theme} from '../utils';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body, #__next {
    height: 100%;
  }
  html {
    background-color: ${Theme.colors.main};
  }
  
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    color: ${Theme.colors.main};
    font-family: ${Theme.fontFamilies.body};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  /* lato-300 - latin_latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    src: local('Lato Light'), local('Lato-Light'),
         url('/static/fonts/lato-v16-latin_latin-ext-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('/static/fonts/lato-v16-latin_latin-ext-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
   font-display: swap;
  }
  /* lato-regular - latin_latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'),
         url('/static/fonts/lato-v16-latin_latin-ext-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('/static/fonts/lato-v16-latin_latin-ext-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
   font-display: swap;
  }
  /* lato-700 - latin_latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: local('Lato Bold'), local('Lato-Bold'),
         url('/static/fonts/lato-v16-latin_latin-ext-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('/static/fonts/lato-v16-latin_latin-ext-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
     font-display: swap;
  }
`;
