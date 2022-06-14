package Pages.Hotels;

import Helper.DateLib;
import Pages.Commands;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class LandingPage extends Commands {

    private int numTravelers = 0;

    //Travelers locators
    By mainSearchLocator = By.xpath("//button[@data-testid = 'submit-button']");
    By destinationErrorLocator = By.id("location-field-destination-input-error");
    By travelersLocator = By.xpath("//button[@data-testid = 'travelers-field-trigger']");
    By numOfAdultsDisplayedLocator = By.xpath("//input[@id = 'adult-input-0']");
    By numOfChildrenDisplayedLocator = By.xpath("//input[@id = 'child-input-0']");
    By increaseAdultCountLocator = By.xpath("//input[@id = 'adult-input-0']/following-sibling::button");
    By increaseChildCountBtnLocator = By.xpath("//input[@id = 'child-input-0']/following-sibling::button");
    By enterAgeMessageLocator = By.xpath("//div[@data-testid = 'lob-error-summary']");
    By enterAge1DDLocator = By.xpath("//select[@id = 'child-age-input-0-0']");
    By enterAge2DDLocator = By.xpath("//select[@id = 'child-age-input-0-1']");
    By guestsDoneBtnLocator = By.xpath("//button[@data-testid = 'guests-done-button']");

    //Policy locators
    By tAndCPageTitle = By.xpath("//div[@id = 'termsandconditions']/h1");
    By privacyStmntPageTitle = By.xpath("//h2[@class = 'uitk-heading-4']/b");
    By termsAndConditionsLinkLocator = By.linkText("Terms and Conditions");
    By privacyStatementLinkLocator = By.linkText("Privacy Statement");

    //Login locators
    By signUpLinkLocator = By.partialLinkText("Sign up");
    By signInBtnLocator2 = By.linkText("Sign in");
    By signInLinkLocator1 = By.xpath("//button[text() = 'Sign in']");
    By emailErrorMessageLocator = By.id("loginFormEmailInput-error");
    By emailFieldLocator = By.id("loginFormEmailInput");
    By passwordFieldLocator = By.id("loginFormPasswordInput");

    By feedbackLinkLocator = By.xpath("//div[@class = 'header-guest-heading']/following-sibling::div/a[4]");


    //Destination locators
    By goingToLocator = By.xpath("//button[@aria-label = 'Going to']");
    By boraBoraLeewardIslandOptionLocator = By.xpath("//div[@class = 'uitk-typeahead-results']/ul/li/button[@aria-label = 'Bora Bora Leeward Islands, French Polynesia']");
    By destinationInputLocator = By.id("location-field-destination");
    By destinationSuggestions = By.xpath("//div[@class='uitk-typeahead-results']//div[contains(@class,'truncat') and not(contains(@class,'uitk'))]");


    //Checkin/out locators
    By checkInDateBoxLocator = By.id("d1-btn");
    By checkOutDateBoxLocator = By.id("d2-btn");
    By checkInDisabledDatesLocator = By.xpath("//table[@class='uitk-date-picker-weeks']//button[@disabled]");
    By augFirst2022 = By.xpath("//button[@aria-label = 'Aug 1, 2022']");
    By augTenth2022 = By.xpath("//button[@aria-label = 'Aug 10, 2022']");

    String monthDates_1 = "//h2[text()='";
    String monthDates_2 = "']/following-sibling::table//button[@data-day]";

    By calendarHeading = By.xpath("//div[@data-stid='date-picker-month'][1]/h2");
    By nextMonthArrow = By.xpath("//button[@data-stid='date-picker-paging'][2]");
    By previousMonthArrow = By.xpath("//button[@data-stid = 'date-picker-paging'][1]");

    By june2022DatesLocator = By.xpath("//h2[text()='June 2022']/following-sibling::table//button[@data-day]");
    By datesDoneBtnLocator = By.xpath("//button[@data-stid = 'apply-date-picker']");

    By shareFeedbackBtn = By.linkText("Share feedback");
    /*

        monthYear = August 2022
        "//h2[text()='" + monthYear + "']/following-sibling::table//button[@data-day]"
        monthDates_1 + monthYear + monthDates_2
     */


    public void clickOnSearchBtn () {
        clickIt(mainSearchLocator);
    }

    public void clickOnTravelersField () {
        clickIt(travelersLocator);
    }

    public void clickOnSignUpLink () {
        clickIt(signUpLinkLocator);
    }

    public void clickOnSignInLink () {
        clickIt(signInLinkLocator1);
    }

    public void clickOnSignInBtn () {
        clickIt(signInBtnLocator2);
    }

    public void clickOnTermsAndConditions () {
        clickIt(termsAndConditionsLinkLocator);
    }

    public void clickOnPrivacyStatement () {
        clickIt(privacyStatementLinkLocator);
    }

    public void clickFeedbackLink () {
        clickItWithScroll(feedbackLinkLocator);
    }

    public void enterEmail (String email) {
        type(emailFieldLocator, email);
    }

    public void enterPassword (String pass) {
        type(passwordFieldLocator, pass);
    }

    public boolean isEmailErrorMessageDisplayed () {
        return isElementDisplayed(emailErrorMessageLocator);
    }

    public void clickOnGuestsDoneBtn () {
        clickIt(guestsDoneBtnLocator);
    }

    public int findNumberOfTravelersDisplayed (By locator) {
        String initial = findWebElement(locator).getText();
        String [] array1 = initial.split(",");
        String [] array2 = array1[1].split(" ");
        String numOfTravelers = array2[0];

        return Integer.parseInt(numOfTravelers);
    }

    public boolean isTCPageHeaderCorrect () {
        return getPageHeaderOf(tAndCPageTitle).equalsIgnoreCase("Terms and Conditions");
    }

    public boolean isPSPageHeaderCorrect () {
        return getPageHeaderOf(privacyStmntPageTitle).equalsIgnoreCase("Privacy Statement");
    }

    public boolean isNumberOfTravelersCorrect () {
        int numOfChildrenDisplayed = getAttributeValueAsInt(numOfChildrenDisplayedLocator, "value");
        int numOfAdultsDisplayed = getAttributeValueAsInt(numOfAdultsDisplayedLocator, "value");
        int totalTravelers = findNumberOfTravelersDisplayed(travelersLocator);

        return (totalTravelers == (numOfAdultsDisplayed + numOfChildrenDisplayed));
    }

    public boolean isNumberOfTravelersCorrect1 () {
        int numOfChildrenDisplayed = getAttributeValueAsInt(numOfChildrenDisplayedLocator, "value");
        int numOfAdultsDisplayed = getAttributeValueAsInt(numOfAdultsDisplayedLocator, "value");
        int totalTravelers = findNumberOfTravelersDisplayed(travelersLocator);

        return (totalTravelers == numTravelers);
    }


    public boolean isDestinationErrorDisplayed () {
        return isElementDisplayed(destinationErrorLocator);
    }

    public void clickToSelectNumberOfTravelers () {
        clickOn(travelersLocator);
    }

    public void increaseNumberOfChildren (int num) {
        for (int i=1; i<=num; i++) {
            clickOn(increaseChildCountBtnLocator);
        }
        numTravelers += num;
    }

    public void increaseNumberOfAdults (int num) {
        for (int i=1; i<=num-2; i++) {
            clickOn(increaseAdultCountLocator);
        }
        numTravelers += num;
    }

    public boolean isAgeMessageDisplayed () {
        return isElementDisplayed(enterAgeMessageLocator);
    }

    public void selectChild1Age (String age) {
        selectInDropdown(enterAge1DDLocator, age);
    }

    public void selectChild2Age (String age)  {
        selectInDropdown(enterAge2DDLocator, age);
    }

    public void clickGuestsDoneBtn () {
        clickIt(guestsDoneBtnLocator);
    }

    //Check-in/out methods

    public void clickCheckInBox() {
        clickIt(checkInDateBoxLocator);    }

    public void clickCheckOutBox () {
        clickIt(checkOutDateBoxLocator);
    }

    public void clickDatesDoneBtn () {
        clickIt(datesDoneBtnLocator);
    }

    public boolean isShareFeedbackDisplayed () {
        scrollToElement(shareFeedbackBtn);
        return findWebElementWithWait(shareFeedbackBtn).isDisplayed();
    }

    public void selectDateInJune2022(String dateToSelect) {
        selectDateInCalendar(june2022DatesLocator, dateToSelect);
    }

    public void enterDestination(String destination) {
        clickIt(goingToLocator);
        type(destinationInputLocator, destination);
    }

    public void selectFromDestinationSuggestion(String userChoice) {
        selectFromSuggestions(destinationSuggestions, userChoice);
    }

    public void goToMonth(String monthYear) {
        for (int i=0 ; i<12 ; i++) {
            if (getTextOfWebElement(calendarHeading).equalsIgnoreCase(monthYear)) {
                break;
            }
            clickIt(nextMonthArrow);
        }
    }

    public void goToCurrentMonthOnCalendar () {
        Date today = new Date();
        SimpleDateFormat day = new SimpleDateFormat("MMMM yyyy");
        String currentMonth = day.format(today);
        goToMonth(currentMonth);
    }

    public void selectDateFromAnyMonth(String monthYear, String dateValue) {
        goToMonth(monthYear);
        By allDatesLocator = By.xpath(monthDates_1 + monthYear + monthDates_2);
        selectDateInCalendar(allDatesLocator, dateValue);
    }


    public void selectDateFromAnyMonth(String dateMonthYear) {
        String[] dateValues = dateMonthYear.split(" ");
        goToMonth(dateValues[1] + " " + dateValues[2]);
        By allDatesLocator = By.xpath(monthDates_1 + dateValues[1] + " " + dateValues[2] + monthDates_2);
        selectDateInCalendar(allDatesLocator, dateValues[0]);
    }

    public boolean arePastDatesDisabledOnCalendar () {

        return (DateLib.getCurrentDateAsInt()-1 == getAllDisabledDates().size());
    }

    public List<WebElement> getAllDisabledDates() {
        return findWebElements(checkInDisabledDatesLocator);
    }

    public boolean isBackButtonDisabledOnTheCalendar () {
        return findWebElementWithWait(previousMonthArrow).isEnabled();
    }






}
