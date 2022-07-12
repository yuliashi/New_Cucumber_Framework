package Pages;

import Web.MyDriver;
import com.google.common.base.Function;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.*;

import java.time.Duration;
import java.util.List;
import java.util.Set;

public class Commands {
    Alert myAlert;

    // Create a local method to find WebElement
    public WebElement findWebElement(By locator) {
        return MyDriver.getDriver().findElement(locator);
    }

    // Create a local method to find WebElement
    public WebElement findWebElementWithWait(By locator) {
        Wait fWait = new FluentWait(MyDriver.getDriver())
                .withTimeout(Duration.ofSeconds(30))
                .pollingEvery(Duration.ofSeconds(1))
                .ignoring(NoAlertPresentException.class)
                .ignoring(ElementNotInteractableException.class)
                .ignoring(StaleElementReferenceException.class)
                .ignoring(ElementClickInterceptedException.class)
                .withMessage("Fluent wait timeout, waited for 30-seconds");

        WebElement element = (WebElement) fWait.until(new Function<WebDriver, WebElement>() {
            public WebElement apply(WebDriver driver) {
                return driver.findElement(locator);
            }
        });
        return element;
    }

    public static WebElement webAction(By locator) {
        Wait<WebDriver> wait = new FluentWait<WebDriver>(MyDriver.getDriver())
                .withTimeout(Duration.ofSeconds(5))
                .pollingEvery(Duration.ofMillis(250))
                .ignoring(NoSuchElementException.class)
                .ignoring(StaleElementReferenceException.class)
                .ignoring(ElementClickInterceptedException.class)
                .withMessage(
                        "Webdriver waited for 15 seconds but still could not find the element therefore Timeout Exception has been thrown");

        WebElement element = wait.until(new java.util.function.Function<WebDriver, WebElement>() {          public WebElement apply(WebDriver driver) {
            return driver.findElement(locator);
        }
        });
        return element;
    }

    public void goBack () {
        MyDriver.getDriver().navigate().back();
    }

    public void switchToNewWindow () {
        String originalWindow = MyDriver.getDriver().getWindowHandle();
        for (String windowHandle : MyDriver.getDriver().getWindowHandles()) {
            if (!originalWindow.contentEquals(windowHandle)) {
                MyDriver.getDriver().switchTo().window(windowHandle);
                break;
            }
        }
    }

    // Create a local method to find WebElements
    public List<WebElement> findWebElements(By locator) {
        return MyDriver.getDriver().findElements(locator);
    }

    // Create a local method to type in the webElement
    public void type(By locator, String data) {
        findWebElementWithWait(locator).sendKeys(data);
    }

    public String getTextOfWebElement(By locator) {
        return findWebElement(locator).getText();
    }

    public int getAttributeValueAsInt (By locator, String attribute) {
        String attributeValue = findWebElement(locator).getAttribute(attribute);
        return Integer.parseInt(attributeValue);

    }

    // Create a local method to click on the webElement
    public void clickIt(By locator) {
        findWebElementWithWait(locator).click();
    }

    public void clickOn (By locator) {
        try {
            webAction(locator).click();
        } catch (NoSuchElementException e) {
            e.printStackTrace();
        }

    }

    // Create a local method to clear input from a webElement
    public void clearField(By locator) {
        findWebElement(locator).clear();
    }


    // Create a local method to click on the webElement after scroll
    public void clickItWithScroll(By locator) {
        scrollToElement(locator).click();
    }

    // Create a local method to find if element is enabled
    public boolean isElementEnabled(By locator) {
        return findWebElement(locator).isEnabled();
    }

    // Create a local method to select a value from a dropdown
    public void selectInDropdown(By locator, String dataToSelect) {
        WebElement ddElement = findWebElement(locator);
        Select dropdown = new Select(ddElement);
        dropdown.selectByVisibleText(dataToSelect);
    }

    // Create a local method to find if element is displayed
    public boolean isElementDisplayed(By locator) {
        return findWebElement(locator).isDisplayed();
    }

    // Create custom method to scroll
    public WebElement scrollToElement(By locator) {
        WebElement element = null;
        for (int i=0 ; i <= 15 ; i++) {
            try {
                element = findWebElement(locator);
                break;
            } catch (ElementClickInterceptedException | NoSuchElementException e) {
                //scroll by 100
                JavascriptExecutor js =  (JavascriptExecutor) MyDriver.getDriver();
                js.executeScript("scrollBy(0,100)");
            }
        }
        return element;
    }

    // custom methods to switch to a window
    public void switchToWindow(String newHandle) {
        MyDriver.getDriver().switchTo().window(newHandle);
    }

    // custom method to get current window-handle
    public String getCurrentWindowHandle() {
        return MyDriver.getDriver().getWindowHandle();
    }

    // custom method to get all window-handles
    public int getTheNumberOfWindowHandles() {
        return MyDriver.getDriver().getWindowHandles().size();
    }

    public String getPageHeaderOf (By locator) {
        return findWebElementWithWait(locator).getText();

    }

    // custom method to select date from Calendar
    public void selectDateInCalendar(By locator, String userDate) {
        List<WebElement> allDates = MyDriver.getDriver().findElements(locator);
        for (WebElement dateElement : allDates) {
            String dateValue = dateElement.getAttribute("data-day");
            if (dateValue.equals(userDate)) {
                dateElement.click();
                break;
            }
        }
    }

    public void switchToAlert() {
        WebDriverWait eWait = new WebDriverWait(MyDriver.getDriver(), 20);
        eWait.until(ExpectedConditions.alertIsPresent());
        myAlert = MyDriver.getDriver().switchTo().alert();
    }

    public void clickPositiveActionBtnOnAlert() {
        if(myAlert == null) {
            switchToAlert();
        }
        myAlert.accept();
    }

    public void clickNegativeActionBtnOnAlert() {
        if(myAlert == null) {
            switchToAlert();
        }
        myAlert.dismiss();
    }

    public String getTextFromAlert() {
        if(myAlert == null) {
            switchToAlert();
        }
        return myAlert.getText();
    }

    public void typeInAlert(String data) {
        if(myAlert == null) {
            switchToAlert();
        }
        myAlert.sendKeys(data);
    }

    // Custom method/function to switch on Frame using iframe-id
    public void switchToFrame (String frameId) {
        MyDriver.getDriver().switchTo().frame(frameId);
    }

    // Custom method/function to switch on Frame using iframe-element
    public void switchToFrame (By locator) {
        WebElement myFrame = findWebElement(locator);
        MyDriver.getDriver().switchTo().frame(myFrame);
    }

    // Custom method/function to switch on Frame using iframe-index
    public void switchToFrame (int frameIndex) {
        MyDriver.getDriver().switchTo().frame(frameIndex);
    }

    public void switchToMainWindowFromFrame () {
        MyDriver.getDriver().switchTo().defaultContent();
    }

}
