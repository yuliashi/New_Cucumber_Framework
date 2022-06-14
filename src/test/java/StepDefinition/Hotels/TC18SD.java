package StepDefinition.Hotels;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TC18SD {

    Pages.Hotels.LandingPage lpage = new Pages.Hotels.LandingPage();

    @When("^I increase child count to (.+)$")
    public void increaseChildCount (int num) {
        lpage.increaseNumberOfChildren(num);
    }

    @When("^I select age of child1 as (.+)$")
    public void enterChild1Age (String age) {
        lpage.selectChild1Age(age);
    }

    @When("^I select age of child2 as (.+)$")
    public void enterChild2Age (String age) {
        lpage.selectChild2Age(age);
    }


    @When("^I click on Travelers$")
    public void clickOnTravelers () {
        lpage.clickOnTravelersField();
    }

    @When("^I increase adult count to (.+)$")
    public void increaseAdultsCount (int num) {
        lpage.increaseNumberOfAdults(num);
    }

    @When("^I click on GuestsDone button$")
    public void clickOnGuestsDone () {
        lpage.clickOnGuestsDoneBtn();
    }
    @Then("^I verify Number of Guests is equal to adults and children$")
    public void isTotalGuestsCorrect () {
        Assert.assertTrue(lpage.isNumberOfTravelersCorrect());
    }

    @Then("^I verify Number of Guests is equal to adults and children$")
    public void isTotalGuestsCorrect1 () {
        Assert.assertTrue(lpage.isNumberOfTravelersCorrect1());
    }



    @Then("^Destination Error message is displayed$")
    public void destinationErrorIsDisplayed () {
        Assert.assertTrue(lpage.isDestinationErrorDisplayed());
    }

    @Then("^Enter-Age message is displayed$")
    public void enterAgeErrorIsDisplayed () {
        Assert.assertTrue(lpage.isAgeMessageDisplayed());
    }

    @Then("^Enter-Age message is not displayed$")
    public void enterAgeErrorIsNotDisplayed () {
        Assert.assertFalse(lpage.isAgeMessageDisplayed());
    }


}
