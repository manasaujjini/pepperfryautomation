/// <reference types="cypress" />

describe("My first project", function () {

    before(function () {
        cy.fixture('example').then(function (example) {
            this.example = example
        })
    })

    it("My project", function () {

        cy.visit('https://www.pepperfry.com/')
        cy.get('#search').should('be.visible').type('study table')
        cy.get('#searchButton').click()
        this.example.productName.forEach(function (element) {
            cy.selectProduct(element)
        })
        cy.get('.proceed_cta').should('be.visible').contains('Proceed to pay securely ').click()
    })
})