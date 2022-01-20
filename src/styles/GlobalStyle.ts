import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  } 
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  button {
    padding: 0;
    outline: none;
    border: 0;
    cursor: pointer;
  }
  
`;

export default GlobalStyle;
