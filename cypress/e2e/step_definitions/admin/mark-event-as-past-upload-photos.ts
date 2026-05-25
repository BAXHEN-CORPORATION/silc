import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am logged in as an admin', () => {
  cy.loginAsAdmin()
})

When('I navigate to the Events collection', () => {
  cy.visit('/admin/collections/events')
})

When('I navigate to create a new event', () => {
  cy.visit('/admin/collections/events/create')
})

Then('I should see the list of events', () => {
  cy.url().should('include', '/admin/collections/events')
})

Then('I should see the status select field', () => {
  cy.get('[id*="status"], [name*="status"]').should('exist')
})

Then('the status select should have a "Passado" option', () => {
  cy.contains('Passado').should('exist')
})

Then('I should see the photos array field', () => {
  cy.contains('Photos').should('exist')
})
