Feature: View event detail and register (US-03)
  As a potential participant
  I want to see all information about a SILC presencial event on one page
  So that I can decide and register without confusion

  Scenario: Event detail page shows key information for an upcoming event
    Given there is a published upcoming event
    When I visit the event detail page
    Then I should see the event title
    And I should see the event dates and location
    And I should see the registration CTA button
    And the event should be marked as upcoming

  Scenario: Registration CTA links to the external form
    Given there is a published upcoming event with a registration URL
    When I visit the event detail page
    Then the registration CTA should have a valid href

  Scenario: Past event detail shows archive view without registration
    Given there is a published past event
    When I visit the past event detail page
    Then I should see the event is marked as encerrado
    And I should not see a registration CTA button
