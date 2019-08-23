package com.stepDefinitions;

import com.serenitySteps.RenfeSearchSteps;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Steps;

import java.util.List;
import java.util.Map;

public class RenfeSearchStepDefinitions {

    @Steps
    RenfeSearchSteps steps;

    @Given("^I want to search train tickets$")
    public void iWantToSearchTrainTickets() {
        steps.openRenfeSearchPage();
    }

    @When("^I select origin \"([^\"]*)\"$")
    public void iSelectOrigin(String station) throws InterruptedException {
       steps.selectOrigin(station);
    }

    @And("^I select destination \"([^\"]*)\"$")
    public void iSelectDestination(String station) throws InterruptedException {
        steps.selectDestination(station);
    }

    @And("^departure date is (\\d+) days after today$")
    public void departureDateIsDaysAfterToday(int days) {
        steps.selectDepartureDate(days);
    }

    @And("^return date is (\\d+) days after departure date$")
    public void comebackDateIsDaysAfterDepartureDate(int days) {
        steps.selectReturnDate(days);
    }

    @And("^I select the following adults & children & children under 4 years old$")
    public void iSelectTheFolowingAdultsChildrenChildrenUnder4YearsOld(DataTable dt){
        List<Map<String, String>> list = dt.asMaps(String.class, String.class);
        steps.selectPassengers(list);
    }

    @And("^I press 'comprar' button$")
    public void iPressComprarButton() {
        steps.purchase();
    }

    @Then("^the result page is shown$")
    public void theResultPageIsShown() throws InterruptedException {
        steps.resultPageIsShown();
    }
}


