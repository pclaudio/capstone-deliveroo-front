import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Contexts } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Contexts>
        <App />
      </Contexts>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
