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

  .classdeErro {
    border-bottom: 1px solid red;
  }

  input {
    width: 80%;
    border:none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    outline: none;
    border-bottom: solid 1px whitesmoke;
    color: whitesmoke;
    height: 40px;
    background-color: transparent;
    font-size: 1rem;

  &:focus {
    background-color: rgb(255 255 255 / 0%);
    outline: none;
    box-shadow: none;
    }
  }

  body::-webkit-scrollbar{
    background-color: #242424 ;
    width: 8px;
  }

  body::-webkit-scrollbar-thumb{
     background-color: #CC830E ;
     border-radius: 10px;
  }

`

export default GlobalStyles;