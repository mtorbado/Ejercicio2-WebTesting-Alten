$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/renfeSearch.feature");
formatter.feature({
  "name": "Renfe booking",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
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
  "name": "",
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
  "error_message": "net.serenitybdd.core.exceptions.SerenityManagedException: The following error occurred: Expected enabled element was not enabled\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilEnabled(WebElementFacadeImpl.java:968)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilElementAvailable(WebElementFacadeImpl.java:807)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.click(WebElementFacadeImpl.java:1044)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy31.click(Unknown Source)\r\n\tat com.page.RenfeSearchPage.selectOrigin(RenfeSearchPage.java:75)\r\n\tat com.serenitySteps.RenfeSearchSteps.selectOrigin(RenfeSearchSteps.java:19)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae.CGLIB$selectOrigin$2(\u003cgenerated\u003e)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae$$FastClassByCGLIB$$eeaaaed0.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:362)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:133)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:69)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae.selectOrigin(\u003cgenerated\u003e)\r\n\tat com.stepDefinitions.RenfeSearchStepDefinitions.iSelectOrigin(RenfeSearchStepDefinitions.java:27)\r\n\tat ✽.I select origin \"VALLADOLID\"(src/test/resources/features/renfeSearch.feature:5)\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for RenfeSearchPage.originSelection to be enabled (tried for 5 second(s) with 100 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:263)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilEnabled(WebElementFacadeImpl.java:965)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilElementAvailable(WebElementFacadeImpl.java:807)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.click(WebElementFacadeImpl.java:1044)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy31.click(Unknown Source)\r\n\tat com.page.RenfeSearchPage.selectOrigin(RenfeSearchPage.java:75)\r\n\tat com.serenitySteps.RenfeSearchSteps.selectOrigin(RenfeSearchSteps.java:19)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae.CGLIB$selectOrigin$2(\u003cgenerated\u003e)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae$$FastClassByCGLIB$$eeaaaed0.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:362)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:133)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:69)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae.selectOrigin(\u003cgenerated\u003e)\r\n\tat com.stepDefinitions.RenfeSearchStepDefinitions.iSelectOrigin(RenfeSearchStepDefinitions.java:27)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\r\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\r\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\r\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\r\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\r\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\r\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\r\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\r\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\r\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:118)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\r\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\r\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:175)\r\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:157)\r\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\r\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\r\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\r\n\tat java.base/java.lang.Thread.run(Thread.java:834)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Timed out after 2 seconds. Element not found\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027SG-3012\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.3\u0027\nDriver info: driver.version: unknown\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.ajaxFindElement(SmartAjaxElementLocator.java:173)\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.findElement(SmartAjaxElementLocator.java:125)\r\n\tat net.serenitybdd.core.pages.WebElementResolverByElementLocator.resolveForDriver(WebElementResolverByElementLocator.java:27)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getElement(WebElementFacadeImpl.java:209)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations$3.apply(WebElementExpectations.java:63)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations$3.apply(WebElementExpectations.java:55)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\t... 83 more\r\n",
  "status": "failed"
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
  "name": "",
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
  "error_message": "net.serenitybdd.core.exceptions.SerenityManagedException: The following error occurred: Expected enabled element was not enabled\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilEnabled(WebElementFacadeImpl.java:968)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilElementAvailable(WebElementFacadeImpl.java:807)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.click(WebElementFacadeImpl.java:1044)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy31.click(Unknown Source)\r\n\tat com.page.RenfeSearchPage.selectOrigin(RenfeSearchPage.java:75)\r\n\tat com.serenitySteps.RenfeSearchSteps.selectOrigin(RenfeSearchSteps.java:19)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae.CGLIB$selectOrigin$2(\u003cgenerated\u003e)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae$$FastClassByCGLIB$$eeaaaed0.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:362)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:133)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:69)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae.selectOrigin(\u003cgenerated\u003e)\r\n\tat com.stepDefinitions.RenfeSearchStepDefinitions.iSelectOrigin(RenfeSearchStepDefinitions.java:27)\r\n\tat ✽.I select origin \"MADRID-PUERTA DE ATOCHA\"(src/test/resources/features/renfeSearch.feature:5)\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for RenfeSearchPage.originSelection to be enabled (tried for 5 second(s) with 100 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:263)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilEnabled(WebElementFacadeImpl.java:965)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilElementAvailable(WebElementFacadeImpl.java:807)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.click(WebElementFacadeImpl.java:1044)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy31.click(Unknown Source)\r\n\tat com.page.RenfeSearchPage.selectOrigin(RenfeSearchPage.java:75)\r\n\tat com.serenitySteps.RenfeSearchSteps.selectOrigin(RenfeSearchSteps.java:19)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae.CGLIB$selectOrigin$2(\u003cgenerated\u003e)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae$$FastClassByCGLIB$$eeaaaed0.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:362)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:133)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:69)\r\n\tat com.serenitySteps.RenfeSearchSteps$$EnhancerByCGLIB$$5c9032ae.selectOrigin(\u003cgenerated\u003e)\r\n\tat com.stepDefinitions.RenfeSearchStepDefinitions.iSelectOrigin(RenfeSearchStepDefinitions.java:27)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\r\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\r\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\r\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\r\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\r\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\r\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\r\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\r\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\r\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:118)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\r\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\r\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:175)\r\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:157)\r\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\r\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\r\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\r\n\tat java.base/java.lang.Thread.run(Thread.java:834)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Timed out after 2 seconds. Element not found\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027SG-3012\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.3\u0027\nDriver info: driver.version: unknown\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.ajaxFindElement(SmartAjaxElementLocator.java:173)\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.findElement(SmartAjaxElementLocator.java:125)\r\n\tat net.serenitybdd.core.pages.WebElementResolverByElementLocator.resolveForDriver(WebElementResolverByElementLocator.java:27)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getElement(WebElementFacadeImpl.java:209)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations$3.apply(WebElementExpectations.java:63)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations$3.apply(WebElementExpectations.java:55)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\t... 83 more\r\n",
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