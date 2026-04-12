import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ShoppingState } from "./contexts/shopping/ShoppingState.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShoppingState>
      <StrictMode>
        <App />
      </StrictMode>
    </ShoppingState>
  </BrowserRouter>,
);
