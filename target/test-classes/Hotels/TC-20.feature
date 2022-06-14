Feature: Terms and Conditions and Privacy Statement
  Background:
    Given I am on hotels landing page

  Scenario: Verify TermsAndConditions link opens correct page on new tab
    When I click on SignIn link
    And I click on SignUp
    And I click on TermsAndConditions
    Then I verify the number of windows is 2
    And I verify the title is TermsAndConditions

  Scenario: Verify PrivacyStatement link opens correct page on new tab
    When I click on SignIn link
    And I click on SignUp
    And I click on PrivacyStatement
    Then I verify the number of windows is 2
    And I verify the title is PrivacyStatement