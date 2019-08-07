package com.page;

import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;
import net.thucydides.core.annotations.WhenPageOpens;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

@DefaultUrl("http://www.renfe.com/")
public class RenfeSearchPage extends PageObject {

    private JavascriptExecutor js = (JavascriptExecutor) this.getDriver();

    // ATTRIBUTES
    @CacheLookup
    // ORIGIN/DESTINATION INPUT FIELDS
    @FindBy(id = "IdOrigen")
    private WebElementFacade originInput;
    @FindBy(id = "IdDestino")
    private WebElementFacade destinationInput;

    // ORIGIN/DESTINATION SELECTIONS
    @FindBy(xpath = "//*[@id='ui-id-1']")
    private WebElementFacade originSelection;
    @FindBy(xpath = "//*[@id='ui-id-2']")
    private WebElementFacade destinationSelection;

    // DEPARTURE/RETURN DATES INPUT FIELDS
    @FindBy(id = "__fechaIdaVisual")
    private WebElementFacade departureDateInput;
    @FindBy(id = "__fechaVueltaVisual")
    private WebElementFacade returnDateInput;

    //PASSENGERS INPUT FIELDS
    @FindBy(id = "__numAdultos")
    private WebElementFacade numAdultsInput;
    @FindBy(id = "__numNinos")
    private WebElementFacade numChildrenInput;
    @FindBy(id = "__numBebe")
    private WebElementFacade numBabyInput;

    //BUY BUTTON
    @FindBy(xpath = "//*[@id=\"datosBusqueda\"]/button")
    private WebElementFacade buyButton;

    private Date currentDate;
    private String datePattern = "dd/MM/yyyy";
    private Calendar departureDay;

    public RenfeSearchPage(WebDriver driver) {
        super(driver);
        maximizeWindow(driver);
        currentDate = new Date();
    }

    private void maximizeWindow(WebDriver driver){
        driver.manage().window().maximize();
    }

    @WhenPageOpens
    public void waitOpen() { }

    public void selectOrigin(String station) {
        originInput.type(station);
        // originSelection.waitUntilEnabled();
        // originSelection.waitUntilVisible();
        // originSelection.waitUntilClickable();
        originSelection.click();
    }
    public void selectDestination(String station) {
        destinationInput.type(station);
        // destinationSelection.waitUntilEnabled();
        // destinationSelection.waitUntilVisible();
        // destinationSelection.waitUntilClickable();
        destinationSelection.click();
    }

    public void selectDepartureDate(int daysAfterToday) {
        Calendar day = Calendar.getInstance();
        day.setTime(currentDate);
        day.add(Calendar.DATE, daysAfterToday);

        departureDay = day; //set to global variable to calculate return date later

        SimpleDateFormat f = new SimpleDateFormat(datePattern);
        String departureDate = f.format(day.getTime());
        departureDateInput.type(departureDate);
    }

    public void selectReturnDate(int daysAfterDeparture){
        Assert.assertNotNull(departureDay);

        departureDay.add(Calendar.DATE, daysAfterDeparture);
        SimpleDateFormat f = new SimpleDateFormat(datePattern);
        String returnDate = f.format(departureDay.getTime());
        returnDateInput.type(returnDate);
    }

    public void selectPassengers(int adults, int children, int childrenUnder4) {
        numAdultsInput.type(Integer.toString(adults));
        numChildrenInput.type(Integer.toString(children));
        numBabyInput.type(Integer.toString(childrenUnder4));
    }

    public void purchase() {
        buyButton.waitUntilClickable();
        buyButton.click();
    }
}
