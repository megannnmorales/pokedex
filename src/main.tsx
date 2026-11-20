import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { ToastProvider } from "./contexts/ToastContext.tsx";
import { TeamContext, TeamProvider } from "./contexts/TeamContext.tsx";
import { UserProvider } from "./contexts/UserContext.tsx";

const container = document.getElementById("root");
if (!container) throw new Error("DOM element #root not found");

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          <ToastProvider>
            <TeamProvider>
              <App />
            </TeamProvider>
          </ToastProvider>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
