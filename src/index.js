import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextApi } from "./components/ContaxtApi";
import { ChakraProvider } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextApi>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ContextApi>
  </BrowserRouter>
);
