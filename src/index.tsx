import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Contexts } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <Contexts>
      <App />
    </Contexts>
  </React.StrictMode>,
  document.getElementById("root")
);
