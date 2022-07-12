package Tests.Hotels;

import Pages.Hotels.LandingPage;
import Web.MyDriver;
import org.testng.annotations.Test;

public class SearchStays {
    @Test
    public void selectDateInCalendar() {
        MyDriver.launchUrlOnNewWindow("https://www.hotels.com");

        LandingPage lpage = new LandingPage();

        lpage.clickCheckInBox();

        lpage.selectDateInJune2022("10");
    }




    @Test
    public void selectDateInAnyCalendar() {
        MyDriver.launchUrlOnNewWindow("https://www.hotels.com");

        LandingPage lpage = new LandingPage();

        lpage.clickCheckInBox();

        // lpage.selectDateFromAnyMonth("July 2022", "5");

        lpage.selectDateFromAnyMonth("5 July 2022");
    }



}
