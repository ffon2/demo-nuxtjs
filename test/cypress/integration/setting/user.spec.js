/// <reference types="cypress" />

context('User Setting Menu', () => {

  before(() => {
    cy.clearCookies()
    cy.login()
  })

  describe('User Setting List', () => {
    it('Open page', () => {
      cy.openMenu('System Setup', 'User Management')

      cy.get('.page__title')
        .should('have.text', 'User Management List')
    })

    it('Auto search', () => {
      cy.get('.a-table table tbody tr')
        .should('have.length.gt', 1)
    })
  })

  describe('User Setting Create', () => {
    // TODO
  })

  describe('User Setting Edit', () => {
    // TODO
  })

  describe('User Setting Search', () => {
    let found = 0 // remember rows after serch by criteria

    it('Search by criteria', () => {
      cy.get('#search-criteria')
        .findByText('Status')
        .next()
        .select('I')

      cy.findByText('Search')
        .click()

      cy.waitLoaderFinish()

      cy.get('.a-table table tbody tr td:nth-child(7)')
        .each(($el, index, $list) => {
          cy.wrap($el)
            .contains('Inactive')

          found = index + 1
        })
    })

    it('Search after clear', () => {
      cy.get('button.btn-warning')
        .findByText('Clear')
        .click()

      cy.findByText('Search')
        .click()

      cy.waitLoaderFinish()

      cy.get('.a-table table tbody tr')
        .should('have.length.gt', found) // search all must found rows more than serch by criteria
    })
  })

  describe('User Setting Delete', () => {
    // TODO
  })

})