$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Booking Hotel In Adactin Hotel Application",
  "description": "",
  "id": "booking-hotel-in-adactin-hotel-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "login In Login Page",
  "description": "",
  "id": "booking-hotel-in-adactin-hotel-application;login-in-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter The \"\u003cUsername\u003e\" In Username Textbox",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter The \"\u003cPassword\u003e\" In Password Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click On Login Button And It Navigates To SearchHotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "booking-hotel-in-adactin-hotel-application;login-in-login-page;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 12,
      "id": "booking-hotel-in-adactin-hotel-application;login-in-login-page;;1"
    },
    {
      "cells": [
        "Pirate",
        "123"
      ],
      "line": 13,
      "id": "booking-hotel-in-adactin-hotel-application;login-in-login-page;;2"
    },
    {
      "cells": [
        "JackSparow",
        "Yamaha@94"
      ],
      "line": 14,
      "id": "booking-hotel-in-adactin-hotel-application;login-in-login-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "login In Login Page",
  "description": "",
  "id": "booking-hotel-in-adactin-hotel-application;login-in-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter The \"Pirate\" In Username Textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter The \"123\" In Password Textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click On Login Button And It Navigates To SearchHotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.launch_The_Application()"
});
formatter.result({
  "duration": 1955177001,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_INTERNET_DISCONNECTED\n  (Session info: chrome\u003d88.0.4324.190)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-TDJCUHJ\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Cibi\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:52490}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a7b6264c6a969486f84a0e1b4d22f0cf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.adactin.Base.Base_Class.getUrl(Base_Class.java:49)\r\n\tat com.adactin.stepdefinition.StepDefinition.launch_The_Application(StepDefinition.java:41)\r\n\tat ✽.Given launch The Application(Adactin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pirate",
      "offset": 11
    }
  ],
  "location": "StepDefinition.enter_The_In_Username_Textbox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 11
    }
  ],
  "location": "StepDefinition.enter_The_In_Password_Textbox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_On_Login_Button_And_It_Navigates_To_SearchHotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "login In Login Page",
  "description": "",
  "id": "booking-hotel-in-adactin-hotel-application;login-in-login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter The \"JackSparow\" In Username Textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter The \"Yamaha@94\" In Password Textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click On Login Button And It Navigates To SearchHotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.launch_The_Application()"
});
formatter.result({
  "duration": 238587199,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_INTERNET_DISCONNECTED\n  (Session info: chrome\u003d88.0.4324.190)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-TDJCUHJ\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Cibi\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:52490}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a7b6264c6a969486f84a0e1b4d22f0cf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.adactin.Base.Base_Class.getUrl(Base_Class.java:49)\r\n\tat com.adactin.stepdefinition.StepDefinition.launch_The_Application(StepDefinition.java:41)\r\n\tat ✽.Given launch The Application(Adactin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "JackSparow",
      "offset": 11
    }
  ],
  "location": "StepDefinition.enter_The_In_Username_Textbox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yamaha@94",
      "offset": 11
    }
  ],
  "location": "StepDefinition.enter_The_In_Password_Textbox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_On_Login_Button_And_It_Navigates_To_SearchHotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "search Hotel In SearchHotel Page",
  "description": "",
  "id": "booking-hotel-in-adactin-hotel-application;search-hotel-in-searchhotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "select The Hotel Location",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "enter The CheckIn Date",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "enter The CheckOut Date",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "select Number Of Adults",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "select Number Of Childrens",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "click On Search Button And It Navigates To SelectHotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.select_The_Hotel_Location()"
});
formatter.result({
  "duration": 92377800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@id\u003d\u0027location\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-TDJCUHJ\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Cibi\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:52490}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a7b6264c6a969486f84a0e1b4d22f0cf\n*** Element info: {Using\u003dxpath, value\u003d//select[@id\u003d\u0027location\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.adactin.Base.Base_Class.dropDown(Base_Class.java:118)\r\n\tat com.adactin.stepdefinition.StepDefinition.select_The_Hotel_Location(StepDefinition.java:81)\r\n\tat ✽.When select The Hotel Location(Adactin.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.select_The_Hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.select_The_Room_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.select_Number_Of_Rooms()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.enter_The_CheckIn_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.enter_The_CheckOut_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.select_Number_Of_Adults()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.select_Number_Of_Childrens()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_On_Search_Button_And_It_Navigates_To_SelectHotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "select Hotel In SelectHotel Page",
  "description": "",
  "id": "booking-hotel-in-adactin-hotel-application;select-hotel-in-selecthotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "select The Hotel By Clicking On Radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "click On Continue Button And It Navigates To BookAHotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.select_The_Hotel_By_Clicking_On_Radio_Button()"
});
formatter.result({
  "duration": 98323800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027radiobutton_0\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-TDJCUHJ\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Cibi\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:52490}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a7b6264c6a969486f84a0e1b4d22f0cf\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027radiobutton_0\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.adactin.Base.Base_Class.clickOnElement(Base_Class.java:55)\r\n\tat com.adactin.stepdefinition.StepDefinition.select_The_Hotel_By_Clicking_On_Radio_Button(StepDefinition.java:139)\r\n\tat ✽.When select The Hotel By Clicking On Radio Button(Adactin.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.click_On_Continue_Button_And_It_Navigates_To_BookAHotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 33,
  "name": "booking Payment Details In BookAHotel Page",
  "description": "",
  "id": "booking-hotel-in-adactin-hotel-application;booking-payment-details-in-bookahotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "enter The First Name In FirstName Textbox",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "enter The Last Name In LastName Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "enter The Address In Address TextBox",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "enter CreditCard Number In CreditCard Number Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "select CreditCard Type",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "select Expiry Month Of CreditCard",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "select Expiry Year Of CreditCard",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "enter CVV Number Of CreditCard",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "click On BookNow Button And It Navigates To BookingConfirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.enter_The_First_Name_In_FirstName_Textbox()"
});
formatter.result({
  "duration": 43661601,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027first_name\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-TDJCUHJ\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Cibi\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:52490}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a7b6264c6a969486f84a0e1b4d22f0cf\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027first_name\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat com.adactin.Base.Base_Class.sendkeys(Base_Class.java:61)\r\n\tat com.adactin.stepdefinition.StepDefinition.enter_The_First_Name_In_FirstName_Textbox(StepDefinition.java:153)\r\n\tat ✽.When enter The First Name In FirstName Textbox(Adactin.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.enter_The_Last_Name_In_LastName_Textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.enter_The_Address_In_Address_TextBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.enter_CreditCard_Number_In_CreditCard_Number_Textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.select_CreditCard_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.select_Expiry_Month_Of_CreditCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.select_Expiry_Year_Of_CreditCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.enter_CVV_Number_Of_CreditCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_On_BookNow_Button_And_It_Navigates_To_BookingConfirmation_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 45,
  "name": "booking Cofirmation In BookingConfirmation Page",
  "description": "",
  "id": "booking-hotel-in-adactin-hotel-application;booking-cofirmation-in-bookingconfirmation-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "click On MyItinerary Button And It Navigates To BookedItinerary Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.click_On_MyItinerary_Button_And_It_Navigates_To_BookedItinerary_Page()"
});
formatter.result({
  "duration": 17237462100,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d88.0.4324.190)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-TDJCUHJ\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Cibi\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:52490}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a7b6264c6a969486f84a0e1b4d22f0cf\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027my_itinerary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.adactin.Base.Base_Class.clickOnElement(Base_Class.java:55)\r\n\tat com.adactin.stepdefinition.StepDefinition.click_On_MyItinerary_Button_And_It_Navigates_To_BookedItinerary_Page(StepDefinition.java:211)\r\n\tat ✽.Then click On MyItinerary Button And It Navigates To BookedItinerary Page(Adactin.feature:47)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 49,
  "name": "bookedItineray Can Be Verified",
  "description": "",
  "id": "booking-hotel-in-adactin-hotel-application;bookeditineray-can-be-verified",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "click On Logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.click_On_Logout_Button()"
});
