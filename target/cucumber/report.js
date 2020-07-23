$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CarSearch.feature");
formatter.feature({
  "line": 1,
  "name": "validation of car search page",
  "description": "In order to validate car search\nAs a buyer\nI navigate to https://www.carsguide.com.au",
  "id": "validation-of-car-search-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2016124105,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Seraching for a new car",
  "description": "",
  "id": "validation-of-car-search-page;seraching-for-a-new-car",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on the home page https://www.carsguide.com.au of carsguide website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I move to buy + sell menu",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on Search Cars",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select Any Make as \"BMW\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Any Model as \"1 Series\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Any Location as \"NSW - All\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select Price(Max) as \"$10,000\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see a list of  searched cars such as \"BMW\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "the page title should be \"Bmw 1 Series Under 10000 for Sale NSW | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearchSteps.i_am_on_the_home_page_https_www_carsguide_com_au_of_carsguide_website()"
});
formatter.result({
  "duration": 2296120011,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_move_to_buy_sell_menu()"
});
formatter.result({
  "duration": 1586219994,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_click_on_Search_Cars()"
});
formatter.result({
  "duration": 1426307130,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a1S[contains(text(),\u0027Search Cars\u0027)]\"}\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anjithas-Air.domain.name\u0027, ip: \u0027fe80:0:0:0:c3e:ec76:92ed:cd4e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.2\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: /var/folders/tw/ngqy4n4n3kb...}, goog:chromeOptions: {debuggerAddress: localhost:58059}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: edfce94faa0e7d1509b5e5e109a6f9b4\n*** Element info: {Using\u003dxpath, value\u003d//a1S[contains(text(),\u0027Search Cars\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat steps.CarSearchSteps.i_click_on_Search_Cars(CarSearchSteps.java:75)\n\tat ✽.Then I click on Search Cars(CarSearch.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 22
    }
  ],
  "location": "CarSearchSteps.i_select_Any_Make_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 23
    }
  ],
  "location": "CarSearchSteps.i_select_Any_Model_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 26
    }
  ],
  "location": "CarSearchSteps.i_select_Any_Location_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 24
    }
  ],
  "location": "CarSearchSteps.i_select_Price_Max_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarSearchSteps.i_click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 40
    }
  ],
  "location": "CarSearchSteps.i_see_a_list_of_searched_cars_such_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series Under 10000 for Sale NSW | carsguide",
      "offset": 26
    }
  ],
  "location": "CarSearchSteps.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 952425945,
  "status": "passed"
});
});