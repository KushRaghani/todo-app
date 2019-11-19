import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    font-size: 16px;
    line-height: 1.5;
    color: #000;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    line-height: 1.25;
  }
  h1 { font-size: 2.25em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.25em; }
  h4 { font-size: 1em; }
  h5 { font-size: 0.875em; }
  h6 { font-size: 0.75em; }
  hr {
    border: 0;
    height: 0;
    border-top: 1px solid black;
  }
  .main-app {
    display: flex;
    height: 100%;
  }
`;
