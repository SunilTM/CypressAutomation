/// <reference types="cypress"/>

describe('UI ELement',function (){
    it('verify input and radio button',function ()
        {

            //Code
            cy.visit('http://demo.guru99.com/test/newtours/')   //Visit Url
            cy.url().should('include','newtours')  //Verify Url

            // Check TextBox is ENABLE and VISIBLE or not
            cy.get('[name="userName"]').should('be.enabled').should('be.visible').type('mercury')
            cy.get('[name="password"]').should('be.enabled').should('be.visible').type('mercury')
            cy.get('[name="submit"]').should('be.enabled').should('be.visible').click()

            cy.title().should('eq','Login: Mercury Tours')  //Title Verification
       })

})