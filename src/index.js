import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";  // Corrected import

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


