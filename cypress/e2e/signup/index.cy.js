describe("Physicians can sign up and go to login screen.", () => {
    const registrationLink ="http://localhost:3000/signup"
    
    const test = {
        email: {
            invalid: "@example.com",
            valid: "user@example.com"
        },
        password: {
            invalid: "1234abcd",
            valid: "&2vVTx=J"
        } 
    }

    beforeEach(() => {
        cy.visit(registrationLink);
    })

    it("Physicians could access the auth form on registration page.", () => {
        cy.getByTestId("email-input")
        cy.getByTestId("password-input").should("have.attr", "type", "password")

        cy.contains('a', 'Log In').should('exist').click().url().should('include', '/login');
    });


    it("Physicians could input the eamil address and email show have valid check", () => {
        const expectedMessage = "Invalid email address. Please correct and try again."
        

        cy.getByTestId("email-input").type(test.email.invalid)
        cy.contains(expectedMessage).should('not.exist')

        cy.getByTestId("password-input").type("1234@abcd")
        cy.getByTestId("auth-submit-button").click()
        cy.contains(expectedMessage).should('exist')
    });


    it("Physicians could input the password and password should have an strength check", () => {
        const expectedMessage = "Passwords must have at least 8 characters and contain at least a letter, a number and a symbol"
        
        cy.auth(test.email.valid, test.password.invalid)
        cy.getByTestId("auth-submit-button").click()
        cy.contains(expectedMessage).should('exist')
    });


    it("Physicians could see the message when they are not in pilot group", () => {
        const expectedMessage = "It seems that you are not invited to Pilot group. Please contact dhep.lab@gmail.com"

        cy.intercept('POST', '/api/auth/signup', {
              statusCode: 500,
              fixture: 'signup/UserNotInPilot.json'
        })
        
        cy.auth(test.email.valid, test.password.valid)
        cy.getByTestId("auth-submit-button").click()

        cy.contains(expectedMessage).should('exist')
    });

    it("Physicians could see the message when they are already sign up", () => {
        const expectedMessage = "Email is already sign up, please login."

        cy.intercept('POST', '/api/auth/signup', {
            statusCode: 500,
            fixture: 'signup/UserEmailIsAlreadySignup.json'}
        ).as('UserEmailIsAlreadySignup')
        
        cy.auth(test.email.valid, test.password.valid)
        cy.getByTestId("auth-submit-button").click()

        cy.contains(expectedMessage).should('exist')
    });


    it("Physicians sign up successfully will navigate to login page", () => {
        cy.intercept('POST', '/api/auth/signup', {statusCode: 201})
        
        cy.auth(test.email.valid, test.password.valid)
        cy.getByTestId("auth-submit-button").click()

        cy.url().should('include', '/login');
    });

})
