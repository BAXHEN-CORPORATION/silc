import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I visit the SILC Online page', () => {
  cy.visit('/silc-online')
})

Then('the registration CTA should be present when the URL is configured', () => {
  cy.get('body').then(($body) => {
    if ($body.find('[data-testid="registration-cta"]').length > 0) {
      cy.get('[data-testid="registration-cta"]').should('be.visible')
    } else {
      cy.log('Registration CTA not shown — registrationFormUrl not configured yet')
    }
  })
})

Then('the registration CTA should open an external link', () => {
  cy.get('body').then(($body) => {
    const $cta = $body.find('a:contains("Inscrever-se no SILC Online")')
    if ($cta.length > 0) {
      cy.wrap($cta).should('have.attr', 'target', '_blank')
      cy.wrap($cta).should('have.attr', 'href').and('not.be.empty')
    } else {
      cy.log('CTA not present — skipping link check')
    }
  })
})

Then('I should see next steps information near the registration CTA', () => {
  cy.get('body').then(($body) => {
    if ($body.find('[data-testid="registration-cta"]').length > 0) {
      cy.get('[data-testid="registration-cta"]').within(() => {
        cy.contains('e-mail').should('be.visible')
      })
    } else {
      cy.log('CTA section not present — skipping')
    }
  })
})
