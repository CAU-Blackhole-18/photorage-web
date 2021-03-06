import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    margin: 0px;
    padding: 0px;
  }

  #root {
  min-height: 100%;
  }
  
  button {
    border: none;
  }

  a {
    text-decoration: none;
  }

  input:focus {
    outline: none;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.ttf')
  }
  
`;

export default GlobalStyle;
