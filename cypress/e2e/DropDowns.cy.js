/// <reference types="cypress" />

describe('Handle dropdowns',() => { 

    it.skip('Dropdown with select',()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('#zcf_address_country')
        .selected('Italy')
        .should('have.value','Italy')

    })

    it.skip('Dropdown without select',()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')

        cy.get('#select2-billing_country-container')
        .should('have.text','Italy')

    })

    it.skip('Auto suggest dropdown',()=>{

        cy.visit("https://es.wikipedia.org/wiki/Wikipedia:Portada")

        cy.get('#search').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi').click()
    })

   it('Dynamic dropdown', () => {

    cy.visit('https://www.google.com/')

    cy.get("textarea[name='q']")
      .type('cypress automation')

    cy.wait(3000)

    cy.get('div.wM6W7d > span')
      .should('have.length.greaterThan', 0)

    cy.get('div.wM6W7d > span').each(($el) => {

        if ($el.text().trim() === 'cypress automation tool') {

            cy.wrap($el).click()
        }

    })

    cy.get("textarea[name='q']")
      .should('have.value', 'cypress automation tool')

})
})