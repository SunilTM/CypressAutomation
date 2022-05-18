describe('My first Test Cases',function () {
    it('My First Test Case ', function () {

        cy.visit("https://www.flipkart.com/");
        cy.contains('Mobiles')
        cy.contains('Mobiles').click()
        cy.url().should('include','mobile-phones')

    });
})