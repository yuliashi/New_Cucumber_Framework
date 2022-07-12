Feature: Filter-by and Sort-by functionality

  Background:
    Given I am on hotels landing page
    And I click on languageSelectionButton
    And I select currency as CAD
    And I wait 5 seconds
    And I click on saveLanguagePreferenceButton

    Scenario: Verify filter-by and sort-by functionality works as expected
#      When I enter Manhattan in destination
#        And I select Manhattan Beach California, United States of America  from auto suggestions list
        And I select 10 August 2022 as Check-in
        And I select 15 August 2022 as Check-out
        And I click Done
        And I click Search
#        And I select 5 from StarRating Filter on Landing Page
#        And I select Price from Sort-By dropdown
#      Then I verify rating of all hotels in search is 5 out of 5 stars
#      Then I verify all hotels are listed in increasing order when sorted by Price