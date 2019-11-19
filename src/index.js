import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Provider as ReduxProvider } from "react-redux";
import theme from "./shared/styles/theme";
import GlobalStyles from "./shared/styles/globals";
import App from "./components/App";

import configureStore from "./redux/configureStore";
const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById("container")
);
