import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import AuthenticationForm, { FormType } from "./index";

describe("AuthenticationForm", () => {
  const passwordRegex = /.*/;

  const handelSubmit = (email: string, password: string) => {
    return Promise.resolve();
  };

  test("renders login form", () => {
    render(<AuthenticationForm pageType={FormType.Login} handelSubmit={handelSubmit} passwordRegex={passwordRegex} />);

    expect(screen.getByText("Log In")).toBeInTheDocument();
    expect(screen.getByTestId("email-label")).toBeInTheDocument();
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-label")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByTestId("redirect-label")).toBeInTheDocument();
    expect(screen.getByTestId("password-visibility-button")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  test("updates email and password fields correctly", () => {
    render(<AuthenticationForm pageType={FormType.Login} handelSubmit={handelSubmit} passwordRegex={passwordRegex} />);

    const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  test("displays password in text format when showPassword is true", () => {
    render(<AuthenticationForm pageType={FormType.Login} handelSubmit={handelSubmit} passwordRegex={passwordRegex} />);

    const passwordInput = screen.getByTestId("password-input");
    const passwordVisibilityButton = screen.getByTestId("password-visibility-button");

    fireEvent.click(passwordVisibilityButton);

    expect(passwordInput).toHaveAttribute("type", "text");
  });

  test("hides password in password format when showPassword is false", () => {
    render(<AuthenticationForm pageType={FormType.Login} handelSubmit={handelSubmit} passwordRegex={passwordRegex} />);

    const passwordInput = screen.getByTestId("password-input");
    const passwordVisibilityButton = screen.getByTestId("password-visibility-button");

    fireEvent.click(passwordVisibilityButton);
    fireEvent.click(passwordVisibilityButton);

    expect(passwordInput).toHaveAttribute("type", "password");
  });

  test("only enable button when email and password are inputted", () => {
    render(<AuthenticationForm pageType={FormType.Login} handelSubmit={handelSubmit} passwordRegex={passwordRegex} />);

    const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;
    const button = screen.getByTestId("button");

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    });
    expect(button).toBeDisabled();

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      fireEvent.change(passwordInput, { target: { value: "password123" } });
    });
    expect(button).not.toBeDisabled();

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      fireEvent.click(button);
    });
  });

  test("displays error for invalid email", () => {
    render(
      <AuthenticationForm
        pageType={FormType.SignUp}
        passwordRegex={/^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/}
        handelSubmit={handelSubmit}
      />,
    );
    const button = screen.getByTestId("button");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      fireEvent.change(emailInput, { target: { value: "invalidemail" } });
      fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });
      fireEvent.click(button);
    });

    expect(screen.getByText("Invalid email address. Please correct and try again.")).toBeInTheDocument();
  });

  test("displays error for invalid password", () => {
    render(
      <AuthenticationForm
        pageType={FormType.SignUp}
        passwordRegex={/^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/}
        handelSubmit={() => Promise.reject()}
      />,
    );

    const button = screen.getByTestId("button");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });
      fireEvent.click(button);
    });

    expect(
      screen.getByText(
        "Passwords must have at least 8 characters and contain at least a letter, a number and a symbol.",
      ),
    ).toBeInTheDocument();
  });

  test("submits form with valid email and password", () => {
    const handleSubmit = jest.fn();

    render(
      <AuthenticationForm
        pageType={FormType.SignUp}
        passwordRegex={/^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/}
        handelSubmit={handleSubmit}
      />,
    );

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    fireEvent.change(emailInput, { target: { value: "validemail@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "validpassword@" } });
    fireEvent.submit(screen.getByTestId("form"));

    expect(handleSubmit).toHaveBeenCalledWith("validemail@example.com", "validpassword@");
  });
});
