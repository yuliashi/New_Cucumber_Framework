Feature: Feedback Screen Empty Submission

  Background:
    Given I am on hotels landing page

    Scenario: Verify error is displayed when user submits the empty feedback form
      When I click on SignIn link
      And I select “Feedback” from SignIn dropdown
      And I click on SubmitFeedback button
      Then I verify feedbackValidationError message is displayed
      And I verify star boxes section is in a red dotted box