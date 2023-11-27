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

<<<<<<< HEAD
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
    font-size: 18px;

  &:focus {
    background-color: #242020;
    transition: all 2s linear;
    }
  }
=======



>>>>>>> a5bd10241f89367c99ffcf83f07578ff83692dd7
`

export default GlobalStyles;