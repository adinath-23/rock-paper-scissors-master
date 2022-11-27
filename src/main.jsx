import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RpsContextProvider } from "./store/rps-ctx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RpsContextProvider>
      <App />
    </RpsContextProvider>
  </React.StrictMode>
);
