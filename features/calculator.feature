Feature: Calculator
  As a bad mathematician
  I want to use this app for calculation

  Scenario: Perform simple digit input
    Given I am going to the website "/"
    Then the title is "Calculator"

  Scenario: Perform simple digit input
    Given I am going to the website "/"
    When I click the button "1"
    Then it display "1" on the calculator screen
    When I click the button "4"
    Then it display "14" on the calculator screen
