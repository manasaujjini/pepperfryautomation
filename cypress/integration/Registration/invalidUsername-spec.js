/// <reference types="cypress" />
describe("My first project", function () {
    it("My project", function () {


        cy.visit('https://www.pepperfry.com/')

        cy.get('.hd-profile-cta-wrap > .hd-icon-cta').should('be.visible').invoke('show')
        cy.contains('Login/Register')
        cy.wait(6000)
        cy.get('.home-rgstr-fname > .animate-input').should('be.visible').type('1234')
        cy.get('#signup-form > :nth-child(3) > .home-rgstr-mobile > .animate-input').should('be.visible').type('9035643136')
        cy.get('.home-rgstr-email .animate-input').should('be.visible').type('mansiujjini@gmail.com')
        cy.get('#password1-mreg').should('be.visible').type('Ujjini@0895')
        cy.get('#firstname').should('be.visible')

    })
})