/// <reference types="cypress" />

describe("radio button scenario", function () {
    let lowestPriceArray = [];
    it("to fetch lowest price", function () {

        cy.visit('https://www.pepperfry.com/')
        cy.get('#search').should('be.visible').type('study table')
        cy.get('#searchButton').click()
        cy.get('label[for="price-asc"]').click()
        cy.wait(5000);
        //cy.intercept("GET", "/site_product/search?q=study%20table&as=0&src=study%20table&forder=&order=price&dir=desc&p=1").as("highestPrice")
        // cy.wait("@highestPrice", { timeout: 45000 });
        cy.get('.clipCard__price-offer').each($elem => {
            lowestPriceArray.push($elem.text())
            cy.log("elemPrice", $elem.text())
        })
        cy.log("lowestPriceArray", lowestPriceArray)
        cy.get('.clipCard__price-offer').first().invoke('text').should("be.eq", lowestPriceArray[1])
    })
})