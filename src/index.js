import React from "react";
import ReactDOM from "react-dom";
import "reset-css";
import * as serviceWorker from "./serviceWorker";
import Page from "./components/Page";
import { GlobalStyle } from "./helpers/style";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Page />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
