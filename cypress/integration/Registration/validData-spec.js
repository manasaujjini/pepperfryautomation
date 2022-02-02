/// <reference types="cypress" />
describe("registration scenario", function () {

    before(function () {
        cy.fixture('example').then(function (example) {
            this.example = example
        })
    })

    it("should get register", function () {

        cy.visit('https://www.pepperfry.com/')
        cy.get('.hd-profile-cta-wrap > .hd-icon-cta').should('be.visible').invoke('show')
        cy.contains('Login/Register')
        cy.wait(6000)
        cy.get('.home-rgstr-fname > .animate-input').should('be.visible').type(this.example.name)
        cy.get('#signup-form > :nth-child(3) > .home-rgstr-mobile > .animate-input').should('be.visible').type(this.example.phoneno)
        cy.get('.home-rgstr-email .animate-input').should('be.visible').type(this.example.emailid)
        cy.get('#password1-mreg').should('be.visible').type(this.example.password)
        cy.get('#formSubmit-popup_reg_form').click()

    })
})