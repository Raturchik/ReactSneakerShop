import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { AppContextProvider } from "./context/";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
);
