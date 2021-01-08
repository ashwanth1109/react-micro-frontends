import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el: Element, { navigate }: LandingMountOptions) => {
  ReactDOM.render(<App navigate={navigate} />, el);
};

if (process.env.NODE_ENV === "development") {
  const rootNode = document.querySelector("#landing-module-root");

  if (rootNode) {
    mount(rootNode, { navigate: () => {} });
  }
}

export { mount };
