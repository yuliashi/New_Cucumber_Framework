package Pages.Hotels;

import Pages.Commands;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;

public class FeedbackPage extends Commands {

    By feedbackSubmitBtnLocator = By.id("submit-button");
    By feedbackValidationErrorLocator = By.xpath("//p[@data-localization = 'validation-heading']");
    By starRatingRedHighlightLocator = By.id("required_box_page_rating");
    By starRating5Locator = By.xpath("//div[@class = 'radio-group']/div[5]");
    By starRatingRadioButtonsLocator = By.xpath("//div[@class = 'radio-group']/div");
    By feedbackTextBoxLocator = By.id("verbatim");
    By willYouReturnDDLocator = By.id("will-you-return");
    By bookedBeforeY = By.xpath("//input[@id = 'booked-here-before-yes']/parent::div[@class = 'radio-button']");
    By bookedBeforeN = By.xpath("//input[@id = 'booked-here-before-no']/parent::div[@class = 'radio-button']");
    By wereYouSuccessfulY = By.xpath("//input[@id = 'were-you-successful-yes']/parent::div[@class = 'radio-button']");
    By wereYouSuccessfulN = By.xpath("/input[@id = 'were-you-successful-no']/parent::div[@class = 'radio-button']");
    By thankYouMessageLocator = By.id("thank-you");
    String feedbackRatingBeginning = "//div[@class = 'radio-group']/div[";
    String feedbackRatingEnd = "]";

    public void selectFeedbackStarRating () {
        clickIt(starRating5Locator);
    }

    public void selectFeedbackRatingFromList (String rating) {

        By userRadioBtnLocator = By.xpath(feedbackRatingBeginning + rating + feedbackRatingEnd);
        clickIt(userRadioBtnLocator);

    }

    public void typeMessageInFBTextBox (String text) {
        type(feedbackTextBoxLocator, text);
    }

    public void selectFromWillYouReturnDD (String option) {
        selectInDropdown(willYouReturnDDLocator, option);
    }

    public void selectBookedBefore (String answer) {
        if (answer.equalsIgnoreCase("yes")) {
            clickIt(bookedBeforeY);
        } else {
            clickIt(bookedBeforeN);
        }
    }

    public void selectWereYouSuccessful (String answer) {
        if (answer.equalsIgnoreCase("yes")) {
            clickIt(wereYouSuccessfulY);
        } else {
            clickIt(wereYouSuccessfulN);
        }

    }

    public boolean isThankYouMessageDisplayedAfterFeedbackSubmission () {
        return findWebElementWithWait(thankYouMessageLocator).isDisplayed();
    }

    public void clickOnSubmitFeedbackBtn () {
        clickItWithScroll(feedbackSubmitBtnLocator);

    }

    public boolean isValidationErrorDisplayed () {
        return findWebElementWithWait(feedbackValidationErrorLocator).isDisplayed();
    }

    public boolean isStarRatingHighlightedRed () {
        return findWebElementWithWait(starRatingRedHighlightLocator).isDisplayed();
    }
}
