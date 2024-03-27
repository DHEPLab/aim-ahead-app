describe("Physicians can go to login screen and login.", () => {
  const loginLink = "http://localhost:3000/login";

  const test = {
    email: {
      invalid: "@example.com",
      valid: "user@example.com",
    },
    password: {
      invalid: "1234abcd",
      valid: "&2vVTx=J",
    },
  };

  beforeEach(() => {
    cy.visit(loginLink);
  });

  it("Physicians could access the auth form on registration page.", () => {
    cy.getByTestId("email-input");
    cy.getByTestId("password-input").should("have.attr", "type", "password");

    cy.contains("a", "Sign Up").should("exist").click().url().should("include", "/signup");
  });

  it("Physicians could input the email address and email show have valid check", () => {
    const expectedMessage = "Invalid email address. Please correct and try again.";

    cy.getByTestId("email-input").type(test.email.invalid);
    cy.contains(expectedMessage).should("not.exist");

    cy.getByTestId("password-input").type("1234@abcd");
    cy.getByTestId("auth-submit-button").click();
  });

  it("Physicians could input the password and click icon to revel password", () => {
    cy.getByTestId("password-visibility-button").click();
    cy.getByTestId("password-input").should("have.attr", "type", "text");
  });

  it("Physicians could see the message when they are not in pilot group", () => {
    const expectedMessage = "It seems that you are not invited to Pilot group. Please contact dhep.lab@gmail.com";

    cy.intercept("POST", "/api/auth/login", {
      statusCode: 500,
      fixture: "signup/UserNotInPilot.json",
    });

    cy.auth(test.email.valid, test.password.valid);
    cy.getByTestId("auth-submit-button").click();

    cy.contains(expectedMessage).should("exist");
  });

  it("Physicians could see the message when they are not sign up yet", () => {
    const expectedMessage = "Email hasn’t sign up, please sign up.";

    cy.intercept("POST", "/api/auth/login", {
      statusCode: 500,
      fixture: "login/UserEmailIsNotSignup.json",
    }).as("UserEmailIsNotSignup");

    cy.auth(test.email.valid, test.password.valid);
    cy.getByTestId("auth-submit-button").click();

    cy.contains(expectedMessage).should("exist");
  });

  it("Physicians could see the message when the password is not correct", () => {
    const expectedMessage = "Incorrect password. Please try again.";

    cy.intercept("POST", "/api/auth/login", {
      statusCode: 500,
      fixture: "login/UserPasswordIncorrect.json",
    }).as("UserPasswordIncorrect");

    cy.auth(test.email.valid, test.password.valid);
    cy.getByTestId("auth-submit-button").click();

    cy.contains(expectedMessage).should("exist");
  });

  it("Physicians sign up successfully will navigate to home page", () => {
    cy.intercept("POST", "/api/auth/login", { statusCode: 200 });

    cy.auth(test.email.valid, test.password.valid);
    cy.getByTestId("auth-submit-button").click();

    cy.url().should("include", "/");
  });
});
