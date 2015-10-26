Feature: Calculator
  As a bad mathematician
  I want to use this app for calculation

  Scenario: Check the title
    Given I am going to the website "/"
    Then the title is "Calculator"

  Scenario: Perform simple digit input
    Given I am going to the website "/"
    When I click the button "1"
    Then it display "1" on the calculator screen
    When I click the button "4"
    Then it display "14" on the calculator screen

  Scenario: Perform simple addition
    Given I am going to the website "/"
    When I click the button "1"
    When I click the button "6"
    When I click the button "+"
    Then it display "16" on the calculator screen
    When I click the button "3"
    Then it display "3" on the calculator screen
    When I click the button "1"
    Then it display "31" on the calculator screen
    When I click the button "="
    Then it display "47" on the calculator screen

  Scenario: Perform simple substraction
    Given I am going to the website "/"
    When I click the button "9"
    When I click the button "-"
    When I click the button "4"
    When I click the button "="
    Then it display "5" on the calculator screen

  Scenario: Perform simple multiplication
    Given I am going to the website "/"
    When I click the button "3"
    When I click the button "x"
    When I click the button "4"
    When I click the button "="
    Then it display "12" on the calculator screen

  Scenario: Perform simple division
    Given I am going to the website "/"
    When I click the button "9"
    When I click the button "÷"
    When I click the button "4"
    When I click the button "="
    Then it display "2.25" on the calculator screen

  Scenario: Perform simple modulo
    Given I am going to the website "/"
    When I click the button "7"
    When I click the button "%"
    When I click the button "4"
    When I click the button "="
    Then it display "3" on the calculator screen

  Scenario: Perform an addition after a multiplication
    Given I am going to the website "/"
    When I click the button "7"
    When I click the button "x"
    When I click the button "4"
    When I click the button "="
    Then it display "28" on the calculator screen
    When I click the button "5"
    Then it display "5" on the calculator screen
    When I click the button "+"
    When I click the button "6"
    Then it display "6" on the calculator screen
    When I click the button "="
    Then it display "11" on the calculator screen

  Scenario: Perform an addition on the result of a multiplication
    Given I am going to the website "/"
    When I click the button "7"
    When I click the button "x"
    When I click the button "4"
    When I click the button "="
    Then it display "28" on the calculator screen
    When I click the button "+"
    When I click the button "5"
    Then it display "5" on the calculator screen
    When I click the button "="
    Then it display "33" on the calculator screen

  Scenario: Reset the current number
    Given I am going to the website "/"
    When I click the button "7"
    When I click the button "x"
    When I click the button "4"
    When I click the button "CE"
    Then it display "7" on the calculator screen
    When I click the button "3"
    When I click the button "="
    Then it display "21" on the calculator screen

  Scenario: Reset the calculator
    Given I am going to the website "/"
    When I click the button "7"
    When I click the button "x"
    When I click the button "4"
    When I click the button "AC"
    Then it display "0" on the calculator screen
    When I click the button "3"
    When I click the button "+"
    When I click the button "2"
    When I click the button "="
    Then it display "5" on the calculator screen
