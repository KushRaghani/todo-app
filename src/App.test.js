import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

test("renders App", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
