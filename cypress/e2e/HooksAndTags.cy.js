/// <reference types="cypress" />
import 'cypress-file-upload'

//Hooks

//before
//after
//beforeEach
//AfterEach

describe('MyTestSuite', () => { 

    before(()=>{

        cy.log("***** Launch app *****")
    })

    after(()=>{

         cy.log("***** Close app  *****")

    })

    beforeEach(()=>{

            cy.log("***** Login *****")
    })

    afterEach(()=>{

         cy.log("***** Logout *****")
    })
  
    it('Search',()=>{

        cy.log("***** searching *****")


    });

    it.skip('Advanced search',()=>{

         cy.log("***** Advanced search  *****")



    });

    it.only('Listing Products',()=>{

         cy.log("***** Listing Products  *****")

    });
})