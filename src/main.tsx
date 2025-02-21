import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";

import "./i18n/set-up";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode children={<App />} />
);
