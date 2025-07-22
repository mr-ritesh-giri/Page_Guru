import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Popup from "./popup";
import "./index.css";
import { AiProvider } from "./context/AiContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AiProvider>
      <Popup />
    </AiProvider>
  </StrictMode>
);
