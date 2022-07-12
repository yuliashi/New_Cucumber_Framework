Feature: Create Your Account Page - Invalid Credentials

  Background:
    Given I am on hotels landing page

  Scenario: Verify error message for invalid data in SignUp form
    When I click on SignIn link
    And I click on SignUp link
    And I enter #!@### in the email field on the signup page
    Then I verify invalidEmailError is displayed on the signup page

    When I enter !@ in the first name field on the signup page
    Then I verify noSpecialCharactersInFirstNameError is displayed on the signup page

    When I enter !@ in the last name field on the signup page
    Then Verify noSpecialCharactersInLastNameError is displayed on the signup page

    When I enter abc123 in the password field on the signup page
    Then I verify rememberMe checkbox is displayed and enabled on the signup page
    And I verify Continue button is displayed but NOT enabled on the signup page