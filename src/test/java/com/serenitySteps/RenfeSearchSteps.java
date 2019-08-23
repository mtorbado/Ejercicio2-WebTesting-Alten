package com.serenitySteps;
import com.page.RenfeResultsPage;
import com.page.RenfeSearchPage;
import com.page.RenfeSearchPageRemoteDriver;

import java.net.MalformedURLException;
import java.util.List;
import java.util.Map;

public class RenfeSearchSteps {

//    private RenfeSearchPage searchPage;
    private RenfeSearchPageRemoteDriver searchPage;
    private RenfeResultsPage resultsPage;
    
    public void openRenfeSearchPage() {
        // Comment this if you are using RenfeSearchPageRemoteDriver for setting NODE and BROWSER via env variables
        //searchPage.open();

        // Comment this if you are using RenfeSearchPage for gradle tasks 'chrome' or 'firefox'
        try {
            searchPage = new RenfeSearchPageRemoteDriver();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

    }

    public void selectOrigin(String station) throws InterruptedException {
        searchPage.selectOrigin(station);
    }

    public void selectDestination(String station) throws InterruptedException {
        searchPage.selectDestination(station);
    }

    public void selectDepartureDate(int daysAfterToday) {
        searchPage.selectDepartureDate(daysAfterToday);
    }

    public void selectReturnDate(int daysAfterDeparture) {
        searchPage.selectReturnDate(daysAfterDeparture);
    }

    public void selectPassengers(List <Map<String, String>> list) {
        int adults = Integer.parseInt(list.get(0).get("adults"));
        int children = Integer.parseInt(list.get(0).get("children"));
        int childrenUnder4 = Integer.parseInt(list.get(0).get("childrenUnder4"));
        searchPage.selectPassengers(adults, children, childrenUnder4);
    }

    public void purchase() {
        searchPage.purchase();
    }

    public void resultPageIsShown() throws InterruptedException {
        resultsPage.checkResults();
    }
}
