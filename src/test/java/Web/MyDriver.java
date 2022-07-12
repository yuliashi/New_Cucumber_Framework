package Web;

import Helper.PropReader;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class MyDriver {

    private static WebDriver driver;


    public static void launchUrlOnNewWindow1(String url) {
        PropReader pReader = new PropReader();
        switch (pReader.getRunOn().toLowerCase()) {
            case "sauce":
                DesiredCapabilities caps = null;
                String sauceUrl = "https://" + pReader.getSauceUser() + ":" + pReader.getSauceKey() + "@ondemand.us-west-1.saucelabs.com:443/wd/hub";
                switch (pReader.getBrowser().toLowerCase()) {
                    case "chrome":
                        caps = DesiredCapabilities.chrome();
                        caps.setCapability("version", pReader.getVersion());
                        caps.setCapability("platform", pReader.getOs());
                        break;
                    case "firefox":
                        caps = DesiredCapabilities.firefox();
                        caps.setCapability("version", pReader.getVersion());
                        caps.setCapability("platform", pReader.getOs());
                        break;
                    }
                try {
                    driver = new RemoteWebDriver(new URL(sauceUrl), caps);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
                break;
            case "local":
                System.setProperty("webdriver.chrome.driver", "./Drivers/chromedriver.exe");
                driver = new ChromeDriver();
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
                break;
        }
        driver.get(url);
    }

//    @Before
//    public static void launchUrlOnNewWindow() {
//        System.setProperty("webdriver.chrome.driver", "./Drivers/chromedriver");
//        driver = new ChromeDriver();
//        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//        driver.get("https://www.facebook.com/");
//    }

    public static void launchUrlOnNewWindow(String url) {
        System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver.exe");
        ChromeOptions chromeoptions = new ChromeOptions();
        chromeoptions.addArguments("--lang=en");
        driver = new ChromeDriver(chromeoptions);
        driver.get(url);

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }



    public static void quitWindows() {
        if (driver != null) {
            driver.quit();
        }
    }

    public static WebDriver getDriver() {
        return driver;
    }




}
