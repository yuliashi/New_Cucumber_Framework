Feature: Language functionality

  Background:
    Given I am on hotels landing page

  Scenario: Verify language can be successfully changed
    When I click on languageSelectionButton
      And I select currency as CAD
      And I wait 5 seconds
      And I click on saveLanguagePreferenceButton
    Then I verify English is displayed under language