import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Store from "../src/Redux/store/store.js";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-google-recaptcha';

import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
