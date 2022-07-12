package Pages.Hotels;

import Pages.Commands;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

public class Language extends Commands {

    By languageLocator = By.xpath("//button[@data-stid = 'button-type-picker-trigger']");
    By languageTextLocator = By.xpath("//nav[@id = 'secondaryNav']/button/div");
    By currencyDDlocator = By.xpath("//select[@id = 'site-selector']");
    //by value: 300000002
    By languageSelectorDDlocator = By.xpath("//select[@id = 'language-selector']");
    //by value: en_CA
    By saveLanguagePreferenceBtnLocator = By.xpath("//div[@class = 'uitk-scrim fade-button']/button");

    public void clickOnLanguage () {
        clickIt(languageLocator);
    }

    public void selectCADCurrency () {
        Select curr = new Select(findWebElementWithWait(currencyDDlocator));
        curr.selectByValue("300000002");

    }

    public void selectEnglishLanguage () {
        Select lang = new Select(findWebElementWithWait(languageSelectorDDlocator));
        lang.selectByValue("en_CA");
    }

    public void clickOnSaveLanguageBtn () {
        clickIt(saveLanguagePreferenceBtnLocator);
    }

    public boolean isLanguageDisplayedCorrectly (String language) {
        return findWebElementWithWait(languageTextLocator).getText().equalsIgnoreCase(language);

    }
}
