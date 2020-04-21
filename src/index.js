import React from "react";
import ReactDOM from "react-dom";
import "reset-css";
import * as serviceWorker from "./serviceWorker";
import Page from "./components/Page";

ReactDOM.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
