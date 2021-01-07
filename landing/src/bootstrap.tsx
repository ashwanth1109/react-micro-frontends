import React from "react";
import ReactDOM from "react-dom";

const mount = (el: Element) => {
  ReactDOM.render(<h1>Test</h1>, el);
};

if (process.env.NODE_ENV === "development") {
  const rootNode = document.querySelector("#root");

  if (rootNode) {
    mount(rootNode);
  }
}

export { mount };
