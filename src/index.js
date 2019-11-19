import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./shared/styles/theme";
import GlobalStyles from "./shared/styles/globals";
import App from "./components/App";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("container")
);
