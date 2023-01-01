Feature: Login functionality

    Something

    Scenario Outline: Invalid user tries to log in
    Given I have navigated to the native app and I am on the "catalog" page
    Then I focus on the "navigationbar" header
    And I click on the "open menu" button
    And I click on the "login" menu item
    Then I focus on the "login" page
    And I fill the "username" with "Kalles Kaviar"
    And I fill the "password" with "Fel Lösenord"
    And I click on the "login button" item
    Then "error message" should have the text "Provided credentials do not match any user in this service."

    @native
    Scenario Outline: Valid user logs in
    Given I use the deep link endpoint "login" to navigate myself to the "login" page
    And I fill the "username" with "bob@example.co"
    And I fill the "password" with "10203040"
    And I click on the "login button" element
    Then I should be navigated to the "checkout" page and the "checkout header title" should be visible 