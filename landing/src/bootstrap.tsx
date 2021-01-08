import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BehaviorSubject } from "rxjs";

const mount = (el: Element, route$: BehaviorSubject<string>) => {
  ReactDOM.render(<App route$={route$} />, el);
};

if (process.env.NODE_ENV === "development") {
  const rootNode = document.querySelector("#landing-module-root");

  const mockRoute$ = new BehaviorSubject("/");

  if (rootNode) {
    mount(rootNode, mockRoute$);
  }
}

export { mount };
