import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import AuthProvider from "./contexts/AuthProvider";
import AuthHandler from "./contexts/AuthHandler";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AuthHandler>
          <Router />
        </AuthHandler>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
