package StepDefinition.Hotels;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TC22SD {

    Pages.Hotels.LandingPage lpage = new Pages.Hotels.LandingPage();
    Pages.Hotels.CreateAccountPage capage = new Pages.Hotels.CreateAccountPage();


    @When("^I click on SignUp link$")
    public void clickOnSignup () {
        lpage.clickOnSignUpLink();
    }

    @When("I enter (.+) in the email address on the signup page")
    public void typeEmailInSignup (String typeEmail) {

    }

    @When("^I enter (.+) in the (email|password|first name|last name) field on the signup page$")
    public void enterNewAccountCredentials(String data, String field) {
        switch (field.toLowerCase()) {
            case "email":
                capage.enterNewAccountEmail(data);
                break;
            case "password":
                capage.enterNewAccountPass(data);
                break;
            case "first name":
                capage.enterNewAccountFN(data);
                break;
            case "last name":
                capage.enterNewAccountLN(data);
                break;
            default:
                System.out.println("Incorrect field name -> " + field);
        }
    }

    @Then("^I verify invalidEmailError is displayed on the signup page$")
    public void isInvalidEmailErrorDisplayedOnSignUp () {
        Assert.assertTrue(capage.isInvalidEmailErrorDisplayed());
    }

    @Then("^I verify noSpecialCharactersInFirstNameError is displayed on the signup page$")
    public void isNoSpecialCharactersInFirstNameErrorDisplayedOnSignUp () {
        Assert.assertTrue(capage.isFirstNameInputErrorDisplayed());
    }

    @Then("^Verify noSpecialCharactersInLastNameError is displayed on the signup page$")
    public void isNoSpecialCharactersInLastNameErrorDisplayedOnSignUp () {
        Assert.assertTrue(capage.isLastNameInputErrorDisplayed());
    }

    @Then("^I verify rememberMe checkbox is displayed and enabled on the signup page$")
    public void isRememberMeDisplayedAndEnabled () {
        Assert.assertTrue(capage.isRememberMeBoxDisplayedAndEnabled());
    }

    @Then("^I verify Continue button is displayed but NOT enabled on the signup page$")
    public void isContinueBtnDisplayedAndDisabledOnSignUp() {
        Assert.assertTrue(capage.isContinueButtonDisplayedAndDisabled());
    }




}
