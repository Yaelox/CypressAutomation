// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
///<reference types="cypress" />

///<reference types="cypress-xpath" />
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getIframe',(iframe)=>{

    cy.get('#mce_0_ifr')
                .its('0.contentDocument.body')
                .should('be.visible')
                .then(cy.wrap);

})

Cypress.Commands.add('clickLink', { prevSubject: 'optional' }, (subject, label) => {
    if (subject) {
        // Si viene encadenado de otro elemento: cy.get('nav').clickLink('Contacto')
        return cy.wrap(subject).contains(label).click();
    }
    // Si se usa suelto: cy.clickLink('Contacto')
    // Nota: Eliminamos el ('a') para que busque el texto en cualquier elemento cliqueable
    return cy.contains(label).click();
});

//Over write contains()

Cypress.Commands.overwriteQuery('contains', function (originalFn, filter, text, options = {}) {
    
    // Validar si se pasó un filtro (selector) o si el primer parámetro es directamente el texto
    if (typeof text === 'object') {
        options = text
        text = filter
        filter = undefined
    }

    // Forzar que siempre ignore mayúsculas y minúsculas
    options.matchCase = false

    // Ejecutamos la función original usando .apply(this) para mantener el contexto de Cypress
    return originalFn.apply(this, [filter, text, options])
})

// Custom Command for Login
Cypress.Commands.add('loginapp', (email, password) => {

    cy.get('#Email').type(email);
    
    // Oculta la contraseña en los logs de Cypress por seguridad
    cy.get('#Password').type(password, { log: false }); 
    
    // Selector más limpio y resistente a cambios de diseño
    cy.get('button.login-button').click();

});
