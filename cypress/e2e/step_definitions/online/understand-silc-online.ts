import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I visit the SILC Online page', () => {
  cy.visit('/silc-online')
})

Then('I should see "SILC Online" in the main navigation', () => {
  cy.get('header nav').contains('SILC Online').should('be.visible')
})

Then('I should see the hero section with "SILC Online"', () => {
  cy.get('[data-testid="online-hero"]').should('be.visible')
  cy.contains('SILC Online').should('be.visible')
})

Then('the page title should be visible', () => {
  cy.get('h1').should('be.visible').and('not.be.empty')
})

Then('the page should load without errors', () => {
  cy.get('h1').should('be.visible')
  cy.get('body').should('not.contain.text', 'Application error')
  cy.get('body').should('not.contain.text', '500')
})
