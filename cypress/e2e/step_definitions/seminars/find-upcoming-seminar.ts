import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I visit the upcoming seminars page', () => {
  cy.visit('/silc-presencial/proximos-seminarios')
})

Given('I visit the upcoming seminars page with a country filter applied', () => {
  cy.visit('/silc-presencial/proximos-seminarios?country=Brasil')
})

When('I hover over "SILC Presencial" in the navigation', () => {
  cy.contains('nav span, nav a', 'SILC Presencial').trigger('mouseover')
})

When('I click on "Próximos Seminários"', () => {
  cy.contains('a', 'Próximos Seminários').first().click()
})

Then('I should be on the upcoming seminars page', () => {
  cy.url().should('include', '/silc-presencial/proximos-seminarios')
})

Then('I should see the page title "Próximos Seminários"', () => {
  cy.get('h1').should('contain.text', 'Próximos Seminários')
})

Then('the page should have the section header "SILC Presencial"', () => {
  cy.contains('SILC Presencial').should('be.visible')
})

When('I select a country from the filter', () => {
  cy.get('button[aria-pressed="false"]').first().then(($btn) => {
    const country = $btn.text().trim()
    cy.wrap(country).as('selectedCountry')
    cy.wrap($btn).click()
  })
})

Then('the URL should include the selected country as a query param', () => {
  cy.url().should('include', 'country=')
})

When('I click "Todos" in the country filter', () => {
  cy.contains('button', 'Todos').click()
})

Then('the URL should not include a country query param', () => {
  cy.url().should('not.include', 'country=')
})
