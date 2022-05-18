/// <reference types="cypress"/>

describe('Mouse Over Action',function (){

    it('Click on sign up Link  ', function () {
        cy.visit('https://www.spicejet.com/')
        cy.contains('Add-ons').trigger('mouseover')
        cy.contains('SpicePlus').trigger('mouseover').click()
    });
})