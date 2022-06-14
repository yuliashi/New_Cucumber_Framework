Feature: Feedback Button
  Background:
    Given I am on hotels landing page

    Scenario: Verify Share feedback button is displayed at the end of search results
      When I enter bora in destination
      And I select Bora Bora, Leeward Islands, French Polynesia from auto suggestion
      And I select 1 August 2022 as Check-in
      And I select 10 August 2022 as Check-out
      And I click Done
      And I click Search
      Then I verify Share feedback button is displayed