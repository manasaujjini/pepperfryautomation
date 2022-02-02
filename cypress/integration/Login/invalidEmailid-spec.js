/// <reference types="cypress" />
describe("login scenario", function () {

    before(function () {
        cy.fixture('example').then(function (example) {
            this.example = example
        })
    })

    it("should get error message for invalid emailid", function () {

        cy.visit('https://www.pepperfry.com/')
        cy.get('.hd-profile-cta-wrap > .hd-icon-cta').should('be.visible').invoke('show')
        cy.contains('Login/Register')
        cy.wait(6000)
        cy.get('#regPopUp > .popup-body > .reg-modal-right > .reg-modal-right-bottom-wrap > .reg-modal-right-bottom-btn-wrap > .reg-modal-right-bottom-btn').should('be.visible').click()
        cy.get('#signIn-form-username .home-rgstr-mobile .animate-input').should('be.visible').type('abcd')
        cy.get('#password').should('be.visible').type(this.example.password)
        cy.get('#formSubmit-popup_login_username_form').should('be.visible').click()
        cy.get('#signIn-form-username #mobile').should('have.text', 'Enter a valid Email ID')

    })
})