package com.page;

import net.serenitybdd.core.annotations.findby.By;
import net.thucydides.core.annotations.DefaultUrl;
import net.thucydides.core.annotations.WhenPageOpens;
import org.junit.Assert;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

// * This approach Is still not working as desired. Use RenfeSearchPage with -Dwebdriver option in jenkinsfile instead

@DefaultUrl("http://www.renfe.com/")
public class RenfeSearchPageRemoteDriver {

    private WebDriver driver = null;
    private Date currentDate;
    private String datePattern = "dd/MM/yyyy";
    private Calendar departureDay;

    public RenfeSearchPageRemoteDriver() throws MalformedURLException {

        String baseUrl = "http://www.renfe.com/";
        String nodeUrl = "http://10.0.75.1:4444/wd/hub";
        DesiredCapabilities capability = null;

        if (System.getenv("BROWSER").equals("chrome")) {
            capability = DesiredCapabilities.chrome();
            capability.setBrowserName("chrome");
        }
        else if (System.getenv("BROWSER").equals("chrome")) {
            capability = DesiredCapabilities.firefox();
            capability.setBrowserName("firefox");
        }
        capability.setPlatform(Platform.WIN10);
        capability.setCapability("applicationName", System.getenv("NODE"));

        driver = new RemoteWebDriver(new URL(nodeUrl), capability);
        driver.get(baseUrl);
        driver.manage().window().maximize();
        currentDate = new Date();
    }

    @WhenPageOpens
    public void waitOpen() { }

    public void selectOrigin(String station) {
        driver.findElement(By.id("IdOrigen")).sendKeys(station);

        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("ui-id-1")));

        selectStation(station, driver.findElement(By.id("ui-id-1")));
    }

    public void selectDestination(String station) {
        driver.findElement(By.id("IdDestino")).sendKeys(station);

        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("ui-id-2")));

        selectStation(station, driver.findElement(By.id("ui-id-2")));
    }

    public void selectStation(String station, WebElement stationInput) {
        List<WebElement> stationsWEList = stationInput.findElements(By.tagName("li"));
        for (int i = 0; i < stationsWEList.size(); i++) {
            if(stationsWEList.get(i).getText().equals(station)){
                stationsWEList.get(i).click();
            }
        }

    }

    public void selectDepartureDate(int daysAfterToday) {
        Calendar day = Calendar.getInstance();
        day.setTime(currentDate);
        day.add(Calendar.DATE, daysAfterToday);

        departureDay = day; //set to global variable to calculate return date later

        SimpleDateFormat f = new SimpleDateFormat(datePattern);
        String departureDate = f.format(day.getTime());
        driver.findElement(By.id("__fechaIdaVisual")).clear();
        driver.findElement(By.id("__fechaIdaVisual")).sendKeys(departureDate);
    }

    public void selectReturnDate(int daysAfterDeparture) {
        Assert.assertNotNull("departure date is null", departureDay);

        departureDay.add(Calendar.DATE, daysAfterDeparture);
        SimpleDateFormat f = new SimpleDateFormat(datePattern);
        String returnDate = f.format(departureDay.getTime());
        driver.findElement(By.id("__fechaVueltaVisual")).sendKeys(returnDate);
    }

    public void selectPassengers(int adults, int children, int childrenUnder4) {
        driver.findElement(By.id("__numAdultos")).clear();
        driver.findElement(By.id("__numAdultos")).sendKeys(Integer.toString(adults));
        driver.findElement(By.id("__numNinos")).clear();
        driver.findElement(By.id("__numNinos")).sendKeys(Integer.toString(children));
        driver.findElement(By.id("__numBebe")).clear();
        driver.findElement(By.id("__numBebe")).sendKeys(Integer.toString(childrenUnder4));
    }

    public void purchase() {
        driver.findElement(By.xpath("//*[@id=\"datosBusqueda\"]/button")).click();
    }
}
