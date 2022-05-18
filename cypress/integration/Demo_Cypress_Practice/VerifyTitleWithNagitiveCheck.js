describe('My first Test Cases',function () {

    it('Verify Title of page-Nagitive Test ', function () {

        cy.visit("https://demo.nopcommerce.com/");
        cy.title().should('eq','nopCommerce store')

    });
})