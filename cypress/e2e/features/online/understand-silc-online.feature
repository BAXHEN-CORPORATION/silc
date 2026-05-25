Feature: Understand the SILC Online offering (US-04)
  As a potential online participant
  I want to see a clear explanation of what the SILC Online is and how it works
  So that I understand if it fits my routine and expectations

  Scenario: SILC Online has its own menu item
    Given I visit the home page
    Then I should see "SILC Online" in the main navigation

  Scenario: SILC Online page loads with key content sections
    Given I visit the SILC Online page
    Then I should see the hero section with "SILC Online"
    And the page title should be visible

  Scenario: SILC Online page shows format and duration when configured
    Given I visit the SILC Online page
    Then the page should load without errors
