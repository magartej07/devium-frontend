import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import Routes from "./Routes.jsx";
import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <Routes />
    </MantineProvider>
  </React.StrictMode>
);
