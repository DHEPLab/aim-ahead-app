import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import withCredencial from "./";

jest.mock("../../services/api", () => ({
  getToken: jest.fn(),
}));

const WrappedComponent = withCredencial(() => {
  return <div>Authed</div>;
});

describe("withCredencial", () => {
  it("should render the wrapped component if token exists", () => {
    require("../../services/api").getToken.mockReturnValue("token");

    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<WrappedComponent />} />
          <Route path="/login" element={"Login"} />
        </Routes>
      </MemoryRouter>,
    );

    expect(getByText("Authed")).toBeInTheDocument();
  });

  it("should navigate to login page if token does not exist", () => {
    require("../../services/api").getToken.mockReturnValue("");

    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<WrappedComponent />} />
          <Route path="/login" element={"Login"} />
        </Routes>
      </MemoryRouter>,
    );

    expect(getByText("Login")).toBeInTheDocument();
  });
});
