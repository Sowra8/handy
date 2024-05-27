import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Main from "./component/Maincomponent/Landing.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Main />
  </React.StrictMode>
);
