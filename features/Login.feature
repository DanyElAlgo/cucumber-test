Feature: Login test

  Scenario Outline: As a user, I can log in

    Given I log into the page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username        | password     | message                        |
      | standard_user   | secret_sauce | . |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |
      | no_user         | secret_sauce | Epic sadface: Username and password do not match any user in this service |
      | standard_user   | no_sauce     | Epic sadface: Username and password do not match any user in this service |
