/// <reference types="cypress" />

describe('first', () => {
    it("NavigationTest",()=>{
        cy.visit("https://opencart.abstracta.us/");
        cy.title().should('eq','Your Store'); //Home Page

        cy.get("//a[normalize-space()='Cameras']").click();
        cy.get("div[id='content'] h2").should('have.text','Cameras'); //Cameras

        cy.go('back'); //Go back to home page
        cy.title().should('eq','Your Store'); //Home Page

    })
})