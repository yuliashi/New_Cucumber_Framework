package Pages.Hotels;

import Pages.Commands;
import org.openqa.selenium.By;

public class CreateAccountPage extends Commands {

    By createAccountEmailFieldLocator = By.id("signupFormEmailInput");
    By createAccountFirstNameLocator = By.id("signupFormFirstNameInput");
    By createAccountLastNameLocator = By.id("signupFormLastNameInput");
    By createAccountPassLocator = By.id("signupFormPasswordInput");
    By rememberMeCheckboxLocator = By.xpath("//input[@name = 'rememberMe']");
    By promoMailCheckboxLocator = By.id("promotionalMailCheckbox");
    By signupFormSubmitBtnLocator = By.id("signupFormSubmitButton");
    By signupFormEmailInputErrorLcr = By.id("signupFormEmailInput-error");
    By signupFormFirstNameInputErrorLcr = By.id("signupFormFirstNameInput-error");
    By signupFormLastNameInputErrorLcr = By.id("signupFormLastNameInput-error");


    public void enterNewAccountEmail (String email) {
        type(createAccountEmailFieldLocator, email);
    }

    public void enterNewAccountFN (String name) {
        type(createAccountFirstNameLocator, name);
    }

    public void enterNewAccountLN (String lname) {
        type(createAccountLastNameLocator, lname);
    }

    public void enterNewAccountPass(String pass) {
        type(createAccountPassLocator, pass);
    }

    public boolean isInvalidEmailErrorDisplayed () {
        return findWebElementWithWait(signupFormEmailInputErrorLcr).isDisplayed();
    }

    public boolean isFirstNameInputErrorDisplayed () {
        return findWebElementWithWait(signupFormFirstNameInputErrorLcr).isDisplayed();
    }

    public boolean isLastNameInputErrorDisplayed () {
        return findWebElementWithWait(signupFormLastNameInputErrorLcr).isDisplayed();
    }

    public boolean isRememberMeBoxDisplayedAndEnabled () {
        return (findWebElementWithWait(rememberMeCheckboxLocator).isDisplayed() & findWebElementWithWait(rememberMeCheckboxLocator).isEnabled());
    }

    public boolean isContinueButtonDisplayedAndDisabled () {
        return (findWebElementWithWait(signupFormSubmitBtnLocator).isDisplayed() & !findWebElementWithWait(signupFormSubmitBtnLocator).isEnabled());

    }









}
