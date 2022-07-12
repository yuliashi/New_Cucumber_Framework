Feature: Submitting Feedback

  Background:
    Given I am on hotels landing page
    And I click on languageSelectionButton
    And I select currency as CAD
    And I wait 5 seconds
    And I click on saveLanguagePreferenceButton

    Scenario: Verify user can submit feedback after completing the feedback form
      When I click on SignIn link
      And I select “Feedback” from SignIn dropdown
      And I wait 20 seconds
      And I select 5 in star-rating on Feedback page
      And I enter Good Job in Feedback comments
      And I select Unsure option for How likely are you to return to Hotels.com
      And I select Yes for BookedBefore question
      And I select Yes for WereYouSuccessful question
      And I click on SubmitFeedback button
      Then I verify Thank You Message is displayed
