///<reference type="cypress"/>//

describe('Locating Elements',function ()
{
    it('Verify Radio Button', function () {

        cy.visit('https://material.angular.io/components/radio/examples')

        //Radio Button visible or not,enabled or not and checked or not.
        cy.get('input#mat-radio-2-input').should('be.visible').should('be.enabled')

      //  cy.get('input#mat-radio-7-input').should('be.visible').should('be.enabled').should('not.be.checked').click()

        //cy.get('.mat-radio-label-content>span').contains(' Winter ')

            //Copied from Internet
            cy.get('[type="radio"]').first().check({
                force: true
            })
        })
})