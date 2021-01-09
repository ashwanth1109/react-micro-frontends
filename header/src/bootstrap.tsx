import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

const mount = (el: Element, { navigate }: HeaderMountOptions) => {
  ReactDOM.render(<Header navigate={navigate} />, el);
};

if (process.env.NODE_ENV === "development") {
  const rootNode = document.querySelector("#header-component-root");

  if (rootNode) {
    const mockOptions: HeaderMountOptions = {
      navigate: (route: string) => {
        console.log(`Navigate to route: ${route}`);
      },
    };

    mount(rootNode, mockOptions);
  }
}

export { mount };
