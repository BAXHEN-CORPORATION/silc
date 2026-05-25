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

When('I click "Create New Event"', () => {
  cy.contains('a', 'Create New').click({ force: true })
})

Then('I should see the events list', () => {
  cy.url().should('include', '/admin/collections/events')
  cy.get('table, [data-list-collection="events"]').should('exist')
})

Then('I should see the event creation form with required fields', () => {
  cy.url().should('include', '/create')
  cy.get('input[name="title"]').should('exist')
})

Then('I should see the slug field', () => {
  cy.get('input[name="slug"]').should('exist')
})

Then('I should see the status field with "Próximo" as default', () => {
  cy.contains('Próximo').should('exist')
})
