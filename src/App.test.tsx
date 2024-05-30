import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders header component", () => {
  act(() => {
    <BrowserRouter>
      <App />
    </BrowserRouter>;
  });
});