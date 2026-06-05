/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


import 'cypress-iframe'

describe('Handling frames', () => { 
    
    it.skip('Approach1',()=>{
        
        cy.visit('https://the-internet.herokuapp.com/iframe');

        const iframe=cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type("Your content goes here.{cmd+a}");

        cy.get("[aria-label='Bold']").click();
    })

    it.skip('Approach2',()=>{
        
        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.getIframe('#mce_0_ifr').clear().type("Your content goes here.{cmd+a}");
        cy.get("[aria-label='Bold']").click();
    })

     it('Approach3 - buy using cypress-iframe plugin',()=>{
        
        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.frameLoaded('#mce_0_ifr');

        cy.iframe('#mce_0_ifr').clear().type("Your content goes here.");

        cy.get("[aria-label='Bold']").click();

    })
})

