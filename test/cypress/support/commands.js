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
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'

Cypress.Commands.add('login', () => {
  // cy.viewport(1366, 768)

  cy.visit('/login')

  // cy.get('input[name="username"]').first()
  //   .type('FPAADM')

  // cy.get('input[name="password"]').first()
  //   .type('password')
  //   .type('{enter}')

  // cy.get('.main-header')
  //   .should('contain', 'FMS')

  cy.findByText('Login')
    .click()

  cy.get('.navbar-brand')
    .should('contain.text', 'SMEPOS')
})

Cypress.Commands.add('openMenu', (...menu) => {
  cy.get('.app__sidebar').within(() => {
    cy.findByText(menu[0])
      .click()

    if (menu[1]) {
      cy.findByText(menu[1])
        .click()
    }

    if (menu[2]) {
      cy.findByText(menu[2])
        .click()
    }
  })
})

Cypress.Commands.add('waitLoaderFinish', () => {
  // wait for call API finish
  cy.get('.loader')
    .should('not.have.class', 'show')
})

Cypress.Commands.add('select2', { prevSubject: true }, (subject, value) => {
  cy.wrap(subject)
    .click()
    .find(`div[data-id="${value}"]`)
    .click()
})
