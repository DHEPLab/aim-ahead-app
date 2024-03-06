import React from "react";
import { render, screen } from "@testing-library/react";
import ExampleHomePage from "./index";
import { BrowserRouter } from "react-router-dom";

test("renders example page", () => {
  render(
    <BrowserRouter>
      <ExampleHomePage />
    </BrowserRouter>,
  );
  const linkElement = screen.getByText(/Go to User Page/i);
  expect(linkElement).toBeInTheDocument();
});
