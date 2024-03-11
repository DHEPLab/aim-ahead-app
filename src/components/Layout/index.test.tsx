import { render, screen } from "@testing-library/react";
import Layout from ".";

describe("Test Layout on variable media point view port:", () => {
  const mockWindowInnerWidth = (width: number) => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: width,
    });
  };

  it("should on mobile view port", () => {
    mockWindowInnerWidth(420);

    const { container } = render(<Layout />);

    expect(container).toMatchSnapshot();

    // const layoutStyles = window.getComputedStyle(screen.getByTestId("aim-ahead-layout"));
    // expect(layoutStyles.margin).toBe("");
    // expect(layoutStyles.maxWidth).toBe("");
  });

  it("should on PC view port", () => {
    mockWindowInnerWidth(1680);

    const { container } = render(<Layout />);

    expect(container).toMatchSnapshot();

    // const layoutStyles = window.getComputedStyle(screen.getByTestId("aim-ahead-layout"));
    // expect(layoutStyles.margin).toBe("0 auto");
    // expect(layoutStyles.maxWidth).toBe("576px");
  });
});
