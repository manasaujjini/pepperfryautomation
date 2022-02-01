/// <reference types="cypress" />
describe("kart scenario", function () {
    it("to increase the quantity of item", function () {

        cy.visit('https://www.pepperfry.com/')
        cy.get('#search').should('be.visible').type('study table')
        cy.get('#searchButton').click()
        cy.get('#p_1_1_1760543 > .clipCard__wrapper > .clipCard__hd > .clipCard__addtocart > .clip-add-to-cart-btn').invoke('show').click()
        cy.get('.proceed_cta').contains('Proceed to pay securely ').click()
        cy.focused('.ck-sku-qty-add').click({ force: true })
        //cy.get('.quntity-input').should('have.lengthOf', 2)

    })
})