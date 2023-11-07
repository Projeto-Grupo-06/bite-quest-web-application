import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: 'Bebas Neue', sans-serif;
    text-decoration: none;
  }

  body {
    overflow-x: hidden;
  }
`
export default GlobalStyles;