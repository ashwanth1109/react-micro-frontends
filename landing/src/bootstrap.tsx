import React from "react";
import ReactDOM from "react-dom";

const mount = (el: Element) => {
  ReactDOM.render(<h1>Landing Test</h1>, el);
};

// If its development mode and is a local run (i.e. outside container)
// @ts-ignore [these values are supplied globally by webpack]
if (BUILD_MODE === "development" && APP_PACKAGE === "landing") {
  const rootNode = document.querySelector("#root");

  if (rootNode) {
    mount(rootNode);
  }
}

export { mount };
