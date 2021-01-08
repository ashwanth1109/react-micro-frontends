import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

const mount = (el: Element) => {
  ReactDOM.render(<Header />, el);
};

if (process.env.NODE_ENV === "development") {
  const rootNode = document.querySelector("#header-component-root");

  if (rootNode) {
    mount(rootNode);
  }
}

export { mount };
