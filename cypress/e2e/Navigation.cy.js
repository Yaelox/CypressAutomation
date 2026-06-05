/// <reference types="cypress" />
describe('Navigation Test', () => {

    it('NavigationTest', () => {

        cy.visit('https://opencart.abstracta.us/');

        // Home
        cy.title().should('eq', 'Your Store');

        // Click en Cameras
        cy.get('#menu a[href*="path=33"]')
          .should('be.visible')
          .click();

        // Validar URL
        cy.url().should('include', 'path=33');

        // Validar página Cameras
        cy.get('h2').should('contain', 'Cameras');

        // Regresar
        cy.go('back');
        cy.title().should('eq', 'Your Store');

        // Avanzar
        cy.go('forward');
        cy.url().should('include', 'path=33');

        // Atrás
        cy.go(-1);
        cy.title().should('eq', 'Your Store');

        // Adelante
        cy.go(1);
        cy.url().should('include', 'path=33');

        // Recargar
        cy.reload();

    });

});