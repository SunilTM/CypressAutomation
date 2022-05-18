/// <reference types="cypress"/>

import {eq} from "lodash/lang";
import {equals} from "ramda";

describe('Locating Elements',function ()
{
    it('verify type of locators',function ()
    {
        cy.visit("https://demo.nopcommerce.com/")
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")   //Search box
        cy.get(".search-box-button").click()   //Click on search button

       cy.get(".product-box-add-to-cart-button").click()

        cy.get("#product_enteredQuantity_4").clear()
        cy.get("#product_enteredQuantity_4").type("4")

        cy.get("#add-to-cart-button-4").click()

        cy.wait(5000)   //wait for 5sec
        cy.get(".cart-label").click()  //Shopping cart link
        cy.wait(5000)

        cy.get(".product-unit-price").contains("$1,800.00")   //validate price in cart

        cy.get(".remove-btn").click()  // Clear the added items

        cy.get(".no-data").contains('eq','Cart is empty!')


    })
})