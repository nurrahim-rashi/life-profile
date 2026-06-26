import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// TypeScript may not find type declarations for this side-effect font import.
// @ts-ignore: allow side-effect import from @fontsource package without types
import "@fontsource/manrope";
import "cally";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
