Feature: Admin marks an event as past and uploads photos (US-08)
  As a SILC admin
  I want to mark an event as concluded and upload photos
  So that it moves to the archive of past seminars with a photo gallery

  Scenario: Admin can access event edit form
    Given I am logged in as an admin
    When I navigate to the Events collection
    Then I should see the list of events

  Scenario: Event status field allows changing to "Passado"
    Given I am logged in as an admin
    When I navigate to create a new event
    Then I should see the status select field
    And the status select should have a "Passado" option

  Scenario: Photos array field is available in the event form
    Given I am logged in as an admin
    When I navigate to create a new event
    Then I should see the photos array field
