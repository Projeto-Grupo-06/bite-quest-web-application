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