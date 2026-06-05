/// <reference types="cypress" />


describe ('Check UI Elements', ()=> {

    /*  it("Checking UI Elements", () =>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of radio buttons
        cy.get('input#male').should('be.visible')
        cy.get('input#female').should('be.visible')

        //selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked') 

    })*/

            it("Checking Check boxes ", () =>{

            cy.visit("https://itera-qa.azurewebsites.net/home/automation")

            //Visibility of the element
            //cy.get("input#monday").should('be.visible')

            //Selecting single check box - monday
            //cy.get("input#monday").check().should('be.checked')

            //UnSelecting checkbox
            //cy.get("input#monday").uncheck().should('not.be.checked')

            //Selecting all the check boxes
            //cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
            //cy.get("input.form-check-input[type='checkbox']").check().should('not.be.checked')

            //Select first checkbox
            cy.get("input.form-check-input[type='checkbox']").first().check()
            cy.get("input.form-check-input[type='checkbox']").last().check()

        })
})