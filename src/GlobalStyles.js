import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  :before,
  :after {
    box-sizing: border-box;
  }

  body,
  html {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
  }

`;
