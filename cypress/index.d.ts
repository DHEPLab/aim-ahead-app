/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        auth(email: string, password: string): void
        getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
}