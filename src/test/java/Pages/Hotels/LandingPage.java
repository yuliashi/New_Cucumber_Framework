package Pages.Hotels;

import Helper.DateLib;
import Pages.Commands;
import Web.MyDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

public class LandingPage extends Commands {

    private int numTravelers = 0;

    //Travelers locators
    By mainSearchLocator = By.id("submit_button");
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

    By star5RatingHotelSearchLocator = By.xpath("//input[@id = 'star-4']");

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

    //Other Links
    By feedbackLinkLocator = By.xpath("//div[@class = 'header-guest-heading']/following-sibling::div/a[4]");
    By moreTravelDDLocator = By.xpath("//nav[@id = 'header-toolbar-nav']/div/button");
    By dealsLinkLocator = By.xpath("//nav[@id = 'header-toolbar-nav']/div/button/following-sibling::div/div/a[1]");

    //Destination locators
    By goingToLocator = By.xpath("//button[@aria-label = 'Going to']");
    By boraBoraLeewardIslandOptionLocator = By.xpath("//div[@class = 'uitk-typeahead-results']/ul/li/button[@aria-label = 'Bora Bora Leeward Islands, French Polynesia']");
    By destinationInputLocator = By.xpath("//input[@data-stid = 'destination_form_field-menu-input']");
    By manhattanNYOptionLocator = By.xpath("//button[contains (@aria-label, 'Manhattan New York') and not(contains(@aria-label, 'Lower'))]");
    By destinationSuggestionsMainText = By.xpath("//button[@data-stid = 'hotels-destination-result-item-button']/div/div/span/strong");
    By destinationSuggestionsSubtext = By.xpath("//div[@class='uitk-typeahead-results']//div[contains(@class,'is-subText truncate') and not(contains(@class,'uitk'))]");
    String frameElements = "//ul[@data-stid = 'destination_form_field-results']/li[contains(@class, 'subtext')]";
    String elementButton = "/button";
    By autoSuggestionFrameElementsLocator = By.xpath("//ul[@data-stid = 'destination_form_field-results']/li[contains(@class, 'subtext')]/button");

    By sortByDDLocator = By.id("sort");

    By elementInSearchResultRatingLocator = By.xpath("//section[@data-stid = 'section-results']/ol/li/div/div/div[contains (@class, 'content-section')]/div/div/div/span");
    By elementInSearchResultPriceLocator = By.xpath("//div[@data-test-id = 'price-summary-message-line']/div/span/div");

    //Checkin/out locators
    By checkInDateBoxLocator = By.id("date_form_field-btn");
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
    public void clickMoreTravel () {
        clickIt(moreTravelDDLocator);
    }

    public void clickDealsLink () {
        clickIt(dealsLinkLocator);
    }


    public void clickOnSearchBtn () {
        clickIt(mainSearchLocator);
    }


    //Login page methods
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
        switchToNewWindow();
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

        return (totalTravelers == numTravelers);
    }


    public boolean isDestinationErrorDisplayed () {
        return isElementDisplayed(destinationErrorLocator);
    }

    public void clickToSelectNumberOfTravelers () {
        clickIt(travelersLocator);
    }

    public void increaseNumberOfChildren (int num) {
        for (int i=1; i<=num; i++) {
            clickIt(increaseChildCountBtnLocator);
        }
        numTravelers += num;
    }

    public void increaseNumberOfAdults (int num) {
        for (int i=1; i<=num-2; i++) {
            clickIt(increaseAdultCountLocator);
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

    public void selectFromSuggestionsByText(By locator, String userSuggestion) {
        List<WebElement> allSuggestionLabels = MyDriver.getDriver().findElements(locator);
        for (WebElement suggestion : allSuggestionLabels) {
            if(suggestion.getText().equalsIgnoreCase(userSuggestion)) {
                suggestion.click();
                break;
            }

        }
    }

    public void selectFromSuggestionsByValue(String userSuggestion) {
        List<WebElement> allSuggestionButtons = MyDriver.getDriver().findElements(autoSuggestionFrameElementsLocator);
        for (WebElement suggestion : allSuggestionButtons) {
            if(suggestion.getAttribute("aria-label").equalsIgnoreCase(userSuggestion)) {
                suggestion.click();
                break;
            }

        }
    }



    public void selectManhattanOption () {
        clickIt(manhattanNYOptionLocator);
    }

    public void select5starRating () {
        clickIt(star5RatingHotelSearchLocator);
    }

    public void selectFromSortByDD (String option) {
        selectInDropdown(sortByDDLocator, option);
    }

    public boolean isHotelRatingInSearchResultCorrect (String rating) {
        List<WebElement> hotelsInSearch = findWebElements(elementInSearchResultRatingLocator);
        List<WebElement> matchingElements = new ArrayList<>();
        for (WebElement element : hotelsInSearch) {
            if (element.getText().equalsIgnoreCase(rating)){
                matchingElements.add(element);
            }
        }

        System.out.println("Number of elements in search is " +
                hotelsInSearch.size() +
                " and number of elements matching criteria is " +
                 matchingElements.size());

        return (hotelsInSearch.size() == matchingElements.size());
    }

    public List<Integer> getPriceList () {
        List<WebElement> eList = findWebElements(elementInSearchResultPriceLocator);
        List<Integer> priceList = new ArrayList<>();
            for(WebElement e : eList) {
                String[] array = e.getText().split("\\$");
                priceList.add(Integer.valueOf(array[1]));
            }
            return priceList;

    }



     public boolean arePricesOrderedByAsc () {
        List<Integer> pricesBeforeSorting = getPriceList();
        Collections.sort(pricesBeforeSorting);
        Select sortBy = new Select(findWebElementWithWait(sortByDDLocator));
        sortBy.selectByVisibleText("Price");
        List<Integer> pricesAfterSorting = getPriceList();

         return pricesBeforeSorting.equals(pricesAfterSorting);

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
