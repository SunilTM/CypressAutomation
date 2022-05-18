/// <reference types="cypress"/>

describe('Lacting Elements',function ()
{
    it('verify type of locators',function ()
    {
        cy.visit("https://demo.nopcommerce.com/")
        cy.get("#small-searchterms").type("HTC One M8 Android L 5.0 Lollipop")   //Search box
        cy.get(".search-box-button").click()   //Click on search button
    })
})