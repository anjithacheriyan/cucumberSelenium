Feature: validation of car search page
In order to validate car search
As a buyer
I navigate to https://www.carsguide.com.au


Scenario: Seraching for a new car
Given I am on the home page https://www.carsguide.com.au of carsguide website
Then I move to buy + sell menu
Then I click on Search Cars
And I select Any Make as "BMW"
And I select Any Model as "1 Series"
And I select Any Location as "NSW - All"
And I select Price(Max) as "$10,000"
And I click on Find My Next Car button
Then I see a list of  searched cars such as "BMW"
And the page title should be "Bmw 1 Series Under 10000 for Sale NSW | carsguide"