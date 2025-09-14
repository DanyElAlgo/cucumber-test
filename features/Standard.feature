Feature: Normal shop behavior

Scenario: As a standard user, I can buy stuff
    Given I log in
    When I add stuff to my cart
    Then I can buy them
