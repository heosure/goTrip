import React from "react";
import ReactDOM from "react-dom/client";
import "./css/myreset.css";
import "./css/common.css";
import Main from "./Main";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
