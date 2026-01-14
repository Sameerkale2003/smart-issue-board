import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";   // ✅ FIXED
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
