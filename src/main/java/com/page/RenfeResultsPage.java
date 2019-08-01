package com.page;

import net.thucydides.core.pages.PageObject;
import org.junit.Assert;

public class RenfeResultsPage extends PageObject {

    public void checkResults() throws InterruptedException {
        Thread.sleep(3000);
        Assert.assertEquals("Assert failed. Profile page not loaded", "https://venta.renfe.com/vol/search.do?c=_uLhn", this.getDriver().getCurrentUrl());
    }
}
