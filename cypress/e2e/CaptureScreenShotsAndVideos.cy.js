describe('first', () => { 
    it('Capture screenshots & videos',()=>{

        cy.visit('https://opencart.abstracta.us/', {
            timeout: 120000
        })
        /* cy.screenshot("homepage");
        cy.wait(5000);
        cy.get("div[id='logo'] h1 a").screenshot("logo"); */

        //a[normalize-space()='Cameras']

        cy.get("a[href='http://opencart.abstracta.us:80/index.php?route=product/category&path=33']").click();
        cy.get("div[id='content'] h2").should('have.text','Tablets');
    })
 })