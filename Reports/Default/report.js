$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Darksky/search.feature");
formatter.feature({
  "line": 2,
  "name": "Search",
  "description": "",
  "id": "search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@searchDarkSky"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#  Scenario: Verify user can search temperature using zipcode"
    },
    {
      "line": 5,
      "value": "#    Given I am on darksky landing page"
    },
    {
      "line": 6,
      "value": "#    When I search temperature using 10010"
    },
    {
      "line": 7,
      "value": "#    Then I verify forecast is displayed"
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "#  Scenario: Verify user can search temperature using full address"
    },
    {
      "line": 10,
      "value": "#    Given I am on darksky landing page"
    },
    {
      "line": 11,
      "value": "#    When I search temperature using 98 11th Ave, New York, NY"
    },
    {
      "line": 12,
      "value": "#    Then I verify forecast is displayed"
    },
    {
      "line": 13,
      "value": "#"
    },
    {
      "line": 14,
      "value": "#  Scenario: Verify user can search temperature using country name"
    },
    {
      "line": 15,
      "value": "#    Given I am on darksky landing page"
    },
    {
      "line": 16,
      "value": "#    When I search temperature using Brazil"
    },
    {
      "line": 17,
      "value": "#    Then I verify forecast is displayed"
    }
  ],
  "line": 20,
  "name": "Verify user can search temperature using \u003cdataType\u003e",
  "description": "",
  "id": "search;verify-user-can-search-temperature-using-\u003cdatatype\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@ddtDarksky"
    },
    {
      "line": 19,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on darksky landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I search temperature using \u003cdataValue\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify forecast is displayed for \u003cdataType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "search;verify-user-can-search-temperature-using-\u003cdatatype\u003e;",
  "rows": [
    {
      "cells": [
        "dataType",
        "dataValue"
      ],
      "line": 25,
      "id": "search;verify-user-can-search-temperature-using-\u003cdatatype\u003e;;1"
    },
    {
      "cells": [
        "zipcode",
        "10010"
      ],
      "line": 26,
      "id": "search;verify-user-can-search-temperature-using-\u003cdatatype\u003e;;2"
    },
    {
      "cells": [
        "country name",
        "Brazil"
      ],
      "line": 27,
      "id": "search;verify-user-can-search-temperature-using-\u003cdatatype\u003e;;3"
    },
    {
      "cells": [
        "full address",
        "98 11th Ave, New York, NY"
      ],
      "line": 28,
      "id": "search;verify-user-can-search-temperature-using-\u003cdatatype\u003e;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Verify user can search temperature using zipcode",
  "description": "",
  "id": "search;verify-user-can-search-temperature-using-\u003cdatatype\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@ddtDarksky"
    },
    {
      "line": 19,
      "name": "@search"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@searchDarkSky"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on darksky landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I search temperature using 10010",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify forecast is displayed for zipcode",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "darksky",
      "offset": 8
    }
  ],
  "location": "CommonSD.openWebPage(String)"
});
formatter.result({
  "duration": 17049009330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10010",
      "offset": 27
    }
  ],
  "location": "SearchSD.searchTempFor(String)"
});
formatter.result({
  "duration": 3492772158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zipcode",
      "offset": 35
    }
  ],
  "location": "SearchSD.isForecastDisplayed(String)"
});
formatter.result({
  "duration": 766174824,
  "status": "passed"
});
formatter.after({
  "duration": 996458225,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify user can search temperature using country name",
  "description": "",
  "id": "search;verify-user-can-search-temperature-using-\u003cdatatype\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@ddtDarksky"
    },
    {
      "line": 19,
      "name": "@search"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@searchDarkSky"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on darksky landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I search temperature using Brazil",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify forecast is displayed for country name",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "darksky",
      "offset": 8
    }
  ],
  "location": "CommonSD.openWebPage(String)"
});
formatter.result({
  "duration": 12300373117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brazil",
      "offset": 27
    }
  ],
  "location": "SearchSD.searchTempFor(String)"
});
formatter.result({
  "duration": 3070907359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "country name",
      "offset": 35
    }
  ],
  "location": "SearchSD.isForecastDisplayed(String)"
});
formatter.result({
  "duration": 493609263,
  "status": "passed"
});
formatter.after({
  "duration": 802008131,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify user can search temperature using full address",
  "description": "",
  "id": "search;verify-user-can-search-temperature-using-\u003cdatatype\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@ddtDarksky"
    },
    {
      "line": 19,
      "name": "@search"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@searchDarkSky"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on darksky landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I search temperature using 98 11th Ave, New York, NY",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify forecast is displayed for full address",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "darksky",
      "offset": 8
    }
  ],
  "location": "CommonSD.openWebPage(String)"
});
formatter.result({
  "duration": 12114153508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "98 11th Ave, New York, NY",
      "offset": 27
    }
  ],
  "location": "SearchSD.searchTempFor(String)"
});
formatter.result({
  "duration": 1542354342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "full address",
      "offset": 35
    }
  ],
  "location": "SearchSD.isForecastDisplayed(String)"
});
formatter.result({
  "duration": 1693724748,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: The element reference of \u003cspan class\u003d\"summary swap\"\u003e is stale; either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SAUCE-WIN10\u0027, ip: \u002710.100.37.40\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\sauce\\AppData\\Local\\Temp\\rust_mozprofilefu5PVA, moz:geckodriverVersion\u003d0.30.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, proxy\u003dProxy(), moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d100.0, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d10.0, moz:processID\u003d1068.0, browserName\u003dfirefox, moz:buildID\u003d20220428192727, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXXd286f203\nCommand duration or timeout: 0 milliseconds\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\n\tat Pages.Commands.isElementDisplayed(Commands.java:86)\n\tat Pages.Darksky.LandingPage.isForecastDisplayed(LandingPage.java:53)\n\tat StepDefinition.Darksky.SearchSD.isForecastDisplayed(SearchSD.java:28)\n\tat ✽.Then I verify forecast is displayed for full address(Darksky/search.feature:23)\nCaused by: org.openqa.selenium.StaleElementReferenceException: The element reference of \u003cspan class\u003d\"summary swap\"\u003e is stale; either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SAUCE-WIN10\u0027, ip: \u002710.100.37.40\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\sauce\\AppData\\Local\\Temp\\rust_mozprofilefu5PVA, moz:geckodriverVersion\u003d0.30.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, proxy\u003dProxy(), moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d100.0, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d10.0, moz:processID\u003d1068.0, browserName\u003dfirefox, moz:buildID\u003d20220428192727, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXXd286f203\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Deepaks-MBP\u0027, ip: \u0027fe80:0:0:0:41b:5618:b51:c56%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:313)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\n\tat java.lang.reflect.Method.invoke(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement$1.invoke(EventFiringWebDriver.java:332)\n\tat com.sun.proxy.$Proxy5.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.isDisplayed(EventFiringWebDriver.java:386)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\n\tat java.lang.reflect.Method.invoke(Unknown Source)\n\tat org.openqa.selenium.remote.server.KnownElements$1.invoke(KnownElements.java:64)\n\tat com.sun.proxy.$Proxy6.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.remote.server.handler.GetElementDisplayed.call(GetElementDisplayed.java:32)\n\tat org.openqa.selenium.remote.server.handler.GetElementDisplayed.call(GetElementDisplayed.java:23)\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\n\tat java.lang.Thread.run(Unknown Source)\n",
  "status": "failed"
});
formatter.after({
  "duration": 245713874,
  "status": "passed"
});
formatter.uri("Facebook/login.feature");
formatter.feature({
  "line": 2,
  "name": "Facebook login",
  "description": "",
  "id": "facebook-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 10,
      "value": "#  # Scenario name"
    },
    {
      "line": 11,
      "value": "#  @sanity @invalidLogin"
    },
    {
      "line": 12,
      "value": "#  Scenario: Verify user cannot login with invalid credentials"
    },
    {
      "line": 13,
      "value": "#    # steps (Gherkin steps)"
    },
    {
      "line": 14,
      "value": "#    When I enter $%^\u0026*( in login username"
    },
    {
      "line": 15,
      "value": "#      And I enter abcd@1234 in login password"
    },
    {
      "line": 16,
      "value": "#      And I click on login button"
    },
    {
      "line": 17,
      "value": "#    Then I verify error is displayed"
    },
    {
      "line": 18,
      "value": "#"
    },
    {
      "line": 19,
      "value": "#  @sanity @invalidLogin2"
    },
    {
      "line": 20,
      "value": "#  Scenario: Verify user cannot login with invalid credentials2"
    },
    {
      "line": 21,
      "value": "#    When I enter var@gmail.com in login username"
    },
    {
      "line": 22,
      "value": "#    And I enter valkdfjklsdhfkljsdhf;s@1234 in login password"
    },
    {
      "line": 23,
      "value": "#    And I click on login button"
    },
    {
      "line": 24,
      "value": "#    Then I verify error is displayed"
    }
  ],
  "line": 27,
  "name": "Verify user cannot login with invalid credentials",
  "description": "",
  "id": "facebook-login;verify-user-cannot-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@sanity"
    },
    {
      "line": 26,
      "name": "@invalidLogins"
    },
    {
      "line": 26,
      "name": "@ddtLogin"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter \u003cusername\u003e in login username",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter \u003cpassword\u003e in login password",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify error is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "facebook-login;verify-user-cannot-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 33,
      "id": "facebook-login;verify-user-cannot-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "$%^\u0026*(",
        "abcd@1234"
      ],
      "line": 34,
      "id": "facebook-login;verify-user-cannot-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "var@gmail.com",
        "valkdfjklsdhfkljsdhf;s@1234"
      ],
      "line": 35,
      "id": "facebook-login;verify-user-cannot-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "var@test.com",
        "abcdNoPwd"
      ],
      "line": 36,
      "id": "facebook-login;verify-user-cannot-login-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "# Feature name"
    },
    {
      "line": 5,
      "value": "# section of feature file that will run before every scenario of this feature-file"
    },
    {
      "line": 6,
      "value": "# Background section will be executed before every scenario of this feature file"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on facebook landing page",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 8
    }
  ],
  "location": "CommonSD.openWebPage(String)"
});
formatter.result({
  "duration": 12781430512,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify user cannot login with invalid credentials",
  "description": "",
  "id": "facebook-login;verify-user-cannot-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@ddtLogin"
    },
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 26,
      "name": "@sanity"
    },
    {
      "line": 26,
      "name": "@invalidLogins"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter $%^\u0026*( in login username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter abcd@1234 in login password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify error is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "$%^\u0026*(",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 24
    }
  ],
  "location": "LoginSD.enterLoginCredentials(String,String)"
});
formatter.result({
  "duration": 470688208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@1234",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 27
    }
  ],
  "location": "LoginSD.enterLoginCredentials(String,String)"
});
formatter.result({
  "duration": 381222124,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.clickLoginBtn()"
});
formatter.result({
  "duration": 1218634402,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.isLoginErrorDisplayed()"
});
formatter.result({
  "duration": 599244286,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //div[contains(text(),\u0027or mobile number you entered isn\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SAUCE-WIN10\u0027, ip: \u002710.100.5.47\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\sauce\\AppData\\Local\\Temp\\rust_mozprofileCSYP36, moz:geckodriverVersion\u003d0.30.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, proxy\u003dProxy(), moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d100.0, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d10.0, moz:processID\u003d4552.0, browserName\u003dfirefox, moz:buildID\u003d20220428192727, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXX58dd7520\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027or mobile number you entered isn\u0027)]}\nCommand duration or timeout: 0 milliseconds\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat Pages.Commands.findWebElement(Commands.java:17)\n\tat Pages.Commands.isElementDisplayed(Commands.java:86)\n\tat Pages.Facebook.LoginErrorPage.isLoginErrorDisplayed(LoginErrorPage.java:13)\n\tat StepDefinition.Facebook.LoginSD.isLoginErrorDisplayed(LoginSD.java:83)\n\tat ✽.Then I verify error is displayed(Facebook/login.feature:31)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: //div[contains(text(),\u0027or mobile number you entered isn\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SAUCE-WIN10\u0027, ip: \u002710.100.5.47\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\sauce\\AppData\\Local\\Temp\\rust_mozprofileCSYP36, moz:geckodriverVersion\u003d0.30.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, proxy\u003dProxy(), moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d100.0, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d10.0, moz:processID\u003d4552.0, browserName\u003dfirefox, moz:buildID\u003d20220428192727, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXX58dd7520\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027or mobile number you entered isn\u0027)]}\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Deepaks-MBP\u0027, ip: \u0027fe80:0:0:0:41b:5618:b51:c56%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: EventFiringWebDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\n\tat java.lang.reflect.Method.invoke(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:104)\n\tat com.sun.proxy.$Proxy4.findElement(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:188)\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:48)\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:33)\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\n\tat java.lang.Thread.run(Unknown Source)\n",
  "status": "failed"
});
formatter.after({
  "duration": 166192166,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "# Feature name"
    },
    {
      "line": 5,
      "value": "# section of feature file that will run before every scenario of this feature-file"
    },
    {
      "line": 6,
      "value": "# Background section will be executed before every scenario of this feature file"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on facebook landing page",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 8
    }
  ],
  "location": "CommonSD.openWebPage(String)"
});
formatter.result({
  "duration": 12930968266,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify user cannot login with invalid credentials",
  "description": "",
  "id": "facebook-login;verify-user-cannot-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@ddtLogin"
    },
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 26,
      "name": "@sanity"
    },
    {
      "line": 26,
      "name": "@invalidLogins"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter var@gmail.com in login username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter valkdfjklsdhfkljsdhf;s@1234 in login password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify error is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "var@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 31
    }
  ],
  "location": "LoginSD.enterLoginCredentials(String,String)"
});
formatter.result({
  "duration": 612130610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valkdfjklsdhfkljsdhf;s@1234",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 45
    }
  ],
  "location": "LoginSD.enterLoginCredentials(String,String)"
});
formatter.result({
  "duration": 581999076,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.clickLoginBtn()"
});
formatter.result({
  "duration": 5796400802,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.isLoginErrorDisplayed()"
});
formatter.result({
  "duration": 603545488,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //div[contains(text(),\u0027or mobile number you entered isn\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SAUCE-WIN10\u0027, ip: \u002710.119.43.39\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\sauce\\AppData\\Local\\Temp\\rust_mozprofile9kAcNx, moz:geckodriverVersion\u003d0.30.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, proxy\u003dProxy(), moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d100.0, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d10.0, moz:processID\u003d6536.0, browserName\u003dfirefox, moz:buildID\u003d20220428192727, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXXd6e40f8d\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027or mobile number you entered isn\u0027)]}\nCommand duration or timeout: 0 milliseconds\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat Pages.Commands.findWebElement(Commands.java:17)\n\tat Pages.Commands.isElementDisplayed(Commands.java:86)\n\tat Pages.Facebook.LoginErrorPage.isLoginErrorDisplayed(LoginErrorPage.java:13)\n\tat StepDefinition.Facebook.LoginSD.isLoginErrorDisplayed(LoginSD.java:83)\n\tat ✽.Then I verify error is displayed(Facebook/login.feature:31)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: //div[contains(text(),\u0027or mobile number you entered isn\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SAUCE-WIN10\u0027, ip: \u002710.119.43.39\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\sauce\\AppData\\Local\\Temp\\rust_mozprofile9kAcNx, moz:geckodriverVersion\u003d0.30.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, proxy\u003dProxy(), moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d100.0, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d10.0, moz:processID\u003d6536.0, browserName\u003dfirefox, moz:buildID\u003d20220428192727, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXXd6e40f8d\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027or mobile number you entered isn\u0027)]}\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Deepaks-MBP\u0027, ip: \u0027fe80:0:0:0:41b:5618:b51:c56%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: EventFiringWebDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\n\tat java.lang.reflect.Method.invoke(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:104)\n\tat com.sun.proxy.$Proxy4.findElement(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:188)\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:48)\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:33)\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\n\tat java.lang.Thread.run(Unknown Source)\n",
  "status": "failed"
});
formatter.after({
  "duration": 787271767,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "# Feature name"
    },
    {
      "line": 5,
      "value": "# section of feature file that will run before every scenario of this feature-file"
    },
    {
      "line": 6,
      "value": "# Background section will be executed before every scenario of this feature file"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on facebook landing page",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 8
    }
  ],
  "location": "CommonSD.openWebPage(String)"
});
formatter.result({
  "duration": 11852958858,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify user cannot login with invalid credentials",
  "description": "",
  "id": "facebook-login;verify-user-cannot-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@ddtLogin"
    },
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 26,
      "name": "@sanity"
    },
    {
      "line": 26,
      "name": "@invalidLogins"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter var@test.com in login username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter abcdNoPwd in login password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify error is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "var@test.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "LoginSD.enterLoginCredentials(String,String)"
});
formatter.result({
  "duration": 545280094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdNoPwd",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 27
    }
  ],
  "location": "LoginSD.enterLoginCredentials(String,String)"
});
formatter.result({
  "duration": 663686550,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.clickLoginBtn()"
});
formatter.result({
  "duration": 6187995222,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.isLoginErrorDisplayed()"
});
formatter.result({
  "duration": 697631901,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //div[contains(text(),\u0027or mobile number you entered isn\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SAUCE-WIN10\u0027, ip: \u002710.100.53.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\sauce\\AppData\\Local\\Temp\\rust_mozprofilep3X3fN, moz:geckodriverVersion\u003d0.30.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, proxy\u003dProxy(), moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d100.0, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d10.0, moz:processID\u003d2436.0, browserName\u003dfirefox, moz:buildID\u003d20220428192727, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXX63d7676f\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027or mobile number you entered isn\u0027)]}\nCommand duration or timeout: 0 milliseconds\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat Pages.Commands.findWebElement(Commands.java:17)\n\tat Pages.Commands.isElementDisplayed(Commands.java:86)\n\tat Pages.Facebook.LoginErrorPage.isLoginErrorDisplayed(LoginErrorPage.java:13)\n\tat StepDefinition.Facebook.LoginSD.isLoginErrorDisplayed(LoginSD.java:83)\n\tat ✽.Then I verify error is displayed(Facebook/login.feature:31)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: //div[contains(text(),\u0027or mobile number you entered isn\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SAUCE-WIN10\u0027, ip: \u002710.100.53.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\sauce\\AppData\\Local\\Temp\\rust_mozprofilep3X3fN, moz:geckodriverVersion\u003d0.30.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, proxy\u003dProxy(), moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d100.0, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d10.0, moz:processID\u003d2436.0, browserName\u003dfirefox, moz:buildID\u003d20220428192727, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXX63d7676f\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027or mobile number you entered isn\u0027)]}\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Deepaks-MBP\u0027, ip: \u0027fe80:0:0:0:41b:5618:b51:c56%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: EventFiringWebDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\n\tat java.lang.reflect.Method.invoke(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:104)\n\tat com.sun.proxy.$Proxy4.findElement(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:188)\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:48)\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:33)\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\n\tat java.lang.Thread.run(Unknown Source)\n",
  "status": "failed"
});
formatter.after({
  "duration": 2061127899,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "# Feature name"
    },
    {
      "line": 5,
      "value": "# section of feature file that will run before every scenario of this feature-file"
    },
    {
      "line": 6,
      "value": "# Background section will be executed before every scenario of this feature file"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on facebook landing page",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 8
    }
  ],
  "location": "CommonSD.openWebPage(String)"
});
formatter.result({
  "duration": 12480183833,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 39,
      "value": "# Comment in feature file"
    },
    {
      "line": 40,
      "value": "# valid user credentials are not available."
    }
  ],
  "line": 42,
  "name": "Verify user can login with valid credentials",
  "description": "",
  "id": "facebook-login;verify-user-can-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@validLogin"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I enter validUser@gmail.com in login username",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I enter validPass@1234 in login password",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I verify Facebook Homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "validUser@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 37
    }
  ],
  "location": "LoginSD.enterLoginCredentials(String,String)"
});
formatter.result({
  "duration": 718851246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validPass@1234",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 32
    }
  ],
  "location": "LoginSD.enterLoginCredentials(String,String)"
});
formatter.result({
  "duration": 715666972,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.clickLoginBtn()"
});
formatter.result({
  "duration": 4629031286,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 503192706,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "# Feature name"
    },
    {
      "line": 5,
      "value": "# section of feature file that will run before every scenario of this feature-file"
    },
    {
      "line": 6,
      "value": "# Background section will be executed before every scenario of this feature file"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on facebook landing page",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 8
    }
  ],
  "location": "CommonSD.openWebPage(String)"
});
formatter.result({
  "duration": 12641587986,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Verify user cannot login with empty credentials",
  "description": "",
  "id": "facebook-login;verify-user-cannot-login-with-empty-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@emptyLogin"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I verify error is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSD.clickLoginBtn()"
});
formatter.result({
  "duration": 1390824813,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.isLoginErrorDisplayed()"
});
formatter.result({
  "duration": 913886684,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //div[contains(text(),\u0027or mobile number you entered isn\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SAUCE-WIN10\u0027, ip: \u002710.119.27.84\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\sauce\\AppData\\Local\\Temp\\rust_mozprofilejx4H2b, moz:geckodriverVersion\u003d0.30.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, proxy\u003dProxy(), moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d100.0, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d10.0, moz:processID\u003d5364.0, browserName\u003dfirefox, moz:buildID\u003d20220428192727, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXX8bef3694\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027or mobile number you entered isn\u0027)]}\nCommand duration or timeout: 0 milliseconds\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat Pages.Commands.findWebElement(Commands.java:17)\n\tat Pages.Commands.isElementDisplayed(Commands.java:86)\n\tat Pages.Facebook.LoginErrorPage.isLoginErrorDisplayed(LoginErrorPage.java:13)\n\tat StepDefinition.Facebook.LoginSD.isLoginErrorDisplayed(LoginSD.java:83)\n\tat ✽.Then I verify error is displayed(Facebook/login.feature:51)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: //div[contains(text(),\u0027or mobile number you entered isn\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SAUCE-WIN10\u0027, ip: \u002710.119.27.84\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\sauce\\AppData\\Local\\Temp\\rust_mozprofilejx4H2b, moz:geckodriverVersion\u003d0.30.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, proxy\u003dProxy(), moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d100.0, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d10.0, moz:processID\u003d5364.0, browserName\u003dfirefox, moz:buildID\u003d20220428192727, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXX8bef3694\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027or mobile number you entered isn\u0027)]}\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Deepaks-MBP\u0027, ip: \u0027fe80:0:0:0:41b:5618:b51:c56%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: EventFiringWebDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\n\tat java.lang.reflect.Method.invoke(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:104)\n\tat com.sun.proxy.$Proxy4.findElement(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:188)\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:48)\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:33)\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\n\tat java.lang.Thread.run(Unknown Source)\n",
  "status": "failed"
});
formatter.after({
  "duration": 346028206,
  "status": "passed"
});
formatter.uri("Facebook/signUp.feature");
formatter.feature({
  "line": 2,
  "name": "Facebook Sign Up",
  "description": "",
  "id": "facebook-sign-up",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@signup"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on facebook landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Create New Account button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 8
    }
  ],
  "location": "CommonSD.openWebPage(String)"
});
formatter.result({
  "duration": 13886622010,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 9,
  "name": "Verify user can sign up",
  "description": "",
  "id": "facebook-sign-up;verify-user-can-sign-up",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    },
    {
      "line": 8,
      "name": "@createNewActBtn"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I submit Sign up form",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify account is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 322446931,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on facebook landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Create New Account button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 8
    }
  ],
  "location": "CommonSD.openWebPage(String)"
});
formatter.result({
  "duration": 14496744839,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 14,
  "name": "Verify dob on sign up is current date",
  "description": "",
  "id": "facebook-sign-up;verify-dob-on-sign-up-is-current-date",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@sanity"
    },
    {
      "line": 13,
      "name": "@dob"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I verify dob is current date",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 170974976,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on facebook landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Create New Account button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 8
    }
  ],
  "location": "CommonSD.openWebPage(String)"
});
formatter.result({
  "duration": 13135609911,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 18,
  "name": "Verify no gender is selected on Sign Up form",
  "description": "",
  "id": "facebook-sign-up;verify-no-gender-is-selected-on-sign-up-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@sanity"
    },
    {
      "line": 17,
      "name": "@genderBtn"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I verify no gender is selected",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 509819634,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on facebook landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Create New Account button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 8
    }
  ],
  "location": "CommonSD.openWebPage(String)"
});
formatter.result({
  "duration": 13093850097,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 21,
  "name": "User cannot submit form without entering all mandatory field",
  "description": "",
  "id": "facebook-sign-up;user-cannot-submit-form-without-entering-all-mandatory-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I fill form except gender",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify error is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSD.isLoginErrorDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 772548791,
  "status": "passed"
});
formatter.uri("Others/Others.feature");
formatter.feature({
  "line": 2,
  "name": "Other Automation scenarios",
  "description": "",
  "id": "other-automation-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@others"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Verify customer is deleted msg is displayed on guru99",
  "description": "",
  "id": "other-automation-scenarios;verify-customer-is-deleted-msg-is-displayed-on-guru99",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@guru99"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Guru landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter the customer id as 100",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify \u0027Customer Successfully Delete!\u0027 is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Guru",
      "offset": 8
    }
  ],
  "location": "CommonSD.openWebPage(String)"
});
formatter.result({
  "duration": 16180344298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 27
    }
  ],
  "location": "OthersSD.enterCustomerId(String)"
});
formatter.result({
  "duration": 1387842027,
  "status": "passed"
});
formatter.match({
  "location": "OthersSD.clickSubmit()"
});
formatter.result({
  "duration": 980729132,
  "error_message": "org.openqa.selenium.WebDriverException: Element \u003cinput name\u003d\"submit\" type\u003d\"submit\"\u003e is not clickable at point (483,669) because another element \u003ciframe id\u003d\"ccpa-consent-notice\" class\u003d\"faktor-iframe-wrapper\" src\u003d\"https://ccpa-manager.privacymanager.io/latest/index.html#/notice\"\u003e obscures it\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SAUCE-WIN10\u0027, ip: \u002710.119.83.99\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\sauce\\AppData\\Local\\Temp\\rust_mozprofileycyeOv, moz:geckodriverVersion\u003d0.30.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, proxy\u003dProxy(), moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d100.0, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d10.0, moz:processID\u003d6896.0, browserName\u003dfirefox, moz:buildID\u003d20220428192727, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXX98253702\nCommand duration or timeout: 0 milliseconds\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat Pages.Commands.clickIt(Commands.java:58)\n\tat Pages.Guru.LandingPage.clickSubmitBtn(LandingPage.java:18)\n\tat StepDefinition.OthersSD.OthersSD.clickSubmit(OthersSD.java:25)\n\tat ✽.And I click on Submit button(Others/Others.feature:8)\nCaused by: org.openqa.selenium.WebDriverException: Element \u003cinput name\u003d\"submit\" type\u003d\"submit\"\u003e is not clickable at point (483,669) because another element \u003ciframe id\u003d\"ccpa-consent-notice\" class\u003d\"faktor-iframe-wrapper\" src\u003d\"https://ccpa-manager.privacymanager.io/latest/index.html#/notice\"\u003e obscures it\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SAUCE-WIN10\u0027, ip: \u002710.119.83.99\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\sauce\\AppData\\Local\\Temp\\rust_mozprofileycyeOv, moz:geckodriverVersion\u003d0.30.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, proxy\u003dProxy(), moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d100.0, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d10.0, moz:processID\u003d6896.0, browserName\u003dfirefox, moz:buildID\u003d20220428192727, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXX98253702\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Deepaks-MBP\u0027, ip: \u0027fe80:0:0:0:41b:5618:b51:c56%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\n\tat java.lang.reflect.Method.invoke(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement$1.invoke(EventFiringWebDriver.java:332)\n\tat com.sun.proxy.$Proxy5.click(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:345)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\n\tat java.lang.reflect.Method.invoke(Unknown Source)\n\tat org.openqa.selenium.remote.server.KnownElements$1.invoke(KnownElements.java:64)\n\tat com.sun.proxy.$Proxy6.click(Unknown Source)\n\tat org.openqa.selenium.remote.server.handler.ClickElement.call(ClickElement.java:30)\n\tat org.openqa.selenium.remote.server.handler.ClickElement.call(ClickElement.java:22)\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\n\tat java.lang.Thread.run(Unknown Source)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Successfully Delete!",
      "offset": 10
    }
  ],
  "location": "OthersSD.verifyCustomerDeleted(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 391303772,
  "status": "passed"
});
});