Feature: Normal shop behavior

Scenario: As a standard user, I can buy stuff
    Given I log in as "<username>" with "<password>"
    When I add stuff to my cart
    Then I can buy them

    Examples:
        | username      | password     |
        # | standard_user | secret_sauce |
        | problem_user  | secret_sauce |
        # | performance_glitch_user | secret_sauce |
