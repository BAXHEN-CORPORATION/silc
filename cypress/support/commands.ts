/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      loginAsAdmin(email?: string, password?: string): Chainable<void>
      navigateTo(path: string): Chainable<void>
    }
  }
}

Cypress.Commands.add('loginAsAdmin', (email = 'admin@silc.org', password = 'password') => {
  cy.visit('/admin/login')
  cy.get('input[name="email"]').type(email)
  cy.get('input[name="password"]').type(password)
  cy.get('[type="submit"]').click()
  cy.url().should('include', '/admin')
})

Cypress.Commands.add('navigateTo', (path: string) => {
  cy.visit(path)
  cy.get('header').should('be.visible')
})

export {}
