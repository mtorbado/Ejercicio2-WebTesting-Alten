$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/renfeSearch.feature");
formatter.feature({
  "name": "Renfe booking",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search for a trip",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to search train tickets",
  "keyword": "Given "
});
formatter.step({
  "name": "I select origin \"\u003coriginStation\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I select destination \"\u003cdestinationStation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "departure date is 1 days after today",
  "keyword": "And "
});
formatter.step({
  "name": "return date is 2 days after departure date",
  "keyword": "And "
});
formatter.step({
  "name": "I select the following adults \u0026 children \u0026 children under 4 years old",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "adults",
        "children",
        "childrenUnder4"
      ]
    },
    {
      "cells": [
        "3",
        "2",
        "1"
      ]
    }
  ]
});
formatter.step({
  "name": "I press \u0027comprar\u0027 button",
  "keyword": "And "
});
formatter.step({
  "name": "the result page is shown",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "originStation",
        "destinationStation"
      ]
    },
    {
      "cells": [
        "VALLADOLID",
        "MADRID-CHAMARTIN"
      ]
    },
    {
      "cells": [
        "MADRID-PUERTA DE ATOCHA",
        "BARCELONA-SANTS"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search for a trip",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to search train tickets",
  "keyword": "Given "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.iWantToSearchTrainTickets()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select origin \"VALLADOLID\"",
  "keyword": "When "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.iSelectOrigin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select destination \"MADRID-CHAMARTIN\"",
  "keyword": "And "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.iSelectDestination(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "departure date is 1 days after today",
  "keyword": "And "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.departureDateIsDaysAfterToday(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "return date is 2 days after departure date",
  "keyword": "And "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.comebackDateIsDaysAfterDepartureDate(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the following adults \u0026 children \u0026 children under 4 years old",
  "rows": [
    {
      "cells": [
        "adults",
        "children",
        "childrenUnder4"
      ]
    },
    {
      "cells": [
        "3",
        "2",
        "1"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.iSelectTheFolowingAdultsChildrenChildrenUnder4YearsOld(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press \u0027comprar\u0027 button",
  "keyword": "And "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.iPressComprarButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the result page is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.theResultPageIsShown()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for a trip",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to search train tickets",
  "keyword": "Given "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.iWantToSearchTrainTickets()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select origin \"MADRID-PUERTA DE ATOCHA\"",
  "keyword": "When "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.iSelectOrigin(String)"
});
formatter.result({
  "error_message": "net.serenitybdd.core.exceptions.SerenityManagedException: The following error occurred: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d76.0.3809.87)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027SG-3012\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.87, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: /tmp/.com.google.Chrome.YbiqHJ}, goog:chromeOptions: {debuggerAddress: localhost:38839}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 7d29b4b6d882dfca536afa74ecd46634\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:160)\r\n\tat com.page.RenfeSearchPage.selectStation(RenfeSearchPage.java:93)\r\n\tat com.page.RenfeSearchPage.selectOrigin(RenfeSearchPage.java:82)\r\n\tat com.serenitySteps.RenfeSearchSteps.selectOrigin(RenfeSearchSteps.java:29)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae.CGLIB$selectOrigin$5(\u003cgenerated\u003e)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae$$FastClassByCGLIB$$eeaaaed0.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:362)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:133)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:69)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae.selectOrigin(\u003cgenerated\u003e)\r\n\tat com.stepDefinitions.RenfeSearchStepDefinitions.iSelectOrigin(RenfeSearchStepDefinitions.java:27)\r\n\tat ✽.I select origin \"MADRID-PUERTA DE ATOCHA\"(src/test/resources/features/renfeSearch.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I select destination \"BARCELONA-SANTS\"",
  "keyword": "And "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.iSelectDestination(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "departure date is 1 days after today",
  "keyword": "And "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.departureDateIsDaysAfterToday(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "return date is 2 days after departure date",
  "keyword": "And "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.comebackDateIsDaysAfterDepartureDate(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select the following adults \u0026 children \u0026 children under 4 years old",
  "rows": [
    {
      "cells": [
        "adults",
        "children",
        "childrenUnder4"
      ]
    },
    {
      "cells": [
        "3",
        "2",
        "1"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.iSelectTheFolowingAdultsChildrenChildrenUnder4YearsOld(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I press \u0027comprar\u0027 button",
  "keyword": "And "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.iPressComprarButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the result page is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.theResultPageIsShown()"
});
formatter.result({
  "status": "skipped"
});
});