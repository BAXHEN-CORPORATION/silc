import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

// These steps assume seeded events exist in the DB.
// In a real environment, use API calls to seed test data.
const UPCOMING_SLUG = 'silc-sao-paulo-2025'
const PAST_SLUG = 'silc-lisboa-2023'

Given('there is a published upcoming event', () => {
  cy.log('Assuming upcoming event exists in the database')
})

Given('there is a published upcoming event with a registration URL', () => {
  cy.log('Assuming upcoming event with registrationFormUrl exists')
})

Given('there is a published past event', () => {
  cy.log('Assuming past event exists in the database')
})

When('I visit the event detail page', () => {
  cy.visit(`/silc-presencial/${UPCOMING_SLUG}`)
})

When('I visit the past event detail page', () => {
  cy.visit(`/silc-presencial/${PAST_SLUG}`)
})

Then('I should see the event title', () => {
  cy.get('h1').should('be.visible').and('not.be.empty')
})

Then('I should see the event dates and location', () => {
  cy.contains('📅').should('exist')
  cy.contains('📍').should('exist')
})

Then('I should see the registration CTA button', () => {
  cy.contains('a', 'Inscreva-se agora').should('be.visible')
})

Then('the event should be marked as upcoming', () => {
  cy.contains('Próximo').should('be.visible')
})

Then('the registration CTA should have a valid href', () => {
  cy.contains('a', 'Inscreva-se agora')
    .should('have.attr', 'href')
    .and('not.be.empty')
})

Then('I should see the event is marked as encerrado', () => {
  cy.contains('Encerrado').should('be.visible')
})

Then('I should not see a registration CTA button', () => {
  cy.contains('a', 'Inscreva-se agora').should('not.exist')
})
