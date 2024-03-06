import React from "react";
import { render, screen } from "@testing-library/react";
import ExamplePage from "./index";

test("renders example page", () => {
  render(<ExamplePage />);
  const linkElement = screen.getByText(/and save to reload/i);
  expect(linkElement).toBeInTheDocument();
});
