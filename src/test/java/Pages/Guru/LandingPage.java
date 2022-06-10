package Pages.Guru;

import Pages.Commands;
import org.openqa.selenium.By;

public class LandingPage extends Commands {

    By cusIdInputLocator = By.name("cusid");
    By submitBtnLocator = By.name("submit");



    public void enterCustomerId(String cusId) {
        type(cusIdInputLocator, cusId);
    }

    public void clickSubmitBtn() {
        clickIt(submitBtnLocator);
    }

    public void clickOkOnAlert() {
        clickPositiveActionBtnOnAlert();
    }

    public String getAlertText() {
        return getTextFromAlert();
    }




}
