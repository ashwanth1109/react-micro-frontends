import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const AppWithRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.render(<AppWithRouter />, document.querySelector("#root"));
