Feature: Browse past seminars and view photos (US-06)
  As a past participant
  I want to find the SILC I attended and see its photos
  So that I can relive and share the experience

  Scenario: Past seminars page is accessible from navigation
    Given I visit the home page
    When I hover over "SILC Presencial" in the navigation
    And I click on "Seminários Anteriores"
    Then I should be on the past seminars page

  Scenario: Past seminars page loads correctly
    Given I visit the past seminars page
    Then I should see the page title "Seminários Anteriores"

  Scenario: Past seminars show Encerrado badge
    Given I visit the past seminars page
    Then all visible event cards should have an "Encerrado" indicator

  Scenario: Year filter is available on past seminars page
    Given I visit the past seminars page
    Then I should see a year filter section

  Scenario: Past event with photos shows a gallery
    Given there is a published past event with photos
    When I visit the past event detail page
    Then I should see a photo gallery section

  Scenario: Clicking a gallery photo opens the lightbox
    Given there is a published past event with photos
    When I visit the past event detail page
    And I click on the first photo in the gallery
    Then a lightbox should appear with the photo enlarged
