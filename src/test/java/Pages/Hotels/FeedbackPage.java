package Pages.Hotels;

import Pages.Commands;
import org.openqa.selenium.By;

public class FeedbackPage extends Commands {

    By feedbackSubmitBtnLocator = By.id("submit-button");
    By feedbackValidationErrorLocator = By.xpath("//p[@data-localization = 'validation-heading']");
    By starRatingRedHighlightLocator = By.id("required_box_page_rating");

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
