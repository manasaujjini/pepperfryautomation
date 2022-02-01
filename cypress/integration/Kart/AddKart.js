/// <reference types="cypress" />

describe("kart scenario", function () {

    before(function () {
        cy.fixture('example').then(function (example) {
            this.example = example
        })
    })

    it("to add 2 iteams into the kart", function () {

        cy.visit('https://www.pepperfry.com/')
        cy.get('#search').should('be.visible').type('study table')
        cy.get('#searchButton').click()
        this.example.productName.forEach(function (element) {
            cy.selectProduct(element)
        })
        cy.get('.proceed_cta').should('be.visible').contains('Proceed to pay securely ').click()
    })
})