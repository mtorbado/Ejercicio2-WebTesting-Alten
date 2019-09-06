Feature: Renfe booking

  Scenario Outline: Search for a trip
    Given I want to search train tickets
    When I select origin "<originStation>"
    And I select destination "<destinationStation>"
    And departure date is 1 days after today
    And return date is 2 days after departure date
    And I select the following adults & children & children under 4 years old
    | adults | children | childrenUnder4 |
    | 3	     | 2	    | 1              |
    And I press 'comprar' button
    Then the result page is shown

    Examples:
    | originStation           | destinationStation |
    | VALLADOLID              | MADRID-CHAMARTIN   |
    | MADRID-PUERTA DE ATOCHA | BARCELONA-SANTS    |
