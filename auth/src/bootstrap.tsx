import React from "react";
import ReactDOM from "react-dom";

const mount = (el: Element) => {
  ReactDOM.render(<h1>Auth Module</h1>, el);
};

if (process.env.NODE_ENV === "development") {
  const rootNode = document.querySelector("#auth-module-root");

  if (rootNode) {
    mount(rootNode);
  }
}

export { mount };
