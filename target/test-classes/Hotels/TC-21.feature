Feature: Invalid Credentials

  Background:
    Given I am on hotels landing page

  Scenario: Verify email error message for invalid sign in credentials
    When I click on SignIn link
    And I click on SignIn button
    And I enter 44@###.## into email field
    And I enter 123 into password field
    Then I verify emailErrorMessage is displayed