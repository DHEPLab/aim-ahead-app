import { render } from "@testing-library/react";
import AppLayout from ".";

it("AppLayout match snapshot test", () => {
  expect(render(<AppLayout />)).toMatchSnapshot();
});
