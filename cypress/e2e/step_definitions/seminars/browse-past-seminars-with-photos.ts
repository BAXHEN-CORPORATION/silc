import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const PAST_EVENT_WITH_PHOTOS_SLUG = 'silc-lisboa-2023'

Given('I visit the past seminars page', () => {
  cy.visit('/silc-presencial/seminarios-anteriores')
})

Given('there is a published past event with photos', () => {
  cy.log('Assuming past event with photos exists in the database')
})

When('I click on "Seminários Anteriores"', () => {
  cy.contains('a', 'Seminários Anteriores').first().click()
})

Then('I should be on the past seminars page', () => {
  cy.url().should('include', '/silc-presencial/seminarios-anteriores')
})

Then('I should see the page title "Seminários Anteriores"', () => {
  cy.get('h1').should('contain.text', 'Seminários Anteriores')
})

Then('all visible event cards should have an "Encerrado" indicator', () => {
  cy.get('[data-testid="past-events-grid"]').then(($grid) => {
    if ($grid.find('article').length > 0) {
      cy.get('[data-testid="past-events-grid"] article').each(($card) => {
        cy.wrap($card).should('contain.text', 'Encerrado')
      })
    }
  })
})

Then('I should see a year filter section', () => {
  cy.contains('Filtrar por ano').should('be.visible')
})

When('I visit the past event detail page', () => {
  cy.visit(`/silc-presencial/${PAST_EVENT_WITH_PHOTOS_SLUG}`)
})

Then('I should see a photo gallery section', () => {
  cy.contains('h2', 'Galeria de fotos').should('be.visible')
})

When('I click on the first photo in the gallery', () => {
  cy.get('[aria-label^="Ver foto"]').first().click()
})

Then('a lightbox should appear with the photo enlarged', () => {
  cy.get('[role="dialog"]').should('be.visible')
  cy.get('[aria-label="Fechar"]').should('be.visible')
})
