import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am logged in as an admin', () => {
  cy.loginAsAdmin()
})

When('I navigate to the SILC Online global', () => {
  cy.visit('/admin/globals/online-content')
})

When('I navigate to the About SILC global', () => {
  cy.visit('/admin/globals/about-content')
})

When('I navigate to the Contact global', () => {
  cy.visit('/admin/globals/contact-content')
})

Then('I should see the SILC Online content editor', () => {
  cy.url().should('include', '/admin/globals/online-content')
  cy.get('form').should('exist')
})

Then('I should see a field for Introduction', () => {
  cy.contains('Introduction').should('exist')
})

Then('I should see a field for Registration Form URL', () => {
  cy.contains('Registration Form URL').should('exist')
})

Then('I should see a field for Testimonials', () => {
  cy.contains('Testimonials').should('exist')
})

Then('I should see the About SILC content editor', () => {
  cy.url().should('include', '/admin/globals/about-content')
  cy.get('form').should('exist')
})

Then('I should see the Contact content editor', () => {
  cy.url().should('include', '/admin/globals/contact-content')
  cy.get('form').should('exist')
})
