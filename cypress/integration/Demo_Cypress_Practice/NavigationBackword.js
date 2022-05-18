/// <reference types="cypress"/>

import {eq} from "lodash/lang";
import {equals} from "ramda";

describe('Lacting Elements',function ()
{
    it('verify type of locators',function () {

        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq','nopCommerce demo store')   //Home Page

        cy.get('.ico-register').contains('Reg').click()
        cy.title().should('eq','nopCommerce demo store. Register')   //Registrtin Page

        //1st Approch
        cy.go('back')
        cy.title().should('eq','nopCommerce demo store')   //Home Page

       //2nd Approch
       //  cy.go(-1)  //Back
       //  cy.title().should('eq','nopCommerce demo store')   //Home Page

        //Page Reload
        cy.reload()  //Reload Page
    })
})