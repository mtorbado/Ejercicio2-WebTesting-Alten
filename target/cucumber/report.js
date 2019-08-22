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
  "error_message": "java.lang.NullPointerException\r\n\tat com.page.RenfeSearchPageRemoteDriver.\u003cinit\u003e(RenfeSearchPageRemoteDriver.java:70)\r\n\tat com.serenitySteps.RenfeSearchSteps.openRenfeSearchPage(RenfeSearchSteps.java:22)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae.CGLIB$openRenfeSearchPage$7(\u003cgenerated\u003e)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae$$FastClassByCGLIB$$eeaaaed0.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:362)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:133)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:69)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae.openRenfeSearchPage(\u003cgenerated\u003e)\r\n\tat com.stepDefinitions.RenfeSearchStepDefinitions.iWantToSearchTrainTickets(RenfeSearchStepDefinitions.java:22)\r\n\tat ✽.I want to search train tickets(src/test/resources/features/renfeSearch.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I select origin \"VALLADOLID\"",
  "keyword": "When "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.iSelectOrigin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select destination \"MADRID-CHAMARTIN\"",
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
  "error_message": "java.lang.NullPointerException\r\n\tat com.page.RenfeSearchPageRemoteDriver.\u003cinit\u003e(RenfeSearchPageRemoteDriver.java:70)\r\n\tat com.serenitySteps.RenfeSearchSteps.openRenfeSearchPage(RenfeSearchSteps.java:22)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae.CGLIB$openRenfeSearchPage$7(\u003cgenerated\u003e)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae$$FastClassByCGLIB$$eeaaaed0.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:362)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:133)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:69)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae.openRenfeSearchPage(\u003cgenerated\u003e)\r\n\tat com.stepDefinitions.RenfeSearchStepDefinitions.iWantToSearchTrainTickets(RenfeSearchStepDefinitions.java:22)\r\n\tat ✽.I want to search train tickets(src/test/resources/features/renfeSearch.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I select origin \"MADRID-PUERTA DE ATOCHA\"",
  "keyword": "When "
});
formatter.match({
  "location": "RenfeSearchStepDefinitions.iSelectOrigin(String)"
});
formatter.result({
  "status": "skipped"
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