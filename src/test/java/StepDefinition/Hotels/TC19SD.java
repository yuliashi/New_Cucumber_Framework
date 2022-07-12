package StepDefinition.Hotels;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class TC19SD {

    Pages.Hotels.LandingPage lpage = new Pages.Hotels.LandingPage();

    @When("^I enter (.+) in destination$")
    public void enterInDestination (String destination) {
        lpage.enterDestination(destination);
    }


     @When("^I select (.+) as Check-in$")
    public void selectCheckinDate (String date_Month_Year) {
        lpage.clickCheckInBox();
        lpage.selectDateFromAnyMonth(date_Month_Year);
    }
    @When("^I select (.+) as Check-out$")
    public void selectCheckoutDate (String date_Month_Year) {
        lpage.selectDateFromAnyMonth(date_Month_Year);
    }

    @When("^I click Done$")
    public void clickDatesDoneButton () {
        lpage.clickDatesDoneBtn();
    }

    @When("^I click Search$")
    public void clickSearch () {
        lpage.clickOnSearchBtn();
    }

    @Then("^I verify Share feedback button is displayed$")
    public void isShareFBdisplayed () {
        Assert.assertTrue(lpage.isShareFeedbackDisplayed());
    }


}
