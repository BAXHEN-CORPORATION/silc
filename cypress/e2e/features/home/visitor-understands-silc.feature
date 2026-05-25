Feature: Visitor understands what SILC is (US-01)
  As a new visitor
  I want to understand what SILC is and choose between presencial or online
  So that I can follow the path that makes sense for me

  Scenario: Home page displays SILC explanation above the fold
    Given I visit the home page
    Then I should see a heading about SILC
    And I should see a brief explanation of what SILC is
    And I should see a CTA to participate presencially
    And I should see a CTA to join SILC Online

  Scenario: CTAs lead to the correct pages
    Given I visit the home page
    When I click on "Participar presencialmente"
    Then I should be on the upcoming seminars page

  Scenario: Online CTA leads to SILC Online page
    Given I visit the home page
    When I click on "Fazer o SILC Online"
    Then I should be on the SILC Online page
