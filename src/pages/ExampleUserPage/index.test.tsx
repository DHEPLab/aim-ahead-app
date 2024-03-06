import React from "react";
import { render, screen } from "@testing-library/react";
import ExampleUserPage from "./index";
import { BrowserRouter } from "react-router-dom";

test("renders example page", () => {
  render(
    <BrowserRouter>
      <ExampleUserPage />
    </BrowserRouter>,
  );
  const linkElement = screen.getByText(/Go to Home Page/i);
  expect(linkElement).toBeInTheDocument();
});
