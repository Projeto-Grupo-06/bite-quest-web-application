import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
  }

  body {
    overflow-x: hidden;
  }
`
export default GlobalStyles;