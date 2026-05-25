Feature: Find an upcoming presencial SILC seminar (US-02)
  As a potential participant
  I want to filter upcoming seminars by country
  So that I can find one I can actually attend

  Scenario: Upcoming seminars page is reachable from navigation
    Given I visit the home page
    When I hover over "SILC Presencial" in the navigation
    And I click on "Próximos Seminários"
    Then I should be on the upcoming seminars page

  Scenario: Upcoming seminars page loads correctly
    Given I visit the upcoming seminars page
    Then I should see the page title "Próximos Seminários"
    And the page should have the section header "SILC Presencial"

  Scenario: Participant filters seminars by country
    Given I visit the upcoming seminars page
    When I select a country from the filter
    Then the URL should include the selected country as a query param

  Scenario: Participant removes country filter
    Given I visit the upcoming seminars page with a country filter applied
    When I click "Todos" in the country filter
    Then the URL should not include a country query param
