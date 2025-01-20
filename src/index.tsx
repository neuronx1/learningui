import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import reportWebVitals from "./reportWebVitals.ts";
import { ViewProvider } from "./context/ViewContext";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ViewProvider>
        <Router>
          <App />
        </Router>
      </ViewProvider>
    </React.StrictMode>
  );
}

reportWebVitals();