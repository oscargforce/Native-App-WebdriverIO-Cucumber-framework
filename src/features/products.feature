Feature: Products page features

    Scenario Outline: It should work to navigate to product details page
    Given I have navigated to the native app and I am on the "products" page
    And I click on the "first product" element
    Then I should be navigated to the "product-details" page and the "add to cart button" should be visible
