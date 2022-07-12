package StepDefinition.Hotels;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TC23SD {

    Pages.Hotels.LandingPage lpage = new Pages.Hotels.LandingPage();

    @When("^I select (.+) from auto suggestions list$")
    public void selectFromAutoSuggestions (String destination) {
        lpage.selectFromSuggestionsByValue(destination);
    }

    @When("I select 5 from StarRating Filter on Landing Page")
    public void select5StarHotelRating () {
        lpage.select5starRating();
    }

    @When("^I select (.+) from Sort-By dropdown$")
    public void selectFromSortby (String option) {
        lpage.selectFromSortByDD(option);
    }

    @Then("I verify rating of all hotels in search is (.+) stars")
    public void doesUserSelectedRatingMatchSearchResults (String rating) {
        Assert.assertTrue(lpage.isHotelRatingInSearchResultCorrect(rating));
    }

    @Then("I verify all hotels are listed in increasing order when sorted by (.+)")
    public void areAllSearchResultsListedByIncreasingPrice () {
        Assert.assertTrue(lpage.arePricesOrderedByAsc());

    }


}
