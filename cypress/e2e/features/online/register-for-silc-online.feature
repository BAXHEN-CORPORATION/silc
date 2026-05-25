Feature: Register for SILC Online (US-05)
  As a potential online participant
  I want to register for the SILC Online through a simple form
  So that I can participate without needing to email or call anyone

  Scenario: SILC Online page has a registration CTA when configured
    Given I visit the SILC Online page
    Then the registration CTA should be present when the URL is configured

  Scenario: Registration CTA links to an external form
    Given I visit the SILC Online page
    Then the registration CTA should open an external link

  Scenario: Bottom of the page has a second registration CTA with next steps info
    Given I visit the SILC Online page
    Then I should see next steps information near the registration CTA
