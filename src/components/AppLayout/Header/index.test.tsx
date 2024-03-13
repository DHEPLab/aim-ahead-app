import { render } from "@testing-library/react";
import Header from ".";

it("Header snapshot test", () => {
  expect(render(<Header />)).toMatchSnapshot();
});
