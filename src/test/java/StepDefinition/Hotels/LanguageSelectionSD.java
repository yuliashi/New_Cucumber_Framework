package StepDefinition.Hotels;

import Helper.Misc;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LanguageSelectionSD {

    Pages.Hotels.Language lspage = new Pages.Hotels.Language();

    @When("^I click on languageSelectionButton$")
    public void clickOnLangSelection () {
        lspage.clickOnLanguage();
    }

    @When("^I select language as English$")
    public void selectEnglish () {
        lspage.selectEnglishLanguage();
    }

    @When("^I select currency as CAD$")
    public void selectCADcurrency () {
        lspage.selectCADCurrency();
    }

    @When("^I click on saveLanguagePreferenceButton$")
    public void clickOnSaveLanguage () {
        lspage.clickOnSaveLanguageBtn();
    }

    @When("^I wait (.+) seconds$")
    public void waitFor (int seconds) {
        Misc.pause(seconds);
    }

    @Then("I verify (.+) is displayed under language")
    public void isLanguageDisplayed (String language) {
        Assert.assertTrue(lspage.isLanguageDisplayedCorrectly(language));
    }




}
