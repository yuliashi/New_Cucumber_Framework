Feature: Feedback Button at the End of Search Results

  Background:
    Given I am on hotels landing page
    And I click on languageSelectionButton
    And I select currency as CAD
    And I wait 5 seconds
    And I click on saveLanguagePreferenceButton
    And I wait 5 seconds

    Scenario: Verify Share feedback button is displayed at the end of search results
      When I enter bora in destination
      And I select Bora Bora, Leeward Islands, French Polynesia from auto suggestions list
      And I select 1 August 2022 as Check-in
      And I select 10 August 2022 as Check-out
      And I click Done
      And I click Search
      Then I verify Share feedback button is displayed