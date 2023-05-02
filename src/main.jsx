import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Myprovayder } from "./Components/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Myprovayder>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Myprovayder>
);
