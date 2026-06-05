/// <reference types="cypress" />

describe('Custom Commands', () => { 

    it.skip("Handling links",()=>{

            cy.visit("https://demo.nopcommerce.com/", {
        
                failOnStatusCode: false
        })

        //Direct - without using custom comand
        /* cy.get("body > div:nth-child(7) > main:nth-child(3) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(4) > div:nth-child(2) > div:nth-child(3) > article:nth-child(1) > div:nth-child(2) > h2:nth-child(1) > a:nth-child(1)").click(); */

        //Using custom comand
        cy.clickLink('Apple MacBook Pro');
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro');


    })

    it.skip("Overwriting existing ",()=>{

        //Using custom comand
        cy.clickLink('Apple MacBook Pro');
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro');

    })
  

    it("Login Command", () => {
        // 1. Visitamos la app ignorando errores de estado si los hay
        cy.visit("https://demo.nopcommerce.com/", {
            failOnStatusCode: false
        });

        // 2. Usamos tu comando personalizado (¡que ahora ignora mayúsculas!)
        cy.clickLink("Log in");

        // 3. Iniciamos sesión con tu comando personalizado
        cy.loginapp("testing@gmail.com", "test123");

        // 4. Aserto mejorado para evitar fallos por espacios en blanco ocultos
        cy.get(".ico-account").should('contain.text', 'My account');
    }); // Aquí cierra el it

 // Aquí cierra el describe
})