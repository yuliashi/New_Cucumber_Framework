package StepDefinition.Hotels;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TC17SD {
    Pages.Hotels.LandingPage lpage = new Pages.Hotels.LandingPage();

    @When("^I click on Check-in Box$")
    public void clickOnCheckInCalendar () {
        lpage.clickCheckInBox();
    }

    @When("^I go to current month if not displayed$")
    public void goToCurrentMonth () {
        lpage.goToCurrentMonthOnCalendar();
    }

    @Then("^I verify for current month if past dates are disabled$")
    public void arePastDatesDisabled () {
        Assert.assertTrue(lpage.arePastDatesDisabledOnCalendar());
    }

    @Then("^I verify if Back button on current month is disabled$")
    public void isBackButtonDisabledOnCalendar () {
    Assert.assertFalse(lpage.isBackButtonDisabledOnTheCalendar());
    }


}
