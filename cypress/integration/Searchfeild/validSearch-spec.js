/// <reference types="cypress" />
describe("search scenario", function () {
    it("should get searched item", function () {

        cy.visit('https://www.pepperfry.com/')
        cy.get('#search').should('be.visible').type('study table')
        cy.get('#searchButton').click()
        cy.get('.clipCard__contatiner .clipCard__bd .clipCard__ttl a').then(function (element) {
            const text = element.text()
            expect(text.includes('Study Table')).to.be.true
        })

    })
})