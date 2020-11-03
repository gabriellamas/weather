import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *:before, *:after {
    box-sizing: inherit;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;  
  }
  
  body {
    background: #121212;
    font-size: 16px;
    color: #fff;
  }  
  
  label {
    display: inline-block;
    margin-bottom: .5rem;
  }
  
  p {
    margin: 0; 
  }
`;
export default GlobalStyle;
