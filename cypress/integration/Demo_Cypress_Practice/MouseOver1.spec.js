/// <reference types="cypress"/>

describe('2 times Mouse Over Action',function () {

    it('Click on sign up Link  ', function () {
        cy.visit('https://corporate.spicejet.com/spicePlus.aspx')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Sign up').click()

    })
})