Feature: Number of Guests

Background:
Given I am on hotels landing page

  Scenario: Verify user can update number of guests on Home page
    When I click on Travelers
    And I increase adult count to 6
    And I increase child count to 2
    And I select age of child1 as 4
    And I select age of child2 as Under 1
    And I click on GuestsDone button
    Then I verify Number of Guests is equal to 8

