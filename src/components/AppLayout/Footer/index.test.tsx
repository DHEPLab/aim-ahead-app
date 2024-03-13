import { render } from "@testing-library/react";
import Footer from ".";

it("Footer snapshot test", () => {
  expect(render(<Footer />)).toMatchSnapshot();
});
