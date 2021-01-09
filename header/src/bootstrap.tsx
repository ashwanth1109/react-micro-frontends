import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { Observable } from "rxjs";

const mount = (el: Element, options: HeaderMountOptions) => {
  ReactDOM.render(<Header {...options} />, el);
};

if (process.env.NODE_ENV === "development") {
  const rootNode = document.querySelector("#header-component-root");

  if (rootNode) {
    const mockOptions: HeaderMountOptions = {
      navigate: (route: string) => {
        console.log(`Navigate to route: ${route}`);
      },
      isSignedIn$: new Observable<boolean>(),
      logout: () => {},
    };

    mount(rootNode, mockOptions);
  }
}

export { mount };
