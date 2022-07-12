package StepDefinition.Hotels;

import Pages.Hotels.FeedbackPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TC25SD {
    Pages.Hotels.LandingPage lpage = new Pages.Hotels.LandingPage();
    FeedbackPage fpage = new FeedbackPage();

//    @When("^I select 5 in star-rating on Feedback page$")
//    public void select5RatingOnFeedbackPage () {
//        fpage.selectFeedbackStarRating();
//    }

    @When("^I select (.+) in star-rating on Feedback page$")
    public void selectStarRatingFromList (String rating) {
        fpage.selectFeedbackRatingFromList(rating);
    }

    @When("^I enter (.+) in Feedback comments$")
    public void typeInFeedbackCommentBox (String text) {
        fpage.typeMessageInFBTextBox(text);
    }

    @When("^I select (.+) option for How likely are you to return to Hotels.com$")
    public void selectWillYouReturnOption (String option) {
        fpage.selectFromWillYouReturnDD(option);
    }

    @When("^I select (.+) for (BookedBefore|WereYouSuccessful) question$")
    public void selectYesNoInFeedback(String yesOrNo, String question) {
        switch (question) {
            case "BookedBefore":
                fpage.selectBookedBefore(yesOrNo);
                break;
            case "WereYouSuccessful":
                fpage.selectWereYouSuccessful(yesOrNo);
                break;
            default:
                System.out.println("Incorrect question entered -> " + question);
        }
    }

    @Then("I verify Thank You Message is displayed")
    public void isThankYouDisplayedWhenFeedbackSubmit () {
        Assert.assertTrue(fpage.isThankYouMessageDisplayedAfterFeedbackSubmission());
    }




}
