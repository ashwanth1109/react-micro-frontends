import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { BehaviorSubject } from "rxjs";

const mount = (el: Element, { navigate, isSignedIn$ }: HeaderMountOptions) => {
  ReactDOM.render(<Header navigate={navigate} isSignedIn$={isSignedIn$} />, el);
};

if (process.env.NODE_ENV === "development") {
  const rootNode = document.querySelector("#header-component-root");

  if (rootNode) {
    const mockOptions: HeaderMountOptions = {
      navigate: (route: string) => {
        console.log(`Navigate to route: ${route}`);
      },
      isSignedIn$: new BehaviorSubject<boolean>(false),
    };

    mount(rootNode, mockOptions);
  }
}

export { mount };
