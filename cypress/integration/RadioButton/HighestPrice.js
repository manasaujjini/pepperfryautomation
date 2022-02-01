/// <reference types="cypress" />

describe("My first project", function () {
    let highestPriceArray = [];
    it("My project", function () {

        cy.visit('https://www.pepperfry.com/')
        cy.get('#search').should('be.visible').type('study table')
        cy.get('#searchButton').click()
        cy.get('label[for="price-desc"]').click()
        cy.wait(5000);
        // cy.intercept("GET", "/site_product/search?q=study%20table&as=0&src=study%20table&forder=&order=price&dir=desc&p=1").as("highestPrice")
        // cy.wait("@highestPrice", { timeout: 45000 });
        cy.get('.clipCard__price-offer').each($elem => {
            highestPriceArray.push($elem.text())
            cy.log("elemPrice", $elem.text())
        })
        cy.log("highestPriceArray", highestPriceArray)
        cy.get('.clipCard__price-offer').first().invoke('text').should("be.eq", highestPriceArray[1])
    })
})