/// <reference types="cypress" />
describe("My first project", function () {
    it("My project", function () {


        cy.visit('https://www.pepperfry.com/')

        cy.get('.hd-profile-cta-wrap > .hd-icon-cta').should('be.visible').invoke('show')
        cy.contains('Login/Register')
        cy.wait(6000)
        cy.get('.home-rgstr-fname > .animate-input').should('be.visible').type('Manasa')
        cy.get('#signup-form > :nth-child(3) > .home-rgstr-mobile > .animate-input').should('be.visible').type('9035643136')
        cy.get('.home-rgstr-email .animate-input').should('be.visible').type('12345')
        cy.get('#password1-mreg').should('be.visible').type('Ujjini@0895')
        cy.get('.home-rgstr-email #email').should('have.text', 'Enter a valid Email ID')
        cy.get('#formSubmit-popup_reg_form').click()
    })
})