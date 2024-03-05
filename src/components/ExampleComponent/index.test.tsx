import React from "react";
import { render, screen } from "@testing-library/react";
import ExampleComponent from "./index";

test("renders text", () => {
  render(<ExampleComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
