import React from "react";
import ReactDOM from "react-dom";
import "reset-css";
import * as serviceWorker from "./serviceWorker";
import Page from "./components/Page";
import { GlobalStyle } from "./constants/style";
import Modal from "react-modal";

Modal.setAppElement("#root");

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Page />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
