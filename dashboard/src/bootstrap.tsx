import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el: Element) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const rootNode = document.querySelector("#dashboard-module-root");

  if (rootNode) {
    mount(rootNode);
  }
}

export { mount };
