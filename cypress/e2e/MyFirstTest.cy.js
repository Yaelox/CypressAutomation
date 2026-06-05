<reference types="cypress" />

describe('My First Test', () => {

  it('verify title-positive', () => {

    //steps

    cy.visit("https://opensource-demo.orangehrmlive.com/")

    cy.title().should('eq', 'OrangeHRM') 
  })
  
  it('verify title-negative test', () => {

    //steps

    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq', 'OrangeHRM1') 



  })
})