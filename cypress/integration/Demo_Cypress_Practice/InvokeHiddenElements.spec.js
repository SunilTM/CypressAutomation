/// <reference types="cypress"/>

describe('Invoke Hidden WebElements',function () {

    it('Add to cart test ', () =>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.ajax_add_to_cart_button').first().click()
        cy.get('.cross').click({force: true})
        cy.wait(2000)

        cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.get('#button_order_cart').click()

        cy.url().should('include','controller=order')
    })
})