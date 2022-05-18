/// <reference types="cypress"/>

describe('Hook concepts in cypress',function (){

    before(() => {
        // root-level hook
        // runs once before all tests
        cy.log('Setup Block / runs once before all tests')
    })

    beforeEach(() => {
        // root-level hook
        // runs before every test block
        cy.log('Executes before every it block')
    })

    afterEach(() => {
        // runs after each test block
       cy.log('Executes after every it block')
    })

    after(() => {
        // runs once all tests are done
        cy.log('Exit Block / runs once all tests are done')
    })

    it('Searching Tests ', function () {

        cy.log('Searching Test')

    });
    it('Advanced Searching Tests ', function () {

        cy.log('Advanced Searching Test')

    });
    it('Listing Products ', function () {

        cy.log('Listing Products')

    });

})