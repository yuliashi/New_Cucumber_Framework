Feature: Past dates are disabled
  Background:
    Given I am on hotels landing page

    Scenario: Verify past date and back button on Current month's calendar is disabled
      When I click on Check-in Box
      And I go to current month if not displayed
      Then I verify for current month if past dates are disabled
      And I verify if Back button on current month is disabled
