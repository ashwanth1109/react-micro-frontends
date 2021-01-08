import React from "react";
import ReactDOM from "react-dom";
import { BehaviorSubject } from "rxjs";
import App from "./App";

const mount = (el: Element) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const rootNode = document.querySelector("#auth-module-root");

  if (rootNode) {
    mount(rootNode);
  }
}

export { mount };
