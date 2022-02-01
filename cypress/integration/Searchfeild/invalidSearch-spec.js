/// <reference types="cypress" />
describe("search scenario", function () {
    it("to get error message", function () {

        cy.visit('https://www.pepperfry.com/')
        cy.get('#search').should('be.visible').type('1234')
        cy.get('#searchButton').click()
        cy.get('.default__ttl').then(function (element) {
            const text = element.text()
            expect(text.includes('Results')).to.be.true
        })
    })
})