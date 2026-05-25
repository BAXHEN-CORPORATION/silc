import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I visit the home page', () => {
  cy.visit('/')
})

Then('I should see a heading about SILC', () => {
  cy.get('[data-testid="hero"]').should('be.visible')
  cy.get('h1').should('be.visible')
})

Then('I should see a brief explanation of what SILC is', () => {
  cy.get('[data-testid="hero"]').within(() => {
    cy.get('p').should('be.visible').and('not.be.empty')
  })
})

Then('I should see a CTA to participate presencially', () => {
  cy.contains('a', 'Participar presencialmente').should('be.visible')
})

Then('I should see a CTA to join SILC Online', () => {
  cy.contains('a', 'SILC Online').should('be.visible')
})

When('I click on "Participar presencialmente"', () => {
  cy.contains('a', 'Participar presencialmente').click()
})

Then('I should be on the upcoming seminars page', () => {
  cy.url().should('include', '/silc-presencial/proximos-seminarios')
})

When('I click on "Fazer o SILC Online"', () => {
  cy.visit('/')
  cy.contains('a', 'Fazer o SILC Online').click()
})

Then('I should be on the SILC Online page', () => {
  cy.url().should('include', '/silc-online')
})
