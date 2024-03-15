import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AuthenticationForm, { FormType } from "./index";

describe("AuthenticationForm", () => {
  test("renders login form", () => {
    render(<AuthenticationForm type={FormType.Login} />);

    expect(screen.getByTestId("email-label")).toBeInTheDocument();
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-label")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("renders sign up form", () => {
    render(<AuthenticationForm type={FormType.SignUp} />);

    expect(screen.getByTestId("email-label")).toBeInTheDocument();
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-label")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(
      screen.getByText("Password should be 8-12 characters and at least include one special character"),
    ).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  test("updates email and password fields correctly", () => {
    render(<AuthenticationForm type={FormType.Login} />);

    const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  test("submits login form with correct values", () => {
    render(<AuthenticationForm type={FormType.Login} />);

    const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;
    const loginButton = screen.getByText("Login");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);

    // Add assertions for the login logic, for example, check if the login logic function is called with the correct parameters
  });
});
