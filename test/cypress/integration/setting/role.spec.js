/// <reference types="cypress" />

context('Role Setting Menu', () => {

  before(() => {
    cy.clearCookies()
    cy.login()
  })

  describe('Role Setting List', () => {
    it('Open page', () => {
      cy.openMenu('System Setup', 'Role Management')

      cy.get('.page__title')
        .should('have.text', 'Role Management List')
    })

    it('Auto search', () => {
      cy.get('.a-table table tbody tr')
        .should('have.length.gt', 1)
    })
  })

  describe('Role Setting Create', () => {
    it('Open page', () => {
      cy.findByText('Create')
        .click()

      cy.get('.page__title')
        .should('have.text', 'Role Management Detail')

      cy.url()
        .should('include', '/setting/role/create')
    })

    // TODO
    // it('Check mandatory', () => {

    // })

    // TODO
    it('Back', () => {
      cy.findByText('Back')
        .click()
    })
  })

  describe('Role Setting Edit', () => {
    // TODO
  })

  describe('Role Setting Search', () => {
    let found = 0 // remember rows after serch by criteria

    it('Search by criteria', () => {
      cy.get('#search-criteria')
        .findByText('Role Code')
        .next()
        .type('ADM')

      cy.get('#search-criteria')
        .findByText('Status')
        .next()
        .select2('A')

      cy.findByText('Search')
        .click()

      cy.waitLoaderFinish()

      cy.get('.a-table table tbody tr td:nth-child(1)')
        .each(($el, index, $list) => {
          cy.wrap($el)
            .contains('ADM')

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

  describe('Role Setting Delete', () => {
    // TODO
  })

})