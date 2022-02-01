/// <reference types="cypress" />
describe("login scenario", function () {

    before(function () {
        cy.fixture('example').then(function (example) {
            this.example = example
        })
    })

    it("to login", function () {

        cy.visit('https://www.pepperfry.com/')
        cy.get('.hd-profile-cta-wrap > .hd-icon-cta').should('be.visible').invoke('show')
        cy.contains('Login/Register')
        cy.wait(6000)
        cy.get('#regPopUp > .popup-body > .reg-modal-right > .reg-modal-right-bottom-wrap > .reg-modal-right-bottom-btn-wrap > .reg-modal-right-bottom-btn').should('be.visible').click()
        cy.get('#signIn-form-username .home-rgstr-mobile .animate-input').should('be.visible').type(this.example.emailid1)
        cy.get('#password').should('be.visible').type("Ujjini@0895")

        cy.intercept({
            method: "POST",
            url: "https://www.pepperfry.com/customer/authenticate?ref="
        },
            {
                statuscode: 204,
                "user[new]": "mansiujjini@gmail.com",
                "password": "Ujjini@0895"
            }).as('login')
        cy.get('#formSubmit-popup_login_username_form').should('be.visible').click()
        cy.wait('@login')
    })
})