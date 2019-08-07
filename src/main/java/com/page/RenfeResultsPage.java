package com.page;

import net.thucydides.core.pages.PageObject;
import org.junit.Assert;

public class RenfeResultsPage extends PageObject {

    public void checkResults() throws InterruptedException {
        Thread.sleep(3000);
        Assert.assertTrue("Assert failed. Result page not loaded", this.getDriver().getCurrentUrl().contains("https://venta.renfe.com/vol/search"));
    }
}
