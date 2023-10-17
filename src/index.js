import App from "./App";
import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";

const Index = () => {
  return <App />;
};

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(<Index />);
