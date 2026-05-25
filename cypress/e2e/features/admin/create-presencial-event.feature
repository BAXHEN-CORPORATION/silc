Feature: Admin creates a new presencial SILC event (US-07)
  As a SILC admin
  I want to create a new presencial SILC event with all required information
  So that it appears on the website as a future event with its own page

  Scenario: Admin can access the events collection in the admin panel
    Given I am logged in as an admin
    When I navigate to the Events collection
    Then I should see the events list

  Scenario: Admin can open the create event form
    Given I am logged in as an admin
    When I navigate to the Events collection
    And I click "Create New Event"
    Then I should see the event creation form with required fields

  Scenario: Admin sees the slug field in the sidebar
    Given I am logged in as an admin
    When I navigate to create a new event
    Then I should see the slug field
    And I should see the status field with "Próximo" as default
