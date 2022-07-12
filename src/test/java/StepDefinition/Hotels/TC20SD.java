package StepDefinition.Hotels;

import Pages.Hotels.FeedbackPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TC20SD {
    Pages.Hotels.LandingPage lpage = new Pages.Hotels.LandingPage();
    FeedbackPage fpage = new FeedbackPage();
    //@Given("^I am on hotels landing page$")
    //public void launchHotelsUrl () {
    //    MyDriver.launchUrlOnNewWindow("https://www.hotels.com/");
    //}

    @When("^I click on SignIn link$")
    public void clickOnSignInLnk () {
        lpage.clickOnSignInLink();
    }

    @When("^I click on SignIn button$")
    public void clickOnSignInButton () {
        lpage.clickOnSignInBtn();
    }

    @When("^I click on SignUp$")
    public void clickOnSignUpLink () {
        lpage.clickOnSignUpLink();
    }

    @When("^I click on TermsAndConditions$")
    public void clickOnTandC () {
        lpage.clickOnTermsAndConditions();
    }

    @When("^I click on PrivacyStatement$")
    public void clickOnPrivacySt () {
        lpage.clickOnPrivacyStatement();
    }

    @Then("^I verify the number of windows is (.+)$")
    public void isLinkOpenInNewWindow (int expectedNumberOfHandles) {
        int actualNumberOfHandles = lpage.getTheNumberOfWindowHandles();
        Assert.assertEquals(expectedNumberOfHandles, actualNumberOfHandles);
    }

    @Then("^I verify the title is TermsAndConditions$")
    public void isTCHeaderCorrect () {
        lpage.switchToNewWindow();
        Assert.assertTrue(lpage.isTCPageHeaderCorrect());

    }

    @Then("^I verify the title is PrivacyStatement$")
    public void isPSHeaderCorrect () {
        lpage.switchToNewWindow();
        Assert.assertTrue(lpage.isPSPageHeaderCorrect());

    }

    @When("^I enter (.+) into (email|password) field$")
    public void enterLoginCredentials(String data, String field) {
        switch (field.toLowerCase()) {
            case "email":
                lpage.enterEmail(data);
                break;
            case "password":
                lpage.enterPassword(data);
                break;
            default:
                System.out.println("Incorrect field name -> " + field);
        }
    }

    @Then("^I verify emailErrorMessage is displayed$")
    public void isEmailErrorDisplayed () {
        Assert.assertTrue(lpage.isEmailErrorMessageDisplayed());
    }

    @When("^I select “Feedback” from SignIn dropdown$")
    public void clickOnFeedbackLink () {
        lpage.clickFeedbackLink();
    }

    @When("^I click on SubmitFeedback button$")
    public void clickSubmitFeedback () {
        fpage.clickOnSubmitFeedbackBtn();
    }

    @Then("^I verify feedbackValidationError message is displayed$")
    public void isFeedbackValidationErrorDisplayed () {
        Assert.assertTrue(fpage.isValidationErrorDisplayed());
    }

    @Then("^I verify star boxes section is in a red dotted box$")
    public void verifyRedDottedBoxIsDisplayed () {

        Assert.assertTrue(fpage.isStarRatingHighlightedRed());
    }

    @When("^I click on Search button$")
    public void clickOnSearch() {
        lpage.clickOnSearchBtn();
    }



}


