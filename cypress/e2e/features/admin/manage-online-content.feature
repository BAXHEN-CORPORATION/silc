Feature: Admin manages SILC Online content (US-09)
  As a SILC admin
  I want to edit the SILC Online sales page content
  So that I can keep the details updated without needing a developer

  Scenario: Admin can access the SILC Online global in the admin panel
    Given I am logged in as an admin
    When I navigate to the SILC Online global
    Then I should see the SILC Online content editor

  Scenario: SILC Online global has all required content fields
    Given I am logged in as an admin
    When I navigate to the SILC Online global
    Then I should see a field for Introduction
    And I should see a field for Registration Form URL
    And I should see a field for Testimonials

  Scenario: Admin can navigate to About SILC global
    Given I am logged in as an admin
    When I navigate to the About SILC global
    Then I should see the About SILC content editor

  Scenario: Admin can navigate to Contact global
    Given I am logged in as an admin
    When I navigate to the Contact global
    Then I should see the Contact content editor
